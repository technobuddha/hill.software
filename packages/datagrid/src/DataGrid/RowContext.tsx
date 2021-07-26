import React       from 'react';
import isArray     from 'lodash/isArray';
import { useGrid } from './GridContext';

import type { OnSelectionChangedParams } from './DataGrid';

type RowState<T = unknown> = {
    selectedCount:      number;
    unselectedCount:    number;
    setSelected:        (datum: T, selected: boolean) => void;
    getSelected:        (datum: T) => boolean;
    countSelected:      (data: T[]) => { selected: number; unselected: number };
};

type RowProperties = {
    selected:   boolean;
};

const RowContext = React.createContext<RowState<any>>(null!);
export function useRow<T = unknown>(): RowState<T> {
    return React.useContext(RowContext) as RowState<T>;
}

type RowProviderProps<T = unknown> = {
    selected?:              (datum: T) => boolean;
    onSelectionChanged?:    (params: OnSelectionChangedParams<T>) => void;
    children?:              React.ReactNode;
};

function defaultRowProperties(selected = false) {
    return { selected };
}

export function RowProvider<T = unknown>({ selected, onSelectionChanged, children }: RowProviderProps<T>): React.ReactElement {
    const { data }          = useGrid<T>();
    const [ , forceUpdate ]   = React.useReducer<(x: number) => number>(x => x + 1, 0);

    const state = React.useMemo(
        () => {
            let   selectedCount   = 0;
            const map             = new Map<T, RowProperties>();

            for(const datum of data) {
                const datumSelected = Boolean(selected?.(datum));
                if(datumSelected) ++selectedCount;
                map.set(datum, defaultRowProperties(datumSelected));
            }

            return { map, selectedCount, unselectedCount: data.length - selectedCount, now: Date.now() };
        },
        [ data, selected ]
    );

    const getSelected = React.useCallback(
        (datum: T) => {
            const current = state.map.get(datum);
            if(current)
                return current.selected;
            return false;
        },
        [ state ]
    );

    const setDatumSelected = React.useCallback(
        (datum: T, isSelected: boolean) => {
            const current = state.map.get(datum);
            if(current) {
                if(current.selected !== isSelected) {
                    current.selected = isSelected;
                    if(isSelected) {
                        state.selectedCount++;
                        state.unselectedCount--;
                        forceUpdate();
                    } else {
                        state.selectedCount--;
                        state.unselectedCount++;
                        forceUpdate();
                    }
                }
            } else {
                // TODO [2021-12-31] better error recovery
            }
        },
        [ state ]
    );

    const setSelected = React.useCallback(
        (row: T | T[], isSelected: boolean) => {
            if(isArray(row))
                for(const datum of row)  setDatumSelected(datum, isSelected);
            else
                setDatumSelected(row, isSelected);
        },
        [ setDatumSelected ]
    );

    const countSelected = React.useCallback(
        (rows: T[]) => {
            let cntSelected    = 0;
            let cntUnselected  = 0;
            for(const datum of rows) {
                const datumState = state.map.get(datum);
                if(datumState) {
                    if(datumState.selected) cntSelected++; else cntUnselected++;
                } else {
                    // TODO [2021-12-31] Better error recovery
                }
            }

            return { selected: cntSelected, unselected: cntUnselected };
        },
        [ state ]
    );

    React.useEffect(
        () => {
            onSelectionChanged?.({
                selectedRows:   data.filter(datum => getSelected(datum)),
                selectedCount:  state.selectedCount,
                unselectedCount: state.unselectedCount,
            });
        },
        [ state, state.selectedCount, state.unselectedCount ]
    );

    return (
        <RowContext.Provider
            value={{
                selectedCount: state.selectedCount,
                unselectedCount: state.unselectedCount,
                getSelected,
                setSelected,
                countSelected,
            }}
        >
            {children}
        </RowContext.Provider>
    );
}

export default useRow;
