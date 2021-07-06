/* eslint-disable @typescript-eslint/quotes */
//import fs from 'fs-extra';
import expect from '../util/expect';
import color from '../src/color';

import type { Color } from '../src/color';

// const units: Record<string, { options?: StringFormat; tests: Record<string, [ Color, string ]> }> =
//     JSON.parse(fs.readFileSync('./test/data/string.json', 'utf-8'));

const units: [ Color, Color, keyof typeof color ][] = [
    [{ r: 1, g: 2, b: 3 },                      { r: 1, g: 2, b: 3 },   "toRGB" ],
    [{ red: 1, r: 1, g: 2, b: 3 },              { r: 255, g: 2, b: 3 }, "toRGB" ],
    [{ green: 1, r: 1, g: 2, b: 3 },            { r: 1, g: 255, b: 3 },  "toRGB" ],
    [{ blue: 1, r: 1, g: 2, b: 3 },            { r: 1, g: 2, b: 255 },  "toRGB" ],

    [{ h: 1, s: 2, l: 3 },                      { h: 1, s: 2, l: 3 },   "toHSL" ],
    [{ hue: 1, h: 1, s: 2, l: 3 },              { h: 360, s: 2, l: 3 }, "toHSL" ],
    [{ saturation: 1, h: 1, s: 2, l: 3 },            { h: 1, s: 100, l: 3 },  "toHSL" ],
    [{ lightness: 1, h: 1, s: 2, l: 3 },            { h: 1, s: 2, l: 100 },  "toHSL" ],
];

describe(
    'color.parse',
    () => {
        test.each(units)(
            '%s',
            (src, dst, fn) => {
                expect((color[fn] as (c: string | Color) => Color)(src)).toMatchObject(dst);
            }
        );
    }
);
