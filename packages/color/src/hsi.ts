/* eslint-disable no-cond-assign */
import { approxEq, round, re, angle, percent, sep, alpha, op, cp, getPercent, getAngle } from './util';
import rgb from './rgb';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region HSI
export namespace hsi {
    export function isHSI(color: Color): color is HSI {
        return ('h' in color || 'hue'        in color) &&
               ('s' in color || 'saturation' in color) &&
               ('i' in color || 'intensity'  in color);
    }

    type iHSI = { hue: number; saturation: number; intensity: number; alpha?: number };

    export function internal(color: HSI): iHSI {
        return {
            hue:        color.hue        ?? color.h / 360,
            saturation: color.saturation ?? color.s / 100,
            intensity:  color.intensity  ?? color.i / 100,
            alpha:      color.alpha,
        };
    }

    export function external({ hue, saturation, intensity, alpha }: iHSI): HSI {
        return {
            h: round(hue        * 360, 0),
            s: round(saturation * 100, 0),
            i: round(intensity  * 100, 0),
            hue,
            saturation,
            intensity,
            alpha,
        };
    }

    export function toRGB(color: HSI): RGB {
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

    export function toHSL(color: HSI): HSL {
        return rgb.toHSL(toRGB(color));
    }

    export function toHSV(color: HSI): HSV {
        return rgb.toHSV(toRGB(color));
    }

    export function toHSI(color: HSI): HSI {
        return external(internal(color));
    }

    export function toHWB(color: HSI): HWB {
        return rgb.toHWB(toRGB(color));
    }

    export function toHCG(color: HSI): HCG {
        return rgb.toHCG(toRGB(color));
    }

    export function toCMY(color: HSI): CMY {
        return rgb.toCMY(toRGB(color));
    }

    export function toCMYK(color: HSI): CMYK {
        return rgb.toCMYK(toRGB(color));
    }

    export function toXYZ(color: HSI): XYZ {
        return rgb.toXYZ(toRGB(color));
    }

    export function toLAB(color: HSI): LAB {
        return rgb.toLAB(toRGB(color));
    }

    export function toLCH(color: HSI): LCH {
        return rgb.toLCH(toRGB(color));
    }

    export function parse(input: string): HSI | undefined {
        const rgb   = re`^hsi${op}${angle}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    h:      getAngle(match[1]),
                    s:      getPercent(match[2], 100),
                    i:      getPercent(match[3], 100),
                    alpha:  getPercent(match[4], 1),
                };
            }

            return {
                h:      getAngle(match[1]),
                s:      getPercent(match[2], 100),
                i:      getPercent(match[3], 100),
            };
            //#endregion
        }

        return undefined;
    }
}
//#endregion
export default hsi;
