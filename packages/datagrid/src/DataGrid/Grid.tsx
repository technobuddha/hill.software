import React                                        from 'react';
import clsx                                         from 'clsx';
import { FixedSizeList, ListChildComponentProps }   from 'react-window';
import { Size }                                     from 'mui-size';
import Box                                          from '@material-ui/core/Box';
import { makeStyles }                               from '@material-ui/core/styles';
import { Column }                                   from './column';
import { ColumnClasses as RowClasses, ColumnStyles as RowStyles }              from './columnStyles';
import Row                                          from './Row';
import { MenuFactory }                              from './menu';
import { Filter, FilterActuatorClasses, FilterActuatorStyles, FilterIndicatorClasses, FilterIndicatorStyles } from './filter';

const useGridStyles = makeStyles(theme => ({
    actuators: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.grey[700],
    },
    indicators: {
        display: 'flex',
        flexDirection: 'row',
        border: '3px solid green',
        "&:empty": {
            display: 'none',
        }
    }
}));

export type GridProps<T = unknown> = {
    classes?:               GridClasses;
    styles?:                GridStyles;
    data:                   T[];
    columns:                Column<T>[];
    columnWidths:           number[];
    scrollbarWidth:         number;
    rowHeight:              number;
    controlWidth:           number;
    filters?:               Filter<T>[],
    menu?:                  MenuFactory<T>;
    children?:              never;
}

export type GridClasses = {
    filter: {
        actuator:   FilterActuatorClasses;
        indicator:  FilterIndicatorClasses;
    },
    area:   GridAreaClasses;
    row: RowClasses;
}

export type GridStyles = {
    filter: {
        actuator:   FilterActuatorStyles;
        indicator:  FilterIndicatorStyles;
    }
    area:   GridAreaStyles;
    row: RowStyles;
}

type GridAreaClasses = {
    actuators:      string;
    indicators:     string;
    header:         string;
    detail:         string;
}
type GridAreaStyles = {[key in keyof GridAreaClasses]: React.CSSProperties};

type RowProps = ListChildComponentProps;

function Grid<T = unknown>({classes, styles, rowHeight, scrollbarWidth, controlWidth, data, columns, columnWidths, filters, menu}: GridProps<T>) {
    const css = useGridStyles();

    const GridRow = (rowProps: RowProps) => {
        const datum     = data[rowProps.index];

        return (
            <Row
                classes={classes?.row}
                styles={styles?.row}
                style={rowProps.style}
                index={rowProps.index}
                header={false}
                data={data}
                datum={datum}
                columns={columns}
                columnWidths={columnWidths}
                rowHeight={rowHeight}
                controlWidth={controlWidth}
                scrollbarWidth={scrollbarWidth}
                menu={menu}
            >
                {({column}) => column.render({datum})  /*TODO , css, classes, styles*/}
            </Row>
        );
    };

    console.log('Grid rendering...')

    //TODO prevent rendering of filters section or indicators section when there are none!
    return (
        <>
            {filters &&
                <>
                    <Box
                        className={clsx(css.actuators, classes?.area?.actuators)}
                        style={styles?.area?.actuators}
                    >
                        {filters.map((filter, index) => (
                            <filter.Actuator
                                key={index}
                                classes={classes?.filter?.actuator}
                                styles={styles?.filter?.actuator}
                            />
                        ))}
                    </Box>
                    <Box
                        className={clsx(css.indicators, classes?.area?.indicators)}
                        style={styles?.area?.indicators}
                    >
                        {filters.map((filter, index) => (
                            <filter.Indicator 
                                key={index}
                                classes={classes?.filter?.indicator}
                                styles={styles?.filter?.indicator}
                            />
                        ))}
                    </Box>
                </>
            }
            <Row
                classes={classes?.row}
                styles={styles?.row}
                header={true}
                data={data}
                columns={columns}
                columnWidths={columnWidths}
                scrollbarWidth={scrollbarWidth}
                rowHeight={rowHeight}
                controlWidth={controlWidth}
                menu={menu}
                stub={true}
            >
                {({column}) => column.header({data, classes: classes?.row?.header, styles: styles?.row?.header})}
            </Row>
            <Size flexGrow={1}>
                {({width, height}) => (
                    <FixedSizeList
                        height={height}
                        width={width}
                        itemCount={data.length}
                        itemSize={rowHeight}
                        layout="vertical"
                    >
                        {GridRow}
                    </FixedSizeList>
                )}
            </Size>
        </>
    )

}

export default Grid;