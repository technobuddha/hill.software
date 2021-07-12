import { round, re, percent, sep, alpha, op, cp, getPercent } from './util';
import rgb from './rgb';
import cmy from './cmy';

import type { PartialColor, StringOptions, Alpha, RGB, HSL, HSV, HSI, HWB, HCG, CMY, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oCMYK              = { c: number; m: number; y: number; k: number };
type iCMYK              = { cyan: number; magenta: number; yellow: number; black: number };
type internalCMYK       = Alpha & iCMYK;
export type partialCMYK = Alpha & (iCMYK | oCMYK | (iCMYK & oCMYK));
export type CMYK        = Alpha & iCMYK & oCMYK;

export function is(color: PartialColor): color is partialCMYK {
    return ('c' in color && 'm' in color && 'y' in color && 'k' in color) ||
           ('cyan' in color && 'magenta' in color && 'yellow' in color && 'black' in color);
}

export function internal(color: partialCMYK): internalCMYK {
    if('cyan' in color && 'magenta' in color && 'yellow' in color && 'black' in color)
        return { cyan: color.cyan, magenta: color.magenta, yellow: color.yellow, black: color.black, alpha: color.alpha };
    return { cyan: color.c / 100, magenta: color.m / 100, yellow: color.y / 100, black: color.k / 100, alpha: color.alpha };
}

export function external({ cyan, magenta, yellow, black, alpha }: internalCMYK): CMYK {
    const obj = {
        c: round(cyan    * 100, 2),
        m: round(magenta * 100, 2),
        y: round(yellow  * 100, 2),
        k: round(black   * 100, 2),
        cyan,
        magenta,
        yellow,
        black,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialCMYK): RGB {
    const { cyan, magenta, yellow, black, alpha } = internal(color);

    const red   = 1 - Math.min(1, cyan    * (1 - black) + black);
    const green = 1 - Math.min(1, magenta * (1 - black) + black);
    const blue  = 1 - Math.min(1, yellow  * (1 - black) + black);

    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: partialCMYK): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: partialCMYK): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: partialCMYK): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialCMYK): HWB {
    return rgb.toHWB(toRGB(color));
}

export function toHCG(color: partialCMYK): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: partialCMYK): CMY {
    let { cyan, magenta, yellow, black, alpha } = internal(color);

    cyan    = cyan    * (1 - black) + black;
    magenta = magenta * (1 - black) + black;
    yellow  = yellow  * (1 - black) + black;

    return cmy.external({ cyan, magenta, yellow, alpha });
}

export function toCMYK(color: partialCMYK): CMYK {
    return external(internal(color));
}

export function toXYZ(color: partialCMYK): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialCMYK): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialCMYK): LCH {
    return rgb.toLCH(toRGB(color));
}
export function parse(input: string): CMYK | undefined {
    const rgb   = re`^(?:device-)?cmyk${op}${percent}${sep}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = rgb.exec(input)) {
        if(match[5]) {
            return toCMYK({
                c:     getPercent(match[1], 100),
                m:     getPercent(match[2], 100),
                y:     getPercent(match[3], 100),
                k:     getPercent(match[4], 100),
                alpha: getPercent(match[5], 1),
            });
        }

        return toCMYK({
            c: getPercent(match[1], 100),
            m: getPercent(match[2], 100),
            y: getPercent(match[3], 100),
            k: getPercent(match[4], 100),
        });
    }

    return undefined;
}

export function string(input: partialCMYK, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(color), options);

    if(options.format === 'css') {
        if(color.alpha)
            return `device-cmyk(${color.c}% ${color.m}% ${color.y}% ${color.k}% / ${round(color.alpha * 100, 2)}%)`;
        return `device-cmyk(${color.c}% ${color.m}% ${color.y}% ${color.k}%)`;
    }

    if(color.alpha)
        return `cmyk(${color.c}% ${color.m}% ${color.y}% ${color.k}% / ${round(color.alpha * 100, 2)}%)`;
    return `cmyk(${color.c}% ${color.m}% ${color.y}% ${color.k}%)`;
}

export const cmyk: ColorSpace<CMYK, partialCMYK, internalCMYK> = {
    is,
    internal,
    external,
    toRGB,
    toHSL,
    toHSV,
    toHSI,
    toHWB,
    toHCG,
    toCMY,
    toCMYK,
    toXYZ,
    toLAB,
    toLCH,
    parse,
    string,
};

export default cmyk;
