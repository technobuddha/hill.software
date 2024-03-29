type Options = {
    /** test for high surrogates (D800-DBFF) */
    high?: boolean;
    /** test for low surrogates (DC00-DFFF) */
    low?: boolean;
};

/**
 * Deterimine is a character is a surrogate
 *
 * @param input the character to test
 * @param __namedParameters see {@link Options}
 * @default high true
 * @defaultValue low true
 * @returns true if the specified character is a unicode surrogate
 */
export function isSurrogate(input: string, { high = true, low = true }: Options = {}): boolean {
    const cc = input.charCodeAt(0);

    // cspell:ignore DBFF DFFF
    return ((high && cc >= 0xD800 && cc <= 0xDBFF) || (low && cc >= 0xDC00 && cc <= 0xDFFF));
}

export default isSurrogate;
