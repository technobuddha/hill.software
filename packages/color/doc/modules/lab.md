[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / lab

# Module: lab

## Table of contents

### Type aliases

- [LAB](lab.md#lab)
- [partialLAB](lab.md#partiallab)

### Variables

- [default](lab.md#default)

### Functions

- [external](lab.md#external)
- [internal](lab.md#internal)
- [is](lab.md#is)
- [parse](lab.md#parse)
- [string](lab.md#string)
- [toCMY](lab.md#tocmy)
- [toCMYK](lab.md#tocmyk)
- [toHCG](lab.md#tohcg)
- [toHSI](lab.md#tohsi)
- [toHSL](lab.md#tohsl)
- [toHSV](lab.md#tohsv)
- [toHWB](lab.md#tohwb)
- [toLAB](lab.md#tolab)
- [toLCH](lab.md#tolch)
- [toRGB](lab.md#torgb)
- [toXYZ](lab.md#toxyz)

## Type aliases

### LAB

Ƭ **LAB**: [*Alpha*](color.md#alpha) & iLAB & oLAB

Defined in: [lab.ts:14](../../src/lab.ts#L14)

___

### partialLAB

Ƭ **partialLAB**: [*Alpha*](color.md#alpha) & iLAB \| oLAB \| iLAB & oLAB

Defined in: [lab.ts:13](../../src/lab.ts#L13)

## Variables

### default

• `Const` **default**: [*ColorSpace*](color_space.md#colorspace)<[*LAB*](lab.md#lab), [*partialLAB*](lab.md#partiallab), internalLAB\>

Defined in: [lab.ts:153](../../src/lab.ts#L153)

## Functions

### external

▸ **external**(`__namedParameters`: internalLAB): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | internalLAB |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [lab.ts:27](../../src/lab.ts#L27)

___

### internal

▸ **internal**(`color`: [*partialLAB*](lab.md#partiallab)): internalLAB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** internalLAB

Defined in: [lab.ts:21](../../src/lab.ts#L21)

___

### is

▸ **is**(`color`: [*PartialColor*](color.md#partialcolor)): color is partialLAB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*PartialColor*](color.md#partialcolor) |

**Returns:** color is partialLAB

Defined in: [lab.ts:16](../../src/lab.ts#L16)

___

### parse

▸ **parse**(`input`: *string*): [*LAB*](lab.md#lab) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*LAB*](lab.md#lab) \| *undefined*

Defined in: [lab.ts:115](../../src/lab.ts#L115)

___

### string

▸ **string**(`input`: [*partialLAB*](lab.md#partiallab), `options`: [*StringOptions*](color.md#stringoptions)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*partialLAB*](lab.md#partiallab) |
| `options` | [*StringOptions*](color.md#stringoptions) |

**Returns:** *string*

Defined in: [lab.ts:142](../../src/lab.ts#L142)

___

### toCMY

▸ **toCMY**(`color`: [*partialLAB*](lab.md#partiallab)): [*CMY*](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*CMY*](cmy.md#cmy)

Defined in: [lab.ts:64](../../src/lab.ts#L64)

___

### toCMYK

▸ **toCMYK**(`color`: [*partialLAB*](lab.md#partiallab)): [*CMYK*](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*CMYK*](cmyk.md#cmyk)

Defined in: [lab.ts:68](../../src/lab.ts#L68)

___

### toHCG

▸ **toHCG**(`color`: [*partialLAB*](lab.md#partiallab)): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [lab.ts:60](../../src/lab.ts#L60)

___

### toHSI

▸ **toHSI**(`color`: [*partialLAB*](lab.md#partiallab)): [*HSI*](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*HSI*](hsi.md#hsi)

Defined in: [lab.ts:52](../../src/lab.ts#L52)

___

### toHSL

▸ **toHSL**(`color`: [*partialLAB*](lab.md#partiallab)): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [lab.ts:44](../../src/lab.ts#L44)

___

### toHSV

▸ **toHSV**(`color`: [*partialLAB*](lab.md#partiallab)): [*HSV*](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*HSV*](hsv.md#hsv)

Defined in: [lab.ts:48](../../src/lab.ts#L48)

___

### toHWB

▸ **toHWB**(`color`: [*partialLAB*](lab.md#partiallab)): [*HWB*](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*HWB*](hwb.md#hwb)

Defined in: [lab.ts:56](../../src/lab.ts#L56)

___

### toLAB

▸ **toLAB**(`color`: [*partialLAB*](lab.md#partiallab)): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [lab.ts:94](../../src/lab.ts#L94)

___

### toLCH

▸ **toLCH**(`color`: [*partialLAB*](lab.md#partiallab)): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [lab.ts:98](../../src/lab.ts#L98)

___

### toRGB

▸ **toRGB**(`color`: [*partialLAB*](lab.md#partiallab)): [*RGB*](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*RGB*](rgb.md#rgb)

Defined in: [lab.ts:40](../../src/lab.ts#L40)

___

### toXYZ

▸ **toXYZ**(`color`: [*partialLAB*](lab.md#partiallab)): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialLAB*](lab.md#partiallab) |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [lab.ts:72](../../src/lab.ts#L72)
