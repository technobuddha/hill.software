/* eslint-disable require-unicode-regexp */
export function modulo(dividend: number, divisor: number): number {
    const remainder = dividend % divisor;
    return (dividend * divisor < 0 && remainder !== 0) ? divisor + remainder : remainder;
}

export function approxEq(a: number, b: number): boolean {
    return Math.abs(a - b) <= (0.0001 + Number.EPSILON);
}

export function toDegrees(angle: number): number {
    return 180 * angle / Math.PI;
}

export function toRadians(angle: number): number {
    return Math.PI * angle / 180;
}

export function round(n: number, precision: number): number {
    const factor = 10 ** precision;
    return Math.round(n * factor) / factor;
}

// Parsing

export function re(template: TemplateStringsArray, ...args: RegExp[]): RegExp {
    const res: (string | undefined)[] = [];

    const strings: string[]           =  Array.from<string>(template);

    while(strings.length > 0 || args.length > 0)
        res.push(strings.shift(), args.shift()?.source);

    return new RegExp(res.filter(Boolean).join(''), 'iu');
}

// eslint-disable-next-line unicorn/better-regex
export const sep        = /(?:\s*,\s*|\s+)/;
export const space      = /\s+/;
export const op         = /(?:\s*\(\s*)/;
export const cp         = /(?:\s*\)\s*)/;
export const num        = /[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?/;
export const number     = re`(${num})`;
export const percent    = re`(${num}%?)`;
export const angle      = re`(${num}(?:deg|rad|grad|turn)?)`;
export const alpha      = re`(?:\\s*[,/]\\s*${percent})?`;

export function getPercent(input: string, scale: number, precision = 2): number {
    if(input.endsWith('%'))
        return round(Number.parseFloat(input.slice(0, -1)) * scale / 100, precision);
    return round(Number.parseFloat(input), precision);
}

export function getAngle(input: string, precision = 2): number {
    if(input.endsWith('deg'))
        return round(Number.parseFloat(input.slice(0, -3)), precision);
    else if(input.endsWith('grad')) //Test for grad first (both rad and grad end the same)
        return round(Number.parseFloat(input.slice(0, -4)) * 360 / 400, precision);
    else if(input.endsWith('rad'))
        return round(Number.parseFloat(input.slice(0, -3)) * 360 / (Math.PI * 2), precision);
    else if(input.endsWith('turn'))
        return round(Number.parseFloat(input.slice(0, -4)) * 360, precision);
    return round(Number.parseFloat(input), precision);
}

export function getNumber(input: string, precision = 2): number {
    return round(Number.parseFloat(input), precision);
}
