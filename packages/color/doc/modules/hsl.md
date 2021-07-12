[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / hsl

# Module: hsl

## Table of contents

### Type aliases

- [HSL](hsl.md#hsl)
- [partialHSL](hsl.md#partialhsl)

### Variables

- [default](hsl.md#default)

### Functions

- [external](hsl.md#external)
- [internal](hsl.md#internal)
- [is](hsl.md#is)
- [parse](hsl.md#parse)
- [string](hsl.md#string)
- [toCMY](hsl.md#tocmy)
- [toCMYK](hsl.md#tocmyk)
- [toHCG](hsl.md#tohcg)
- [toHSI](hsl.md#tohsi)
- [toHSL](hsl.md#tohsl)
- [toHSV](hsl.md#tohsv)
- [toHWB](hsl.md#tohwb)
- [toLAB](hsl.md#tolab)
- [toLCH](hsl.md#tolch)
- [toRGB](hsl.md#torgb)
- [toXYZ](hsl.md#toxyz)

## Type aliases

### HSL

Ƭ **HSL**: [*Alpha*](color.md#alpha) & iHSL & oHSL

Defined in: [hsl.ts:15](../../src/hsl.ts#L15)

___

### partialHSL

Ƭ **partialHSL**: [*Alpha*](color.md#alpha) & iHSL \| oHSL \| iHSL & oHSL

Defined in: [hsl.ts:14](../../src/hsl.ts#L14)

## Variables

### default

• `Const` **default**: [*ColorSpace*](color_space.md#colorspace)<[*HSL*](hsl.md#hsl), [*partialHSL*](hsl.md#partialhsl), internalHSL\>

Defined in: [hsl.ts:181](../../src/hsl.ts#L181)

## Functions

### external

▸ **external**(`__namedParameters`: internalHSL): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | internalHSL |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [hsl.ts:28](../../src/hsl.ts#L28)

___

### internal

▸ **internal**(`color`: [*partialHSL*](hsl.md#partialhsl)): internalHSL

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** internalHSL

Defined in: [hsl.ts:22](../../src/hsl.ts#L22)

___

### is

▸ **is**(`color`: [*PartialColor*](color.md#partialcolor)): color is partialHSL

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*PartialColor*](color.md#partialcolor) |

**Returns:** color is partialHSL

Defined in: [hsl.ts:17](../../src/hsl.ts#L17)

___

### parse

▸ **parse**(`input`: *string*): [*HSL*](hsl.md#hsl) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*HSL*](hsl.md#hsl) \| *undefined*

Defined in: [hsl.ts:140](../../src/hsl.ts#L140)

___

### string

▸ **string**(`input`: [*partialHSL*](hsl.md#partialhsl), `options`: [*StringOptions*](color.md#stringoptions)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*partialHSL*](hsl.md#partialhsl) |
| `options` | [*StringOptions*](color.md#stringoptions) |

**Returns:** *string*

Defined in: [hsl.ts:164](../../src/hsl.ts#L164)

___

### toCMY

▸ **toCMY**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*CMY*](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*CMY*](cmy.md#cmy)

Defined in: [hsl.ts:118](../../src/hsl.ts#L118)

___

### toCMYK

▸ **toCMYK**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*CMYK*](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*CMYK*](cmyk.md#cmyk)

Defined in: [hsl.ts:122](../../src/hsl.ts#L122)

___

### toHCG

▸ **toHCG**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [hsl.ts:107](../../src/hsl.ts#L107)

___

### toHSI

▸ **toHSI**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*HSI*](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*HSI*](hsi.md#hsi)

Defined in: [hsl.ts:99](../../src/hsl.ts#L99)

___

### toHSL

▸ **toHSL**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [hsl.ts:80](../../src/hsl.ts#L80)

___

### toHSV

▸ **toHSV**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*HSV*](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*HSV*](hsv.md#hsv)

Defined in: [hsl.ts:84](../../src/hsl.ts#L84)

___

### toHWB

▸ **toHWB**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*HWB*](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*HWB*](hwb.md#hwb)

Defined in: [hsl.ts:103](../../src/hsl.ts#L103)

___

### toLAB

▸ **toLAB**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [hsl.ts:130](../../src/hsl.ts#L130)

___

### toLCH

▸ **toLCH**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [hsl.ts:134](../../src/hsl.ts#L134)

___

### toRGB

▸ **toRGB**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*RGB*](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*RGB*](rgb.md#rgb)

Defined in: [hsl.ts:41](../../src/hsl.ts#L41)

___

### toXYZ

▸ **toXYZ**(`color`: [*partialHSL*](hsl.md#partialhsl)): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHSL*](hsl.md#partialhsl) |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [hsl.ts:126](../../src/hsl.ts#L126)
