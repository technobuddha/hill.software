import React                from 'react';
import { makeStyles }       from '@material-ui/core/styles';

export type ColumnClasses = {
    root?:                  string;
    section?:               string;
    sectionHeader?:         string;
    expansion?:             string;
    selection?:             string;
    checkbox?:              string;
    columns?:               string;
    cell?:                  string;
    button?:                string;
    buttonContents?:        string;
    buttonTitle?:           string;
    buttonSortIndicator?:   string;
    menu?:                  string;
    menuIcon?:              string;
    menuIconHeader?:        string;
    stub?:                  string;
}
export type ColumnStyles = {[key in keyof ColumnClasses]: React.CSSProperties};

export const useColumnStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        borderBottom: `1px solid ${theme.palette.divider}`,
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    section: {
        overflow: 'hidden',
        borderRight: `1px solid ${theme.palette.divider}`,
        '&:first-child': {
            borderLeft: `1px solid ${theme.palette.divider}`,
        },
    },
    sectionHeader: {
        backgroundColor: theme.palette.primary.light,
        content: 'sectionHeader',
    },
    expansion: {
        flex: '0 0 auto',
        width: (props: any) => `${props.controlWidth}px`,
    },
    selection: {
        flex: '0 0 auto',
        width: (props: any) => `${props.controlWidth}px`,
    },
    checkbox: {
        width: (props: any) => `${props.controlWidth}px`,
        height: (props: any) => `${props.rowHeight}px`,
        margin: '0px',
    },
    columns: {
        flex: '1 0 auto',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
    },
    cell: {
        flex: '0 0 auto',
        display: 'flex',
        flexFlow: 'row nowrap',
        height: (props: any) => `${props.rowHeight}px`,
        alignItems: 'center',
        cursor: 'default',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        "&:not(:first-child)": {
            borderLeft: `1px solid ${theme.palette.divider}`
        },
    },
    button: {
        padding: '4px 0',
        borderRadius: 0,
        backgroundColor: theme.palette.primary.light,
    },
    buttonContents: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    buttonTitle: {
        flexGrow: 1,
    },
    buttonSortIndicator: {
        position: 'relative',
        top: '2px',
        width: '18px',
        height: '18px',
    },
    menu: {
        flex: '0 0 auto',
        width: (props: any) => `${props.controlWidth}px`,
        height: (props: any) => `${props.rowHeight}px`,
    },
    menuIcon: {
        marginTop: theme.spacing(0.5),
        width: (props: any) => `${props.controlWidth}px`,
        color: theme.palette.primary.main,
    },
    menuIconHeader: {
        color: theme.palette.primary.contrastText,
    },
    hamburger: {
        cursor: 'pointer',
        height: '24px',
        width: '24px',
        margin: '4px',
    },
    stub: {
        width: (props: any) => `${props.scrollbarWidth}px`,
        userSelect: 'none',
    }
}));

export default useColumnStyles;