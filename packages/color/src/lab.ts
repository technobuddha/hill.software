import { round, hypot, toDegrees, toRadians, approxEq, re, number, percent, sep, alpha, op, cp, getNumber, getPercent } from './util';

import rgb  from './rgb';
import xyz  from './xyz';
import lch  from './lch';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region LAB
export namespace lab {
    export function isLAB(color: Color): color is LAB {
        return ('l' in color || 'lightness'  in color) &&
               ('a' in color || 'redGreen'   in color) &&
               ('b' in color || 'blueYellow' in color);
    }

    type iLAB = { lightness: number; redGreen: number; blueYellow: number; alpha?: number };

    export function internal(color: LAB): iLAB {
        return {
            lightness:  color.lightness  ?? color.l / 100,
            redGreen:   color.redGreen   ?? color.a / 100,
            blueYellow: color.blueYellow ?? color.b / 100,
            alpha:      color.alpha,
        };
    }

    export function external({ lightness, redGreen, blueYellow, alpha }: iLAB): LAB {
        return {
            l: round(lightness   * 100, 2),
            a: round(redGreen    * 100, 2),
            b: round(blueYellow  * 100, 2),
            lightness,
            redGreen,
            blueYellow,
            alpha,
        };
    }

    export function toRGB(color: LAB): RGB {
        return xyz.toRGB(toXYZ(color));
    }

    export function toHSL(color: LAB): HSL {
        return rgb.toHSL(xyz.toRGB(toXYZ(color)));
    }

    export function toHSV(color: LAB): HSV {
        return rgb.toHSV(xyz.toRGB(toXYZ(color)));
    }

    export function toHSI(color: LAB): HSI {
        return rgb.toHSI(toRGB(color));
    }

    export function toHWB(color: LAB): HWB {
        return rgb.toHWB(xyz.toRGB(toXYZ(color)));
    }

    export function toHCG(color: LAB): HCG {
        return rgb.toHCG(toRGB(color));
    }

    export function toCMY(color: LAB): CMY {
        return rgb.toCMY(toRGB(color));
    }

    export function toCMYK(color: LAB): CMYK {
        return rgb.toCMYK(xyz.toRGB(toXYZ(color)));
    }

    export function toXYZ(color: LAB): XYZ {
        const { lightness, redGreen, blueYellow, alpha } = internal(color);

        let Y = (lightness * 100 + 16) / 116;
        let X = redGreen / 5 + Y;
        let Z = Y - blueYellow / 2;

        const Y2 = Y ** 3;
        const X2 = X ** 3;
        const Z2 = Z ** 3;

        Y = Y2 > 0.008856 ? Y2 : (Y - 16 / 116) / 7.787;
        X = X2 > 0.008856 ? X2 : (X - 16 / 116) / 7.787;
        Z = Z2 > 0.008856 ? Z2 : (Z - 16 / 116) / 7.787;

        X *= 0.95047;
        Y *= 1.00000;
        Z *= 1.08883;

        return xyz.external({ X, Y, Z, alpha });
    }

    export function toLAB(color: LAB): LAB {
        return external(internal(color));
    }

    export function toLCH(color: LAB): LCH {
        let { lightness, redGreen, blueYellow, alpha } = internal(color);

        let hue = approxEq(redGreen, 0) && approxEq(blueYellow, 0)
            ?   0
            :   Math.atan2(blueYellow, redGreen);
        if(hue > 0)
            hue = hue / (Math.PI * 2);
        else
            hue = 1 - Math.abs(hue / (Math.PI * 2));
        if(hue >= 1) hue -= 1;

        let chroma    = Math.sqrt(redGreen ** 2 + blueYellow ** 2);

        return lch.external({ lightness, chroma, hue, alpha });
    }

