import isInteger    from 'lodash/isInteger';
import isMultipleOf from './isMultipleOf';

/**
  * Tests to see if the specified value is an odd integer
  * @param    input    The number to test
  */
export function isOdd(input: number): boolean {
    return isInteger(input) && !isMultipleOf(input, 2);
}

export default isOdd;
