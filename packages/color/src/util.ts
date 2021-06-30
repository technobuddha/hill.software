/* eslint-disable require-unicode-regexp */
export function modulo(dividend: number, divisor: number): number {
    const remainder = dividend % divisor;
    return (dividend * divisor < 0 && remainder !== 0) ? divisor + remainder : remainder;
}

export function hypot(...sides: number[]): number {
    return Math.sqrt(sides.reduce((sum, side) => sum + side ** 2, 0));
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

export function round(n: number, precision = 0): number {
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

export const sep        = /(?:\s*,\s*|\s+)/;
export const space      = /\s+/;
export const op         = /(?:\s*\(\s*)/;
export const cp         = /(?:\s*\)\s*)/;
export const num        = /[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/;
export const number     = re`(${num})`;
export const percent    = re`(${num}%?)`;
export const angle      = re`(${num}(?:deg|rad|grad|turn)?)`;
export const alpha      = re`(?:\\s*[,/]\\s*${percent})?`;

export function getPercent(input: string, scale = 100): number {
    if(input.endsWith('%'))
        return Number.parseFloat(input.slice(0, -1)) * scale / 100;
    return Number.parseFloat(input);
}

export function getAngle(input: string): number {
    if(input.endsWith('deg'))
        return Number.parseFloat(input.slice(0, -3));
    else if(input.endsWith('grad')) //Test for grad first (both rad and grad end the same)
        return Number.parseFloat(input.slice(0, -4)) * 360 / 400;
    else if(input.endsWith('rad'))
        return Number.parseFloat(input.slice(0, -3)) * 360 / (Math.PI * 2);
    else if(input.endsWith('turn'))
        return Number.parseFloat(input.slice(0, -4)) * 360;
    return Number.parseFloat(input);
}

export function getNumber(input: string): number {
    return Number.parseFloat(input);
}