    export function parse(input: string): LAB | undefined {
        const rgb   = re`^lab${op}${percent}${sep}${number}${sep}${number}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        // eslint-disable-next-line no-cond-assign
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    l:      getPercent(match[1], 100),
                    a:      getNumber(match[2]),
                    b:      getNumber(match[3]),
                    alpha:  getPercent(match[4], 1),
                };
            }

            return {
                l:      getPercent(match[1], 100),
                a:      getNumber(match[2]),
                b:      getNumber(match[3]),
            };
            //#endregion
        }

        return undefined;
    }

    function getH(x: number, y: number): number {
        if(x === 0 && y === 0)
            return 0;

        const hue = toDegrees(Math.atan2(x, y));
        if(hue >= 0)
            return hue;
        return hue + 360;
    }

    export function deltaE1976(color1: LAB, color2: LAB): number {
        const { lightness: lightness1, redGreen: redGreen1, blueYellow: blueYellow1 } = internal(color1);
        const { lightness: lightness2, redGreen: redGreen2, blueYellow: blueYellow2 } = internal(color2);
        return hypot(lightness1 * 100 - lightness2 * 100, redGreen1 * 100 - redGreen2 * 100, blueYellow1 * 100 - blueYellow2 * 100);
    }

    export function deltaE1994(color1: LAB, color2: LAB): number {
        let { lightness: l1, redGreen: a1, blueYellow: b1 } = internal(color1);
        let { lightness: l2, redGreen: a2, blueYellow: b2 } = internal(color2);

        // We use the internal values because they are more precise, but the formula is based on external
        l1 *= 100;
        a1 *= 100;
        b1 *= 100;
        l2 *= 100;
        a2 *= 100;
        b2 *= 100;

        const Kl = 1.0;         // Weighing factors
        const Kc = 1.0;
        const Kh = 1.0;

        const K1 = 0.045; //0.048
        const K2 = 0.015; //0.014

        let ΔL = l1 - l2;
        let C1 = hypot(a1, b1);
        let C2 = hypot(a2, b2);
        let ΔC = C1 - C2;
        let ΔE = deltaE1976(color1, color2);
        let ΔH = ΔE ** 2 - ΔL ** 2 - ΔC ** 2;
        if(ΔH > 0)
            ΔH = Math.sqrt(ΔH);
        else
            ΔH = 0;
        let Sl = 1.0;
        let Sc = 1 + (K1 * C1);
        let Sh = 1 + (K2 * C1);

        return Math.sqrt((ΔL / (Kl * Sl)) ** 2 + (ΔC / (Kc * Sc)) ** 2 + (ΔH / (Kh * Sh)) ** 2);
    }

    export function deltaE2000(color1: LAB, color2: LAB): number {
        let { lightness: l1, redGreen: a1, blueYellow: b1 } = internal(color1);
        let { lightness: l2, redGreen: a2, blueYellow: b2 } = internal(color2);

        // We use the internal values because they are more precise, but the formula is based on external
        l1 *= 100;
        a1 *= 100;
        b1 *= 100;
        l2 *= 100;
        a2 *= 100;
        b2 *= 100;

        const Kl    = 1.0;
        const Kc    = 1.0;
        const Kh    = 1.0;

        let ΔĹ = l2 - l1;
        let δL = (l1 + l2) / 2;

        let C1 = hypot(a1, b1);
        let C2 = hypot(a2, b2);
        let δC = (C1 + C2) / 2;

        let Á1 = a1 + (a1 / 2) * (1 - Math.sqrt((δC ** 7) / ((δC ** 7) + (25 ** 7))));
        let Á2 = a2 + (a2 / 2) * (1 - Math.sqrt((δC ** 7) / ((δC ** 7) + (25 ** 7))));
        let Ć1 = hypot(Á1, b1);
        let Ć2 = hypot(Á2, b2);
        let δĆ = (Ć1 + Ć2) / 2;
        let ΔĆ = Ć2 - Ć1;

        let H1 = getH(b1, Á1);
        let H2 = getH(b2, Á2);
        let ΔH: number;
        let δH: number;

        if(C1 === 0 || C2 === 0)
            ΔH = 0;
        else if(Math.abs(H1 - H2) <= 180)
            ΔH = H2 - H1;
        else if(H2 <= H1)
            ΔH = H2 - H1 + 360;
        else
            ΔH = H2 - H1 - 360;
        ΔH = 2 * Math.sqrt(Ć1 * Ć2) * Math.sin(toRadians(ΔH) / 2);

        if(Math.abs(H1 - H2) > 180)
            δH = (H1 + H2 + 360) / 2;
        else
            δH = (H1 + H2) / 2;

        let T  = 1 -
            0.17 * Math.cos(toRadians(1 * δH - 30)) +
            0.24 * Math.cos(toRadians(2 * δH))      +
            0.32 * Math.cos(toRadians(3 * δH + 6))  -
            0.20 * Math.cos(toRadians(4 * δH - 63));

        let Sl = 1 + ((0.015 * (δL - 50) ** 2) / Math.sqrt(20 + (δL - 50) ** 2));
        let Sc = 1 + 0.045 * δĆ;
        let Sh = 1 + 0.015 * δĆ * T;

        let Rt = -2 *
            Math.sqrt((δĆ ** 7) / ((δĆ ** 7) + (25 ** 7))) *
            Math.sin(toRadians(60 * Math.exp(-(((δH - 275) / 25) ** 2))));

        let lightness = ΔĹ / (Kl * Sl);
        let chroma    = ΔĆ / (Kc * Sc);
        let hue       = ΔH / (Kh * Sh);

        return Math.sqrt(lightness ** 2 + chroma ** 2 + hue ** 2 + Rt * chroma * hue);
    }
}
//#endregion

export default lab;
