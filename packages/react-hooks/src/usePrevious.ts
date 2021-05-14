import React      from 'react';
import isFunction from 'lodash/isFunction';

/**
 * Return the 'previous' value of an expression.
 *
 * On the first render, the value will be `undefined`.  On the second and subsequent renders,
 * the value returned will be the previous value.
 *
 * @param value The 'current' value, or a function to return the current value
 * @returns The previous value.
 */
export function usePrevious<T>(value: T | ((prevValue: T | undefined) => T)): T | undefined {
    const ref = React.useRef<T | undefined>(undefined);
    const v   = isFunction(value) ? value(ref.current) : value;

    React.useEffect(
        () => { ref.current = v; },
        [ v ]
    );

    return ref.current;
}

export default usePrevious;
