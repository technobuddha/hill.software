import { approxEq, round, re, percent, sep, alpha, op, cp, getPercent } from './util';
import rgb  from './rgb';
import cmyk from './cmyk';
import lab  from './lab';

import { getStringOptions } from './color';
import type { Color, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace, Internal } from './color-space';

export function is(color: Color): color is CMY {
    return ('c' in color || 'cyan'    in color) &&
            ('m' in color || 'magenta' in color) &&
            ('y' in color || 'yellow'  in color);
}

export function internal(color: CMY): Internal<CMY> {
    return {
        cyan:    color.cyan    ?? color.c / 100,
        magenta: color.magenta ?? color.m / 100,
        yellow:  color.yellow  ?? color.y / 100,
        alpha:  color.alpha,
    };
}

export function external({ cyan, magenta, yellow, alpha }: Internal<CMY>): CMY {
    const obj = {
        c: round(cyan    * 100, 0),
        m: round(magenta * 100, 0),
        y: round(yellow  * 100, 0),
        cyan,
        magenta,
        yellow,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: CMY): RGB {
    const { cyan, magenta, yellow, alpha } = internal(color);
    return rgb.external({ red: 1 - cyan, green: 1 - magenta, blue: 1 - yellow, alpha });
}

export function toHSL(color: CMY): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: CMY): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: CMY): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: CMY): HWB {
    return rgb.toHWB(toRGB(color));
}

export function toHCG(color: CMY): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: CMY): CMY {
    return external(internal(color));
}

export function toCMYK(color: CMY): CMYK {
    let { cyan, magenta, yellow, alpha } = internal(color);
    let black = 1.0;

    if(cyan    < black) black = cyan;
    if(magenta < black) black = magenta;
    if(yellow  < black) black = yellow;
    if(approxEq(black, 1)) {
        cyan = magenta = yellow = 0;
    } else {
        cyan    = (cyan - black)    / (1 - black);
        magenta = (magenta - black) / (1 - black);
        yellow  = (yellow  - black) / (1 - black);
    }

    return cmyk.external({ cyan, magenta, yellow, black, alpha });
}

export function toXYZ(color: CMY): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: CMY): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: CMY): LCH {
    return lab.toLCH(toLAB(color));
}

const testCMY = re`^cmy${op}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

export function parse(input: string): CMY | undefined {
    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = testCMY.exec(input)) {
        //#region CMY
        if(match[4]) {
            return {
                c:      getPercent(match[1], 100),
                m:      getPercent(match[2], 100),
                y:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            };
        }

        return {
            c:      getPercent(match[1], 100),
            m:      getPercent(match[2], 100),
            y:      getPercent(match[3], 100),
        };
        //#endregion
    }

    return undefined;
}

export function inputFormat(_: string): StringOptions {
    return getStringOptions('default');
}

export function string(input: CMY, options: StringOptions): string {
    if(options.format === 'name' || options.format === 'hex' || options.format === 'css')
        return rgb.string(toRGB(input), options);

    if(input.alpha)
        return `cmy(${input.c}% ${input.m}% ${input.y}% / ${round(input.alpha * 100, 2)}%)`;
    return `cmy(${input.c}% ${input.m}% ${input.y}%)`;
}

const cmy: ColorSpace<CMY> = {
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

export default cmy;
