import type { Alpha, Color, StringOptions, RGB, HSL, HSV, HSI, HWB, HCG, CMY, CMYK, XYZ, LAB, LCH } from './color';

// https://stackoverflow.com/questions/53899692/typescript-how-to-extract-only-the-optional-keys-from-a-type
type OptionalPropertyOf<T extends object> = Exclude<{[K in keyof T]: T extends Record<K, T[K]> ? never : K }[keyof T], undefined>;
export type Internal<T extends Alpha> = Omit<Required<Pick<T, OptionalPropertyOf<T>>>, 'alpha'> & { alpha?: number };

export type ColorSpace<T extends Color> = {
    is:             (color: Color) => color is T;

    internal:       (color: T) => Internal<T>;
    external:       (color: Internal<T>) => T;

    toRGB:          (color: T) => RGB;
    toHSL:          (color: T) => HSL;
    toHSV:          (color: T) => HSV;
    toHSI:          (color: T) => HSI;
    toHWB:          (color: T) => HWB;
    toHCG:          (color: T) => HCG;
    toCMY:          (color: T) => CMY;
    toCMYK:         (color: T) => CMYK;
    toXYZ:          (color: T) => XYZ;
    toLAB:          (color: T) => LAB;
    toLCH:          (color: T) => LCH;

    parse:          (input: string) => T | undefined;
    string:         (color: T, options: StringOptions) => string;
    inputFormat:    (input: string) => StringOptions;
};
