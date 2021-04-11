import React            from 'react';
import zxcvbn           from 'zxcvbn';
import escapeRegExp     from 'lodash/escapeRegExp';
import { empty, nbsp }  from '@technobuddha/library/constants';
import useTranslation   from '#context/i18n';
import Box              from '@material-ui/core/Box';
import Typography       from '@material-ui/core/Typography';
import PasswordField    from '#control/passwordField';
import { FaThumbsDown } from '%icons/fa/FaThumbsDown';
import { FaThumbsUp }   from '%icons/fa/FaThumbsUp';
import { useTheme }     from '#context/mui';

import css              from './password-validation.css';

type PasswordValidationProps = {
    barColors?:         [string, string, string, string, string];
    scoreWords?:        [string, string, string, string, string];
    minLength?:         number;
    maxLength?:         number;
    strength?:          1 | 2 | 3 | 4;
    uppercase?:         number;
    lowercase?:         number;
    digit?:             number;
    special?:           number;
    categories?:        2 | 3 | 4;
    showInvalidOnly?:   boolean;
    userInputs?:        string[];
    onChange?:          (password: string, valid: boolean) => void;
};

export const PasswordValidation: React.FC<PasswordValidationProps> = ({
    barColors,
    scoreWords,
    minLength,
    maxLength,
    strength,
    uppercase,
    lowercase,
    digit,
    special,
    categories,
    showInvalidOnly,
    userInputs,
    onChange,
}) => {
    const { t }                                                           = useTranslation();
    const theme                                                           = useTheme();
    const [ password,                    setPassword ]                    = React.useState<string>(empty);
    const [ passwordConfirmation,        setPasswordConfirmation ]        = React.useState<string>(empty);
    const [ validPassword,               setValidPassword ]               = React.useState<boolean>(false);
    const [ validPasswordConfirmation,   setValidPasswordConfirmation ]   = React.useState<boolean>(false);

    const handlePasswordChange              = (text: string)        => { setPassword(text);             };
    const handlePasswordConfirmationChange  = (text: string)        => { setPasswordConfirmation(text); };

    if(!barColors) {
        barColors  = [
            theme.palette.grey[200],
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

    const uCount = password.match(/\p{Lu}/gu)?.length ?? 0;
    const lCount = password.match(/\p{Ll}/gu)?.length ?? 0;
    const dCount = password.match(/\p{N}/gu)?.length ?? 0;
    const sCount = password.match(/[\p{P}\p{S}]/gu)?.length ?? 0;
    const cCount = (uCount > 0 ? 1 : 0) + (lCount > 0 ? 1 : 0) + (dCount > 0 ? 1 : 0) + (sCount > 0 ? 1 : 0);
    const { score, feedback: { warning }} = zxcvbn(password, userInputs);  // TODO "suggestions"

    const rules: { text: string; pass: boolean }[] = [];

    if(strength !== undefined) {
        rules.push({
            text: strength < 4
                ?   `${t('Password strength must be')} ${scoreWords[strength]} ${t('or better')}`
                :   `${t('Password strength must be')} ${scoreWords[strength]}')}`,
            pass: score >= strength,
        });
    }

    if(minLength !== undefined) {
        if(maxLength !== undefined) {
            rules.push({
                text: `${t('Password must be between')} ${minLength} ${t('and')} ${maxLength} ${t('character', { count: maxLength })} ${t('long')}.`,
                pass: password.length >= minLength && password.length <= maxLength,
            });
        } else {
            rules.push({
                text: `${t('Password must be at least')} ${minLength} ${t('character', { count: minLength })} ${t('long')}.`,
                pass: password.length >= minLength,
            });
        }
    } else if(maxLength !== undefined) {
        rules.push({
            text: `${t('Password must be shorter than')} ${maxLength} ${t('character', { count: maxLength })} ${t('long')}.`,
            pass: password.length <= maxLength,
        });
    }

    if(uppercase !== undefined) {
        rules.push({
            text: `${t('Password must contain at least')} ${uppercase} ${t('upper-case')} ${t('character', { count: uppercase })}`,
            pass: uCount >= uppercase,
        });
    }

    if(lowercase !== undefined) {
        rules.push({
            text: `${t('Password must contain at least')} ${lowercase} ${t('lower-case')} ${t('character', { count: lowercase })}`,
            pass: lCount >= lowercase,
        });
    }

    if(digit !== undefined) {
        rules.push({
            text: `${t('Password must contain at least')} ${digit} ${t('digit (0-9)')} ${t('character', { count: digit })}`,
            pass: dCount >= digit,
        });
    }

    if(special !== undefined) {
        rules.push({
            text: `${t('Password must contain at least')} ${special} ${t('special (!@#$%^& etc.)')} ${t('character', { count: special })}`,
            pass: sCount >= special,
        });
    }

    if(categories !== undefined) {
        rules.push({
            text: `${t('Password must contain characters from at least')} ${categories} ${t('category', { count: categories })} ${t('(upper-case, lower-case, digit, special)')}`,
            pass: cCount >= categories,
        });
    }

    React.useEffect(
        () => {
            onChange?.(
                password,
                validPassword && validPasswordConfirmation && rules.every(rule => rule.pass)
            );
        },
        [ rules, password, onChange ]
    );

    return (
        <Box className={css.passwordValidation}>
            <PasswordField
                onChange={handlePasswordChange}
                onValidation={setValidPassword}
                label={t('Password')}
                helperText={`${t('Password is case-sensitive')}.`}
                value={password}
                required={true}
            />
            <PasswordField
                label={t('Verify Password')}
                onChange={handlePasswordConfirmationChange}
                onValidation={setValidPasswordConfirmation}
                value={passwordConfirmation}
                helperText={validPasswordConfirmation ? nbsp : t('Passwords must match')}
                required={true}
                validation={new RegExp(`^${escapeRegExp(password)}$`, 'u')}
            />
            <Box className={css.validation}>
                {
                    strength &&
                    <Box className={css.strength}>
                        <Box className={css.header}>
                            <Box className={css.title}>
                                <Typography variant="caption">
                                    {`${t('Password Strength')}:`}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption">
                                    {scoreWords![score]}
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={css.meter}>
                            <Box className={css.bar} bgcolor={(score >= 1) ? barColors![score] : barColors![0]} />
                            <Box className={css.bar} bgcolor={(score >= 2) ? barColors![score] : barColors![0]} />
                            <Box className={css.bar} bgcolor={(score >= 3) ? barColors![score] : barColors![0]} />
                            <Box className={css.bar} bgcolor={(score >= 4) ? barColors![score] : barColors![0]} />
                        </Box>
                        <Box height={40}>
                            {
                                warning &&
                                <Typography color="error" variant="caption" component="div">
                                    {warning}
                                </Typography>
                            }
                        </Box>
                    </Box>
                }
                <Box className={css.rules}>
                    {
                        rules
                        .filter(rule => !rule.pass && !showInvalidOnly)
                        .map((rule, i) => (
                            <React.Fragment key={i}>
                                {rule.pass ? <FaThumbsUp className={css.good} /> : <FaThumbsDown className={css.bad} />}
                                <Typography variant="caption">{rule.text}</Typography>
                            </React.Fragment>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default PasswordValidation;
