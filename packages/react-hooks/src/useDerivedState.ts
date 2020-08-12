import React        from 'react';
import isFunction   from 'lodash/isFunction';
import { changed }  from './util';

export function useDerivedState<T>(props: T | ((prev: T) => T), deps: readonly unknown[]): [T, React.Dispatch<React.SetStateAction<T>>] {
    const propsRef          = React.useRef<T>(undefined!);
    const depsRef           = React.useRef(deps);
    const [, forceUpdate]   = React.useReducer(x => x + 1, 0);

    if(propsRef.current === undefined || changed(deps, depsRef.current)) {
        propsRef.current = isFunction(props) ? props(propsRef.current) : props;
        depsRef.current  = deps;
    }

    return [
        propsRef.current,
        (newProps: T | ((prev: T) => T)) => {
            propsRef.current = isFunction(newProps) ? newProps(propsRef.current) : newProps;
            forceUpdate();
        }
    ];
}

export default useDerivedState;
