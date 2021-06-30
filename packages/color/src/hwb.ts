/* eslint-disable no-cond-assign */
import { round, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';
import hcg from './hcg';
import lab  from './lab';

import { getStringOptions } from './color';
import type { Color, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace, Internal } from './color-space';

export function is(color: Color): color is HWB {
    return ('h' in color || 'hue'       in color) &&
            ('w' in color || 'whiteness' in color) &&
            ('b' in color || 'blackness' in color);
}

export function internal(color: HWB): Internal<HWB> {
    return {
        hue:        color.hue       ?? color.h / 360,
        whiteness:  color.whiteness ?? color.w / 100,
        blackness:  color.blackness ?? color.b / 100,
        alpha:      color.alpha,
    };
}

export function external({ hue, whiteness, blackness, alpha }: Internal<HWB>): HWB {
    const obj = {
        h: round(hue       * 360, 0),
        w: round(whiteness * 100, 2),
        b: round(blackness * 100, 2),
        hue,
        whiteness,
        blackness,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: HWB): RGB {
    let { hue, whiteness, blackness, alpha } = internal(color);
    let ratio = whiteness + blackness;

    // Wh + bl cant be > 1
    if(ratio > 1) {
        whiteness /= ratio;
        blackness /= ratio;
    }

    let i = Math.floor(6 * hue);
    let v = 1 - blackness;
    let f = 6 * hue - i;

    if((i & 0x01) !== 0)
        f = 1 - f;

    let n = whiteness + f * (v - whiteness); // Linear interpolation

    let red: number;
    let green: number;
    let blue: number;
    switch(i) {
        case 1:  red = n;         green = v;         blue = whiteness; break;
        case 2:  red = whiteness; green = v;         blue = n;         break;
        case 3:  red = whiteness; green = n;         blue = v;         break;
        case 4:  red = n;         green = whiteness; blue = v;         break;
        case 5:  red = v;         green = whiteness; blue = n;         break;
        case 6:
        case 0:
        default: red = v;         green = n;         blue = whiteness; break;
    }

    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: HWB): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: HWB): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: HWB): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: HWB): HWB {
    return external(internal(color));
}

export function toHCG(color: HWB): HCG {
    let { hue, whiteness, blackness, alpha } = internal(color);
    const v         = 1 - blackness;
    const chroma    = v - whiteness;
    let   greyness  = 0;

    if(chroma < 1)
        greyness = (v - chroma) / (1 - chroma);

    return hcg.external({ hue, chroma, greyness, alpha });
}

export function toCMY(color: HWB): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: HWB): CMYK {
    return rgb.toCMYK(toRGB(color));
}

export function toXYZ(color: HWB): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: HWB): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: HWB): LCH {
    return lab.toLCH(toLAB(color));
}

export function parse(input: string): HWB | undefined {
    const rgb   = re`^hwb${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return {
                h:      getAngle(match[1]),
                w:      getPercent(match[2], 100),
                b:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            };
        }

        return {
            h:      getAngle(match[1]),
            w:      getPercent(match[2], 100),
            b:      getPercent(match[3], 100),
        };
        //#endregion
    }

    return undefined;
}

export function string(input: HWB, options: StringOptions): string {
    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(input), options);

    if(input.alpha)
        return `hwb(${input.h} ${input.w}% ${input.b}% / ${round(input.alpha * 100, 2)}%)`;
    return `hwb(${input.h} ${input.w}% ${input.b}%)`;
}

export function inputFormat(_: string): StringOptions {
    return getStringOptions('default');
}

const hwb: ColorSpace<HWB> = {
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

export default hwb;