import { round, re, number, sep, alpha, op, cp, getNumber, getPercent } from './util';
import rgb  from './rgb';
import lab  from './lab';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region XYZ
export namespace xyz {
    export function isXYZ(color: Color): color is XYZ {
        return ('x' in color || 'X' in color) &&
               ('y' in color || 'Y' in color) &&
               ('z' in color || 'Z' in color);
    }

    type iXYZ = { X: number; Y: number; Z: number; alpha?: number };

    export function internal(color: XYZ): iXYZ {
        return {
            X: color.X ?? color.x,
            Y: color.Y ?? color.y,
            Z: color.z ?? color.z,
            alpha: color.alpha,
        };
    }

    export function external({ X, Y, Z, alpha }: iXYZ): XYZ {
        return {
            x:  round(X, 5),
            y:  round(Y, 5),
            z:  round(Z, 5),
            X,
            Y,
            Z,
            alpha,
        };
    }

    export function toRGB(color: XYZ): RGB {
        let { X, Y, Z, alpha } = internal(color);
        let red   = (X *  3.2404542) + (Y * -1.5371385)  + (Z * -0.4985314);
        let green = (X * -0.9692660) + (Y *  1.8760108)  + (Z *  0.041556);
        let blue  = (X *  0.0556434) + (Y * -0.2040259)  + (Z *  1.0572252);

        // Assume sRGB
        red   = red > 0.0031308
            ? ((1.055 * (red   ** (1.0 / 2.4))) - 0.055)
            : red * 12.92;

        green = green > 0.0031308
            ? ((1.055 * (green ** (1.0 / 2.4))) - 0.055)
            : green * 12.92;

        blue  = blue > 0.0031308
            ? ((1.055 * (blue  ** (1.0 / 2.4))) - 0.055)
            : blue * 12.92;

        red   = Math.min(Math.max(0, red),   1);
        green = Math.min(Math.max(0, green), 1);
        blue  = Math.min(Math.max(0, blue),  1);

        return rgb.external({ red, green, blue, alpha });
    }

    export function toHSL(color: XYZ): HSL {
        return rgb.toHSL(toRGB(color));
    }

    export function toHSV(color: XYZ): HSV {
        return rgb.toHSV(toRGB(color));
    }

    export function toHSI(color: XYZ): HSI {
        return rgb.toHSI(toRGB(color));
    }

    export function toHWB(color: XYZ): HWB {
        return rgb.toHWB(toRGB(color));
    }

    export function toHCG(color: XYZ): HCG {
        return rgb.toHCG(toRGB(color));
    }

    export function toCMY(color: XYZ): CMY {
        return rgb.toCMY(toRGB(color));
    }

    export function toCMYK(color: XYZ): CMYK {
        return rgb.toCMYK(toRGB(color));
    }

    export function toXYZ(color: XYZ): XYZ {
        return external(internal(color));
    }

    export function toLAB(color: XYZ): LAB {
        let { X, Y, Z, alpha } = internal(color);
        X /= 0.95047;
        Y /= 1.00000;
        Z /= 1.08883;

        X = X > (216 / 24389) ? (X ** (1 / 3)) : ((24389 / 27) * X + 16) / 116;
        Y = Y > (216 / 24389) ? (Y ** (1 / 3)) : ((24389 / 27) * Y + 16) / 116;
        Z = Z > (216 / 24389) ? (Z ** (1 / 3)) : ((24389 / 27) * Z + 16) / 116;

        const lightness  = (1.16 * Y) - 0.16;
        const redGreen   = 5.0 * (X - Y);
        const blueYellow = 2.0 * (Y - Z);

        return lab.external({ lightness, redGreen, blueYellow, alpha });
    }

    export function toLCH(color: XYZ): LCH {
        return lab.toLCH(toLAB(color));
    }

    export function parse(input: string): XYZ | undefined {
        const rgb   = re`^xyz${op}${number}${sep}${number}${sep}${number}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        // eslint-disable-next-line no-cond-assign
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    x:      getNumber(match[1]),
                    y:      getNumber(match[2]),
                    z:      getNumber(match[3]),
                    alpha:  getPercent(match[4], 1),
                };
            }

            return {
                x:      getNumber(match[1]),
                y:      getNumber(match[2]),
                z:      getNumber(match[3]),
            };
            //#endregion
        }

        return undefined;
    }
}
//#endregion

export default xyz;
