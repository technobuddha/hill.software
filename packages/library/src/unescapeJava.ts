/**
 * Unescape a string encoded in Java style
 *
 * @param input The string to unescape
 * @returns the string with escapes resolved
 */
export function unescapeJava(input: string): string {
    return input.replace(
        // cspell:disable-next-line
        /\\(([bfnrt"'\\])|([0-7]{1,3})|(u[0-9a-fA-F]{4}))/ug,
        escape => {
            const c = escape.charAt(1);

            if(c === 'b')
                return '\b';
            if(c === 'f')
                return '\f';
            if(c === 'n')
                return '\n';
            if(c === 'r')
                return '\r';
            if(c === 't')
                return '\t';
            if(c >= '0' && c <= '7')
                return String.fromCharCode(Number.parseInt(escape.slice(1), 8));
            if(c === 'u')
                return String.fromCharCode(Number.parseInt(escape.slice(2), 16));

            return escape.slice(1);
        }
    );
}

export default unescapeJava;
