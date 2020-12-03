import React        from 'react';
import isFunction   from 'lodash/isFunction';
import { changed }  from './util';

export function useDerivedValue<T = null>(props: T | ((prev: T) => T), deps: readonly unknown[]): T {
    const propsRef  = React.useRef<T>(undefined!);
    const depsRef   = React.useRef(deps);

    if(propsRef.current === undefined || changed(deps, depsRef.current)) {
        propsRef.current = isFunction(props) ? props(propsRef.current) : props;
        depsRef.current  = deps;
    }

    return propsRef.current;
}

export default useDerivedValue;