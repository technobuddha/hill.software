import rgb  from './rgb';
import hsl  from './hsl';
import hsv  from './hsv';
import hsi  from './hsi';
import hwb  from './hwb';
import hcg  from './hcg';
import cmy  from './cmy';
import cmyk from './cmyk';
import xyz  from './xyz';
import lab  from './lab';
import lch  from './lch';
import colorCompare from './color-compare';

export type ColorBase = { alpha?: number };

export type RGB  = ColorBase & { r: number; g: number; b: number; red?: number; green?: number; blue?: number };
export type HSL  = ColorBase & { h: number; s: number; l: number; hue?: number; saturation?: number; lightness?: number };
export type HSV  = ColorBase & { h: number; s: number; v: number; hue?: number; saturation?: number; value?: number };
export type HSI  = ColorBase & { h: number; s: number; i: number; hue?: number; saturation?: number; intensity?: number };
export type HWB  = ColorBase & { h: number; w: number; b: number; hue?: number; whiteness?: number; blackness?: number };
export type HCG  = ColorBase & { h: number; c: number; g: number; hue?: number; chroma?: number; greyness?: number };
export type CMY  = ColorBase & { c: number; m: number; y: number; cyan?: number; magenta?: number; yellow?: number };
export type CMYK = ColorBase & { c: number; m: number; y: number; k: number; cyan?: number; magenta?: number; yellow?: number; black?: number };
export type XYZ  = ColorBase & { x: number; y: number; z: number; X?: number; Y?: number; Z?: number };
export type LAB  = ColorBase & { l: number; a: number; b: number; lightness?: number; redGreen?: number; blueYellow?: number };             // L: 0 to 100,    A: -128 to 128, B: -128 to 128
export type LCH  = ColorBase & { l: number; c: number; h: number; lightness?: number; chroma?: number; hue?: number };

export type Color       = RGB | HSL | HSV | HSI | HWB | HCG | CMY | CMYK | XYZ | LAB | LCH;
type DispatchCall<S, T> = (color: S, ...args: any[]) => T;
type AmountRatio        = { ratio: number } | { amount: number } | number;
const ColorSpaceError   = new TypeError('Unidentifiable color space.');

export const colorSpaces = {
    'RGB':  rgb,
    'HSL':  hsl,
    'HSV':  hsv,
    'HSI':  hsi,
    'HWB':  hwb,
    'HCG':  hcg,
    'CMYK': cmyk,
    'CMY':  cmy,
    'XYZ':  xyz,
    'LAB':  lab,
    'LCH':  lch,
};

function adjust(parameter: number, ar: AmountRatio): number {
    return Math.min(
        Math.max(
            (typeof ar === 'number')
                ?   ar > 0 ? parameter + (1 - parameter) * ar : parameter + parameter * ar
                :   ('amount' in ar)
                        ? parameter + ar.amount
                        : ar.ratio > 0 ? parameter + (1 - parameter) * ar.ratio : parameter + parameter * ar.ratio,
            0,
        ),
        1
    );
}

function dispatch<T>(
    {
        rgb:  rgbFn,
        hsl:  hslFn,
        hsv:  hsvFn,
        hsi:  hsiFn,
        hwb:  hwbFn,
        hcg:  hcgFn,
        cmy:  cmyFn,
        cmyk: cmykFn,
        xyz:  xyzFn,
        lab:  labFn,
        lch:  lchFn,
    }: {
        rgb:    DispatchCall<RGB,  T>;
        hsl:    DispatchCall<HSL,  T>;
        hsv:    DispatchCall<HSV,  T>;
        hsi:    DispatchCall<HSI,  T>;
        hwb:    DispatchCall<HWB,  T>;
        hcg:    DispatchCall<HCG,  T>;
        cmy:    DispatchCall<CMY,  T>;
        cmyk:   DispatchCall<CMYK, T>;
        xyz:    DispatchCall<XYZ,  T>;
        lab:    DispatchCall<LAB,  T>;
        lch:    DispatchCall<LCH,  T>;
    },
    input: Color | string,
    ...args: any[]
): T {
    const color = (typeof input === 'string') ? parse(input) : input;

    if(rgb.is(color))   return rgbFn(color, ...args);
    if(hsl.is(color))   return hslFn(color, ...args);
    if(hsv.is(color))   return hsvFn(color, ...args);
    if(hsi.is(color))   return hsiFn(color, ...args);
    if(hwb.is(color))   return hwbFn(color, ...args);
    if(hcg.is(color))   return hcgFn(color, ...args);
    if(cmyk.is(color))  return cmykFn(color, ...args);
    if(cmy.is(color))   return cmyFn(color, ...args);
    if(xyz.is(color))   return xyzFn(color, ...args);
    if(lab.is(color))   return labFn(color, ...args);
    if(lch.is(color))   return lchFn(color, ...args);

    throw ColorSpaceError;
}

