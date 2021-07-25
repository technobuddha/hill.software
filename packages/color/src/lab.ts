import { round, approxEq, re, number, percent, sep, alpha, op, cp, getNumber, getPercent } from './util';

import rgb  from './rgb';
import xyz  from './xyz';
import lch  from './lch';

import type { PartialColor, StringOptions, Alpha, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LCH } from './color';
import type { ColorSpace } from './color-space';

type oLAB = { l: number; a: number; b: number };
type iLAB = { lightness: number; redGreen: number; blueYellow: number };
type internalLAB = Alpha & iLAB;
export type partialLAB = Alpha & (iLAB | oLAB | (iLAB & oLAB));
export type LAB        = Alpha & iLAB & oLAB;

export function is(color: PartialColor): color is partialLAB {
    return ('l' in color && 'a' in color && 'b' in color) ||
           ('lightness' in color && 'redGreen' in color && 'blueYellow' in color);
}

export function internal(color: partialLAB): internalLAB {
    if('lightness' in color && 'redGreen' in color && 'blueYellow' in color)
        return { lightness: color.lightness, redGreen: color.redGreen, blueYellow: color.blueYellow, alpha: color.alpha };
    return { lightness: color.l / 100, redGreen: color.a / 100, blueYellow: color.b / 100, alpha: color.alpha };
}

export function external({ lightness, redGreen, blueYellow, alpha }: internalLAB): LAB {
    const obj = {
        l: round(lightness  * 100, 2),
        a: round(redGreen   * 100, 2),
        b: round(blueYellow * 100, 2),
        lightness,
        redGreen,
        blueYellow,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialLAB): RGB {
    return xyz.toRGB(toXYZ(color));
}

export function toHSL(color: partialLAB): HSL {
    return rgb.toHSL(xyz.toRGB(toXYZ(color)));
}

export function toHSV(color: partialLAB): HSV {
    return rgb.toHSV(xyz.toRGB(toXYZ(color)));
}

export function toHSI(color: partialLAB): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialLAB): HWB {
    return rgb.toHWB(xyz.toRGB(toXYZ(color)));
}

export function toHCG(color: partialLAB): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: partialLAB): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialLAB): CMYK {
    return rgb.toCMYK(xyz.toRGB(toXYZ(color)));
}

export function toXYZ(color: partialLAB): XYZ {
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

export function toLAB(color: partialLAB): LAB {
    return external(internal(color));
}

export function toLCH(color: partialLAB): LCH {
    let { lightness, redGreen, blueYellow, alpha } = internal(color);

    let hue = approxEq(redGreen, 0) && approxEq(blueYellow, 0)
        ?   0
        :   Math.atan2(blueYellow, redGreen);
    hue = hue > 0 ? hue / (Math.PI * 2) : 1 - Math.abs(hue / (Math.PI * 2));
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
            return toLAB({
                l:      getPercent(match[1], 100),
                a:      getNumber(match[2]),
                b:      getNumber(match[3]),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toLAB({
            l:      getPercent(match[1], 100),
            a:      getNumber(match[2]),
            b:      getNumber(match[3]),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialLAB, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `lab(${color.l}% ${color.a} ${color.b} / ${round(color.alpha * 100, 2)}%)`;
    return `lab(${color.l}% ${color.a} ${color.b})`;
}

const lab: ColorSpace<LAB, partialLAB, internalLAB> = {
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

export default lab;
