import { approxEq, round, re, percent, sep, alpha, op, cp, getPercent } from './util';
import rgb  from './rgb';
import cmyk from './cmyk';

import type { PartialColor, StringOptions, Alpha, RGB, HSL, HSV, HSI, HWB, HCG, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oCMY              = { c: number; m: number; y: number };
type iCMY              = { cyan: number; magenta: number; yellow: number };
type internalCMY       = Alpha & iCMY;
export type partialCMY = Alpha & (iCMY | oCMY | (iCMY & oCMY));
export type CMY        = Alpha & iCMY & oCMY;

export function is(color: PartialColor): color is partialCMY {
    return ('c' in color && 'm' in color && 'y' in color) ||
           ('cyan' in color && 'magenta' in color && 'yellow' in color);
}

export function internal(color: partialCMY): internalCMY {
    if('cyan' in color && 'magenta' in color && 'yellow' in color)
        return { cyan: color.cyan, magenta: color.magenta, yellow: color.yellow, alpha: color.alpha };
    return { cyan: color.c / 100, magenta: color.m / 100, yellow: color.y / 100, alpha: color.alpha };
}

export function external({ cyan, magenta, yellow, alpha }: internalCMY): CMY {
    const obj = {
        c: round(cyan    * 100, 2),
        m: round(magenta * 100, 2),
        y: round(yellow  * 100, 2),
        cyan,
        magenta,
        yellow,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialCMY): RGB {
    const { cyan, magenta, yellow, alpha } = internal(color);
    return rgb.external({ red: 1 - cyan, green: 1 - magenta, blue: 1 - yellow, alpha });
}

export function toHSL(color: partialCMY): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: partialCMY): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: partialCMY): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialCMY): HWB {
    return rgb.toHWB(toRGB(color));
}

export function toHCG(color: partialCMY): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: partialCMY): CMY {
    return external(internal(color));
}

export function toCMYK(color: partialCMY): CMYK {
    let { cyan, magenta, yellow, alpha } = internal(color);
    let black = 1.0;

    if(cyan    < black) black = cyan;
    if(magenta < black) black = magenta;
    if(yellow  < black) black = yellow;
    if(approxEq(black, 1)) {
        cyan = magenta = yellow = 0;
    } else {
        cyan    = (cyan    - black) / (1 - black);
        magenta = (magenta - black) / (1 - black);
        yellow  = (yellow  - black) / (1 - black);
    }

    return cmyk.external({ cyan, magenta, yellow, black, alpha });
}

export function toXYZ(color: partialCMY): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialCMY): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialCMY): LCH {
    return rgb.toLCH(toRGB(color));
}

export function parse(input: string): CMY | undefined {
    const testCMY = re`^cmy${op}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = testCMY.exec(input)) {
        if(match[4]) {
            return toCMY({
                c:      getPercent(match[1], 100),
                m:      getPercent(match[2], 100),
                y:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toCMY({
            c:      getPercent(match[1], 100),
            m:      getPercent(match[2], 100),
            y:      getPercent(match[3], 100),
        });
    }

    return undefined;
}

export function string(input: partialCMY, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || options.format === 'css')
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `cmy(${color.c}% ${color.m}% ${color.y}% / ${round(color.alpha * 100, 2)}%)`;
    return `cmy(${color.c}% ${color.m}% ${color.y}%)`;
}

const cmy: ColorSpace<CMY, partialCMY, internalCMY> = {
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

export default cmy;