export function parse(input: string): Color {
    const color = rgb.parse(input) ??
        hsl.parse(input)  ??
        hsv.parse(input)  ??
        hsi.parse(input)  ??
        hwb.parse(input)  ??
        hcg.parse(input)  ??
        cmy.parse(input)  ??
        cmyk.parse(input) ??
        xyz.parse(input)  ??
        lab.parse(input)  ??
        lch.parse(input);

    if(color)
        return color;

    throw new TypeError('Color string can not be parsed');
}

export type ColorFormat = 'name' | 'hex' | 'css' | 'default';
export type StringOptions = {
    format: ColorFormat;
    cssVersion: 3 | 4;
    hexShorthand: boolean;
};
export type StringFormat = ColorFormat | Partial<StringOptions>;

export let defaultStringOptions: StringOptions = {
    format: 'default',
    cssVersion: 4,
    hexShorthand: true,
};

export function getStringOptions(so?: StringFormat): StringOptions {
    if(!so)
        return defaultStringOptions;

    if(typeof so === 'string')
        return { ...defaultStringOptions, format: so };

    return {
        format:         so.format       ?? defaultStringOptions.format,
        cssVersion:     so.cssVersion   ?? defaultStringOptions.cssVersion,
        hexShorthand:   so.hexShorthand ?? defaultStringOptions.hexShorthand,
    };
}

export function string(color: Color | string, format?: StringFormat): string {
    const so = getStringOptions(format);
    return dispatch(
        {
            rgb:    rgb.string,
            hsl:    hsl.string,
            hsv:    hsv.string,
            hsi:    hsi.string,
            hwb:    hwb.string,
            hcg:    hcg.string,
            cmy:    cmy.string,
            cmyk:   cmyk.string,
            xyz:    xyz.string,
            lab:    lab.string,
            lch:    lch.string,
        },
        color,
        so,
    );
}

export function to(color: Color, space: keyof typeof colorSpaces): Color {
    switch(space) {
        case 'RGB':  return toRGB(color);
        case 'HSL':  return toHSL(color);
        case 'HSV':  return toHSV(color);
        case 'HSI':  return toHSI(color);
        case 'HWB':  return toHWB(color);
        case 'HCG':  return toHCG(color);
        case 'CMY':  return toCMY(color);
        case 'CMYK': return toCMYK(color);
        case 'XYZ':  return toXYZ(color);
        case 'LAB':  return toLAB(color);
        case 'LCH':  return toLCH(color);
        default:
            throw ColorSpaceError;
    }
}

export function toRGB(color: Color | string): RGB {
    return dispatch(
        {
            rgb:    rgb.toRGB,
            hsl:    hsl.toRGB,
            hsv:    hsv.toRGB,
            hsi:    hsi.toRGB,
            hwb:    hwb.toRGB,
            hcg:    hcg.toRGB,
            cmy:    cmy.toRGB,
            cmyk:   cmyk.toRGB,
            xyz:    xyz.toRGB,
            lab:    lab.toRGB,
            lch:    lch.toRGB,
        },
        color
    );
}

