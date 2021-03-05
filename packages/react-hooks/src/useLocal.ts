import React        from 'react';
import isFunction   from 'lodash/isFunction';

export function useLocal<T>(initial: T | (() => T)): [T, ((set: T | ((prev: T) => T)) => void)] {
    const localRef = React.useRef<T>(isFunction(initial) ? initial() : initial);

    return [
        localRef.current,
        (set: T | ((prev: T) => T)) => {
            localRef.current = isFunction(set) ? set(localRef.current) : set;
        },
    ];
}

export default useLocal;
