[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / hwb

# Module: hwb

## Table of contents

### Type aliases

- [HWB](hwb.md#hwb)
- [partialHWB](hwb.md#partialhwb)

### Variables

- [default](hwb.md#default)

### Functions

- [external](hwb.md#external)
- [internal](hwb.md#internal)
- [is](hwb.md#is)
- [parse](hwb.md#parse)
- [string](hwb.md#string)
- [toCMY](hwb.md#tocmy)
- [toCMYK](hwb.md#tocmyk)
- [toHCG](hwb.md#tohcg)
- [toHSI](hwb.md#tohsi)
- [toHSL](hwb.md#tohsl)
- [toHSV](hwb.md#tohsv)
- [toHWB](hwb.md#tohwb)
- [toLAB](hwb.md#tolab)
- [toLCH](hwb.md#tolch)
- [toRGB](hwb.md#torgb)
- [toXYZ](hwb.md#toxyz)

## Type aliases

### HWB

Ƭ **HWB**: [`Alpha`](color.md#alpha) & `iHWB` & `oHWB`

#### Defined in

[hwb.ts:14](../../src/hwb.ts#L14)

___

### partialHWB

Ƭ **partialHWB**: [`Alpha`](color.md#alpha) & `iHWB` \| `oHWB` \| `iHWB` & `oHWB`

#### Defined in

[hwb.ts:13](../../src/hwb.ts#L13)

## Variables

### default

• `Const` **default**: [`ColorSpace`](color_space.md#colorspace)<[`HWB`](hwb.md#hwb), [`partialHWB`](hwb.md#partialhwb), `internalHWB`\>

#### Defined in

[hwb.ts:159](../../src/hwb.ts#L159)

## Functions

### external

▸ **external**(`__namedParameters`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalHWB` |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[hwb.ts:27](../../src/hwb.ts#L27)

___

### internal

▸ **internal**(`color`): `internalHWB`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

`internalHWB`

#### Defined in

[hwb.ts:21](../../src/hwb.ts#L21)

___

### is

▸ **is**(`color`): color is partialHWB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialHWB

#### Defined in

[hwb.ts:16](../../src/hwb.ts#L16)

___

### parse

▸ **parse**(`input`): [`HWB`](hwb.md#hwb) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`HWB`](hwb.md#hwb) \| `undefined`

#### Defined in

[hwb.ts:122](../../src/hwb.ts#L122)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialHWB`](hwb.md#partialhwb) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[hwb.ts:148](../../src/hwb.ts#L148)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[hwb.ts:102](../../src/hwb.ts#L102)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[hwb.ts:106](../../src/hwb.ts#L106)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[hwb.ts:90](../../src/hwb.ts#L90)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[hwb.ts:82](../../src/hwb.ts#L82)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[hwb.ts:74](../../src/hwb.ts#L74)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[hwb.ts:78](../../src/hwb.ts#L78)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[hwb.ts:86](../../src/hwb.ts#L86)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[hwb.ts:114](../../src/hwb.ts#L114)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[hwb.ts:118](../../src/hwb.ts#L118)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[hwb.ts:40](../../src/hwb.ts#L40)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHWB`](hwb.md#partialhwb) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[hwb.ts:110](../../src/hwb.ts#L110)
