import { round, re, angle, percent, number, sep, alpha, op, cp, getAngle, getNumber, getPercent } from './util';
import rgb  from './rgb';
import lab  from './lab';

import type { PartialColor, StringOptions, Alpha, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB } from './color';
import type { ColorSpace } from './color-space';

type oLCH = { l: number; c: number; h: number };
type iLCH = { lightness: number; chroma: number; hue: number };
type internalLCH = Alpha & iLCH;
export type partialLCH = Alpha & (iLCH | oLCH | (iLCH & oLCH));
export type LCH        = Alpha & iLCH & oLCH;

export function is(color: PartialColor): color is partialLCH {
    return ('l' in color && 'c' in color && 'h' in color) ||
           ('lightness' in color && 'chroma' in color && 'hue' in color);
}

export function internal(color: partialLCH): internalLCH {
    if('lightness' in color && 'chroma' in color && 'hue' in color)
        return { lightness: color.lightness, chroma: color.chroma, hue: color.hue, alpha: color.alpha };
    return { lightness: color.l / 100, chroma: color.c / 100, hue: color.h / 360, alpha: color.alpha };
}

export function external({ lightness, chroma, hue, alpha }: internalLCH): LCH {
    const obj = {
        l: round(lightness * 100, 2),
        c: round(chroma    * 100, 2),
        h: round(hue       * 360, 2),
        lightness,
        chroma,
        hue,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

export function toRGB(color: partialLCH): RGB {
    return lab.toRGB(toLAB(color));
}

export function toHSL(color: partialLCH): HSL {
    return rgb.toHSL(lab.toRGB(toLAB(color)));
}

export function toHSV(color: partialLCH): HSV {
    return rgb.toHSV(lab.toRGB(toLAB(color)));
}

export function toHWB(color: partialLCH): HWB {
    return rgb.toHWB(lab.toRGB(toLAB(color)));
}

export function toHSI(color: partialLCH): HSI {
    return rgb.toHSI(toRGB(color));
}

export function toHCG(color: partialLCH): HCG {
    return rgb.toHCG(lab.toRGB(toLAB(color)));
}

export function toCMY(color: partialLCH): CMY {
    return rgb.toCMY(toRGB(color));
}

export function toCMYK(color: partialLCH): CMYK {
    return rgb.toCMYK(lab.toRGB(toLAB(color)));
}

export function toXYZ(color: partialLCH): XYZ {
    return lab.toXYZ(toLAB(color));
}

export function toLAB(color: partialLCH): LAB {
    const { lightness, chroma, hue, alpha } = internal(color);

    const hr         = hue * (2 * Math.PI);
    const redGreen   = chroma * Math.cos(hr);
    const blueYellow = chroma * Math.sin(hr);

    return lab.external({ lightness, redGreen, blueYellow, alpha });
}

export function toLCH(color: partialLCH): LCH {
    return external(internal(color));
}

export function parse(input: string): LCH | undefined {
    const rgb   = re`^lch${op}${percent}${sep}${number}${sep}${angle}${alpha}${cp}$`;

    let match: RegExpMatchArray | null;
    // eslint-disable-next-line no-cond-assign
    if(match = rgb.exec(input)) {
        //#region RGB
        if(match[4]) {
            return toLCH({
                l:      getPercent(match[1], 100),
                c:      getNumber(match[2]),
                h:      getAngle(match[3]),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toLCH({
            l:      getPercent(match[1], 100),
            c:      getNumber(match[2]),
            h:      getAngle(match[3]),
        });
        //#endregion
    }

    return undefined;
}

export function string(input: partialLCH, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name' || options.format === 'hex' || (options.format === 'css' && options.cssVersion === 3))
        return rgb.string(toRGB(color), options);

    if(color.alpha)
        return `lch(${color.l}% ${color.c} ${color.h} / ${round(color.alpha * 100, 2)}%)`;
    return `lch(${color.l}% ${color.c} ${color.h})`;
}

const lch: ColorSpace<LCH, partialLCH, internalLCH> = {
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

export default lch;
