import React                                    from 'react';
import clsx                                     from 'clsx';
import queryString                              from 'query-string';
import { useHistory }                           from 'react-router-dom';
import { makeStyles }                           from '@material-ui/core/styles';
import Filterer, { FiltererRenderProps }        from './Filterer';
import Sorter, { SorterRenderProps }            from './Sorter';
import Frame, { FrameRenderProps }              from './Frame';
import Grid, { GridClasses, GridStyles }        from './Grid';
import { Column, ColumnSpecification }          from './column';
import columnFactory                            from './columnFactory';
import { Filter, FilterChangedParams }          from './filter';
import { filterFactory, FilterSpecification }   from './filterFactory';
import { RowPropertiesProvider }                from './RowProperties';
import { getFilter }                            from './query';
import { MenuFactory }                          from './menu';

export type DataGridProps<T extends Record<string, any>> = {
    data:                   T[];
    identifier?:            (row: T) => string;
    columns?:               ColumnSpecification<T>[];
    className?:             string;
    classes?:               DataGridClasses;
    styles?:                DataGridStyles;
    selection?:             boolean;
    //expansion?:             boolean;
    //masterMenu?:            any; //MasterMenuOption<T>;

    //unit?:                  (quantity: number) => string;
    filters?:               FilterSpecification<T>[];
    menu?:                  MenuFactory<T>;
    defaultSortBy?:         string;
    defaultSortOrder?:      string;
    // noMatch?:               React.ComponentType<{ className?: string}>;

    rowHeight?:             number;
    controlWidth?:          number;
}

export type DataGridClasses = {
    root?:      string;
    grid?:      GridClasses;
}

export type DataGridStyles = {
    root?:      React.CSSProperties;
    grid?:      GridStyles;
}

const defaultFilters = <T extends Record<string, any>>(filters: FilterSpecification<T>[] | undefined) => {
    if(filters)
        return filters.map(filterFactory);
    else
        return [];
}

const useDataGridStyles = makeStyles({
    root: {
        flex: '1 0 auto',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }
});


export const DataGrid = <T extends Record<string, any>>(props: DataGridProps<T>) => {
    const css                   = useDataGridStyles();
    const history               = useHistory();
    const [ data ]              = React.useState<T[]>               (() => props.data);
    const [ columns ]           = React.useState<Column<T>[]>       (() => columnFactory(props.data, props.columns));
    const [ filters ]           = React.useState<Filter<T>[]>       (() => defaultFilters(props.filters));

    const handleFilterChanged = ({name, value}: FilterChangedParams) => {
        const search = queryString.parse(location.search);
    
        search[name] = value;
        history.push(`${location.pathname}?${queryString.stringify(search)}${history.location.hash}`)
    }

    return (
        <RowPropertiesProvider data={props.data}>
            <Filterer
                data={data}
                filters={filters}
                filterValues={getFilter()}
                onFilterChanged={handleFilterChanged}
            >
                {(filtered: FiltererRenderProps<T>) => (
                    <Sorter
                        data={filtered.data}
                        columns={columns}
                    >
                        {(sorter: SorterRenderProps<T>) => (
                            <Frame
                                className={clsx(css.root, props.classes?.root)}
                                style={props.styles?.root}
                                columns={columns}
                                controlWidth={props.controlWidth || 40}
                                selection={props.selection}
                                menu={!!props.menu}
                            >
                                {(frame: FrameRenderProps) => {
                                    return (
                                        <Grid
                                            data={sorter.data}
                                            columns={columns}
                                            columnWidths={frame.columnWidths}
                                            rowHeight={props.rowHeight || 32}
                                            controlWidth={props.controlWidth || 40}
                                            width={frame.width}
                                            scrollbarWidth={frame.scrollbarWidth}
                                            selection={props.selection}
                                            menu={props.menu}
                                            sortBy={sorter.sortBy}
                                            sortOrder={sorter.sortOrder}
                                            onSortChanged={sorter.handleSortChanged}
                                            actuators={filtered.actuators}
                                            indicators={filtered.indicators}
                                        />
                                    )
                                }}
                            </Frame>
                        )}
                    </Sorter>
                )}
            </Filterer>
        </RowPropertiesProvider>       
    )
}

export default DataGrid;