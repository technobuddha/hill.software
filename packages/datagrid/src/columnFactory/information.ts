import forEach                  from 'lodash/forEach';
import difference               from 'lodash/difference';
import isDate                   from 'lodash/isDate';
import isArray                  from 'lodash/isArray';
import { Column, ColumnType }   from '../column';
import collatorFactory          from '../collatorFactory';
import rendererFactory          from '../rendererFactory';

// https://stackoverflow.com/questions/3143070/javascript-regex-iso-datetime
const isoDate       = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/
// https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers
const numberString  = /^((?:NaN|-?(?:(?:\d+|\d*\.\d+)(?:[Ee][+-]?\d+)?|Infinity)))$/

type Information = {
    required:   boolean;
    types:      Set<string>;
    type:       ColumnType;
    hasNil:     boolean;
}

export function analyzer<T extends Record<string, any>>(data: T[]) {
    let information: Record<string, Information> | undefined = undefined;

    function deriveColumnType(key: string): ColumnType {
        if(!information) information = analyze(data);
        return information[key]?.type || 'unknown';
    }

    function createDefaultColumn(key: string): Column<T> {
        const type = deriveColumnType(key);

        return {
            name:       key,
            width:      '*',
            title:      key,
            render:     rendererFactory(key, type),
            collate:    collatorFactory(key, type),
        }
    }

    function deriveKeys(): string[] {
        if(!information) information = analyze(data);
        return Object.keys(information);
    }

    return {deriveColumnType, createDefaultColumn, deriveKeys};
}

function analyze<T extends Record<string, any>>(data: T[]): Record<string, Information> {
    const information: Record<string, Information> = {};

    forEach(data, (datum, index) => {
        const keys = Object.keys(datum);

        difference(Object.keys(information), keys).forEach(key => { information[key].required = false; })
        forEach(keys, (key) => {
            if(!(key in information)) {
                information[key] = {required: (index === 0), types: new Set(), type: 'unknown', hasNil: false}
            }

            const value = (datum as any)[key];
            const type  = typeof(value);
            switch(type) {
                case 'string':
                    if(isoDate.test(value)) {
                        information[key].types.add('iso-date');
                    } else if(numberString.test(value)) {
                        information[key].types.add('number');
                    } else {
                        information[key].types.add('string');
                    }
                    break;

                case 'object':
                    if(value === null) {
                        information[key].types.add('null');
                    } else if(isDate(value)) {
                        information[key].types.add('date');
                    } else if(isArray(value)) {
                        information[key].types.add('array');
                    } else {
                        information[key].types.add('object');
                    }
                    break;

                case 'number':
                case 'bigint':
                    information[key].types.add('number');
                    break;

                default:
                    information[key].types.add(type);
            }
        });

        // for performance only analyze the first 1000 rows
        return index < 1000;
    });

    Object.keys(information).forEach(key => {
        const info  = information[key];
        const types = info.types;
        
        const   hasNil  = !info.required || types.has('null') || types.has('undefined');
        if(hasNil) {
            types.delete('null');
            types.delete('undefined');
        }
    
        if(types.has('string') && types.has('iso-date')) {
            types.delete('iso-date');
        }

        if(types.has('string') && types.has('number')) {
            types.delete('number');
        }
    
        if(types.size === 1 && types.has('number')) {
            info.type = 'number';
        } else if(types.size === 1 && (types.has('date') || types.has('iso-date'))) {
            info.type = 'date';
        } else if(types.has('symbol') || types.has('function')) {
            info.type = 'unknown'
        } else
            info.type = 'string';
    })
    
    return information;
}

export default analyze;