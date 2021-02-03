import React       from 'react';
import isUndefined from 'lodash/isUndefined';
import { getSortFromQueryString, setSortInQueryString, getFiltersFromQueryString, setFiltersInQueryString, decodeSort } from './query';

import type { FilterValue, FilterValues } from './filter';
import type { SortKey }                   from './query';

type GridState<T = unknown> = {
    data:               T[];
    sort?:              SortKey;
    changeSort:         (sort: string) => void;
    filterValues:       FilterValues<T>;
    changeFilter:       (name: keyof T, value: FilterValue) => void;
};

const GridContext = React.createContext<GridState>(null!);
export function useGrid<T = unknown>() {
    return React.useContext(GridContext) as GridState<T>;
}

type GridProviderProps<T = unknown> = {
    data:               T[];
    defaultSort?:       string;
    useLocation?:       boolean;
    children:           React.ReactNode;
};

export function GridProvider<T = unknown>({ data, defaultSort, useLocation, children }: GridProviderProps<T>) {
    function baseSort(): SortKey | undefined {
        return (useLocation ? getSortFromQueryString() : undefined) ?? decodeSort(defaultSort);
    }
    const [ sortCode, setSortCode ] = React.useState<(SortKey | undefined)>(baseSort);
    const changeSort                = React.useCallback(
        (columnName: string) => {
            let newSort: SortKey;

            if(isUndefined(sortCode)) {
                newSort = {
                    sortBy: columnName,
                    sortAscending: true,
                };
            } else {
                newSort = {
                    sortBy: columnName,
                    sortAscending: columnName === sortCode.sortBy ? !sortCode.sortAscending : true,
                };
            }

            setSortCode(newSort);
            if(useLocation)
                setSortInQueryString(newSort);
        },
        [ sortCode ]
    );

    const baseFilterValues                  = React.useCallback(() => (useLocation ? getFiltersFromQueryString() : {}), []);
    const [ filterValues, setFilterValues ] = React.useState<FilterValues>(baseFilterValues);
    const changeFilter                      = React.useCallback(
        (name: keyof T, value: FilterValue) => {
            const newFilterValues = { ...filterValues, [name]: value };
            setFilterValues(newFilterValues);
            if(useLocation)
                setFiltersInQueryString(newFilterValues);
        },
        [ filterValues ]
    );

    const handlePopState                    = React.useCallback(
        () => {
            setSortCode(baseSort());
            setFilterValues(baseFilterValues());
        },
        []
    );

    React.useEffect(
        () => {
            if(useLocation)
                window.addEventListener('popstate', handlePopState);
            return () => {
                if(useLocation)
                    window.removeEventListener('popstate', handlePopState);
            };
        },
        [ useLocation ]
    );

    return (
        <GridContext.Provider value={{ data, sort: sortCode, changeSort, filterValues, changeFilter }}>
            {children}
        </GridContext.Provider>
    );
}

export default useGrid;