export function toHSL(color: Color | string): HSL {
    return dispatch(
        {
            rgb:    rgb.toHSL,
            hsl:    hsl.toHSL,
            hsv:    hsv.toHSL,
            hsi:    hsi.toHSL,
            hwb:    hwb.toHSL,
            hcg:    hcg.toHSL,
            cmy:    cmy.toHSL,
            cmyk:   cmyk.toHSL,
            xyz:    xyz.toHSL,
            lab:    lab.toHSL,
            lch:    lch.toHSL,
        },
        color,
    );
}

export function toHSV(color: Color | string): HSV {
    return dispatch(
        {
            rgb:    rgb.toHSV,
            hsl:    hsl.toHSV,
            hsv:    hsv.toHSV,
            hsi:    hsi.toHSV,
            hwb:    hwb.toHSV,
            hcg:    hcg.toHSV,
            cmy:    cmy.toHSV,
            cmyk:   cmyk.toHSV,
            xyz:    xyz.toHSV,
            lab:    lab.toHSV,
            lch:    lch.toHSV,
        },
        color
    );
}

export function toHSI(color: Color | string): HSI {
    return dispatch(
        {
            rgb:    rgb.toHSI,
            hsl:    hsl.toHSI,
            hsv:    hsv.toHSI,
            hsi:    hsi.toHSI,
            hwb:    hwb.toHSI,
            hcg:    hcg.toHSI,
            cmy:    cmy.toHSI,
            cmyk:   cmyk.toHSI,
            xyz:    xyz.toHSI,
            lab:    lab.toHSI,
            lch:    lch.toHSI,
        },
        color
    );
}

export function toHWB(color: Color | string): HWB {
    return dispatch(
        {
            rgb:    rgb.toHWB,
            hsl:    hsl.toHWB,
            hsv:    hsv.toHWB,
            hsi:    hsi.toHWB,
            hwb:    hwb.toHWB,
            hcg:    hcg.toHWB,
            cmy:    cmy.toHWB,
            cmyk:   cmyk.toHWB,
            xyz:    xyz.toHWB,
            lab:    lab.toHWB,
            lch:    lch.toHWB,
        },
        color,
    );
}

export function toHCG(color: Color | string): HCG {
    return dispatch(
        {
            rgb:    rgb.toHCG,
            hsl:    hsl.toHCG,
            hsv:    hsv.toHCG,
            hsi:    hsi.toHCG,
            hwb:    hwb.toHCG,
            hcg:    hcg.toHCG,
            cmy:    cmy.toHCG,
            cmyk:   cmyk.toHCG,
            xyz:    xyz.toHCG,
            lab:    lab.toHCG,
            lch:    lch.toHCG,
        },
        color
    );
}

export function toCMY(color: Color | string): CMY {
    return dispatch(
        {
            rgb:    rgb.toCMY,
            hsl:    hsl.toCMY,
            hsv:    hsv.toCMY,
            hsi:    hsi.toCMY,
            hwb:    hwb.toCMY,
            hcg:    hcg.toCMY,
            cmy:    cmy.toCMY,
            cmyk:   cmyk.toCMY,
            xyz:    xyz.toCMY,
            lab:    lab.toCMY,
            lch:    lch.toCMY,
        },
        color,
    );
}

export function toCMYK(color: Color | string): CMYK {
    return dispatch(
        {
            rgb:    rgb.toCMYK,
            hsl:    hsl.toCMYK,
            hsv:    hsv.toCMYK,
            hsi:    hsi.toCMYK,
            hwb:    hwb.toCMYK,
            hcg:    hcg.toCMYK,
            cmy:    cmy.toCMYK,
            cmyk:   cmyk.toCMYK,
            xyz:    xyz.toCMYK,
            lab:    lab.toCMYK,
            lch:    lch.toCMYK,
        },
        color,
    );
}

