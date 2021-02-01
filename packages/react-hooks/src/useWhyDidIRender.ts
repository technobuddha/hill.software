import React from 'react';

export function useWhyDidIRender(name: string, props: Record<string, unknown>) {
    const previousProps = React.useRef<Record<string, unknown>>();

    React.useEffect(
        () => {
            if(previousProps.current) {
                console.log('[WDIR]:', name)
                Object.keys({...previousProps.current, ...props}).forEach(
                    key => {
                        if(previousProps.current![key] !== props[key])
                            console.log('...', key);
                    }
                )
                console.log(':[WDIR]')
            }

            previousProps.current = props;
        }
    )
}

export default useWhyDidIRender;