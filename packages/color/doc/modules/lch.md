[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / lch

# Module: lch

## Table of contents

### Type aliases

- [LCH](lch.md#lch)
- [partialLCH](lch.md#partiallch)

### Variables

- [default](lch.md#default)

### Functions

- [external](lch.md#external)
- [internal](lch.md#internal)
- [is](lch.md#is)
- [parse](lch.md#parse)
- [string](lch.md#string)
- [toCMY](lch.md#tocmy)
- [toCMYK](lch.md#tocmyk)
- [toHCG](lch.md#tohcg)
- [toHSI](lch.md#tohsi)
- [toHSL](lch.md#tohsl)
- [toHSV](lch.md#tohsv)
- [toHWB](lch.md#tohwb)
- [toLAB](lch.md#tolab)
- [toLCH](lch.md#tolch)
- [toRGB](lch.md#torgb)
- [toXYZ](lch.md#toxyz)

## Type aliases

### LCH

Ƭ **LCH**: [*Alpha*](color.md#alpha) & iLCH & oLCH

Defined in: [lch.ts:12](../../src/lch.ts#L12)

___

### partialLCH

Ƭ **partialLCH**: [*Alpha*](color.md#alpha) & iLCH \| oLCH \| iLCH & oLCH

Defined in: [lch.ts:11](../../src/lch.ts#L11)

## Variables

### default

• `Const` **default**: [*ColorSpace*](color_space.md#colorspace)<[*LCH*](lch.md#lch), [*partialLCH*](lch.md#partiallch), internalLCH\>

Defined in: [lch.ts:126](../../src/lch.ts#L126)

## Functions

### external

▸ **external**(`__namedParameters`: internalLCH): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | internalLCH |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [lch.ts:25](../../src/lch.ts#L25)

___

### internal

▸ **internal**(`color`: [*partialLCH*](lch.md#partiallch)): internalLCH

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** internalLCH

Defined in: [lch.ts:19](../../src/lch.ts#L19)

___

### is

▸ **is**(`color`: [*PartialColor*](color.md#partialcolor)): color is partialLCH

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*PartialColor*](color.md#partialcolor) |

**Returns:** color is partialLCH

Defined in: [lch.ts:14](../../src/lch.ts#L14)

___

### parse

▸ **parse**(`input`: *string*): [*LCH*](lch.md#lch) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*LCH*](lch.md#lch) \| *undefined*

Defined in: [lch.ts:88](../../src/lch.ts#L88)

___

### string

▸ **string**(`input`: [*partialLCH*](lch.md#partiallch), `options`: [*StringOptions*](color.md#stringoptions)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*partialLCH*](lch.md#partiallch) |
| `options` | [*StringOptions*](color.md#stringoptions) |

**Returns:** *string*

Defined in: [lch.ts:115](../../src/lch.ts#L115)

___

### toCMY

▸ **toCMY**(`color`: [*partialLCH*](lch.md#partiallch)): [*CMY*](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*CMY*](cmy.md#cmy)

Defined in: [lch.ts:62](../../src/lch.ts#L62)

___

### toCMYK

▸ **toCMYK**(`color`: [*partialLCH*](lch.md#partiallch)): [*CMYK*](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*CMYK*](cmyk.md#cmyk)

Defined in: [lch.ts:66](../../src/lch.ts#L66)

___

### toHCG

▸ **toHCG**(`color`: [*partialLCH*](lch.md#partiallch)): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [lch.ts:58](../../src/lch.ts#L58)

___

### toHSI

▸ **toHSI**(`color`: [*partialLCH*](lch.md#partiallch)): [*HSI*](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*HSI*](hsi.md#hsi)

Defined in: [lch.ts:54](../../src/lch.ts#L54)

___

### toHSL

▸ **toHSL**(`color`: [*partialLCH*](lch.md#partiallch)): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [lch.ts:42](../../src/lch.ts#L42)

___

### toHSV

▸ **toHSV**(`color`: [*partialLCH*](lch.md#partiallch)): [*HSV*](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*HSV*](hsv.md#hsv)

Defined in: [lch.ts:46](../../src/lch.ts#L46)

___

### toHWB

▸ **toHWB**(`color`: [*partialLCH*](lch.md#partiallch)): [*HWB*](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*HWB*](hwb.md#hwb)

Defined in: [lch.ts:50](../../src/lch.ts#L50)

___

### toLAB

▸ **toLAB**(`color`: [*partialLCH*](lch.md#partiallch)): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [lch.ts:74](../../src/lch.ts#L74)

___

### toLCH

▸ **toLCH**(`color`: [*partialLCH*](lch.md#partiallch)): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [lch.ts:84](../../src/lch.ts#L84)

___

### toRGB

▸ **toRGB**(`color`: [*partialLCH*](lch.md#partiallch)): [*RGB*](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*RGB*](rgb.md#rgb)

Defined in: [lch.ts:38](../../src/lch.ts#L38)

___

### toXYZ

▸ **toXYZ**(`color`: [*partialLCH*](lch.md#partiallch)): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLCH*](lch.md#partiallch) |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [lch.ts:70](../../src/lch.ts#L70)
