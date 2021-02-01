import clean                    from './clean';

type Options = {
    /** Ignore a leading quote (") */
    ignoreQuotes?: boolean;
    /** move article (a, an, the) to the end of the string */
    moveArticles?: boolean;
};

/**
 * Convert a string into a sortable string
 *
 * @remarks for example "The Beatles" becomes "Beatles, The"
 * @param input string to convert
 * @param __namedParameters see {@link Options}
 * @return sortable string
 */
export function sortOrder(input: string, { ignoreQuotes = true, moveArticles = true }: Options = {}): string {
    input = clean(input);

    if(ignoreQuotes) {
        if(input.startsWith('"'))
            input = input.substr(1);
    }

    const lc    = input.toLowerCase();
    if(moveArticles) {
        if(lc.startsWith('a '))
            input = `${input.substr(2)}, ${input.substr(0, 1)}`;
        else
        if(lc.startsWith('an '))
            input = `${input.substr(3)}, ${input.substr(0, 2)}`;
        else
        if(lc.startsWith('the '))
            input = `${input.substr(4)}, ${input.substr(0, 3)}`;
    }

    return input;
}

export default sortOrder;