export function toXYZ(color: Color | string): XYZ {
    return dispatch(
        {
            rgb:    rgb.toXYZ,
            hsl:    hsl.toXYZ,
            hsv:    hsv.toXYZ,
            hsi:    hsi.toXYZ,
            hwb:    hwb.toXYZ,
            hcg:    hcg.toXYZ,
            cmy:    cmy.toXYZ,
            cmyk:   cmyk.toXYZ,
            xyz:    xyz.toXYZ,
            lab:    lab.toXYZ,
            lch:    lch.toXYZ,
        },
        color
    );
}

export function toLAB(color: Color | string): LAB {
    return dispatch(
        {
            rgb:    rgb.toLAB,
            hsl:    hsl.toLAB,
            hsv:    hsv.toLAB,
            hsi:    hsi.toLAB,
            hwb:    hwb.toLAB,
            hcg:    hcg.toLAB,
            cmy:    cmy.toLAB,
            cmyk:   cmyk.toLAB,
            xyz:    xyz.toLAB,
            lab:    lab.toLAB,
            lch:    lch.toLAB,
        },
        color,
    );
}

export function toLCH(color: Color | string): LCH {
    return dispatch(
        {
            rgb:    rgb.toLCH,
            hsl:    hsl.toLCH,
            hsv:    hsv.toLCH,
            hsi:    hsi.toLCH,
            hwb:    hwb.toLCH,
            hcg:    hcg.toLCH,
            cmy:    cmy.toLCH,
            cmyk:   cmyk.toLCH,
            xyz:    xyz.toLCH,
            lab:    lab.toLCH,
            lch:    lch.toLCH,
        },
        color,
    );
}

function conform<T extends Color | string>(reference: T): (c: Color) => T {
    if(typeof reference === 'string') {
        const color = parse(reference);

        if(rgb.is(color))       return ((c: Color) => rgb.string(toRGB(c),   rgb.inputFormat(reference)))   as (c: Color) => T;
        else if(hsl.is(color))  return ((c: Color) => hsl.string(toHSL(c),   hsl.inputFormat(reference)))  as (c: Color) => T;
        else if(hsv.is(color))  return ((c: Color) => hsv.string(toHSV(c),   hsv.inputFormat(reference)))  as (c: Color) => T;
        else if(hsi.is(color))  return ((c: Color) => hsi.string(toHSI(c),   hsi.inputFormat(reference)))  as (c: Color) => T;
        else if(hwb.is(color))  return ((c: Color) => hwb.string(toHWB(c),   hwb.inputFormat(reference)))  as (c: Color) => T;
        else if(hcg.is(color))  return ((c: Color) => hcg.string(toHCG(c),   hcg.inputFormat(reference)))  as (c: Color) => T;
        else if(cmyk.is(color)) return ((c: Color) => cmyk.string(toCMYK(c), cmyk.inputFormat(reference))) as (c: Color) => T;
        else if(cmy.is(color))  return ((c: Color) => cmy.string(toCMY(c),   cmy.inputFormat(reference)))  as (c: Color) => T;
        else if(xyz.is(color))  return ((c: Color) => xyz.string(toXYZ(c),   xyz.inputFormat(reference)))  as (c: Color) => T;
        else if(lab.is(color))  return ((c: Color) => lab.string(toLAB(c),   lab.inputFormat(reference)))  as (c: Color) => T;
        else if(lch.is(color))  return ((c: Color) => lch.string(toLCH(c),   lch.inputFormat(reference)))  as (c: Color) => T;
        throw ColorSpaceError;
    }

    if(rgb.is(reference))       return toRGB  as (c: Color) => T;
    else if(hsl.is(reference))  return toHSL  as (c: Color) => T;
    else if(hsv.is(reference))  return toHSV  as (c: Color) => T;
    else if(hsi.is(reference))  return toHSI  as (c: Color) => T;
    else if(hwb.is(reference))  return toHWB  as (c: Color) => T;
    else if(hcg.is(reference))  return toHCG  as (c: Color) => T;
    else if(cmyk.is(reference)) return toCMYK as (c: Color) => T;
    else if(cmy.is(reference))  return toCMY  as (c: Color) => T;
    else if(xyz.is(reference))  return toXYZ  as (c: Color) => T;
    else if(lab.is(reference))  return toLAB  as (c: Color) => T;
    else if(lch.is(reference))  return toLCH  as (c: Color) => T;
    throw ColorSpaceError;
}

