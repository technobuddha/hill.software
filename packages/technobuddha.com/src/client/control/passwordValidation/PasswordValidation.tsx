import React            from 'react';
import useTranslation   from '#context/i18n';
import isNil            from 'lodash/isNil';
import Box              from '@material-ui/core/Box';
import Typography       from '@material-ui/core/Typography';
import useAPI           from '#context/api';
import { useTheme }     from '#context/mui';

type PasswordValidationProps = {
    password:       string;
    barColors?:     [string, string, string, string, string];
    scoreWords?:    [string, string, string, string, string];
    minLength?:     number | null;
    maxLength?:     number | null;
    strength?:      number | null;
    userInputs?:    string[];
    onChange?:      (valid: boolean) => void;
};

export const PasswordValidation: React.FC<PasswordValidationProps> = ({
    password, barColors, scoreWords, minLength, maxLength, strength, userInputs, onChange,
}) => {
    const { t }                   = useTranslation();
    const theme                   = useTheme();
    const { authentication }      = useAPI();
    const [ state, setState ]     = React.useState<{ score: number; warning: string }>({ score: 0, warning: '' });

    if(!barColors) {
        barColors  = [
            theme.palette.grey[300],
            theme.palette.error.main,
            theme.palette.warning.main,
            theme.palette.info.main,
            theme.palette.success.main,
        ];
    }

    if(!scoreWords) {
        scoreWords = [
            t('very weak'),
            t('weak'),
            t('average'),
            t('strong'),
            t('very strong'),
        ];
    }

    React.useEffect(
        () => {
            if(!isNil(minLength) && password.length < minLength) {
                setState({
                    score:          0,
                    warning:        isNil(maxLength)
                        ?   `${t('Passwords must be at least')} ${minLength} ${t('character', { count: minLength })} ${t('long')}.`
                        :   `${t('Passwords must be between')} ${minLength} ${t('and')} ${maxLength} ${t('character', { count: maxLength })} ${t('long')}.`,
                });

                onChange?.(false);
            } else if(!isNil(maxLength) && password.length > maxLength) {
                setState({
                    score:          0,
                    warning:        isNil(minLength)
                        ?   `${t('Passwords must be shorter than')} ${maxLength} ${t('character', { count: maxLength })} ${t('long')}.`
                        :   `${t('Passwords must be between')} ${minLength} ${t('and')} ${maxLength} ${t('character', { count: maxLength })} ${t('long')}.`,
                });

                onChange?.(false);
            } else {
                authentication.checkPasswordStrength(password, userInputs)
                .then(value => {
                    const { score } = value.payload;

                    setState({ score, warning: t(value.payload.warning) });
                    onChange?.(isNil(strength) || score >= strength);
                });
            }
        },
        [ password ]
    );

    return (
        <Box marginTop={0.5} marginX={2}>
            <Box display="flex" flexDirection="row">
                <Box flexGrow={1}>
                    <Typography variant="caption">
                        {`${t('Password Strength')}:`}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption">
                        {scoreWords![state.score]}
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" flexDirection="row" height={10}>
                <Box flexGrow={1} marginRight={1} border="1px solid black" bgcolor={(state.score >= 1) ? barColors![state.score] : barColors![0]} />
                <Box flexGrow={1} marginRight={1} border="1px solid black" bgcolor={(state.score >= 2) ? barColors![state.score] : barColors![0]} />
                <Box flexGrow={1} marginRight={1} border="1px solid black" bgcolor={(state.score >= 3) ? barColors![state.score] : barColors![0]} />
                <Box flexGrow={1} marginRight={0} border="1px solid black" bgcolor={(state.score >= 4) ? barColors![state.score] : barColors![0]} />
            </Box>
            <Box height={20}>
                {
                    state.warning &&
                        <Typography color="error" variant="caption" component="div">
                            {state.warning}
                        </Typography>
                }
            </Box>
        </Box>
    );
};

export default PasswordValidation;
