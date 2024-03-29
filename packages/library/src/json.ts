import isNaN    from 'lodash/isNaN';
import isFinite from 'lodash/isFinite';

export const specialBegin  = '﴾';
export const specialFinish = '﴿';

/**
 * Used with JSON.stringify to encode a wider range of objects into strings that can later be decoded with {@link revive}
 *
 * @remarks Will encode Date, RegExp and BigInt objects.  The numeric values 'Infinity' and 'NaN' are also encoded.
 * @param this The raw object being stringified
 * @param key The key for the field
 * @param value The value (may have already been encoded into a string)
 * @returns the encoded value
 */
export function replacer(this: Record<string, unknown>, key: string, value: unknown): unknown {
    const raw = this[key];
    if(raw instanceof Date)
        return `${specialBegin}Date:${raw.toISOString()}${specialFinish}`;
    else if(raw instanceof RegExp)
        return `${specialBegin}RegExp:/${raw.source}/${raw.flags}${specialFinish}`;
    else if(typeof raw === 'number' && (isNaN(raw) || !isFinite(raw)))
        return `${specialBegin}Number:${raw.toString()}${specialFinish}`;
    else if(typeof raw === 'bigint')
        return `${specialBegin}BigInt:${raw.toString()}${specialFinish}`;

    return value;
}

/**
 * Used with JSON.parse to decode objected encoded by {@link replacer}
 *
 * @param this The raw object
 * @param _key The key
 * @param value The value
 * @returns the decoded value
 */
export function reviver(this: unknown, _key: string, value: unknown): unknown {
    if(typeof value === 'string' && value.startsWith(specialBegin) && value.endsWith(specialFinish)) {
        const [ type, jsonValue ] = value.slice(1, -1).split(/:(.+)/u);
        switch(type) {
            case 'Date':
                return new Date(jsonValue);
            case 'RegExp': {
                const matches = /^\/(.*)\/([a-z]*)$/u.exec(jsonValue);
                return matches ? new RegExp(matches[1], matches[2]) : new RegExp(jsonValue, 'u');
            }
            case 'Number':
                return Number(jsonValue);
            case 'BigInt':
                return BigInt(jsonValue);
            default:
                return value;
        }
    }
    return value;
}

export default { replacer, reviver };
