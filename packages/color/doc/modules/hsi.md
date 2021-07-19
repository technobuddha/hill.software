[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / hsi

# Module: hsi

## Table of contents

### Type aliases

- [HSI](hsi.md#hsi)
- [partialHSI](hsi.md#partialhsi)

### Variables

- [default](hsi.md#default)

### Functions

- [external](hsi.md#external)
- [internal](hsi.md#internal)
- [is](hsi.md#is)
- [parse](hsi.md#parse)
- [string](hsi.md#string)
- [toCMY](hsi.md#tocmy)
- [toCMYK](hsi.md#tocmyk)
- [toHCG](hsi.md#tohcg)
- [toHSI](hsi.md#tohsi)
- [toHSL](hsi.md#tohsl)
- [toHSV](hsi.md#tohsv)
- [toHWB](hsi.md#tohwb)
- [toLAB](hsi.md#tolab)
- [toLCH](hsi.md#tolch)
- [toRGB](hsi.md#torgb)
- [toXYZ](hsi.md#toxyz)

## Type aliases

### HSI

Ƭ **HSI**: [`Alpha`](color.md#alpha) & `iHSI` & `oHSI`

#### Defined in

[hsi.ts:12](../../src/hsi.ts#L12)

___

### partialHSI

Ƭ **partialHSI**: [`Alpha`](color.md#alpha) & `iHSI` \| `oHSI` \| `iHSI` & `oHSI`

#### Defined in

[hsi.ts:11](../../src/hsi.ts#L11)

## Variables

### default

• `Const` **default**: [`ColorSpace`](color_space.md#colorspace)<[`HSI`](hsi.md#hsi), [`partialHSI`](hsi.md#partialhsi), `internalHSI`\>

#### Defined in

[hsi.ts:145](../../src/hsi.ts#L145)

## Functions

### external

▸ **external**(`__namedParameters`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalHSI` |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[hsi.ts:25](../../src/hsi.ts#L25)

___

### internal

▸ **internal**(`color`): `internalHSI`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

`internalHSI`

#### Defined in

[hsi.ts:19](../../src/hsi.ts#L19)

___

### is

▸ **is**(`color`): color is partialHSI

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialHSI

#### Defined in

[hsi.ts:14](../../src/hsi.ts#L14)

___

### parse

▸ **parse**(`input`): [`HSI`](hsi.md#hsi) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`HSI`](hsi.md#hsi) \| `undefined`

#### Defined in

[hsi.ts:108](../../src/hsi.ts#L108)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialHSI`](hsi.md#partialhsi) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[hsi.ts:134](../../src/hsi.ts#L134)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[hsi.ts:88](../../src/hsi.ts#L88)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[hsi.ts:92](../../src/hsi.ts#L92)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[hsi.ts:84](../../src/hsi.ts#L84)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[hsi.ts:76](../../src/hsi.ts#L76)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[hsi.ts:68](../../src/hsi.ts#L68)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[hsi.ts:72](../../src/hsi.ts#L72)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[hsi.ts:80](../../src/hsi.ts#L80)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[hsi.ts:100](../../src/hsi.ts#L100)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[hsi.ts:104](../../src/hsi.ts#L104)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[hsi.ts:38](../../src/hsi.ts#L38)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialHSI`](hsi.md#partialhsi) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[hsi.ts:96](../../src/hsi.ts#L96)
