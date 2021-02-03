import mapValues   from 'lodash/mapValues';
import isArray     from 'lodash/isArray';
import queryString from 'query-string';

import type { ParsedQuery } from 'query-string';

export type SortKey = { sortBy: string; sortAscending: boolean };

const KEY_SORT = 'sort';

export function decodeSort(sort: string | null | undefined): SortKey | undefined {
    if(sort) {
        let asc = true;
        if(sort.startsWith('~')) {
            asc  = false;
            sort = sort.slice(1);
        }

        return { sortBy: sort, sortAscending: asc };
    }

    return undefined;
}

function encodeSort(sortBy: SortKey | undefined): string | undefined {
    if(sortBy) {
        if(!sortBy.sortAscending)
            return `~${sortBy.sortBy as any as string}`;
        return sortBy.sortBy as any as string;
    }

    return undefined;
}

export function getSortFromQueryString(): SortKey | undefined {
    const { [KEY_SORT]: sort } = queryString.parse(location.search);

    if(!sort)
        return undefined;
    else if(isArray(sort))
        return decodeSort(sort[0]);

    return decodeSort(sort);
}

export function setSortInQueryString(sort: SortKey | undefined) {
    const search: Record<string, any> = queryString.parse(location.search);

    search[KEY_SORT] = encodeSort(sort);
    history.pushState(null, '', `${location.pathname}?${queryString.stringify(search)}${location.hash}`);
}

export function getFiltersFromQueryString() {
    const { [KEY_SORT]: _, ...filterValues } = mapValues(
        queryString.parse(location.search),
        q => q ?? null
    );

    return filterValues;
}

export function setFiltersInQueryString(filterValues: ParsedQuery) {
    const sort      = getSortFromQueryString();
    const search    = { ...filterValues, [KEY_SORT]: sort };

    history.pushState(null, '', `${location.pathname}?${queryString.stringify(search)}${location.hash}`);
}
