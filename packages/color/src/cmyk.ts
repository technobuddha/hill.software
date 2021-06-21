import { round, re, percent, sep, alpha, op, cp, getPercent } from './util';
import rgb from './rgb';
import cmy from './cmy';
import lab  from './lab';

import type { Color, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

//#region CMYK
export namespace cmyk {
    export function isCMYK(color: Color): color is CMYK {
        return ('c' in color || 'cyan'    in color) &&
               ('m' in color || 'magenta' in color) &&
               ('y' in color || 'yellow'  in color) &&
               ('k' in color || 'black'   in color);
    }

    type iCMYK = { cyan: number; magenta: number; yellow: number; black: number; alpha?: number };

    export function internal(color: CMYK): iCMYK {
        return {
            cyan:    color.cyan    ?? color.c / 100,
            magenta: color.magenta ?? color.m / 100,
            yellow:  color.yellow  ?? color.y / 100,
            black:  color.black    ?? color.k / 100,
            alpha:  color.alpha,
        };
    }

    export function external({ cyan, magenta, yellow, black, alpha }: iCMYK): CMYK {
        return {
            c: round(cyan    * 100, 0),
            m: round(magenta * 100, 0),
            y: round(yellow  * 100, 0),
            k: round(black   * 100, 0),
            cyan,
            magenta,
            yellow,
            black,
            alpha,
        };
    }

    export function toRGB(color: CMYK): RGB {
        const { cyan, magenta, yellow, black, alpha } = internal(color);

        const red   = 1 - Math.min(1, cyan    * (1 - black) + black);
        const green = 1 - Math.min(1, magenta * (1 - black) + black);
        const blue  = 1 - Math.min(1, yellow  * (1 - black) + black);

        return rgb.external({ red, green, blue, alpha });
    }

    export function toHSL(color: CMYK): HSL {
        return rgb.toHSL(toRGB(color));
    }

    export function toHSV(color: CMYK): HSV {
        return rgb.toHSV(toRGB(color));
    }

    export function toHSI(color: CMYK): HSI {
        return rgb.toHSI(toRGB(color));
    }

    export function toHWB(color: CMYK): HWB {
        return rgb.toHWB(toRGB(color));
    }

    export function toHCG(color: CMYK): HCG {
        return rgb.toHCG(toRGB(color));
    }

    export function toCMY(color: CMYK): CMY {
        let { cyan, magenta, yellow, black, alpha } = internal(color);

        cyan    = cyan    * (1 - black) + black;
        magenta = magenta * (1 - black) + black;
        yellow  = yellow  * (1 - black) + black;

        return cmy.external({ cyan, magenta, yellow, alpha });
    }

    export function toCMYK(color: CMYK): CMYK {
        return external(internal(color));
    }

    export function toXYZ(color: CMYK): XYZ {
        return rgb.toXYZ(toRGB(color));
    }

    export function toLAB(color: CMYK): LAB {
        return rgb.toLAB(toRGB(color));
    }

    export function toLCH(color: CMYK): LCH {
        return lab.toLCH(toLAB(color));
    }
    export function parse(input: string): CMYK | undefined {
        const rgb   = re`^cmyk${op}${percent}${sep}${percent}${sep}${percent}${sep}${percent}${alpha}${cp}$`;

        let match: RegExpMatchArray | null;
        // eslint-disable-next-line no-cond-assign
        if(match = rgb.exec(input)) {
            //#region RGB
            if(match[4]) {
                return {
                    c:      getPercent(match[1], 100),
                    m:      getPercent(match[2], 100),
                    y:      getPercent(match[3], 100),
                    k:      getPercent(match[4], 100),
                    alpha:  getPercent(match[5], 1),
                };
            }

            return {
                c:      getPercent(match[1], 100),
                m:      getPercent(match[2], 100),
                y:      getPercent(match[3], 100),
                k:      getPercent(match[4], 100),
            };
            //#endregion
        }

        return undefined;
    }
}
//#endregion

export default cmyk;
