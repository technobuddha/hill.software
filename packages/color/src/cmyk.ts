import { round, re, percent, sep, alpha, op, cp, getPercent } from './util';
import rgb from './rgb';
import cmy from './cmy';
import lab  from './lab';

import { getStringOptions } from './color';
import type { Color, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace, Internal } from './color-space';

export function is(color: Color): color is CMYK {
    return ('c' in color || 'cyan'    in color) &&
            ('m' in color || 'magenta' in color) &&
            ('y' in color || 'yellow'  in color) &&
            ('k' in color || 'black'   in color);
}

export function internal(color: CMYK): Internal<CMYK> {
    return {
        cyan:    color.cyan    ?? color.c / 100,
        magenta: color.magenta ?? color.m / 100,
        yellow:  color.yellow  ?? color.y / 100,
        black:  color.black    ?? color.k / 100,
        alpha:  color.alpha,
    };
}

export function external({ cyan, magenta, yellow, black, alpha }: Internal<CMYK>): CMYK {
    const obj = {
        c: round(cyan    * 100, 0),
        m: round(magenta * 100, 0),
        y: round(yellow  * 100, 0),
        k: round(black   * 100, 0),
        cyan,
        magenta,
        yellow,
        black,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: CMYK): RGB {
    const { cyan, magenta, yellow, black, alpha } = internal(color);

    const red   = 1 - Math.min(1, cyan    * (1 - black) + black);
    const green = 1 - Math.min(1, magenta * (1 - black) + black);
    const blue  = 1 - Math.min(1, yellow  * (1 - black) + black);

    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: CMYK): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: CMYK): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: CMYK): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: CMYK): HWB {
    return rgb.toHWB(toRGB(color));
}

export function toHCG(color: CMYK): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: CMYK): CMY {
    let { cyan, magenta, yellow, black, alpha } = internal(color);

    cyan    = cyan    * (1 - black) + black;
    magenta = magenta * (1 - black) + black;
    yellow  = yellow  * (1 - black) + black;

    return cmy.external({ cyan, magenta, yellow, alpha });
}

export function toCMYK(color: CMYK): CMYK {
    return external(internal(color));
}

export function toXYZ(color: CMYK): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: CMYK): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: CMYK): LCH {
    return lab.toLCH(toLAB(color));
}
export function parse(input: string): CMYK | undefined {
    const rgb   = re`^(?:device-)?cmyk${op}${percent}${sep}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[5]) {
            return {
                c:      getPercent(match[1], 100),
                m:      getPercent(match[2], 100),
                y:      getPercent(match[3], 100),
                k:      getPercent(match[4], 100),
                alpha:  getPercent(match[5], 1),
            };
        }

        return {
            c:      getPercent(match[1], 100),
            m:      getPercent(match[2], 100),
            y:      getPercent(match[3], 100),
            k:      getPercent(match[4], 100),
        };
        //#endregion
    }

    return undefined;
}

export function inputFormat(_: string): StringOptions {
    return getStringOptions('default');
}

export function string(input: CMYK, options: StringOptions): string {
    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(input), options);

    if(options.format === 'css') {
        if(input.alpha)
            return `device-cmyk(${input.c}% ${input.m}% ${input.y}% ${input.k}% / ${round(input.alpha * 100, 2)}%)`;
        return `device-cmyk(${input.c}% ${input.m}% ${input.y}% ${input.k}%)`;
    }

    if(input.alpha)
        return `cmyk(${input.c}% ${input.m}% ${input.y}% ${input.k}% / ${round(input.alpha * 100, 2)}%)`;
    return `cmyk(${input.c}% ${input.m}% ${input.y}% ${input.k}%)`;
}

export const cmyk: ColorSpace<CMYK> = {
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
    inputFormat,
};

export default cmyk;
