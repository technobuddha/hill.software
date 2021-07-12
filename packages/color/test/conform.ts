import expect from '../util/expect';
import color from '../src/color';

import type { Color, ColorSpecification } from '../src/color';

const units: [ ColorSpecification, Color ][] = [
    [ 'rgb(0 0 0)',                 color.toRGB('white') ],
    [ '#000000',                    color.toRGB('white') ],
    [ 'black',                      color.toRGB('white') ],
    [{ r: 0, g: 0, b: 0 },          color.toRGB('white') ],

    [ 'hsl(0 0 0)',                 color.toHSL('white') ],
    [{ h: 0, s: 0, l: 0 },          color.toHSL('white') ],

    [ 'hsv(0 0 0)',                 color.toHSV('white') ],
    [{ h: 0, s: 0, v: 0 },          color.toHSV('white') ],

    [ 'hsi(0 0 0)',                 color.toHSI('white') ],
    [{ h: 0, s: 0, i: 0 },          color.toHSI('white') ],

    [ 'hwb(0 0 100)',               color.toHWB('white') ],
    [{ h: 0, w: 0, b: 100 },        color.toHWB('white') ],

    [ 'hcg(0 0 0)',                 color.toHCG('white') ],
    [{ h: 0, c: 0, g: 0 },          color.toHCG('white') ],

    [ 'cmy(100 100 100)',           color.toCMY('white') ],
    [{ c: 100, m: 100, y: 100 },    color.toCMY('white') ],

    [ 'cmyk(0 0 0 100)',            color.toCMYK('white') ],
    [{ c: 0, m: 0, y: 0, k: 100 },  color.toCMYK('white') ],

    [ 'xyz(0 0 0)',                 color.toXYZ('white') ],
    [{ x: 0, y: 0, z: 0 },          color.toXYZ('white') ],

    [ 'lab(0 0 0)',                 color.toLAB('white') ],
    [{ l: 0, a: 0, b: 0 },          color.toLAB('white') ],

    [ 'lch(0 0 0)',                 color.toLCH('white') ],
    [{ l: 0, c: 0, h: 0 },          color.toLCH('white') ],
];

describe(
    'color.conform',
    () => {
        test.each(units)(
            '%s',
            (src, dst) => {
                expect(color.negate(src)).toMatchObject(dst);
            }
        );
    }
);
