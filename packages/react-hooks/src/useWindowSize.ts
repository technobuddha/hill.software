import React             from 'react';
import throttle          from 'lodash/throttle';
import { measureWindow } from '@technobuddha/library/measure';
import type { Size }     from '@technobuddha/library/measure';

/**
 * Gets the current window size, including the dimensions of the scroll bars.
 *
 * If the actual size of the window is unimportant, it also returns a count of how many times the window
 * has been resized since the first render.
 *
 * @returns [{ width, height, scrollbarWidth, scrollbarHeight, count }
 */
export function useWindowSize(): Size & { count: number } {
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
