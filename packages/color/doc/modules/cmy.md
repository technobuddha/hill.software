[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / cmy

# Module: cmy

## Table of contents

### Type aliases

- [CMY](cmy.md#cmy)
- [partialCMY](cmy.md#partialcmy)

### Variables

- [default](cmy.md#default)

### Functions

- [external](cmy.md#external)
- [internal](cmy.md#internal)
- [is](cmy.md#is)
- [parse](cmy.md#parse)
- [string](cmy.md#string)
- [toCMY](cmy.md#tocmy)
- [toCMYK](cmy.md#tocmyk)
- [toHCG](cmy.md#tohcg)
- [toHSI](cmy.md#tohsi)
- [toHSL](cmy.md#tohsl)
- [toHSV](cmy.md#tohsv)
- [toHWB](cmy.md#tohwb)
- [toLAB](cmy.md#tolab)
- [toLCH](cmy.md#tolch)
- [toRGB](cmy.md#torgb)
- [toXYZ](cmy.md#toxyz)

## Type aliases

### CMY

Ƭ **CMY**: [`Alpha`](color.md#alpha) & `iCMY` & `oCMY`

#### Defined in

[cmy.ts:12](../../src/cmy.ts#L12)

___

### partialCMY

Ƭ **partialCMY**: [`Alpha`](color.md#alpha) & `iCMY` \| `oCMY` \| `iCMY` & `oCMY`

#### Defined in

[cmy.ts:11](../../src/cmy.ts#L11)

## Variables

### default

• `Const` **default**: [`ColorSpace`](color_space.md#colorspace)<[`CMY`](cmy.md#cmy), [`partialCMY`](cmy.md#partialcmy), `internalCMY`\>

#### Defined in

[cmy.ts:133](../../src/cmy.ts#L133)

## Functions

### external

▸ **external**(`__namedParameters`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalCMY` |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[cmy.ts:25](../../src/cmy.ts#L25)

___

### internal

▸ **internal**(`color`): `internalCMY`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

`internalCMY`

#### Defined in

[cmy.ts:19](../../src/cmy.ts#L19)

___

### is

▸ **is**(`color`): color is partialCMY

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialCMY

#### Defined in

[cmy.ts:14](../../src/cmy.ts#L14)

___

### parse

▸ **parse**(`input`): [`CMY`](cmy.md#cmy) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`CMY`](cmy.md#cmy) \| `undefined`

#### Defined in

[cmy.ts:97](../../src/cmy.ts#L97)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialCMY`](cmy.md#partialcmy) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[cmy.ts:122](../../src/cmy.ts#L122)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[cmy.ts:63](../../src/cmy.ts#L63)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[cmy.ts:67](../../src/cmy.ts#L67)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[cmy.ts:59](../../src/cmy.ts#L59)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[cmy.ts:51](../../src/cmy.ts#L51)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[cmy.ts:43](../../src/cmy.ts#L43)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[cmy.ts:47](../../src/cmy.ts#L47)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[cmy.ts:55](../../src/cmy.ts#L55)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[cmy.ts:89](../../src/cmy.ts#L89)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[cmy.ts:93](../../src/cmy.ts#L93)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[cmy.ts:38](../../src/cmy.ts#L38)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMY`](cmy.md#partialcmy) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[cmy.ts:85](../../src/cmy.ts#L85)
