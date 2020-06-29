import React                                            from 'react';
import { FixedSizeList, ListChildComponentProps }       from 'react-window';
import { Size }                         from 'mui-size';
import clsx                             from 'clsx';
import Box                              from '@material-ui/core/Box';
import Button                           from '@material-ui/core/Button';
import SortNone                         from '@material-ui/icons/UnfoldMore';
import SortDesc                         from '@material-ui/icons/ExpandLess';
import SortAsc                          from '@material-ui/icons/ExpandMore';
import { Column }                       from './column';
import { ColumnClasses, ColumnStyles }  from './columnStyles';
import Row                              from './Row';
import { useColumnStyles }              from './columnStyles';
import { MenuFactory }                  from './menu';
import { FilterActuatorProps, FilterActuatorClasses, FilterActuatorStyles, FilterIndicatorProps, FilterIndicatorClasses, FilterIndicatorStyles } from './filter';

export type GridProps<T extends Record<string, any>> = {
    classes?:               GridClasses;
    styles?:                GridStyles;
    data:                   T[];
    columns:                Column<T>[];
    columnWidths:           number[];
    width:                  number;
    scrollbarWidth:         number;
    rowHeight:              number;
    controlWidth:           number;
    actuators?:             React.FC<FilterActuatorProps>[];
    indicators?:            React.FC<FilterIndicatorProps>[];
    sortBy:                 string;
    sortOrder:              string;
    selection?:             boolean;
    menu?:                  MenuFactory<T>;
    onSortChanged:          (name: string) => void;
    children?:              never;
}

export type GridClasses = {
    filter: {
        actuator:   FilterActuatorClasses;
        indicator:  FilterIndicatorClasses;
    },
    area:   GridAreaClasses;
    column: ColumnClasses;
}

export type GridStyles = {
    filter: {
        actuator:   FilterActuatorStyles;
        indicator:  FilterIndicatorStyles;
    }
    area:   GridAreaStyles;
    column: ColumnStyles;
}

type GridAreaClasses = {
    actuators:      string;
    indicators:     string;
    header:         string;
    detail:         string;
}
type GridAreaStyles = {[key in keyof GridAreaClasses]: React.CSSProperties};

type RowProps = ListChildComponentProps;

const Grid = <T extends Record<string, any>>(props: GridProps<T>) => {
    const { 
        classes,
        styles,
        rowHeight,
        width,
        scrollbarWidth,
        controlWidth,
        data, 
        columns,
        columnWidths,
        sortBy,
        sortOrder,
        onSortChanged,
        actuators, 
        indicators, 
        selection, 
        menu 
    } = props;
    const css = useColumnStyles({rowHeight, scrollbarWidth, controlWidth});
  
    const GridRow = (rowProps: RowProps) => {
        const datum     = data[rowProps.index];

        return (
            <Row
                classes={classes?.column}
                styles={styles?.column}
                style={rowProps.style}
                header={false}
                data={data}
                datum={datum}
                columns={columns}
                columnWidths={columnWidths}
                width={width}
                rowHeight={rowHeight}
                controlWidth={controlWidth}
                scrollbarWidth={scrollbarWidth}
                selection={selection}
                menu={menu}
            >
                {({column}) => column.render(datum)}
            </Row>
        );
    };

    console.log('Grid rendering...')

    return (
        <>
            {actuators && actuators.length > 0 &&
                <Box
                    className={classes?.area?.actuators}
                    style={styles?.area?.actuators}
                >
                    {actuators.map((Actuator, i) => (
                        <Actuator
                            key={i} 
                            classes={classes?.filter?.actuator}
                            styles={styles?.filter?.actuator}
                        />
                    ))}
                </Box>
            }
            {indicators && indicators.length > 0 &&
                <Box
                    className={classes?.area?.indicators}
                    style={styles?.area?.indicators}
                >
                    {indicators.map((Indicator, i) => (
                        <Indicator 
                            key={i}
                            classes={classes?.filter?.indicator}
                            styles={styles?.filter?.indicator}
                        />
                    ))}
                </Box>
            }
            <Row
                classes={classes?.column}
                styles={styles?.column}
                header={true}
                data={data}
                columns={columns}
                columnWidths={columnWidths}
                width={width}
                scrollbarWidth={scrollbarWidth}
                rowHeight={rowHeight}
                controlWidth={controlWidth}
                selection={selection}
                menu={menu}
                stub={true}
            >
                {({column}) => (
                    <Button 
                        className={clsx(css.button, classes?.column?.button)}
                        style={styles?.column?.button}
                        fullWidth
                        disableElevation
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => onSortChanged(column.name)}
                     >
                        <Box
                            className={clsx(css.buttonContents, classes?.column?.buttonContents)}
                            style={styles?.column?.buttonContents}
                        >
                            <Box
                                className={clsx(css.buttonTitle, classes?.column?.buttonTitle)}
                                style={styles?.column?.buttonTitle}
                            >
                                {column.title}
                            </Box>
                            {column.collate && (
                                sortBy === column.name
                                ?   sortOrder === 'asc'
                                    ?   <SortAsc
                                            className={clsx(css.buttonSortIndicator, classes?.column?.buttonSortIndicator)}
                                            style={styles?.column?.buttonSortIndicator}
                                        />
                                    :   <SortDesc
                                            className={clsx(css.buttonSortIndicator, classes?.column?.buttonSortIndicator)}
                                            style={styles?.column?.buttonSortIndicator}
                                        />
                                :   <SortNone
                                        className={clsx(css.buttonSortIndicator, classes?.column?.buttonSortIndicator)}
                                        style={styles?.column?.buttonSortIndicator}
                                    />
                            )}
                        </Box>
                    </Button>
                )}
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