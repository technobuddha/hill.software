[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / [lab](lab.md) / lab

# Namespace: lab

[lab](lab.md).lab

## Table of contents

### Functions

- [deltaE1976](lab.lab-1.md#deltae1976)
- [deltaE1994](lab.lab-1.md#deltae1994)
- [deltaE2000](lab.lab-1.md#deltae2000)
- [external](lab.lab-1.md#external)
- [internal](lab.lab-1.md#internal)
- [isLAB](lab.lab-1.md#islab)
- [parse](lab.lab-1.md#parse)
- [toCMY](lab.lab-1.md#tocmy)
- [toCMYK](lab.lab-1.md#tocmyk)
- [toHCG](lab.lab-1.md#tohcg)
- [toHSI](lab.lab-1.md#tohsi)
- [toHSL](lab.lab-1.md#tohsl)
- [toHSV](lab.lab-1.md#tohsv)
- [toHWB](lab.lab-1.md#tohwb)
- [toLAB](lab.lab-1.md#tolab)
- [toLCH](lab.lab-1.md#tolch)
- [toRGB](lab.lab-1.md#torgb)
- [toXYZ](lab.lab-1.md#toxyz)

## Functions

### deltaE1976

▸ **deltaE1976**(`color1`: [*LAB*](color.md#lab), `color2`: [*LAB*](color.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](color.md#lab) |
| `color2` | [*LAB*](color.md#lab) |

**Returns:** *number*

Defined in: [lab.ts:152](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L152)

___

### deltaE1994

▸ **deltaE1994**(`color1`: [*LAB*](color.md#lab), `color2`: [*LAB*](color.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](color.md#lab) |
| `color2` | [*LAB*](color.md#lab) |

**Returns:** *number*

Defined in: [lab.ts:158](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L158)

___

### deltaE2000

▸ **deltaE2000**(`color1`: [*LAB*](color.md#lab), `color2`: [*LAB*](color.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](color.md#lab) |
| `color2` | [*LAB*](color.md#lab) |

**Returns:** *number*

Defined in: [lab.ts:194](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L194)

___

### external

▸ **external**(`__namedParameters`: iLAB): [*LAB*](color.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | iLAB |

**Returns:** [*LAB*](color.md#lab)

Defined in: [lab.ts:28](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L28)

___

### internal

▸ **internal**(`color`: [*LAB*](color.md#lab)): iLAB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** iLAB

Defined in: [lab.ts:19](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L19)

___

### isLAB

▸ **isLAB**(`color`: [*Color*](color.md#color)): color is LAB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) |

**Returns:** color is LAB

Defined in: [lab.ts:11](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L11)

___

### parse

▸ **parse**(`input`: *string*): [*LAB*](color.md#lab) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*LAB*](color.md#lab) \| *undefined*

Defined in: [lab.ts:115](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L115)

___

### toCMY

▸ **toCMY**(`color`: [*LAB*](color.md#lab)): [*CMY*](color.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*CMY*](color.md#cmy)

Defined in: [lab.ts:64](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L64)

___

### toCMYK

▸ **toCMYK**(`color`: [*LAB*](color.md#lab)): [*CMYK*](color.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*CMYK*](color.md#cmyk)

Defined in: [lab.ts:68](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L68)

___

### toHCG

▸ **toHCG**(`color`: [*LAB*](color.md#lab)): [*HCG*](color.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*HCG*](color.md#hcg)

Defined in: [lab.ts:60](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L60)

___

### toHSI

▸ **toHSI**(`color`: [*LAB*](color.md#lab)): [*HSI*](color.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*HSI*](color.md#hsi)

Defined in: [lab.ts:52](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L52)

___

### toHSL

▸ **toHSL**(`color`: [*LAB*](color.md#lab)): [*HSL*](color.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*HSL*](color.md#hsl)

Defined in: [lab.ts:44](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L44)

___

### toHSV

▸ **toHSV**(`color`: [*LAB*](color.md#lab)): [*HSV*](color.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*HSV*](color.md#hsv)

Defined in: [lab.ts:48](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L48)

___

### toHWB

▸ **toHWB**(`color`: [*LAB*](color.md#lab)): [*HWB*](color.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*HWB*](color.md#hwb)

Defined in: [lab.ts:56](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L56)

___

### toLAB

▸ **toLAB**(`color`: [*LAB*](color.md#lab)): [*LAB*](color.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*LAB*](color.md#lab)

Defined in: [lab.ts:94](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L94)

___

### toLCH

▸ **toLCH**(`color`: [*LAB*](color.md#lab)): [*LCH*](color.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*LCH*](color.md#lch)

Defined in: [lab.ts:98](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L98)

___

### toRGB

▸ **toRGB**(`color`: [*LAB*](color.md#lab)): [*RGB*](color.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*RGB*](color.md#rgb)

Defined in: [lab.ts:40](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L40)

___

### toXYZ

▸ **toXYZ**(`color`: [*LAB*](color.md#lab)): [*XYZ*](color.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*LAB*](color.md#lab) |

**Returns:** [*XYZ*](color.md#xyz)

Defined in: [lab.ts:72](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/lab.ts#L72)
