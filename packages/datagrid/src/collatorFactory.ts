import defaultTo        from 'lodash/defaultTo';
import isNil            from 'lodash/isNil';
import { ColumnType }   from './column';

export function collatorFactory(key: string, type: ColumnType) {
    switch (type) {
        case 'string':
            return (ascending: boolean) => {
                const collator = new Intl.Collator(undefined, { sensitivity: 'base' });

                return ascending
                ?   (x: Record<string, any>, y: Record<string, any>) => collator.compare(x[key] as string, y[key] as string)
                :   (x: Record<string, any>, y: Record<string, any>) => collator.compare(y[key] as string, x[key] as string);
            };

        case 'number':
            return (ascending: boolean) => {
                return ascending
                ?   (x: Record<string, any>, y: Record<string, any>) => defaultTo(x[key] as number, -Infinity) - defaultTo(y[key] as number, -Infinity)
                :   (x: Record<string, any>, y: Record<string, any>) => defaultTo(y[key] as number, +Infinity) - defaultTo(x[key] as number, +Infinity);
            };

        case 'date':
            return (ascending: boolean) => {
                return ascending
                ?   (x: Record<string, any>, y: Record<string, any>) => 
                        (isNil(x[key]) ? -Infinity : (new Date(x[key]).getTime())) -
                        (isNil(y[key]) ? -Infinity : (new Date(y[key]).getTime()))
                :   (x: Record<string, any>, y: Record<string, any>) => 
                        (isNil(y[key]) ? -Infinity : (new Date(y[key]).getTime())) -
                        (isNil(x[key]) ? -Infinity : (new Date(x[key]).getTime()));
            };

        case null:
        case 'unknown':
        default:
            return null;
    }
}

export default collatorFactory;
