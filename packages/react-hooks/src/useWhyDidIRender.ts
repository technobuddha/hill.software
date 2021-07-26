/* eslint-disable no-console */
import React from 'react';

export function useWhyDidIRender(name: string, props: Record<string, unknown>): void {
    const previousProps = React.useRef<Record<string, unknown>>();

    React.useEffect(
        () => {
            if(previousProps.current) {
                console.log('[WDIR]:', name);
                for(const key of Object.keys({ ...previousProps.current, ...props })) {
                    if(previousProps.current[key] !== props[key])
                        console.log('...', key);
                }

                console.log(':[WDIR]');
            }

            previousProps.current = props;
        }
    );
}

export default useWhyDidIRender;
