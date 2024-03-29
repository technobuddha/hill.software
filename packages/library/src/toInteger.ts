import isString from 'lodash/isString';
import isBoolean from 'lodash/isBoolean';
import isNumber from 'lodash/isNumber';

export function toInteger(entity: unknown): number {
    return isNumber(entity) ? Math.trunc(entity) : isBoolean(entity) ? (entity ? 1 : 0) : isString(entity) ? Number.parseInt(entity, 10) : Number.NaN;
}

export default toInteger;
