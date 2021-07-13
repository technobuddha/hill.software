/* eslint-disable no-cond-assign */
import { round, approxEq, re, percent, sep, alpha, op, cp, getPercent } from './util';
import { findColor, findName } from './color-names';
import hsl  from './hsl';
import hsv  from './hsv';
import hsi  from './hsi';
import hwb  from './hwb';
import hcg  from './hcg';
import cmy  from './cmy';
import cmyk from './cmyk';
import xyz  from './xyz';
import lab  from './lab';

import type { PartialColor, StringOptions, Alpha, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';
import type { ColorSpace } from './color-space';

export type oRGB        = { r: number; g: number; b: number };
type iRGB               = { red: number; green: number; blue: number };
type internalRGB        = Alpha & iRGB;
export type partialRGB  = Alpha & (iRGB | oRGB | (iRGB & oRGB));
export type RGB         = Alpha & iRGB & oRGB;

export function is(color: PartialColor): color is partialRGB {
    return ('r' in color && 'r' in color && 'b' in color) ||
           ('red' in color && 'green' in color && 'blue' in color);
}

export function internal(color: partialRGB): internalRGB {
    if('red' in color && 'green' in color && 'blue' in color)
        return { red: color.red, green: color.green, blue: color.blue, alpha: color.alpha };
    return { red: color.r / 255, green: color.g / 255, blue: color.b / 255, alpha: color.alpha };
}

export function external({ red, green, blue, alpha }: internalRGB): RGB {
    const obj = {
        r: round(red   * 255, 2),
        g: round(green * 255, 2),
        b: round(blue  * 255, 2),
        red,
        green,
        blue,
    };

    return alpha === undefined ? obj : { ...obj, alpha };
}

function attributes(color: partialRGB) {
    const { red, green, blue, alpha } = internal(color);
    const min           = Math.min(red, green, blue);
    const max           = Math.max(red, green, blue);
    const chroma        = max - min;
    let   hue           = 0;
    let   hslSaturation = 0;
    let   hsvSaturation = 0;
    let   hsiSaturation = 0;
    let   lightness     = (max + min) / 2;
    let   value         = max;
    let   whiteness     = min;
    let   blackness     = 1 - max;
    let   greyness      = approxEq(chroma, 1) ? 0 : min / (1 - chroma);
    let   intensity     = (red + green + blue) / 3;

    if(!approxEq(chroma, 0)) {
        const deltaR = (max - red)   / 6 / chroma;
        const deltaG = (max - green) / 6 / chroma;
        const deltaB = (max - blue)  / 6 / chroma;

        if(approxEq(red, max))
            hue = (0 / 3) + deltaB - deltaG;
        else if(approxEq(green, max))
            hue = (1 / 3) + deltaR - deltaB;
        else
            hue = (2 / 3) + deltaG - deltaR;

        if(hue < 0) hue += 1;

        if(lightness <= 0.5)
            hslSaturation = chroma / (max + min);
        else
            hslSaturation = chroma / (2 - max - min);
    }

    if(!approxEq(max, 0))
        hsvSaturation = chroma / max;

    if(!approxEq(intensity, 0))
        hsiSaturation = 1 - min / intensity;

    return {
        chroma,
        hue,
        hslSaturation,
        hsvSaturation,
        hsiSaturation,
        lightness,
        value,
        whiteness,
        blackness,
        greyness,
        intensity,
        alpha,
    };
}

export function toRGB(color: partialRGB): RGB {
    return external(internal(color));
}

export function toHSL(color: partialRGB): HSL {
    const { hue, hslSaturation: saturation, lightness, alpha } = attributes(color);
    return hsl.external({ hue, saturation, lightness, alpha });
}

export function toHSV(color: partialRGB): HSV {
    const { hue, hsvSaturation: saturation, value, alpha } = attributes(color);
    return hsv.external({ hue, saturation, value, alpha });
}

export function toHSI(color: partialRGB): HSI {
    const { hue, hsiSaturation: saturation, intensity, alpha } = attributes(color);
    return hsi.external({ hue, saturation, intensity, alpha });
}

export function toHWB(color: partialRGB): HWB {
    const { hue, whiteness, blackness, alpha } = attributes(color);
    return hwb.external({ hue, whiteness, blackness, alpha });
}

export function toHCG(color: partialRGB): HCG {
    const { hue, chroma, greyness, alpha } = attributes(color);
    return hcg.external({ hue, chroma, greyness, alpha });
}

export function toCMY(color: partialRGB): CMY {
    const { red, green, blue, alpha } = internal(color);
    return cmy.external({ cyan: 1 - red, magenta: 1 - green, yellow: 1 - blue, alpha });
}

export function toCMYK(color: partialRGB): CMYK {
    const { red, green, blue, alpha } = internal(color);
    const black     = Math.min(1 - red, 1 - green, 1 - blue);
    const cyan      = (1 - red - black)   / (1 - black) || 0;
    const magenta   = (1 - green - black) / (1 - black) || 0;
    const yellow    = (1 - blue - black)  / (1 - black) || 0;

    return cmyk.external({ cyan, magenta, yellow, black, alpha });
}

//X, Y and Z output refer to a D65/2° standard illuminant.
export function toXYZ(color: partialRGB): XYZ {
    let { red, green, blue, alpha } = internal(color);

    // Assume sRGB
    red     = red   > 0.04045 ? (((red   + 0.055) / 1.055) ** 2.4) : (red   / 12.92);
    green   = green > 0.04045 ? (((green + 0.055) / 1.055) ** 2.4) : (green / 12.92);
    blue    = blue  > 0.04045 ? (((blue  + 0.055) / 1.055) ** 2.4) : (blue  / 12.92);

    const X = (red * 0.4124564) + (green * 0.3575761) + (blue * 0.1804375);
    const Y = (red * 0.2126729) + (green * 0.7151522) + (blue * 0.0721750);
    const Z = (red * 0.0193339) + (green * 0.1191920) + (blue * 0.9503041);

    return xyz.external({ X, Y, Z, alpha });
}

export function toLAB(color: partialRGB): LAB {
    return xyz.toLAB(toXYZ(color));
}

export function toLCH(color: partialRGB): LCH {
    return lab.toLCH(toLAB(color));
}

const testHEX   = /^#(?:[0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/iu;
const testRGB   = re`^rgba?${op}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

export function parse(input: string): RGB | undefined {
    let match: RegExpMatchArray | null;
    if(testHEX.test(input)) {
        //#region HEX
        const n = parseInt(input.slice(1), 16);

        switch(input.length - 1) {
            case 3:   // abc => aabbcc
                return toRGB({
                    r:      (((n >> 8) & 0x0f) | ((n >> 4) & 0xf0)),
                    g:      (((n >> 4) & 0x0f) | ((n)      & 0xf0)),
                    b:      (((n)      & 0x0f) | ((n << 4) & 0xf0)),
                });

            case 4:     // abcd => aabbccdd
                return toRGB({
                    r:      (((n >> 12) & 0x0f) | ((n >> 8) & 0xf0)),
                    g:      (((n >>  8) & 0x0f) | ((n >> 4) & 0xf0)),
                    b:      (((n >>  4) & 0x0f) | ((n)      & 0xf0)),
                    alpha:  (((n)       & 0x0f) | ((n << 4) & 0xf0)) / 255,
                });

            case 6:  // abcdef
                return toRGB({
                    r:      ((n >> 16) & 0xff),
                    g:      ((n >>  8) & 0xff),
                    b:      ((n)       & 0xff),
                });

            case 8: // abcdef00
                return toRGB({
                    r:      ((n >> 24) & 0xff),
                    g:      ((n >> 16) & 0xff),
                    b:      ((n >>  8) & 0xff),
                    alpha:  ((n)       & 0xff) / 255,
                });
        }
        //#endregion
    } else if(match = testRGB.exec(input)) {
        //#region RGB
        if(match[4]) {
            return toRGB({
                r:      getPercent(match[1], 255),
                g:      getPercent(match[2], 255),
                b:      getPercent(match[3], 255),
                alpha:  getPercent(match[4], 1),
            });
        }

        return toRGB({
            r:      getPercent(match[1], 255),
            g:      getPercent(match[2], 255),
            b:      getPercent(match[3], 255),
        });
        //#endregion
    }

    return findColor(input);
}

export function string(input: partialRGB, options: StringOptions): string {
    const color = external(internal(input));

    if(options.format === 'name') {
        const name = findName(color);
        if(name)
            return name;
    }

    if(options.format === 'hex') {
        const rHex = round(color.r, 0).toString(16).padStart(2, '0');
        const gHex = round(color.g, 0).toString(16).padStart(2, '0');
        const bHex = round(color.b, 0).toString(16).padStart(2, '0');

        if(input.alpha === undefined) {
            // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
            if(options.hexShorthand && rHex[0] === rHex[1] && gHex[0] === gHex[1] && bHex[0] === bHex[1])
                return `#${rHex[0]}${gHex[0]}${bHex[0]}`;
            return `#${rHex}${gHex}${bHex}`;
        } else if(options.cssVersion === 4) {
            const aHex = Math.round(input.alpha * 255).toString(16).padStart(2, '0');

            // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
            if(options.hexShorthand && rHex[0] === rHex[1] && gHex[0] === gHex[1] && bHex[0] === bHex[1] && aHex[0] === aHex[1])
                return `#${rHex[0]}${gHex[0]}${bHex[0]}${aHex[0]}`;
            return `#${rHex}${gHex}${bHex}${aHex}`;
        }
    }

    if(options.format !== 'default' && options.cssVersion === 3) {
        if(color.alpha === undefined)
            return `rgb(${round(color.r, 0)}, ${round(color.g, 0)}, ${round(color.b, 0)})`;
        return `rgba(${round(color.r, 0)}, ${round(color.g, 0)}, ${round(color.b, 0)}, ${round(color.alpha, 4)})`;
    }

    if(color.alpha)
        return `rgb(${color.r} ${color.g} ${color.b} / ${round(color.alpha * 100, 2)}%)`;
    return `rgb(${color.r} ${color.g} ${color.b})`;
}

export const rgb: ColorSpace<RGB, partialRGB, internalRGB> = {
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

export default rgb;
