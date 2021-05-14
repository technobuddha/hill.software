import React        from 'react';
import isFunction   from 'lodash/isFunction';
import { changed }  from './_util';

/**
 * Similar to `React.useState`, returns a stateful value and a function to update it.  Whenever the `deps` change, the
 * value will be re-initialized from `initialValue`.
 *
 * @param initialState Initial state value, or a function that returns the initial state value.
 * @param deps Array of values that when changed will cause a re-initialization of the value
 * @returns [ stateValue, setterFunction ]
 */
export function useDerivedState<T>(initialValue: T | ((prevValue: T) => T), deps: readonly unknown[]): [T, React.Dispatch<React.SetStateAction<T>>] {
    const value             = React.useRef<T>(undefined!);
    const depends           = React.useRef(deps);
    const [ , forceUpdate ] = React.useReducer((x: number) => x + 1, 0);
    const setter            = React.useMemo(
        () => (newValue: T | ((prevValue: T) => T)) => {
            value.current = isFunction(newValue) ? newValue(value.current) : newValue;
            forceUpdate();
        },
        [ value ]
    );

    if(value.current === undefined || changed(deps, depends.current)) {
        value.current = isFunction(initialValue) ? initialValue(value.current) : initialValue;
        depends.current  = deps;
    }

    return [ value.current, setter ];
}

export default useDerivedState;
