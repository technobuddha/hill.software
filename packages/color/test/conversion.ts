import expect                 from '../util/expect';
import color, { colorSpaces } from '../src/color';
import fs                     from 'fs';

import type { Color, RGB, HSL, HSV, HWB, HCG, CMYK, XYZ, LAB, LCH } from '../src/color';

type Test = {
    name:       string;
    rgb:        RGB;
    hsl:        HSL;
    hsv:        HSV;
    hwb:        HWB;
    hcg:        HCG;
    cmyk:       CMYK;
    xyz:        XYZ;
    lab:        LAB;
    lch:        LCH;
    toString:   () => string;
};

const colorTests: Test[] = JSON.parse(fs.readFileSync('./test/conversion.json', 'utf-8'))
.map((test: Test) => { test.toString = () => `${test.name} r:${test.rgb.r} g: ${test.rgb.g} b: ${test.rgb.b}`; return test; });

describe(
    'color',
    () => {
        describe.each(Object.keys(colorSpaces))(
            '%s',
            srcColorSpace => {
                describe.each(Object.keys(colorSpaces))(
                    '%s',
                    dstColorSpace => {
                        test.each(colorTests)(
                            '%s',
                            colorTest => {
                                const srcColor = colorTest[srcColorSpace.toLowerCase() as keyof Test] as Color;
                                const dstColor = colorTest[dstColorSpace.toLowerCase() as keyof Test] as Color;
                                const newColor = color.to(srcColor, dstColorSpace as keyof typeof colorSpaces);
                                expect(newColor).toMatchCloseTo(dstColor, 1);
                            }
                        );
                    }
                );
            }
        );
    }
);
