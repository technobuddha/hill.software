const reduceFunctionCall    = require('reduce-function-call');
const get                   = require('lodash/get');

module.exports = (opts = {}) => {
    const theme = opts.theme || {};

    return {
        postcssPlugin: 'postcss-mui-theme',
        Once(root, { _result }) {
            root.walkDecls(
                decl => {
                    if(decl.value) {
                        for(;;) {
                            const idxTheme = decl.value.indexOf('mui-theme(');
                            const idxSpace = decl.value.indexOf('mui-spacing(');

                            if(idxTheme === -1 && idxSpace === -1)
                                break;

                            if(idxTheme !== -1) {
                                decl.value = reduceFunctionCall(
                                    decl.value,
                                    'mui-theme',
                                    body => get(theme, body.replace(/-/gu, '.'))
                                );
                            }

                            if(idxSpace !== -1) {
                                decl.value = reduceFunctionCall(
                                    decl.value,
                                    'mui-spacing',
                                    body => `${theme.spacing(Number.parseFloat(body))}px`
                                );
                            }
                        }

                        for(;;) {
                            const idxContrast = decl.value.indexOf('contrastText(');

                            if(idxContrast === -1)
                                break;

                            decl.value = reduceFunctionCall(
                                decl.value,
                                'contrastText',
                                body => `${theme.palette.getContrastText(body)}`
                            );
                        }
                    }
                }
            );
        },
    };
};

module.exports.postcss = true;
