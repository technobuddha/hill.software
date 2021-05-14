import React        from 'react';
import isFunction   from 'lodash/isFunction';

/**
 * Similar to **React.useState**, returns a stateful value and a function to update it.  Unlike **React.useState**
 * updating the state will not cause a re-render.
 *
 * @param initialState Initial state value, or a function that returns the initial state value.
 * @returns [ stateValue, setterFunction ]
 */
export function useLocal<T>(initialState: T | (() => T)): [T, ((set: T | ((prev: T) => T)) => void)] {
    const localRef = React.useRef<T>(isFunction(initialState) ? initialState() : initialState);
    const setter   = React.useMemo(
        () => (set: T | ((prev: T) => T)) => {
            localRef.current = isFunction(set) ? set(localRef.current) : set;
        },
        [ localRef ]
    );

    return [ localRef.current, setter ];
}

export default useLocal;
