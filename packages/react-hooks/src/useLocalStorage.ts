import { useState } from 'react';
import isFunction   from 'lodash/isFunction';

export function useLocalStorage<T>(key: string, defaultValue: T) {
    const [ value, setValue ] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch(error: unknown) {
            return defaultValue;
        }
    });

    const setter = (newValue: T | ((newValue: T) => T)) => {
        setValue(oldValue => {
            const val = isFunction(newValue) ? newValue(oldValue) : newValue;

            // eslint-disable-next-line no-empty
            try { localStorage.setItem(key, JSON.stringify(val)); } catch(error: unknown) {}

            return val;
        });
    };
    return [ value, setter ] as const;
}

export default useLocalStorage;
