import mapValues                    from 'lodash/mapValues';
import defaultTo                    from 'lodash/defaultTo';
import isArray          from 'lodash/isArray';
import find             from 'lodash/find';
import queryString      from 'query-string';
import Column           from './column';
import { FilterValue }  from './filter';

const KEY_SORTBY        = 'sortBy';
const KEY_SORTORDER     = 'sortOrder';

const validateSortBy = <T extends Record<string, any>>(testSortBy: FilterValue, columns: Column<T>[]) => {
    const sb    = isArray(testSortBy) ? (testSortBy.length > 0 ? testSortBy[0] : undefined) : testSortBy;
    return      find(columns, col => col.name === sb) || columns[0];
}

const validateSortOrder = (testSortOrder: FilterValue) => {
    const so        = isArray(testSortOrder) ? (testSortOrder.length > 0 ? testSortOrder[0] : undefined) : testSortOrder;
    return so === 'desc' ? 'desc' : 'asc';
}

const getSortParams = () => {
    let { [KEY_SORTBY]: sortBy, [KEY_SORTORDER]: sortOrder } = mapValues(
        queryString.parse(location.search),
        q => defaultTo(q, undefined)
    );

    return { sortBy, sortOrder }
}

export const getSort = <T extends Record<string, any>>(columns: Column<T>[]) => {
    let { sortBy, sortOrder } = getSortParams();

    const column    = validateSortBy(sortBy, columns);
    sortBy          = column.name;
    sortOrder       = validateSortOrder(sortOrder);

    return { sortBy, sortOrder, column };
}

export const setSort = (name: string) => {
    let { sortBy, sortOrder } = getSortParams();
    const search = queryString.parse(location.search);

    search[KEY_SORTBY]      = name;
    search[KEY_SORTORDER]   = name === sortBy ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';

    return `${location.pathname}?${queryString.stringify(search)}${location.hash}`;

}

export const getFilter = () => {
    let { [KEY_SORTBY]: _sortBy, [KEY_SORTORDER]: _sortOrder, ...filterValues } = mapValues(
        queryString.parse(location.search),
        q => defaultTo(q, undefined)
    );

    return filterValues;
}