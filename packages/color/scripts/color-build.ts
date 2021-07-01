import color from '../src/color';
import colorNames from '../src/color-names';
import fs    from 'fs';

import type { Color, RGB, colorSpaces } from '../src/color';

type ColorSpace = keyof typeof colorSpaces;
const conversion: ({ name: string } & {[key in Lowercase<ColorSpace>]: Color; })[] = colorNames.map(cn => ({
    name:   cn.name,
    rgb:    color.toRGB(cn.color),
    hsl:    color.toHSL(cn.color),
    hsv:    color.toHSV(cn.color),
    hsi:    color.toHSI(cn.color),
    hwb:    color.toHWB(cn.color),
    hcg:    color.toHCG(cn.color),
    cmy:    color.toCMY(cn.color),
    cmyk:   color.toCMYK(cn.color),
    xyz:    color.toXYZ(cn.color),
    lab:    color.toLAB(cn.color),
    lch:    color.toLCH(cn.color),
}));
fs.writeFileSync('./test/data/conversion.json', JSON.stringify(conversion, null, 2));

type Levels = '+25%' | '+50%' | '+75%' | '-25%' | '-50%' | '-75%';

function attribute(attr: string, fn: ((rgb: RGB, amount: number) => RGB)) {
    const value: ({ name: string; rgb: RGB } & {[key in Levels]: RGB })[] = [];
    colorNames.forEach(cn => {
        const rgb = color.toRGB(cn.color);

        value.push({
            name:   cn.name,
            rgb:    rgb,
            '+25%': fn(rgb, +0.25),
            '+50%': fn(rgb, +0.50),
            '+75%': fn(rgb, +0.75),
            '-25%': fn(rgb, -0.25),
            '-50%': fn(rgb, -0.50),
            '-75%': fn(rgb, -0.75),
        });
    });
    fs.writeFileSync(`./test/data/${attr}.json`, JSON.stringify(value, null, 2));
}

Object.entries(color.attributes)
.forEach(([ attr, fn ]) => { attribute(attr, fn); });
