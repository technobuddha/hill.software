[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / hsv

# Module: hsv

## Table of contents

### Type aliases

- [HSV](hsv.md#hsv)
- [partialHSV](hsv.md#partialhsv)

### Variables

- [default](hsv.md#default)

### Functions

- [external](hsv.md#external)
- [internal](hsv.md#internal)
- [is](hsv.md#is)
- [parse](hsv.md#parse)
- [string](hsv.md#string)
- [toCMY](hsv.md#tocmy)
- [toCMYK](hsv.md#tocmyk)
- [toHCG](hsv.md#tohcg)
- [toHSI](hsv.md#tohsi)
- [toHSL](hsv.md#tohsl)
- [toHSV](hsv.md#tohsv)
- [toHWB](hsv.md#tohwb)
- [toLAB](hsv.md#tolab)
- [toLCH](hsv.md#tolch)
- [toRGB](hsv.md#torgb)
- [toXYZ](hsv.md#toxyz)

## Type aliases

### HSV

Ƭ **HSV**: [`Alpha`](color.md#alpha) & `iHSV` & `oHSV`

#### Defined in

[hsv.ts:15](../../src/hsv.ts#L15)

___

### partialHSV

Ƭ **partialHSV**: [`Alpha`](color.md#alpha) & `iHSV` \| `oHSV` \| `iHSV` & `oHSV`

#### Defined in

[hsv.ts:14](../../src/hsv.ts#L14)

## Variables

### default

• `Const` **default**: [`ColorSpace`](color_space.md#colorspace)<[`HSV`](hsv.md#hsv), [`partialHSV`](hsv.md#partialhsv), `internalHSV`\>

#### Defined in

[hsv.ts:164](../../src/hsv.ts#L164)

## Functions

### external

▸ **external**(`__namedParameters`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalHSV` |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[hsv.ts:28](../../src/hsv.ts#L28)

___

### internal

▸ **internal**(`color`): `internalHSV`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

`internalHSV`

#### Defined in

[hsv.ts:22](../../src/hsv.ts#L22)

___

### is

▸ **is**(`color`): color is partialHSV

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialHSV

#### Defined in

[hsv.ts:17](../../src/hsv.ts#L17)

___

### parse

▸ **parse**(`input`): [`HSV`](hsv.md#hsv) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`HSV`](hsv.md#hsv) \| `undefined`

#### Defined in

[hsv.ts:127](../../src/hsv.ts#L127)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialHSV`](hsv.md#partialhsv) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[hsv.ts:153](../../src/hsv.ts#L153)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[hsv.ts:107](../../src/hsv.ts#L107)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[hsv.ts:111](../../src/hsv.ts#L111)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[hsv.ts:95](../../src/hsv.ts#L95)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[hsv.ts:87](../../src/hsv.ts#L87)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[hsv.ts:68](../../src/hsv.ts#L68)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[hsv.ts:83](../../src/hsv.ts#L83)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[hsv.ts:91](../../src/hsv.ts#L91)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[hsv.ts:119](../../src/hsv.ts#L119)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[hsv.ts:123](../../src/hsv.ts#L123)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[hsv.ts:41](../../src/hsv.ts#L41)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSV`](hsv.md#partialhsv) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[hsv.ts:115](../../src/hsv.ts#L115)
