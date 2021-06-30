import { round, approxEq, re, number, percent, sep, alpha, op, cp, getNumber, getPercent } from './util';

import rgb  from './rgb';
import xyz  from './xyz';
import lch  from './lch';

import { getStringOptions } from './color';
import type { Color, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace, Internal } from './color-space';

export function is(color: Color): color is LAB {
    return ('l' in color || 'lightness'  in color) &&
            ('a' in color || 'redGreen'   in color) &&
            ('b' in color || 'blueYellow' in color);
}

export function internal(color: LAB): Internal<LAB> {
    return {
        lightness:  color.lightness  ?? color.l / 100,
        redGreen:   color.redGreen   ?? color.a / 100,
        blueYellow: color.blueYellow ?? color.b / 100,
        alpha:      color.alpha,
    };
}

export function external({ lightness, redGreen, blueYellow, alpha }: Internal<LAB>): LAB {
    const obj = {
        l: round(lightness   * 100, 2),
        a: round(redGreen    * 100, 2),
        b: round(blueYellow  * 100, 2),
        lightness,
        redGreen,
        blueYellow,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: LAB): RGB {
    return xyz.toRGB(toXYZ(color));
}

export function toHSL(color: LAB): HSL {
    return rgb.toHSL(xyz.toRGB(toXYZ(color)));
}

export function toHSV(color: LAB): HSV {
    return rgb.toHSV(xyz.toRGB(toXYZ(color)));
}

export function toHSI(color: LAB): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: LAB): HWB {
    return rgb.toHWB(xyz.toRGB(toXYZ(color)));
}

export function toHCG(color: LAB): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: LAB): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: LAB): CMYK {
    return rgb.toCMYK(xyz.toRGB(toXYZ(color)));
}

export function toXYZ(color: LAB): XYZ {
    const { lightness, redGreen, blueYellow, alpha } = internal(color);

    let Y = (lightness * 100 + 16) / 116;
    let X = redGreen / 5 + Y;
    let Z = Y - blueYellow / 2;

    const Y2 = Y ** 3;
    const X2 = X ** 3;
    const Z2 = Z ** 3;

    Y = Y2 > 0.008856 ? Y2 : (Y - 16 / 116) / 7.787;
    X = X2 > 0.008856 ? X2 : (X - 16 / 116) / 7.787;
    Z = Z2 > 0.008856 ? Z2 : (Z - 16 / 116) / 7.787;

    X *= 0.95047;
    Y *= 1.00000;
    Z *= 1.08883;

    return xyz.external({ X, Y, Z, alpha });
}

export function toLAB(color: LAB): LAB {
    return external(internal(color));
}

export function toLCH(color: LAB): LCH {
    let { lightness, redGreen, blueYellow, alpha } = internal(color);

    let hue = approxEq(redGreen, 0) && approxEq(blueYellow, 0)
        ?   0
        :   Math.atan2(blueYellow, redGreen);
    if(hue > 0)
        hue = hue / (Math.PI * 2);
    else
        hue = 1 - Math.abs(hue / (Math.PI * 2));
    if(hue >= 1) hue -= 1;

    let chroma    = Math.sqrt(redGreen ** 2 + blueYellow ** 2);

    return lch.external({ lightness, chroma, hue, alpha });
}

export function parse(input: string): LAB | undefined {
    const rgb   = re`^lab${op}${percent}${sep}${number}${sep}${number}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return {
                l:      getPercent(match[1], 100),
                a:      getNumber(match[2]),
                b:      getNumber(match[3]),
                alpha:  getPercent(match[4], 1),
            };
        }

        return {
            l:      getPercent(match[1], 100),
            a:      getNumber(match[2]),
            b:      getNumber(match[3]),
        };
        //#endregion
    }

    return undefined;
}

export function string(input: LAB, options: StringOptions): string {
    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(input), options);

    if(input.alpha)
        return `lab(${input.l}% ${input.a} ${input.b} / ${round(input.alpha * 100, 2)}%)`;
    return `lab(${input.l}% ${input.a} ${input.b})`;
}

export function inputFormat(_: string): StringOptions {
    return getStringOptions('default');
}

const lab: ColorSpace<LAB> = {
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

export default lab;
