/* eslint-disable no-cond-assign */
import { round, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';
import hsl from './hsl';
import hcg from './hcg';
import lab  from './lab';

import type { PartialColor, Alpha, StringOptions, RGB, HSL, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oHSV = { h: number; s: number; v: number };
type iHSV = { hue: number; saturation: number; value: number };
type internalHSV = Alpha & iHSV;
export type partialHSV = Alpha & (iHSV | oHSV | (iHSV & oHSV));
export type HSV        = Alpha & iHSV & oHSV;

export function is(color: PartialColor): color is partialHSV {
    return ('h' in color && 's' in color && 'v' in color) ||
           ('hue' in color && 'saturation' in color && 'value' in color);
}

export function internal(color: partialHSV): internalHSV {
    if('hue' in color && 'saturation' in color && 'value' in color)
        return { hue: color.hue, saturation: color.saturation, value: color.value, alpha: color.alpha };
    return { hue: color.h / 360, saturation: color.s / 100, value: color.v / 100, alpha: color.alpha };
}

export function external({ hue, saturation, value, alpha }: internalHSV): HSV {
    const obj = {
        h: round(hue        * 360, 2),
        s: round(saturation * 100, 2),
        v: round(value      * 100, 2),
        hue,
        saturation,
        value,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialHSV): RGB {
    let { hue, saturation, value, alpha } = internal(color);
    hue *= 6;
    let hi          = Math.floor(hue) % 6;

    const f = hue - Math.floor(hue);
    const p = value * (1 - saturation);
    const q = value * (1 - (saturation * f));
    const t = value * (1 - (saturation * (1 - f)));
    const v = value;

    switch(hi) {
        case 0:
            return rgb.external({ red: v, green: t, blue: p, alpha });
        case 1:
            return rgb.external({ red: q, green: v, blue: p, alpha });
        case 2:
            return rgb.external({ red: p, green: v, blue: t, alpha });
        case 3:
            return rgb.external({ red: p, green: q, blue: v, alpha });
        case 4:
            return rgb.external({ red: t, green: p, blue: v, alpha });
        default:
            return rgb.external({ red: v, green: p, blue: q, alpha });
    }
}

export function toHSL(color: partialHSV): HSL {
    let { hue, saturation, value, alpha } = internal(color);
    let vMin        = Math.max(value, 0.01);

    let lightness   = (2 - saturation) * value;
    let lMin        = (2 - saturation) * vMin;
    saturation      = saturation       * vMin;

    saturation /= lMin <= 1 ? lMin : 2 - lMin;
    saturation  = saturation || 0;
    lightness  /= 2;

    return hsl.external({ hue, saturation, lightness, alpha });
}

export function toHSV(color: partialHSV): HSV {
    return external(internal(color));
}

export function toHSI(color: partialHSV): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialHSV): HWB {
    return hcg.toHWB(toHCG(color));
}

export function toHCG(color: partialHSV): HCG {
    let { hue, saturation, value, alpha } = internal(color);

    let chroma      = saturation * value;
    let greyness    = 0;

    if(chroma < 1.0)
        greyness = (value - chroma) / (1 - chroma);

    return hcg.external({ hue, chroma, greyness, alpha });
}

export function toCMY(color: partialHSV): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialHSV): CMYK {
    return rgb.toCMYK(toRGB(color));
}

export function toXYZ(color: partialHSV): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialHSV): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialHSV): LCH {
    return lab.toLCH(toLAB(color));
}

export function parse(input: string): HSV | undefined {
    const rgb   = re`^hsv${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return toHSV({
                h:      getAngle(match[1]),
                s:      getPercent(match[2], 100),
                v:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toHSV({
            h:      getAngle(match[1]),
            s:      getPercent(match[2], 100),
            v:      getPercent(match[3], 100),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialHSV, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || options.format === 'css')
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `hsv(${color.h} ${color.s}% ${color.v}% / ${round(color.alpha * 100, 2)}%)`;
    return `hsv(${color.h} ${color.s}% ${color.v}%)`;
}

const hsv: ColorSpace<HSV, partialHSV, internalHSV> = {
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

export default hsv;
