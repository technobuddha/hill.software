import React from 'react';
import isFunction   from 'lodash/isFunction';

/**
 * Similar to `React.useState`, returns a stateful value and a function to update it.  The state
 * value is also saved in `localStorage`.
 *
 * When initializing, if the key exists in `localStorage` the stored value is used, otherwise
 * the `initialState` value is used.
 *
 * NOTE: values stored in localStorage are serialized using JSON.stringify.  Some types of objects
 * will not serialize and deserialize correctly.
 *
 * @param key The keyname to use for storing the value in `localStorage`
 * @param initialState Initial state value, or a function that returns the initial state value.
 * @returns [ stateValue, setterFunction ]
 */
export function useLocalStorage<T>(key: string, initialState: T): readonly [ T, (newValue: T | ((oldValue: T) => T)) => void ] {
    const [ value, setValue ] = React.useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialState;
        } catch{
            return initialState;
        }
    });

    const setter                = React.useMemo(
        () => (newValue: T | ((oldValue: T) => T)) => {
            setValue(oldValue => {
                const val = isFunction(newValue) ? newValue(oldValue) : newValue;

                // eslint-disable-next-line no-empty
                try { localStorage.setItem(key, JSON.stringify(val)); } catch{}

                return val;
            });
        },
        [ setValue ]
    );

    return [ value, setter ] as const;
}

export default useLocalStorage;
