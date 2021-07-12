import type { Color, PartialColor, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

export type ColorSpace<Space extends Color, Partial extends PartialColor, Internal> = {
    is:             (color: PartialColor)                       => color is Partial;
    internal:       (color: Partial)                            => Internal;
    external:       (color: Internal)                           => Space;
    toRGB:          (color: Partial)                            => RGB;
    toHSL:          (color: Partial)                            => HSL;
    toHSV:          (color: Partial)                            => HSV;
    toHSI:          (color: Partial)                            => HSI;
    toHWB:          (color: Partial)                            => HWB;
    toHCG:          (color: Partial)                            => HCG;
    toCMY:          (color: Partial)                            => CMY;
    toCMYK:         (color: Partial)                            => CMYK;
    toXYZ:          (color: Partial)                            => XYZ;
    toLAB:          (color: Partial)                            => LAB;
    toLCH:          (color: Partial)                            => LCH;
    parse:          (input: string)                             => Space | undefined;
    string:         (color: Partial, options: StringOptions)    => string;
};
