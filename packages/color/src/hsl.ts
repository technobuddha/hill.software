/* eslint-disable no-cond-assign */
import { round, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';
import hsv from './hsv';
import hcg from './hcg';
import lab  from './lab';

import type { PartialColor, Alpha, StringOptions, RGB, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oHSL = { h: number; s: number; l: number };
type iHSL = { hue: number; saturation: number; lightness: number };
type internalHSL = Alpha & iHSL;
export type partialHSL = Alpha & (iHSL | oHSL | (iHSL & oHSL));
export type HSL        = Alpha & iHSL & oHSL;

export function is(color: PartialColor): color is partialHSL {
    return ('h' in color && 's' in color && 'l' in color) ||
           ('hue' in color && 'saturation' in color && 'lightness' in color);
}

export function internal(color: partialHSL): internalHSL {
    if('hue' in color && 'saturation' in color && 'lightness' in color)
        return { hue: color.hue, saturation: color.saturation, lightness: color.lightness, alpha: color.alpha };
    return { hue: color.h / 360, saturation: color.s / 100, lightness: color.l / 100, alpha: color.alpha };
}

export function external({ hue, saturation, lightness, alpha }: internalHSL): HSL {
    const obj = {
        h: round(hue        * 360, 2),
        s: round(saturation * 100, 2),
        l: round(lightness  * 100, 2),
        hue,
        saturation,
        lightness,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialHSL): RGB {
    const { hue, saturation, lightness, alpha } = internal(color);
    let   red        = 0;
    let   green      = 0;
    let   blue       = 0;

    if(saturation === 0) {
        red = green = blue = lightness;
    } else {
        let val;

        const t2 = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;

        const t1  = 2 * lightness - t2;
        const array = [ 0, 0, 0 ];
        for(let i = 0; i < 3; i++) {
            let t3 = hue + 1 / 3 * -(i - 1);
            if(t3 < 0) t3++;
            if(t3 > 1) t3--;

            if(6 * t3 < 1)
                val = t1 + (t2 - t1) * 6 * t3;
            else if(2 * t3 < 1)
                val = t2;
            else if(3 * t3 < 2)
                val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            else
                val = t1;
            array[i] = val;
        }

        [ red, green, blue ] = array;
    }

    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: partialHSL): HSL {
    return external(internal(color));
}

export function toHSV(color: partialHSL): HSV {
    let { hue, saturation, lightness, alpha } = internal(color);
    let sMin        = saturation;
    let lMin        = Math.max(lightness, 0.01);

    lightness  *= 2;
    saturation *= (lightness <= 1) ? lightness : 2 - lightness;
    sMin       *= lMin;

    let value   = (lightness + saturation) / 2;
    saturation  = lightness === 0 ? (2 * sMin) / (lMin + sMin) : (2 * saturation) / (lightness + saturation);

    return hsv.external({ hue, saturation, value, alpha });
}

export function toHSI(color: partialHSL): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHWB(color: partialHSL): HWB {
    return hcg.toHWB(toHCG(color));
}

export function toHCG(color: partialHSL): HCG {
    const { hue, saturation, lightness, alpha } = internal(color);
    const chroma = lightness < 0.5 ? (2.0 * saturation * lightness) : (2.0 * saturation * (1.0 - lightness));

    let   greyness = 0;
    if(chroma < 1.0)
        greyness = (lightness - 0.5 * chroma) / (1.0 - chroma);

    return hcg.external({ hue, chroma, greyness, alpha });
}

export function toCMY(color: partialHSL): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialHSL): CMYK {
    return rgb.toCMYK(toRGB(color));
}

export function toXYZ(color: partialHSL): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialHSL): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialHSL): LCH {
    return lab.toLCH(toLAB(color));
}

const testHSL = re`^hsla?${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

export function parse(input: string): HSL | undefined {
    let match: RegExpMatchArray | null;
    if(match = testHSL.exec(input)) {
        //#region HSL
        if(match[4]) {
            return toHSL({
                h:      getAngle(match[1]),
                s:      getPercent(match[2], 100),
                l:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toHSL({
            h:      getAngle(match[1]),
            s:      getPercent(match[2], 100),
            l:      getPercent(match[3], 100),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialHSL, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex')
        return rgb.string(toRGB(color), options);

    if(options.format === 'css' && options.cssVersion === 3) {
        if(color.alpha)
            return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${round(color.alpha, 4)})`;
        return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    }

    if(color.alpha)
        return `hsl(${color.h} ${color.s}% ${color.l}% / ${round(color.alpha * 100, 2)}%)`;
    return `hsl(${color.h} ${color.s}% ${color.l}%)`;
}

const hsl: ColorSpace<HSL, partialHSL, internalHSL> = {
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

export default hsl;