export function luminosity(color: Color): number {
    let { red, green, blue } = rgb.internal(toRGB(color));

    red   = (red   <= 0.3928) ? red   / 12.92 : ((red   + 0.055) / 1.055) ** 2.4;
    green = (green <= 0.3928) ? green / 12.92 : ((green + 0.055) / 1.055) ** 2.4;
    blue  = (blue  <= 0.3928) ? blue  / 12.92 : ((blue  + 0.055) / 1.055) ** 2.4;
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

export function contrast(color1: Color, color2: Color): number {
    const lum1 = luminosity(color1);
    const lum2 = luminosity(color2);

    if(lum1 > lum2)
        return (lum1 + 0.05) / (lum2 + 0.05);
    return (lum2 + 0.05) / (lum1 + 0.05);
}

export function isDark(color: Color | string): boolean {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    const { r, g, b } = toRGB(color);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 128;
}

export function isLight(color: Color | string): boolean {
    return !isDark(color);
}

export function negate<T extends Color>(color: T): T {
    const { r, g, b } = toRGB(color);
    return conform(color)({ r: 255 - r, g: 255 - g, b: 255 - b });
}

export function hue<T extends Color>(color: T, degrees = 10): T {
    let { hue, saturation, lightness, alpha } = hsl.internal(toHSL(color));
    hue += degrees / 360;
    while(hue >= 1) hue -= 1;
    while(hue <  0) hue += 1;
    return conform(color)(hsl.external({ hue, saturation, lightness, alpha }));
}

export function saturation<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, saturation, lightness, alpha } = hsl.internal(toHSL(color));
    saturation = adjust(saturation, amount);
    return conform(color)(hsl.external({ hue, saturation, lightness, alpha }));
}

export function lightness<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, saturation, lightness, alpha } = hsl.internal(toHSL(color));
    lightness = adjust(lightness, amount);
    return conform(color)(hsl.external({ hue, saturation, lightness, alpha }));
}

export function value<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, saturation, value, alpha } = hsv.internal(toHSV(color));
    value = adjust(value, amount);
    return conform(color)(hsv.external({ hue, saturation, value, alpha }));
}

export function whiteness<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, whiteness, blackness, alpha } = hwb.internal(toHWB(color));
    whiteness = adjust(whiteness, amount);
    return conform(color)(hwb.external({ hue, whiteness, blackness, alpha }));
}

export function blackness<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, whiteness, blackness, alpha } = hwb.internal(toHWB(color));
    blackness = adjust(blackness, amount);
    return conform(color)(hwb.external({ hue, whiteness, blackness, alpha }));
}

export function chroma<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, chroma, greyness, alpha } = hcg.internal(toHCG(color));
    chroma = adjust(chroma, amount);
    return conform(color)(hcg.external({ hue, chroma, greyness, alpha }));
}

export function greyness<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, chroma, greyness, alpha } = hcg.internal(toHCG(color));
    greyness = adjust(greyness, amount);
    return conform(color)(hcg.external({ hue, chroma, greyness, alpha }));
}

export function intensity<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    let { hue, saturation, intensity, alpha } = hsi.internal(toHSI(color));
    intensity = adjust(intensity, amount);
    return conform(color)(hsi.external({ hue, saturation, intensity, alpha }));
}

export function alpha<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    const alpha  = adjust(color.alpha ?? 1.0, amount);
    return { ...color, alpha };
}

