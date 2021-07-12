[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / hcg

# Module: hcg

## Table of contents

### Type aliases

- [HCG](hcg.md#hcg)
- [partialHCG](hcg.md#partialhcg)

### Variables

- [default](hcg.md#default)

### Functions

- [external](hcg.md#external)
- [internal](hcg.md#internal)
- [is](hcg.md#is)
- [parse](hcg.md#parse)
- [string](hcg.md#string)
- [toCMY](hcg.md#tocmy)
- [toCMYK](hcg.md#tocmyk)
- [toHCG](hcg.md#tohcg)
- [toHSI](hcg.md#tohsi)
- [toHSL](hcg.md#tohsl)
- [toHSV](hcg.md#tohsv)
- [toHWB](hcg.md#tohwb)
- [toLAB](hcg.md#tolab)
- [toLCH](hcg.md#tolch)
- [toRGB](hcg.md#torgb)
- [toXYZ](hcg.md#toxyz)

## Type aliases

### HCG

Ƭ **HCG**: [*Alpha*](color.md#alpha) & iHCG & oHCG

Defined in: [hcg.ts:15](../../src/hcg.ts#L15)

___

### partialHCG

Ƭ **partialHCG**: [*Alpha*](color.md#alpha) & iHCG \| oHCG \| iHCG & oHCG

Defined in: [hcg.ts:14](../../src/hcg.ts#L14)

## Variables

### default

• `Const` **default**: [*ColorSpace*](color_space.md#colorspace)<[*HCG*](hcg.md#hcg), [*partialHCG*](hcg.md#partialhcg), internalHCG\>

Defined in: [hcg.ts:156](../../src/hcg.ts#L156)

## Functions

### external

▸ **external**(`__namedParameters`: internalHCG): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | internalHCG |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [hcg.ts:28](../../src/hcg.ts#L28)

___

### internal

▸ **internal**(`color`: [*partialHCG*](hcg.md#partialhcg)): internalHCG

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** internalHCG

Defined in: [hcg.ts:22](../../src/hcg.ts#L22)

___

### is

▸ **is**(`color`: [*PartialColor*](color.md#partialcolor)): color is partialHCG

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*PartialColor*](color.md#partialcolor) |

**Returns:** color is partialHCG

Defined in: [hcg.ts:17](../../src/hcg.ts#L17)

___

### parse

▸ **parse**(`input`: *string*): [*HCG*](hcg.md#hcg) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*HCG*](hcg.md#hcg) \| *undefined*

Defined in: [hcg.ts:118](../../src/hcg.ts#L118)

___

### string

▸ **string**(`input`: [*partialHCG*](hcg.md#partialhcg), `options`: [*StringOptions*](color.md#stringoptions)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [*partialHCG*](hcg.md#partialhcg) |
| `options` | [*StringOptions*](color.md#stringoptions) |

**Returns:** *string*

Defined in: [hcg.ts:145](../../src/hcg.ts#L145)

___

### toCMY

▸ **toCMY**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*CMY*](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*CMY*](cmy.md#cmy)

Defined in: [hcg.ts:98](../../src/hcg.ts#L98)

___

### toCMYK

▸ **toCMYK**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*CMYK*](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*CMYK*](cmyk.md#cmyk)

Defined in: [hcg.ts:102](../../src/hcg.ts#L102)

___

### toHCG

▸ **toHCG**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*HCG*](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*HCG*](hcg.md#hcg)

Defined in: [hcg.ts:94](../../src/hcg.ts#L94)

___

### toHSI

▸ **toHSI**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*HSI*](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*HSI*](hsi.md#hsi)

Defined in: [hcg.ts:82](../../src/hcg.ts#L82)

___

### toHSL

▸ **toHSL**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*HSL*](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*HSL*](hsl.md#hsl)

Defined in: [hcg.ts:56](../../src/hcg.ts#L56)

___

### toHSV

▸ **toHSV**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*HSV*](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*HSV*](hsv.md#hsv)

Defined in: [hcg.ts:70](../../src/hcg.ts#L70)

___

### toHWB

▸ **toHWB**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*HWB*](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*HWB*](hwb.md#hwb)

Defined in: [hcg.ts:86](../../src/hcg.ts#L86)

___

### toLAB

▸ **toLAB**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*LAB*](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*LAB*](lab.md#lab)

Defined in: [hcg.ts:110](../../src/hcg.ts#L110)

___

### toLCH

▸ **toLCH**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*LCH*](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*LCH*](lch.md#lch)

Defined in: [hcg.ts:114](../../src/hcg.ts#L114)

___

### toRGB

▸ **toRGB**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*RGB*](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*RGB*](rgb.md#rgb)

Defined in: [hcg.ts:41](../../src/hcg.ts#L41)

___

### toXYZ

▸ **toXYZ**(`color`: [*partialHCG*](hcg.md#partialhcg)): [*XYZ*](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*partialHCG*](hcg.md#partialhcg) |

**Returns:** [*XYZ*](xyz.md#xyz)

Defined in: [hcg.ts:106](../../src/hcg.ts#L106)
