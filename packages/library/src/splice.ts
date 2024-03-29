import { empty }                from './constants';

/**
 * Insert a substring into a string
 *
 * @param input The string
 * @param start The position which to insert the substring
 * @param deleteCount The number of characters to delete
 * @param items The substring(s) to insert
 * @returns The modified strings
 */
export function splice(input: string, start: number, deleteCount: number, ...items: string[]): string {
    if(start < 0) {
        start = input.length + start + 1;
        if(start < 0) start = 0;
    }

    return input.slice(0, start) + items.join(empty) + input.slice(start + (deleteCount < 0 ? 0 : deleteCount));
}

export default splice;
