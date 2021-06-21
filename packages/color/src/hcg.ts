import { round, modulo, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';
import hsl from './hsl';
import hsv from './hsv';
import hwb from './hwb';
import lab  from './lab';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region HCG
export namespace hcg {
    export function isHCG(color: Color): color is HCG {
        return ('h' in color || 'hue'      in color) &&
               ('c' in color || 'chroma'   in color) &&
               ('g' in color || 'greyness' in color);
    }

    type iHCG = { hue: number; chroma: number; greyness: number; alpha?: number };

    export function internal(color: HCG): iHCG {
        return {
            hue:        color.hue      ?? color.h / 360,
            chroma:     color.chroma   ?? color.c / 100,
            greyness:   color.greyness ?? color.g / 100,
            alpha:      color.alpha,
        };
    }

    export function external({ hue, chroma, greyness, alpha }: iHCG): HCG {
        return {
            h: round(hue      * 360, 0),
            c: round(chroma   * 100, 0),
            g: round(greyness * 100, 0),
            hue,
            chroma,
            greyness,
            alpha,
        };
    }

    export function toRGB(color: HCG): RGB {
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

    export function toHSL(color: HCG): HSL {
        const { hue, chroma, greyness, alpha } = internal(color);

        let lightness  = greyness * (1.0 - chroma) + 0.5 * chroma;
        let saturation = 0;

        if(lightness > 0.0 && lightness < 0.5)
            saturation = chroma / (2 * lightness);
        else if(lightness >= 0.5 && lightness < 1.0)
            saturation = chroma / (2 * (1 - lightness));

        return hsl.external({ hue, saturation, lightness, alpha });
    }

    export function toHSV(color: HCG): HSV {
        const { hue, chroma, greyness, alpha } = internal(color);

        let value      = chroma + greyness * (1.0 - chroma);
        let saturation = 0;

        if(value > 0.0)
            saturation = chroma / value;

        return hsv.external({ hue, saturation, value, alpha });
    }

    export function toHSI(color: HCG): HSI {
        return rgb.toHSI(toRGB(color));
    }

    export function toHWB(color: HCG): HWB {
        const { hue, chroma, greyness, alpha } = internal(color);
        const v = chroma + greyness * (1.0 - chroma);
        const whiteness = v - chroma;
        const blackness = 1 - v;
        return hwb.external({ hue, whiteness, blackness, alpha });
    }

    export function toHCG(color: HCG): HCG {
        return external(internal(color));
    }

    export function toCMY(color: HCG): CMY {
        return rgb.toCMY(toRGB(color));
    }

    export function toCMYK(color: HCG): CMYK {
        return rgb.toCMYK(toRGB(color));
    }

    export function toXYZ(color: HCG): XYZ {
        return rgb.toXYZ(toRGB(color));
    }

    export function toLAB(color: HCG): LAB {
        return rgb.toLAB(toRGB(color));
    }

    export function toLCH(color: HCG): LCH {
        return lab.toLCH(toLAB(color));
    }

    export function parse(input: string): HCG | undefined {
        const rgb   = re`^hcg${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        // eslint-disable-next-line no-cond-assign
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    h:      getAngle(match[1]),
                    c:      getPercent(match[2], 100),
                    g:      getPercent(match[3], 100),
                    alpha:  getPercent(match[4], 1),
                };
            }

            return {
                h:      getAngle(match[1]),
                c:      getPercent(match[2], 100),
                g:      getPercent(match[3], 100),
            };
            //#endregion
        }

        return undefined;
    }
}
//#endregion

export default hcg;
