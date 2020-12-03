import React                                    from 'react';
import clsx                                     from 'clsx';
import { makeStyles }                           from '@material-ui/core/styles';
import Filterer, { FiltererRenderProps }        from './Filterer';
import Sorter, { SorterRenderProps }            from './Sorter';
import Frame, { FrameRenderProps }              from './Frame';
import Grid, { GridClasses, GridStyles }        from './Grid';
import { Column, ColumnSpecifications }         from './column';
import columnFactory                            from './columnFactory';
import { Filter }                               from './filter';
import { filterFactory, FilterSpecification }   from './filterFactory';
import { RowProvider }                          from './RowContext';
import { MenuFactory }                          from './menu';
import { GridProvider }                         from './GridContext';
import { useDerivedValue }                      from '../hooks/useDerivedValue';
import analyzer, { AnalyzerResults }            from './analyzer';

export type DataGridProps<T = unknown> = {
    data:                   T[];
    columns?:               ColumnSpecifications<T>;
    className?:             string;
    style?:                 React.CSSProperties;
    classes?:               DataGridClasses;
    styles?:                DataGridStyles;
    selection?:             boolean;
    selected?:              (datum: T) => boolean;
    filters?:               FilterSpecification<T>[];
    menu?:                  MenuFactory<T>;
    defaultSort?:           string;
    rowHeight?:             number;
    controlWidth?:          number;
    useLocation?:           boolean;
    onSelectionChanged?:    (params: OnSelectionChangedParams<T>) => void;
}

export type DataGridClasses = {
    root?:      string;
    grid?:      GridClasses;
}

export type DataGridStyles = {
    root?:      React.CSSProperties;
    grid?:      GridStyles;
}

export type OnSelectionChangedParams<T = unknown> = {selectedRows: T[], selectedCount: number, unselectedCount: number}

function defaultFilters<T = unknown>(filters: FilterSpecification<T>[] | undefined, data: T[], analysis: AnalyzerResults<T>) {
    if(filters)
        return filters.map(f => filterFactory(f, data, analysis));
    else
        return [];
}

const useDataGridStyles = makeStyles(theme => ({
    root: {
        flex: '1 0 auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
}));


export function DataGrid<T = unknown>(props: DataGridProps<T>) {
    const css                   = useDataGridStyles();
    const data                  = useDerivedValue<T[]>(props.data,                          [props.data]);
    const analysis              = useDerivedValue(() => analyzer(data, props.columns),   [data, props.columns]);
    const columns               = useDerivedValue<Column<T>[]>(
        () => columnFactory<T>(analysis, props.selection ?? false, props.controlWidth ?? 40, props.columns),
        [analysis, props.selection, props.controlWidth, props.columns]
    );
    const filters               = useDerivedValue<Filter<T>[]> (
        () => defaultFilters(props.filters, data, analysis),
        [analysis, props.filters]
    );


    return (
        <GridProvider
            data={data}
            defaultSort={props.defaultSort}
            useLocation={props.useLocation}
        >
            <RowProvider
                selected={props.selected}
                onSelectionChanged={props.onSelectionChanged}
            >
                <Filterer
                    filters={filters}                  
                >
                    {(filtered: FiltererRenderProps<T>) => (
                        <Sorter
                            data={filtered.data}
                            columns={columns}
                        >
                            {(sorter: SorterRenderProps<T>) => (
                                <Frame
                                    className={clsx(css.root, props.classes?.root)}
                                    style={{...props.style, ...props.styles?.root}}
                                    columns={columns}
                                    controlWidth={props.controlWidth ?? 40}
                                    menu={!!props.menu}
                                >
                                    {(frame: FrameRenderProps) => {
                                        return (
                                            <Grid
                                                data={sorter.data}
                                                columns={columns}
                                                columnWidths={frame.columnWidths}
                                                rowHeight={props.rowHeight ?? 32}
                                                controlWidth={props.controlWidth ?? 40}
                                                scrollbarWidth={frame.scrollbarWidth}
                                                menu={props.menu}
                                                filters={filters}
                                            />
                                        )
                                    }}
                                </Frame>
                            )}
                        </Sorter>
                    )}
                </Filterer>
            </RowProvider>
        </GridProvider>      
    )
}

export default DataGrid;