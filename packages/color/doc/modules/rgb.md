[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / rgb

# Module: rgb

## Table of contents

### References

- [default](rgb.md#default)

### Type aliases

- [RGB](rgb.md#rgb)
- [oRGB](rgb.md#orgb)
- [partialRGB](rgb.md#partialrgb)

### Variables

- [rgb](rgb.md#rgb)

### Functions

- [external](rgb.md#external)
- [internal](rgb.md#internal)
- [is](rgb.md#is)
- [parse](rgb.md#parse)
- [string](rgb.md#string)
- [toCMY](rgb.md#tocmy)
- [toCMYK](rgb.md#tocmyk)
- [toHCG](rgb.md#tohcg)
- [toHSI](rgb.md#tohsi)
- [toHSL](rgb.md#tohsl)
- [toHSV](rgb.md#tohsv)
- [toHWB](rgb.md#tohwb)
- [toLAB](rgb.md#tolab)
- [toLCH](rgb.md#tolch)
- [toRGB](rgb.md#torgb)
- [toXYZ](rgb.md#toxyz)

## References

### default

Renames and exports: [rgb](rgb.md#rgb)

## Type aliases

### RGB

Ƭ **RGB**: [`Alpha`](color.md#alpha) & `iRGB` & [`oRGB`](rgb.md#orgb)

#### Defined in

[rgb.ts:21](../../src/rgb.ts#L21)

___

### oRGB

Ƭ **oRGB**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `b` | `number` |
| `g` | `number` |
| `r` | `number` |

#### Defined in

[rgb.ts:17](../../src/rgb.ts#L17)

___

### partialRGB

Ƭ **partialRGB**: [`Alpha`](color.md#alpha) & `iRGB` \| [`oRGB`](rgb.md#orgb) \| `iRGB` & [`oRGB`](rgb.md#orgb)

#### Defined in

[rgb.ts:20](../../src/rgb.ts#L20)

## Variables

### rgb

• `Const` **rgb**: [`ColorSpace`](color_space.md#colorspace)<[`RGB`](rgb.md#rgb), [`partialRGB`](rgb.md#partialrgb), `internalRGB`\>

#### Defined in

[rgb.ts:276](../../src/rgb.ts#L276)

## Functions

### external

▸ **external**(`__namedParameters`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalRGB` |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[rgb.ts:34](../../src/rgb.ts#L34)

___

### internal

▸ **internal**(`color`): `internalRGB`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

`internalRGB`

#### Defined in

[rgb.ts:28](../../src/rgb.ts#L28)

___

### is

▸ **is**(`color`): color is partialRGB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialRGB

#### Defined in

[rgb.ts:23](../../src/rgb.ts#L23)

___

### parse

▸ **parse**(`input`): [`RGB`](rgb.md#rgb) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`RGB`](rgb.md#rgb) \| `undefined`

#### Defined in

[rgb.ts:176](../../src/rgb.ts#L176)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialRGB`](rgb.md#partialrgb) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[rgb.ts:236](../../src/rgb.ts#L236)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[rgb.ts:134](../../src/rgb.ts#L134)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[rgb.ts:139](../../src/rgb.ts#L139)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[rgb.ts:129](../../src/rgb.ts#L129)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[rgb.ts:119](../../src/rgb.ts#L119)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[rgb.ts:109](../../src/rgb.ts#L109)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[rgb.ts:114](../../src/rgb.ts#L114)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[rgb.ts:124](../../src/rgb.ts#L124)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[rgb.ts:165](../../src/rgb.ts#L165)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[rgb.ts:169](../../src/rgb.ts#L169)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[rgb.ts:105](../../src/rgb.ts#L105)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialRGB`](rgb.md#partialrgb) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[rgb.ts:150](../../src/rgb.ts#L150)