export function blend<T extends Color | string>(color1: T, color2: Color | string, weight = 0.5): T {
    let { red: red1, green: green1, blue: blue1, alpha: alpha1 } = rgb.internal(toRGB(color1));
    let { red: red2, green: green2, blue: blue2, alpha: alpha2 } = rgb.internal(toRGB(color2));

    var w = 2 * weight - 1;
    var a = (alpha1 ?? 1.0) - (alpha2 ?? 1.0);

    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w0 = 1 - w1;

    return conform(color1)(rgb.external({
        red:    w0 * red1   + w1 * red2,
        green:  w0 * green1 + w1 * green2,
        blue:   w0 * blue1  + w1 * blue2,
        alpha:  alpha1 === undefined && alpha2 === undefined
            ? undefined
            : (alpha1 ?? 1.0) * weight + (alpha2 ?? 1.0) * (1 - weight),
    }));
}

export function gradient<T extends Color | string>(color1: T, color2: Color | string, steps = 100): T[] {
    const colors: T[] = [];
    const increment = (steps + 1) / (steps * 100);

    for(let i = 0; i < steps; ++i)
        colors.push(blend(color1, color2, i * increment));
    return colors;
}

const schemes = {
    complementary:          [ 0, 180 ],
    splitComplementary:     [ 0, 150, 320 ],
    splitComplementaryCW:   [ 0, 150, 300 ],
    splitComplementaryCCW:  [ 0,  60, 210 ],
    triadic:                [ 0, 120, 240 ],
    clash:                  [ 0,  90, 270 ],
    tetradic:               [ 0,  90, 180, 270 ],
    fourToneCW:             [ 0,  60, 180, 240 ],
    fourToneCCW:            [ 0, 120, 180, 300 ],
    fiveToneA:              [ 0, 115, 155, 205, 245 ],
    fiveToneB:              [ 0,  40,  90, 130, 245 ],
    fiveToneC:              [ 0,  50,  90, 205, 320 ],
    fiveToneD:              [ 0,  40, 155, 270, 310 ],
    fiveToneE:              [ 0, 115, 230, 270, 320 ],
    sixToneCW:              [ 0,  30, 120, 150, 240, 270 ],
    sixToneCCW:             [ 0,  90, 120, 210, 240, 330 ],
    neutral:                [ 0,  15,  30,  45,  60,  75 ],
    analogous:              [ 0,  30,  60,  90, 120, 150 ],
};

export function scheme<T extends Color>(color: T): Record<string, T[]> {
    return Object.fromEntries(
        Object.entries(schemes).map(
            ([ name, angles ]) => [ name, angles.map(angle => hue(color, angle)) ]
        )
    );
}

export function grayscale<T extends Color>(color: T): T {
    const { red, green, blue, alpha } = rgb.internal(toRGB(color));
    return conform(color)(rgb.external({ red: red * 0.3, green: green * 0.59, blue: blue * 0.11, alpha }));
}

export function colorDistance(color1: Color, color2: Color): number {
    return colorCompare.colorDistance(toRGB(color1), toRGB(color2));
}

export function deltaE1976(color1: Color, color2: Color): number {
    return colorCompare.deltaE1976(toLAB(color1), toLAB(color2));
}

export function deltaE1994(color1: Color | string, color2: Color | string): number {
    return colorCompare.deltaE1994(toLAB(color1), toLAB(color2));
}

export function deltaE2000(color1: Color | string, color2: Color | string): number {
    return colorCompare.deltaE2000(toLAB(color1), toLAB(color2));
}

export const attributes = {
    chroma,
    saturation,
    lightness,
    value,
    whiteness,
    blackness,
    greyness,
    intensity,
};

export default {
    to,
    toRGB,
    toHSL,
    toHSV,
    toHSI,
    toHWB,
    toHCG,
    toCMY,
    toCMYK,
    toXYZ,
    toLAB,
    toLCH,
    luminosity,
    isDark,
    isLight,
    negate,
    rotate: hue,
    attributes,
    saturation,
    lightness,
    value,
    whiteness,
    blackness,
    chroma,
    greyness,
    intensity,
    fade: alpha,
    blend,
    gradient,
    scheme,
    string,
    deltaE1976,
    deltaE1994,
    deltaE2000,
};
