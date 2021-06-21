import { round, re, angle, percent, number, sep, alpha, op, cp, getAngle, getNumber, getPercent } from './util';
import rgb  from './rgb';
import lab  from './lab';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region LCH
export namespace lch {
    export function isLCH(color: Color): color is LCH {
        return ('l' in color || 'lightness' in color) &&
               ('c' in color || 'chroma'    in color) &&
               ('h' in color || 'hue'       in color);
    }

    type iLCH = { lightness: number; chroma: number; hue: number; alpha?: number };

    export function internal(color: LCH): iLCH {
        return {
            lightness:  color.lightness ?? color.l / 100,
            chroma:     color.chroma    ?? color.c,
            hue:        color.hue       ?? color.h / 360,
            alpha:      color.alpha,
        };
    }

    export function external({ lightness, chroma, hue, alpha }: iLCH): LCH {
        return {
            l: round(lightness * 100, 0),
            c: round(chroma,          0),
            h: round(hue       * 360, 0),
            lightness,
            chroma,
            hue,
            alpha,
        };
    }

    export function toRGB(color: LCH): RGB {
        return lab.toRGB(toLAB(color));
    }

    export function toHSL(color: LCH): HSL {
        return rgb.toHSL(lab.toRGB(toLAB(color)));
    }

    export function toHSV(color: LCH): HSV {
        return rgb.toHSV(lab.toRGB(toLAB(color)));
    }

    export function toHWB(color: LCH): HWB {
        return rgb.toHWB(lab.toRGB(toLAB(color)));
    }

    export function toHSI(color: LCH): HSI {
        return rgb.toHSI(toRGB(color));
    }

    export function toHCG(color: LCH): HCG {
        return rgb.toHCG(lab.toRGB(toLAB(color)));
    }

    export function toCMY(color: LCH): CMY {
        return rgb.toCMY(toRGB(color));
    }

    export function toCMYK(color: LCH): CMYK {
        return rgb.toCMYK(lab.toRGB(toLAB(color)));
    }

    export function toXYZ(color: LCH): XYZ {
        return lab.toXYZ(toLAB(color));
    }

    export function toLAB(color: LCH): LAB {
        const { lightness, chroma, hue, alpha } = internal(color);

        const hr         = hue * (2 * Math.PI);
        const redGreen   = chroma * Math.cos(hr);
        const blueYellow = chroma * Math.sin(hr);

        return lab.external({ lightness, redGreen, blueYellow, alpha });
    }

    export function toLCH(color: LCH): LCH {
        return external(internal(color));
    }

    export function parse(input: string): LCH | undefined {
        const rgb   = re`^lch${op}${percent}${sep}${number}${sep}${angle}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        // eslint-disable-next-line no-cond-assign
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    l:      getPercent(match[1], 100),
                    c:      getNumber(match[2]),
                    h:      getAngle(match[3]),
                    alpha:  getPercent(match[4], 1),
                };
            }

            return {
                l:      getPercent(match[1], 100),
                c:      getNumber(match[2]),
                h:      getAngle(match[3]),
            };
            //#endregion
        }

        return undefined;
    }

    // export function deltaCMC(color1: LCH, color2: LCH, l = 2, c = 1): number {
    //     const F  = Math.sqrt(color1.c ** 4 / (color1.c ** 4 + 1900));
    //     const T  = color1.h >= 164 && color1.h <= 345
    //         ?   0.56 + Math.abs(0.2 * Math.cos(toRadians(color1.h + 168)))
    //         :   0.36 + Math.abs(0.4 * Math.cos(toRadians(color1.h + 35)));
    //     const Sl = color1.l < 16 ? 0.511 : (0.040975 * color1.l) / (1 + 0.01765 * color1.l);
    //     const Sc = ((0.0638 * color1.c) / (1 + 0.0131 * color1.c)) + 0.638;
    //     const Sh = Sc * (F * T + 1 - F);

    //     return Math.sqrt(
    //         ((color2.l - color1.l) / (l * Sl)) ** 2 +
    //         ((color2.c - color2.c) / (c * Sc)) ** 2 +
    //         ((deltaH / Sh)) ** 2
    //     );

    // }
}
//#endregion

export default lch;
