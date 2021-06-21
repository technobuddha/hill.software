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

export type RGB  = { alpha?: number; r: number; g: number; b: number; red?: number; green?: number; blue?: number };
export type HSL  = { alpha?: number; h: number; s: number; l: number; hue?: number; saturation?: number; lightness?: number };
export type HSV  = { alpha?: number; h: number; s: number; v: number; hue?: number; saturation?: number; value?: number };
export type HSI  = { alpha?: number; h: number; s: number; i: number; hue?: number; saturation?: number; intensity?: number };
export type HWB  = { alpha?: number; h: number; w: number; b: number; hue?: number; whiteness?: number; blackness?: number };
export type HCG  = { alpha?: number; h: number; c: number; g: number; hue?: number; chroma?: number; greyness?: number };
export type CMY  = { alpha?: number; c: number; m: number; y: number; cyan?: number; magenta?: number; yellow?: number };
export type CMYK = { alpha?: number; c: number; m: number; y: number; k: number; cyan?: number; magenta?: number; yellow?: number; black?: number };
export type XYZ  = { alpha?: number; x: number; y: number; z: number; X?: number; Y?: number; Z?: number };
export type LAB  = { alpha?: number; l: number; a: number; b: number; lightness?: number; redGreen?: number; blueYellow?: number };             // L: 0 to 100,    A: -128 to 128, B: -128 to 128
export type LCH  = { alpha?: number; l: number; c: number; h: number; lightness?: number; chroma?: number; hue?: number };

export type Color       = RGB | HSL | HSV | HSI | HWB | HCG | CMY | CMYK | XYZ | LAB | LCH;
type DispatchCall<S, T> = (color: S) => T;
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

function dispatch<T>(input: Color | string, {
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
}): T {
    const color = (typeof input === 'string') ? toColor(input) : input;

    if(rgb.isRGB(color))   return rgbFn(color);
    if(hsl.isHSL(color))   return hslFn(color);
    if(hsv.isHSV(color))   return hsvFn(color);
    if(hsi.isHSI(color))   return hsiFn(color);
    if(hwb.isHWB(color))   return hwbFn(color);
    if(hcg.isHCG(color))   return hcgFn(color);
    if(cmyk.isCMYK(color)) return cmykFn(color);
    if(cmy.isCMY(color))   return cmyFn(color);
    if(xyz.isXYZ(color))   return xyzFn(color);
    if(lab.isLAB(color))   return labFn(color);
    if(lch.isLCH(color))   return lchFn(color);

    throw ColorSpaceError;
}

