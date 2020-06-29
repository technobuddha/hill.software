import React            from 'react';
import clsx             from 'clsx';
import Box              from '@material-ui/core/Box';
import MenuIcon         from '@material-ui/icons/MoreVert';
import { Column }       from './column';
import { RowSelected }  from './RowSelected';
import { MenuFactory }  from './menu';
import { useColumnStyles, ColumnClasses, ColumnStyles } from './columnStyles';

type RowProps<T extends Record<string, any>> =
{
    header:                 boolean;
    datum?:                 T;
    data?:                  T[];
    columns:                Column<T>[];
    columnWidths:           number[];
    width:                  number;
    scrollbarWidth:         number;
    rowHeight:              number;
    controlWidth:           number;
    selection?:             boolean;
    menu?:                  MenuFactory<T>;
    style?:                 React.CSSProperties;
    classes?:               ColumnClasses;
    styles?:                ColumnStyles;

    stub?:                  boolean;

    children:               (props: RowRenderProps<T>) => React.ReactElement;
};

export type RowRenderProps<T extends Record<string, any>> = {
    column:        Column<T>;
    index:         number;
}


//TODO row indicators for selected

export const Row = <T extends Record<string, any>>(props: RowProps<T>) => {
    const css                                   = useColumnStyles({rowHeight: props.rowHeight, scrollbarWidth: props.scrollbarWidth, controlWidth: props.controlWidth});
    const { header, data, datum, style, classes, styles } = props;

    const handleMenuClick = (_event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        props.menu?.({data, datum})
    }

    return (
        <Box 
            className={clsx(css.root, classes?.root)}
            style={{...styles?.root, ...style}}
        >
            {
                props.selection &&
                <Box
                    className={clsx(css.section, classes?.section, header && css.sectionHeader, header && classes?.sectionHeader, css.selection, classes?.selection)}
                    style={{...styles?.section, ...(header && styles?.sectionHeader), ...styles?.selection}}
                >
                    <RowSelected
                        datum={props.datum}
                        data={props.data}
                        className={clsx(css.checkbox, classes?.checkbox)}
                        style={{...styles?.checkbox}}
                    />
                </Box>
            }
            <Box
                className={clsx(css.section, classes?.section, header && css.sectionHeader, header && classes?.sectionHeader, css.columns, classes?.columns)}
                style={{...styles?.section, ...(header && styles?.sectionHeader), ...styles?.columns}}
            >
                {(props.columns.map(
                    (column, index) => (
                        <Box 
                            key={column.name}
                            width={props.columnWidths[index]}
                            className={clsx(css.cell, classes?.cell)}
                            style={{...styles?.cell}}
                        >
                            {props.children({column, index})}
                        </Box>
                    )
                ))}
            </Box>
            {props.menu &&
                <Box
                    className={clsx(css.section, classes?.section, header && css.sectionHeader, header && classes?.sectionHeader, css.menu, classes?.menu)}
                    style={{...styles?.section, ...(header && styles?.sectionHeader), ...styles?.menu}}
                >
                    <MenuIcon
                        onClick={handleMenuClick}
                        className={clsx(css.menuIcon, classes?.menuIcon, header && css.menuIconHeader, header && classes?.menuIconHeader)}
                        //style={styles?.menu?.icon}
//                      data-index={index}
                    />
                </Box>
           }
            {props.stub &&
                <Box
                    className={clsx(css.section, classes?.section, header && css.sectionHeader, header && classes?.sectionHeader, css.stub, classes?.stub)}
                    style={{...styles?.section, ...(header && styles?.sectionHeader), ...styles?.stub }}
                >
                    {'\u00A0'}
                </Box>
            }
        </Box>
    )
}

export default Row;
