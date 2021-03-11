import React             from 'react';
import throttle          from 'lodash/throttle';
import { measureWindow } from '@technobuddha/library/measure';

export function useWindowSize() {
    const [ count, setCount ]   = React.useState(0);
    const [ size, setSize ]     = React.useState(measureWindow());

    React.useLayoutEffect(() => {
        const updateSize = throttle(() => { setSize(measureWindow()); setCount(c => c + 1); });
        window.addEventListener('resize', updateSize);

        return () => { window.removeEventListener('resize', updateSize); };
    });

    return { ...size, count };
}

export default useWindowSize;
