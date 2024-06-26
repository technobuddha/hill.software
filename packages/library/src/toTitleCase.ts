const titles = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/ui;

/**
 * Convert a string to a title, capitalizing each word, except for the small words
 *
 * @param input the string to make title case
 * @return the string in title case
 */
export function toTitleCase(input: string): string {
    return input.replace(
        /[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/ug,
        (match, index: number, title: string) => {
            if(index > 0 && (index + match.length) !== title.length &&
                match.search(titles) > -1 && title.charAt(index - 2) !== ':' &&
                (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
                title.charAt(index - 1).search(/[^\s-]/u) < 0)
                return match.toLowerCase();

            if(match.slice(1).search(/[A-Z]|\../u) > -1)
                return match;

            return match.charAt(0).toUpperCase() + match.slice(1);
        }
    );
}

export default toTitleCase;
