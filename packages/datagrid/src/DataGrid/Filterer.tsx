import React from 'react';
import { useGrid } from './GridContext';
import { Filter } from './filter';

type FiltererProps<T = unknown> = {
    filters:    Filter<T>[];
    children:   (renderProps: FiltererRenderProps<T>) => React.ReactElement;
};

export type FiltererRenderProps<T = unknown> = {
    data:       T[];
}

export function Filterer<T = unknown>({filters, children}: FiltererProps<T>) {
    const { data, filterValues } = useGrid<T>();

    console.log('Filtering...');

    let filteredData = [...data];
    filters.forEach(filter => { filteredData = filter.execute(filteredData, filterValues[filter.name]); });

    return children({data: filteredData});
}

export default Filterer;
