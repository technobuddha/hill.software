/* eslint-disable @typescript-eslint/quotes */
//import fs from 'fs-extra';
import expect from '../util/expect';
import color from '../src/color';

import type { PartialColor, Color, ColorSpecification } from '../src/color';

const units: [ PartialColor, PartialColor, keyof typeof color ][] = [
    [{ r: 1, g: 2, b: 3 },                                  { r: 1,    g: 2,  b: 3 },       "toRGB"  ],
    [{ red: 0.1, green: 0.2, blue: 0.3 },                   { r: 25.5, g: 51, b: 76.5 },    "toRGB"  ],

    [{ h: 1, s: 2, l: 3 },                                  { h: 1,  s: 2,  l: 3 },         "toHSL"  ],
    [{ hue: 0.1, saturation: 0.2, lightness: 0.3 },         { h: 36, s: 20, l: 30 },        "toHSL"  ],

    [{ h: 1, s: 2, v: 3 },                                  { h: 1,  s: 2,  v: 3 },         "toHSV"  ],
    [{ hue: 0.1, saturation: 0.2, value: 0.3 },             { h: 36, s: 20, v: 30 },        "toHSV"  ],

    [{ h: 1, s: 2, i: 3 },                                  { h: 1,  s: 2,  i: 3 },         "toHSI"  ],
    [{ hue: 0.1, saturation: 0.2, intensity: 0.3 },         { h: 36, s: 20, i: 30 },        "toHSI"  ],

    [{ h: 1, w: 2, b: 3 },                                  { h: 1,  w: 2,  b: 3 },         "toHWB"  ],
    [{ hue: 0.1, whiteness: 0.2, blackness: 0.3 },          { h: 36, w: 20, b: 30 },        "toHWB"  ],

    [{ h: 1, c: 2, g: 3 },                                  { h: 1,  c: 2,  g: 3 },         "toHCG"  ],
    [{ hue: 0.1, chroma: 0.2, greyness: 0.3 },              { h: 36, c: 20, g: 30 },        "toHCG"  ],

    [{ c: 1, m: 2, y: 3 },                                  { c: 1,  m: 2,  y: 3 },         "toCMY"  ],
    [{ cyan: 0.1, magenta: 0.2, yellow: 0.3 },              { c: 10, m: 20, y: 30 },        "toCMY"  ],

    [{ c: 1, m: 2, y: 3, k: 4 },                            { c: 1,  m: 2,  y: 3,  k: 4 },  "toCMYK" ],
    [{ cyan: 0.1, magenta: 0.2, yellow: 0.3, black: 0.4 },  { c: 10, m: 20, y: 30, k: 40 }, "toCMYK" ],

    [{ x: 1, y: 2, z: 3 },                                  { x: 1,  y: 2,  z: 3 },         "toXYZ"  ],
    [{ X: 0.1, Y: 0.2, Z: 0.3 },                            { x: 10, y: 20, z: 30 },        "toXYZ"  ],

    [{ l: 1, a: 2, b: 3 },                                  { l: 1,  a: 2,  b: 3 },         "toLAB"  ],
    [{ lightness: 0.1, redGreen: 0.2, blueYellow: 0.3 },    { l: 10, a: 20, b: 30 },        "toLAB"  ],

    [{ l: 1, c: 2, h: 3 },                                  { l: 1,  c: 2,  h: 3 },         "toLCH"  ],
    [{ lightness: 0.1, chroma: 0.2, hue: 0.3 },             { l: 10, c: 20, h: 108 },       "toLCH"  ],
];

describe(
    'color.parse',
    () => {
        test.each(units)(
            '%s',
            (src, dst, fn) => {
                expect((color[fn] as (c: ColorSpecification) => Color)(src)).toMatchObject(dst);
            }
        );
    }
);
