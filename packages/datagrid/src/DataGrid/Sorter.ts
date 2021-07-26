import type React  from 'react';
import compact     from 'lodash/compact';
import isUndefined from 'lodash/isUndefined';
import { useGrid } from './GridContext';

import type { Column } from './column';

type SorterProps<T = unknown> = {
    data:               T[];
    columns:            Column<T>[];
    children:           (props: SorterRenderProps<T>) => React.ReactElement;
};

export type SorterRenderProps<T = unknown> = {
    data:               T[];
};

export function Sorter<T = unknown>({ data, columns, children }: SorterProps<T>): React.ReactElement {
    const { sort } = useGrid<T>();

    if(!isUndefined(sort)) {
        const column = columns.find(col => col.name === sort.sortBy);

        if(column?.sortBy && column.sortBy.length > 0) {
            const collators = compact(column.sortBy.map(s => columns.find(col => col.name === s)?.collate)).map(collate => collate(sort.sortAscending));
            if(collators.length > 0) {
                data.sort((x: T, y: T) => {
                    let result = 0;
                    for(const collator of collators) {
                        result = collator(x, y);
                        if(result !== 0)
                            break;
                    }
                    return result;
                });
            }
        }
    } else {
        //TODO [2021-12-31] Better error recovery
    }

    return children({ data });
}

export default Sorter;
