import React                        from 'react';

type RowPropertiesState = {
    selectedCount:      number;
    unselectedCount:    number;
    setSelected:        (datum: any, selected: boolean) => void;
    getSelected:        (datum: any) => boolean;
    setAllSelected:     (data: any[], selected: boolean) => void;
    countSelected:      (data: any[]) => {selected: number, unselected: number}
}

type RowProperties = {
    selected:   boolean;
}

const RowPropertiesContext = React.createContext<RowPropertiesState>(null!);

export function useRowProperties() {
   return React.useContext(RowPropertiesContext);
}

type RowPropertiesProviderProps<T extends Record<string, any>> = {
    data:       T[];
    children?:  React.ReactNode;

}

export const RowPropertiesProvider = <T extends Record<string, any>>(props: RowPropertiesProviderProps<T>) => {
    const defaultRowProperties                           = (selected: boolean = false) => ({selected});
    const [ selectedCount,   setSelectedCount ]     = React.useState<number>(0);
    const [ unselectedCount, setUnselectedCount ]   = React.useState<number>(props.data.length);
    const [ state ]                                 = React.useState<WeakMap<T, RowProperties>>(() => {
        const wm = new WeakMap<T, RowProperties>();
        props.data.forEach(datum => {wm.set(datum, defaultRowProperties())});
        return wm;
    });

    const getSelected = React.useCallback(
        (datum: T) => {
            let current = state.get(datum);
            if(current)
                return current.selected;
            console.error('Attempt to get selected state for row not in dataset');
            console.log(datum);
            return false;
        },
        [state]
    )

    const setSelected = React.useCallback(
        (datum: T, selected: boolean) => {
            let current = state.get(datum);
            if(current) {
                if(current.selected && selected === false) {
                    setSelectedCount(old => old - 1);
                    setUnselectedCount(old => old + 1);
                } else {
                    setSelectedCount(old => old + 1);
                    setUnselectedCount(old => old -1 );
                }
                current.selected = selected;
            } else {
                console.error('Attempt to set selected state for row not in dataset');
                console.log(datum);
            }
        },
        [state]
    )

    const setAllSelected = React.useCallback(
        (data: T[], selected: boolean) => {
            data.forEach(
                datum => {
                    let current = state.get(datum);
                    if(current) {
                        current.selected = selected;
                        setSelectedCount(   selected ? props.data.length : 0);
                        setUnselectedCount( selected ? 0 : props.data.length);
                    } else
                        console.error('Row is not in the WeakMap');
                }
            )
        },
        [state]
    )

    const countSelected = React.useCallback(
        (data: T[]) => {
            let selected    = 0;
            let unselected  = 0;
            data.forEach(datum => {
                const datumState = state.get(datum);
                if(datumState) {
                    if(datumState.selected) selected++; else unselected++;
                } else {
                    console.error('Row is not in the WeakMap');
                }
            });

            return {selected, unselected};
        },
        [state]
    )
    
    return (
        <RowPropertiesContext.Provider value={{ selectedCount, unselectedCount, getSelected, setSelected, setAllSelected, countSelected }}>
            {props.children}
        </RowPropertiesContext.Provider>
    )
}

export default useRowProperties;
