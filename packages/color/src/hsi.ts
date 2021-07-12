/* eslint-disable no-cond-assign */
import { approxEq, round, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';

import type { PartialColor, Alpha, StringOptions, RGB, HSL, HSV, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

type oHSI = { h: number; s: number; i: number };
type iHSI = { hue: number; saturation: number; intensity: number };
type internalHSI = Alpha & iHSI;
export type partialHSI = Alpha & (iHSI | oHSI | (iHSI & oHSI));
export type HSI        = Alpha & iHSI & oHSI;

export function is(color: PartialColor): color is partialHSI {
    return ('h' in color && 's' in color && 'i' in color) ||
           ('hue' in color && 'saturation' in color && 'intensity' in color);
}

export function internal(color: partialHSI): internalHSI {
    if('hue' in color && 'saturation' in color && 'intensity' in color)
        return { hue: color.hue, saturation: color.saturation, intensity: color.intensity, alpha: color.alpha };
    return { hue: color.h / 360, saturation: color.s / 100, intensity: color.i / 100, alpha: color.alpha };
}

export function external({ hue, saturation, intensity, alpha }: internalHSI): HSI {
    const obj = {
        h: round(hue        * 360, 2),
        s: round(saturation * 100, 2),
        i: round(intensity  * 100, 2),
        hue,
        saturation,
        intensity,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialHSI): RGB {
    const { hue, saturation, intensity, alpha } = internal(color);
    let   red        = intensity;
    let   green      = intensity;
    let   blue       = intensity;

    if(!approxEq(saturation, 0)) {
        let H = hue * 6;
        let Z = 1 - Math.abs(H % 2 - 1);
        let C = (3 * intensity * saturation) / (1 + Z);
        let X = C * Z;

        switch(Math.floor(H)) {
            case 0: [ red, green, blue ] = [ C, X, 0 ]; break;
            case 1: [ red, green, blue ] = [ X, C, 0 ]; break;
            case 2: [ red, green, blue ] = [ 0, C, X ]; break;
            case 3: [ red, green, blue ] = [ 0, X, C ]; break;
            case 4: [ red, green, blue ] = [ X, 0, C ]; break;
            case 5: [ red, green, blue ] = [ C, 0, X ]; break;
        }

        let M = intensity * (1 - saturation);
        red   += M;
        green += M;
        blue  += M;
    }

    return rgb.external({ red, green, blue, alpha });
}

export function toHSL(color: partialHSI): HSL {
    return rgb.toHSL(toRGB(color));
}

export function toHSV(color: partialHSI): HSV {
    return rgb.toHSV(toRGB(color));
}

export function toHSI(color: partialHSI): HSI {
    return external(internal(color));
}

export function toHWB(color: partialHSI): HWB {
    return rgb.toHWB(toRGB(color));
}

export function toHCG(color: partialHSI): HCG {
    return rgb.toHCG(toRGB(color));
}

export function toCMY(color: partialHSI): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialHSI): CMYK {
    return rgb.toCMYK(toRGB(color));
}

export function toXYZ(color: partialHSI): XYZ {
    return rgb.toXYZ(toRGB(color));
}

export function toLAB(color: partialHSI): LAB {
    return rgb.toLAB(toRGB(color));
}

export function toLCH(color: partialHSI): LCH {
    return rgb.toLCH(toRGB(color));
}

export function parse(input: string): HSI | undefined {
    const rgb   = re`^hsi${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return toHSI({
                h:      getAngle(match[1]),
                s:      getPercent(match[2], 100),
                i:      getPercent(match[3], 100),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toHSI({
            h:      getAngle(match[1]),
            s:      getPercent(match[2], 100),
            i:      getPercent(match[3], 100),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialHSI, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || options.format === 'css')
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `hsi(${color.h} ${color.s}% ${color.i}% / ${round(color.alpha * 100, 2)}%)`;
    return `hsi(${color.h} ${color.s}% ${color.i}%)`;
}

const hsi: ColorSpace<HSI, partialHSI, internalHSI> = {
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

export default hsi;
