[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / xyz

# Module: xyz

## Table of contents

### Type aliases

- [XYZ](xyz.md#xyz)
- [partialXYZ](xyz.md#partialxyz)

### Variables

- [default](xyz.md#default)

### Functions

- [external](xyz.md#external)
- [internal](xyz.md#internal)
- [is](xyz.md#is)
- [parse](xyz.md#parse)
- [string](xyz.md#string)
- [toCMY](xyz.md#tocmy)
- [toCMYK](xyz.md#tocmyk)
- [toHCG](xyz.md#tohcg)
- [toHSI](xyz.md#tohsi)
- [toHSL](xyz.md#tohsl)
- [toHSV](xyz.md#tohsv)
- [toHWB](xyz.md#tohwb)
- [toLAB](xyz.md#tolab)
- [toLCH](xyz.md#tolch)
- [toRGB](xyz.md#torgb)
- [toXYZ](xyz.md#toxyz)

## Type aliases

### XYZ

Ƭ **XYZ**: [*Alpha*](color.md#alpha) & iXYZ & oXYZ

Defined in: [xyz.ts:13](../../src/xyz.ts#L13)

___

### partialXYZ

Ƭ **partialXYZ**: [*Alpha*](color.md#alpha) & iXYZ \| oXYZ \| iXYZ & oXYZ

Defined in: [xyz.ts:12](../../src/xyz.ts#L12)

## Variables

### default

• `Const` **default**: [*ColorSpace*](color_space.md#colorspace)<[*XYZ*](xyz.md#xyz), [*partialXYZ*](xyz.md#partialxyz), internalXYZ\>

Defined in: [xyz.ts:162](../../src/xyz.ts#L162)

## Functions

### external

▸ **external**(`__namedParameters`: internalXYZ): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | internalXYZ |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [xyz.ts:26](../../src/xyz.ts#L26)

___

### internal

▸ **internal**(`color`: [*partialXYZ*](xyz.md#partialxyz)): internalXYZ

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** internalXYZ

Defined in: [xyz.ts:20](../../src/xyz.ts#L20)

___

### is

▸ **is**(`color`: [*PartialColor*](color.md#partialcolor)): color is partialXYZ

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*PartialColor*](color.md#partialcolor) |

**Returns:** color is partialXYZ

Defined in: [xyz.ts:15](../../src/xyz.ts#L15)

___

### parse

▸ **parse**(`input`: *string*): [*XYZ*](xyz.md#xyz) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*XYZ*](xyz.md#xyz) \| *undefined*

Defined in: [xyz.ts:121](../../src/xyz.ts#L121)

___

### string

▸ **string**(`input`: [*partialXYZ*](xyz.md#partialxyz), `options`: [*StringOptions*](color.md#stringoptions)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*partialXYZ*](xyz.md#partialxyz) |
| `options` | [*StringOptions*](color.md#stringoptions) |

**Returns:** *string*

Defined in: [xyz.ts:145](../../src/xyz.ts#L145)

___

### toCMY

▸ **toCMY**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*CMY*](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*CMY*](cmy.md#cmy)

Defined in: [xyz.ts:85](../../src/xyz.ts#L85)

___

### toCMYK

▸ **toCMYK**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*CMYK*](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*CMYK*](cmyk.md#cmyk)

Defined in: [xyz.ts:89](../../src/xyz.ts#L89)

___

### toHCG

▸ **toHCG**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [xyz.ts:81](../../src/xyz.ts#L81)

___

### toHSI

▸ **toHSI**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*HSI*](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*HSI*](hsi.md#hsi)

Defined in: [xyz.ts:73](../../src/xyz.ts#L73)

___

### toHSL

▸ **toHSL**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [xyz.ts:65](../../src/xyz.ts#L65)

___

### toHSV

▸ **toHSV**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*HSV*](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*HSV*](hsv.md#hsv)

Defined in: [xyz.ts:69](../../src/xyz.ts#L69)

___

### toHWB

▸ **toHWB**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*HWB*](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*HWB*](hwb.md#hwb)

Defined in: [xyz.ts:77](../../src/xyz.ts#L77)

___

### toLAB

▸ **toLAB**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [xyz.ts:97](../../src/xyz.ts#L97)

___

### toLCH

▸ **toLCH**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [xyz.ts:114](../../src/xyz.ts#L114)

___

### toRGB

▸ **toRGB**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*RGB*](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*RGB*](rgb.md#rgb)

Defined in: [xyz.ts:39](../../src/xyz.ts#L39)

___

### toXYZ

▸ **toXYZ**(`color`: [*partialXYZ*](xyz.md#partialxyz)): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialXYZ*](xyz.md#partialxyz) |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [xyz.ts:93](../../src/xyz.ts#L93)
