import isArray  from 'lodash/isArray';
import isNil    from 'lodash/isNil';

export function getUniqueValues<T = unknown>(data: T[], name: keyof T) {
    const set    = new Set<string>();
    for(const datum of data) {
        const v = datum[name];

        if(!isNil(v)) {
            if(isArray(v))
                for(const vv of v) { if(!isNil(vv)) set.add(vv.toString()); }
            else if(!isNil(v))
                set.add((v as any)?.toString?.());
        }
    }

    return Array.from(set.values());
}
