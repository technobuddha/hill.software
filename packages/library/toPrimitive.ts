import isPrimitive                                                            from './isPrimitive';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import isSymbol from 'lodash/isSymbol';

/**
  * Convert an object into its primitive (string, number, etc.) value
  */
export function toPrimitive(input: any, hint: ('string' | 'number' | 'default') = 'default'): any
{
    let wrapper = input;

    if(isPrimitive(input)) {
        if(isNull(input) || isUndefined(input))
            return input;
        else {
            wrapper = undefined;

            if(isString(input))
                wrapper = String.prototype;
            else
            if(isNumber(input))
                wrapper = Number.prototype;
            else
            if(isBoolean(input))
                wrapper = Boolean.prototype;
            else
            if(isSymbol(input))
                wrapper = Symbol.prototype;
        }
    }

    if(Symbol.toPrimitive in wrapper)
        return wrapper[Symbol.toPrimitive].call(input, hint);
    else
    if(hint === 'string') {
        if('toString' in wrapper)
            return wrapper.toString.call(input);
        else
        if('valueOf' in wrapper)
            return wrapper.valueOf.call(input);
        else
            throw new TypeError('Cannot convert object to a primitive value');
    } else {
        if('valueOf' in wrapper)
            return wrapper.valueOf.call(input);
        else
        if('toString' in wrapper)
            return wrapper.toString.call(input);
        else
            throw new TypeError('Cannot convert object to a primitive value');
    }
}

export default toPrimitive;
