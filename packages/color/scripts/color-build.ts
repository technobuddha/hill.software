import color from '../src/color';
import colorNames from '../src/color-names';
import fs    from 'fs';

import type { Color, ColorSpecification, RGB, colorSpaces, AmountRatio } from '../src/color';

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

type Levels = '+25%' | '+50%' | '+75%' | '-25%' | '-50%' | '-75%' | '+25' | '+50' | '+75' | '-25' | '-50' | '-75' ;
function attribute(attr: string, fn: ((rgb: ColorSpecification, amount: AmountRatio) => Color)) {
    const value: ({ name: string; rgb: RGB } & {[key in Levels]: Color })[] = [];
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
            '+25':  fn(rgb, { amount: +0.25 }),
            '+50':  fn(rgb, { amount: +0.50 }),
            '+75':  fn(rgb, { amount: +0.75 }),
            '-25':  fn(rgb, { amount: -0.25 }),
            '-50':  fn(rgb, { amount: -0.50 }),
            '-75':  fn(rgb, { amount: -0.75 }),
        });
    });
    fs.writeFileSync(`./test/data/${attr}.json`, JSON.stringify(value, null, 2));
}
Object.entries(color.attributes)
.forEach(([ attr, fn ]) => { attribute(attr, fn); });

fs.writeFileSync(
    './test/data/hue.json',
    JSON.stringify(
        colorNames.map(cn => ({
            name: cn.name,
            color: cn.color,
            default: color.hue(cn.color),
            '+90': color.hue(cn.color, +90),
            '+180': color.hue(cn.color, +180),
            '-90': color.hue(cn.color, -90),
        })),
        null,
        2
    )
);

fs.writeFileSync(
    './test/data/luminosity.json',
    JSON.stringify(
        colorNames.map(cn => ({ name: cn.name, color: cn.color, luminosity: color.luminosity(cn.color) })),
        null,
        2
    )
);

fs.writeFileSync(
    './test/data/contrast.json',
    JSON.stringify(
        colorNames.flatMap(
            cn1 => colorNames.filter(cn2 => cn1.name !== cn2.name).map(
                cn2 => ({
                    name: `${cn1.name} & ${cn2.name}`,
                    color1: cn1.color,
                    color2: cn2.color,
                    contrast: color.contrast(cn1.color, cn2.color),
                })
            )
        ),
        null,
        2
    )
);

fs.writeFileSync(
    './test/data/dark-light.json',
    JSON.stringify(
        colorNames.map(cn => ({
            name: cn.name,
            color: cn.color,
            isLight: color.isLight(cn.color),
            isDark: color.isDark(cn.color),
        })),
        null,
        2
    )
);

fs.writeFileSync(
    './test/data/grayscale.json',
    JSON.stringify(
        colorNames.map(cn => ({
            name: cn.name,
            color: cn.color,
            grayscale: color.grayscale(cn.color),
        })),
        null,
        2
    )
);

fs.writeFileSync(
    './test/data/scheme.json',
    JSON.stringify(
        colorNames.map(cn => ({
            name: cn.name,
            color: cn.color,
            scheme: color.scheme(cn.color),
        })),
        null,
        2
    )
);
