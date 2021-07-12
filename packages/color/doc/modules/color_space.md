[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / color-space

# Module: color-space

## Table of contents

### Type aliases

- [ColorSpace](color_space.md#colorspace)

## Type aliases

### ColorSpace

Ƭ **ColorSpace**<Space, Partial, Internal\>: *object*

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Space` | [*Color*](color.md#color) |
| `Partial` | [*PartialColor*](color.md#partialcolor) |
| `Internal` | - |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `external` | (`color`: Internal) => Space |
| `internal` | (`color`: Partial) => Internal |
| `is` | (`color`: [*PartialColor*](color.md#partialcolor)) => color is Partial |
| `parse` | (`input`: *string*) => Space \| *undefined* |
| `string` | (`color`: Partial, `options`: [*StringOptions*](color.md#stringoptions)) => *string* |
| `toCMY` | (`color`: Partial) => [*CMY*](cmy.md#cmy) |
| `toCMYK` | (`color`: Partial) => [*CMYK*](cmyk.md#cmyk) |
| `toHCG` | (`color`: Partial) => [*HCG*](hcg.md#hcg) |
| `toHSI` | (`color`: Partial) => [*HSI*](hsi.md#hsi) |
| `toHSL` | (`color`: Partial) => [*HSL*](hsl.md#hsl) |
| `toHSV` | (`color`: Partial) => [*HSV*](hsv.md#hsv) |
| `toHWB` | (`color`: Partial) => [*HWB*](hwb.md#hwb) |
| `toLAB` | (`color`: Partial) => [*LAB*](lab.md#lab) |
| `toLCH` | (`color`: Partial) => [*LCH*](lch.md#lch) |
| `toRGB` | (`color`: Partial) => [*RGB*](rgb.md#rgb) |
| `toXYZ` | (`color`: Partial) => [*XYZ*](xyz.md#xyz) |

Defined in: [color-space.ts:3](../../src/color-space.ts#L3)
