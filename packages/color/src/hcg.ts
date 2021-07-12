import { round, modulo, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';
import hsl from './hsl';
import hsv from './hsv';
import hwb from './hwb';
import lab  from './lab';

import type { PartialColor, StringOptions, Alpha, RGB, HSL, HSV, HSI, HWB, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oHCG = { h: number; c: number; g: number };
type iHCG = { hue: number; chroma: number; greyness: number };
type internalHCG = Alpha & iHCG;
export type partialHCG = Alpha & (iHCG | oHCG | (iHCG & oHCG));
export type HCG        = Alpha & iHCG & oHCG;

export function is(color: PartialColor): color is partialHCG {
    return ('h' in color && 'c' in color && 'g' in color) ||
           ('hue' in color && 'chroma' in color && 'greyness' in color);
}

export function internal(color: partialHCG): internalHCG {
    if('hue' in color && 'chroma' in color && 'greyness' in color)
        return { hue: color.hue, chroma: color.chroma, greyness: color.greyness, alpha: color.alpha };
    return { hue: color.h / 360, chroma: color.c / 100, greyness: color.g / 100, alpha: color.alpha };
}

export function external({ hue, chroma, greyness, alpha }: internalHCG): HCG {
    const obj = {
        h: round(hue      * 360, 2),
        c: round(chroma   * 100, 2),
        g: round(greyness * 100, 2),
        hue,
        chroma,
        greyness,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialHCG): RGB {
    const { hue, chroma, greyness, alpha } = internal(color);

    let h   = hue * 6;
    let redGreenBlue = Array.from([ h, h, h ]).map((v, i) => {
        let a = modulo(v - i * 2, 6.0);
        let b = Math.abs(a - 3.0) - 1.0;
        return Math.min(Math.max(b, 0.0), 1.0);
    }) as [ number, number, number ];
    let m = greyness * (1 - chroma);

    const [ red, green, blue ] = redGreenBlue.map(ch => ch * chroma + m) as [ number, number, number ];
    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: partialHCG): HSL {
    const { hue, chroma, greyness, alpha } = internal(color);

    let lightness  = greyness * (1.0 - chroma) + 0.5 * chroma;
    let saturation = 0;

    if(lightness > 0.0 && lightness < 0.5)
        saturation = chroma / (2 * lightness);
    else if(lightness >= 0.5 && lightness < 1.0)
        saturation = chroma / (2 * (1 - lightness));

    return hsl.external({ hue, saturation, lightness, alpha });
}

export function toHSV(color: partialHCG): HSV {
    const { hue, chroma, greyness, alpha } = internal(color);

    let value      = chroma + greyness * (1.0 - chroma);
    let saturation = 0;

    if(value > 0.0)
        saturation = chroma / value;

    return hsv.external({ hue, saturation, value, alpha });
}

export function toHSI(color: partialHCG): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialHCG): HWB {
    const { hue, chroma, greyness, alpha } = internal(color);
    const v = chroma + greyness * (1.0 - chroma);
    const whiteness = v - chroma;
    const blackness = 1 - v;
    return hwb.external({ hue, whiteness, blackness, alpha });
}

export function toHCG(color: partialHCG): HCG {
    return external(internal(color));
}

export function toCMY(color: partialHCG): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialHCG): CMYK {
    return rgb.toCMYK(toRGB(color));
}

export function toXYZ(color: partialHCG): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialHCG): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialHCG): LCH {
    return lab.toLCH(toLAB(color));
}

export function parse(input: string): HCG | undefined {
    const rgb   = re`^hcg${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return toHCG({
                h:      getAngle(match[1]),
                c:      getPercent(match[2], 100),
                g:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toHCG({
            h:      getAngle(match[1]),
            c:      getPercent(match[2], 100),
            g:      getPercent(match[3], 100),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialHCG, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || options.format === 'css')
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `hcg(${color.h} ${color.c}% ${color.g}% / ${round(color.alpha * 100, 2)}%)`;
    return `hcg(${color.h} ${color.c}% ${color.g}%)`;
}

const hcg: ColorSpace<HCG, partialHCG, internalHCG> = {
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

export default hcg;
