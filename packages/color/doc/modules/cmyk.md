[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / cmyk

# Module: cmyk

## Table of contents

### References

- [default](cmyk.md#default)

### Type aliases

- [CMYK](cmyk.md#cmyk)
- [partialCMYK](cmyk.md#partialcmyk)

### Variables

- [cmyk](cmyk.md#cmyk)

### Functions

- [external](cmyk.md#external)
- [internal](cmyk.md#internal)
- [is](cmyk.md#is)
- [parse](cmyk.md#parse)
- [string](cmyk.md#string)
- [toCMY](cmyk.md#tocmy)
- [toCMYK](cmyk.md#tocmyk)
- [toHCG](cmyk.md#tohcg)
- [toHSI](cmyk.md#tohsi)
- [toHSL](cmyk.md#tohsl)
- [toHSV](cmyk.md#tohsv)
- [toHWB](cmyk.md#tohwb)
- [toLAB](cmyk.md#tolab)
- [toLCH](cmyk.md#tolch)
- [toRGB](cmyk.md#torgb)
- [toXYZ](cmyk.md#toxyz)

## References

### default

Renames and exports: [cmyk](cmyk.md#cmyk)

## Type aliases

### CMYK

Ƭ **CMYK**: [`Alpha`](color.md#alpha) & `iCMYK` & `oCMYK`

#### Defined in

[cmyk.ts:12](../../src/cmyk.ts#L12)

___

### partialCMYK

Ƭ **partialCMYK**: [`Alpha`](color.md#alpha) & `iCMYK` \| `oCMYK` \| `iCMYK` & `oCMYK`

#### Defined in

[cmyk.ts:11](../../src/cmyk.ts#L11)

## Variables

### cmyk

• `Const` **cmyk**: [`ColorSpace`](color_space.md#colorspace)<[`CMYK`](cmyk.md#cmyk), [`partialCMYK`](cmyk.md#partialcmyk), `internalCMYK`\>

#### Defined in

[cmyk.ts:139](../../src/cmyk.ts#L139)

## Functions

### external

▸ **external**(`__namedParameters`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `internalCMYK` |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[cmyk.ts:25](../../src/cmyk.ts#L25)

___

### internal

▸ **internal**(`color`): `internalCMYK`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

`internalCMYK`

#### Defined in

[cmyk.ts:19](../../src/cmyk.ts#L19)

___

### is

▸ **is**(`color`): color is partialCMYK

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`PartialColor`](color.md#partialcolor) |

#### Returns

color is partialCMYK

#### Defined in

[cmyk.ts:14](../../src/cmyk.ts#L14)

___

### parse

▸ **parse**(`input`): [`CMYK`](cmyk.md#cmyk) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`CMYK`](cmyk.md#cmyk) \| `undefined`

#### Defined in

[cmyk.ts:95](../../src/cmyk.ts#L95)

___

### string

▸ **string**(`input`, `options`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`partialCMYK`](cmyk.md#partialcmyk) |
| `options` | [`StringOptions`](color.md#stringoptions) |

#### Returns

`string`

#### Defined in

[cmyk.ts:122](../../src/cmyk.ts#L122)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[cmyk.ts:70](../../src/cmyk.ts#L70)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[cmyk.ts:80](../../src/cmyk.ts#L80)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[cmyk.ts:66](../../src/cmyk.ts#L66)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[cmyk.ts:58](../../src/cmyk.ts#L58)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[cmyk.ts:50](../../src/cmyk.ts#L50)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[cmyk.ts:54](../../src/cmyk.ts#L54)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[cmyk.ts:62](../../src/cmyk.ts#L62)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[cmyk.ts:88](../../src/cmyk.ts#L88)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[cmyk.ts:92](../../src/cmyk.ts#L92)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[cmyk.ts:40](../../src/cmyk.ts#L40)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`partialCMYK`](cmyk.md#partialcmyk) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[cmyk.ts:84](../../src/cmyk.ts#L84)
