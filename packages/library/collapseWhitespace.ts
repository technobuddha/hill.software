import { space }                from './constants';
import clean                    from './clean';

export type Options = {
    /** If true, trim  */
    trim?: boolean;
}

/**
 * Replace all whitespace within a string with a single space
 * 
 * @param input The string
 * @param trim If true, remove leading and trailing whitespace
 */
export function collapseWhitespace(input: string, {trim = true}: Options = {}): string {
    if(trim)
        return clean(input.replace(/\s+/g, space), space);
    else
        return input.replace(/\s+/g, space);
}

export default collapseWhitespace;
