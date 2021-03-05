import React             from 'react';
import throttle          from 'lodash/throttle';
import { measureWindow } from '@technobuddha/library/measure';

export function useWindowSize() {
    const [ size, setSize ] = React.useState(measureWindow());

    React.useLayoutEffect(() => {
        const updateSize = throttle(() => { setSize(measureWindow()); });
        window.addEventListener('resize', updateSize);

        return () => { window.removeEventListener('resize', updateSize); };
    });

    return size;
}

export default useWindowSize;
