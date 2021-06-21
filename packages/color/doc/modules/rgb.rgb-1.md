[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / [rgb](rgb.md) / rgb

# Namespace: rgb

[rgb](rgb.md).rgb

## Table of contents

### Functions

- [attributes](rgb.rgb-1.md#attributes)
- [colorDistance](rgb.rgb-1.md#colordistance)
- [external](rgb.rgb-1.md#external)
- [internal](rgb.rgb-1.md#internal)
- [isRGB](rgb.rgb-1.md#isrgb)
- [parse](rgb.rgb-1.md#parse)
- [toCMY](rgb.rgb-1.md#tocmy)
- [toCMYK](rgb.rgb-1.md#tocmyk)
- [toHCG](rgb.rgb-1.md#tohcg)
- [toHSI](rgb.rgb-1.md#tohsi)
- [toHSL](rgb.rgb-1.md#tohsl)
- [toHSV](rgb.rgb-1.md#tohsv)
- [toHWB](rgb.rgb-1.md#tohwb)
- [toLAB](rgb.rgb-1.md#tolab)
- [toLCH](rgb.rgb-1.md#tolch)
- [toRGB](rgb.rgb-1.md#torgb)
- [toXYZ](rgb.rgb-1.md#toxyz)

## Functions

### attributes

▸ **attributes**(`color`: [*RGB*](color.md#rgb)): *object*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `alpha` | *undefined* \| *number* |
| `blackness` | *number* |
| `chroma` | *number* |
| `greyness` | *number* |
| `hsiSaturation` | *number* |
| `hslSaturation` | *number* |
| `hsvSaturation` | *number* |
| `hue` | *number* |
| `intensity` | *number* |
| `lightness` | *number* |
| `value` | *number* |
| `whiteness` | *number* |

Defined in: [rgb.ts:48](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L48)

___

### colorDistance

▸ **colorDistance**(`color`: [*RGB*](color.md#rgb), `other`: [*RGB*](color.md#rgb)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |
| `other` | [*RGB*](color.md#rgb) |

**Returns:** *number*

Defined in: [rgb.ts:175](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L175)

___

### external

▸ **external**(`__namedParameters`: iRGB): [*RGB*](color.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | iRGB |

**Returns:** [*RGB*](color.md#rgb)

Defined in: [rgb.ts:36](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L36)

___

### internal

▸ **internal**(`color`: [*RGB*](color.md#rgb)): iRGB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** iRGB

Defined in: [rgb.ts:27](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L27)

___

### isRGB

▸ **isRGB**(`color`: [*Color*](color.md#color)): color is RGB

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) |

**Returns:** color is RGB

Defined in: [rgb.ts:19](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L19)

___

### parse

▸ **parse**(`input`: *string*): [*RGB*](color.md#rgb) \| *undefined*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** [*RGB*](color.md#rgb) \| *undefined*

Defined in: [rgb.ts:183](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L183)

___

### toCMY

▸ **toCMY**(`color`: [*RGB*](color.md#rgb)): [*CMY*](color.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*CMY*](color.md#cmy)

Defined in: [rgb.ts:136](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L136)

___

### toCMYK

▸ **toCMYK**(`color`: [*RGB*](color.md#rgb)): [*CMYK*](color.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*CMYK*](color.md#cmyk)

Defined in: [rgb.ts:141](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L141)

___

### toHCG

▸ **toHCG**(`color`: [*RGB*](color.md#rgb)): [*HCG*](color.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*HCG*](color.md#hcg)

Defined in: [rgb.ts:131](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L131)

___

### toHSI

▸ **toHSI**(`color`: [*RGB*](color.md#rgb)): [*HSI*](color.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*HSI*](color.md#hsi)

Defined in: [rgb.ts:121](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L121)

___

### toHSL

▸ **toHSL**(`color`: [*RGB*](color.md#rgb)): [*HSL*](color.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*HSL*](color.md#hsl)

Defined in: [rgb.ts:111](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L111)

___

### toHSV

▸ **toHSV**(`color`: [*RGB*](color.md#rgb)): [*HSV*](color.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*HSV*](color.md#hsv)

Defined in: [rgb.ts:116](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L116)

___

### toHWB

▸ **toHWB**(`color`: [*RGB*](color.md#rgb)): [*HWB*](color.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*HWB*](color.md#hwb)

Defined in: [rgb.ts:126](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L126)

___

### toLAB

▸ **toLAB**(`color`: [*RGB*](color.md#rgb)): [*LAB*](color.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*LAB*](color.md#lab)

Defined in: [rgb.ts:167](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L167)

___

### toLCH

▸ **toLCH**(`color`: [*RGB*](color.md#rgb)): [*LCH*](color.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*LCH*](color.md#lch)

Defined in: [rgb.ts:171](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L171)

___

### toRGB

▸ **toRGB**(`color`: [*RGB*](color.md#rgb)): [*RGB*](color.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*RGB*](color.md#rgb)

Defined in: [rgb.ts:107](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L107)

___

### toXYZ

▸ **toXYZ**(`color`: [*RGB*](color.md#rgb)): [*XYZ*](color.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](color.md#rgb) |

**Returns:** [*XYZ*](color.md#xyz)

Defined in: [rgb.ts:152](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/rgb.ts#L152)
