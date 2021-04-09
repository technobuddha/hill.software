import { createMuiTheme } from '@material-ui/core/styles';

import type { Theme as MuiTheme } from '@material-ui/core/styles';

export type Theme = MuiTheme & {
    iconSize:               number;
    userInterface: {
        headerHeight:       string;
    };
};

export const themeSettings = {
    palette: {
        primary: {
            main:   '#1B6CA8',
            contrastText: '#FFF',
        },
        secondary: {
            main:   '#07BF6C',
            contrastText: '#FFF',
        },
        error: {
            main:   '#DD2323',
        },
        warning: {
            main:   '#E88B00',
        },
        info: {
            main:   '#029FD8',
        },
    },
    typography: {
        fontSize:   14,
        fontFamily: '"Noto Sans", Arial, Helvetica, sans-serif',
        // h1: {
        //     fontSize: '2.333rem',
        // },
        // h2: {
        //     fontSize: '1.750rem',
        // },
        // h3: {
        //     fontSize: '1.375rem',
        // },
        // h4: {
        //     fontSize: '1.166rem',
        // },
        // h5: {
        //     fontSize: '0.975rem',
        // },
        // h6: {
        //     fontSize: '0.785rem',
        // },
    },

};

export const theme: Theme = {
    ...createMuiTheme(themeSettings),
    iconSize: 24,
    userInterface: {
        headerHeight: '40px',
    },
    overrides: {
        MuiLink: {
            root: {
                fontWeight: 'bold',
            },
        },
    },
};

export default theme;