function toColor(input: string): Color {
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

// TODO this should be colorspace instead of string
export function to(color: Color, space: string): Color {
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
    return dispatch(color, {
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
    });
}

export function toHSL(color: Color | string): HSL {
    return dispatch(color, {
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
    });
}

export function toHSV(color: Color | string): HSV {
    return dispatch(color, {
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
    });
}

export function toHSI(color: Color | string): HSI {
    return dispatch(color, {
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
    });
}

export function toHWB(color: Color | string): HWB {
    return dispatch(color, {
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
    });
}

export function toHCG(color: Color | string): HCG {
    return dispatch(color, {
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
    });
}

export function toCMY(color: Color | string): CMY {
    return dispatch(color, {
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
    });
}

export function toCMYK(color: Color | string): CMYK {
    return dispatch(color, {
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
    });
}

export function toXYZ(color: Color | string): XYZ {
    return dispatch(color, {
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
    });
}

export function toLAB(color: Color | string): LAB {
    return dispatch(color, {
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
    });
}

export function toLCH(color: Color | string): LCH {
    return dispatch(color, {
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
    });
}

function conform<T extends Color>(reference: T): (c: Color) => T {
    if(rgb.isRGB(reference))   return toRGB  as (c: Color) => T;
    if(hsl.isHSL(reference))   return toHSL  as (c: Color) => T;
    if(hsv.isHSV(reference))   return toHSV  as (c: Color) => T;
    if(hsi.isHSI(reference))   return toHSI  as (c: Color) => T;
    if(hwb.isHWB(reference))   return toHWB  as (c: Color) => T;
    if(hcg.isHCG(reference))   return toHCG  as (c: Color) => T;
    if(cmyk.isCMYK(reference)) return toCMYK as (c: Color) => T;
    if(cmy.isCMY(reference))   return toCMY  as (c: Color) => T;
    if(xyz.isXYZ(reference))   return toXYZ  as (c: Color) => T;
    if(lab.isLAB(reference))   return toLAB  as (c: Color) => T;
    if(lch.isLCH(reference))   return toLCH  as (c: Color) => T;

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

export function isDark(color: Color | string) {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    const { r, g, b } = toRGB(color);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq < 128;
}

export function isLight(color: Color | string) {
    return !isDark(color);
}

export function negate<T extends Color>(color: T): T {
    const { r, g, b } = toRGB(color);
    return conform(color)({ r: 255 - r, g: 255 - g, b: 255 - b });
}

export function rotate<T extends Color>(color: T, degrees = 10): T {
    let { hue, saturation, lightness, alpha } = hsl.internal(toHSL(color));
    hue += hue + degrees / 360;
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

export function fade<T extends Color>(color: T, amount: AmountRatio = 0.25): T {
    const alpha  = adjust(color.alpha ?? 1.0, amount);
    return { ...color, alpha };
}

export function blend<T extends Color>(color1: T, color2: Color, weight = 0.5): T {
    let { red: red1, green: green1, blue: blue1, alpha: alpha1 } = rgb.internal(toRGB(color1));
    let { red: red2, green: green2, blue: blue2, alpha: alpha2 } = rgb.internal(toRGB(color2));

    var w = 2 * weight - 1;
    var a = (alpha1 ?? 1.0) - (alpha2 ?? 1.0);

    var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w2 = 1 - w1;

    return conform(color1)(rgb.external({
        red:    w1 * red1   + w2 * red2,
        green:  w1 * green1 + w2 * green2,
        blue:   w1 * blue1  + w2 * blue2,
        alpha:  alpha1 === undefined && alpha2 === undefined
            ? undefined
            : (alpha1 ?? 1.0) * weight + (alpha2 ?? 1.0) * (1 - weight),
    }));
}

export function scheme<T extends Color>(color: T, scheme: keyof typeof schemes): T[] {
    const { hue, saturation, lightness, alpha } = hsl.internal(toHSL(color));
    return schemes[scheme]
    .map(angle => {
        let h = hue + angle / 360;
        if(h >= 1) h -= 1;
        return conform(color)(hsl.external({ hue: h, saturation, lightness, alpha }));
    });
}

export function grayscale<T extends Color>(color: T): T {
    const { red, green, blue, alpha } = rgb.internal(toRGB(color));
    return conform(color)(rgb.external({ red: red * 0.3, green: green * 0.59, blue: blue * 0.11, alpha }));
}

export function colorDistance(color1: Color, color2: Color): number {
    return rgb.colorDistance(toRGB(color1), toRGB(color2));
}

export function deltaE1976(color1: Color, color2: Color): number {
    return lab.deltaE1976(toLAB(color1), toLAB(color2));
}

export function deltaE1994(color1: Color, color2: Color): number {
    return lab.deltaE1994(toLAB(color1), toLAB(color2));
}

export function deltaE2000(color1: Color, color2: Color): number {
    return lab.deltaE2000(toLAB(color1), toLAB(color2));
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
    rotate,
    attributes,
    saturation,
    lightness,
    value,
    whiteness,
    blackness,
    chroma,
    greyness,
    intensity,
    fade,
    blend,
    scheme,
    deltaE1976,
    deltaE1994,
    deltaE2000,
};
