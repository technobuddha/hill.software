[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / color

# Module: color

## Table of contents

### Type aliases

- [CMY](color.md#cmy)
- [CMYK](color.md#cmyk)
- [Color](color.md#color)
- [HCG](color.md#hcg)
- [HSI](color.md#hsi)
- [HSL](color.md#hsl)
- [HSV](color.md#hsv)
- [HWB](color.md#hwb)
- [LAB](color.md#lab)
- [LCH](color.md#lch)
- [RGB](color.md#rgb)
- [XYZ](color.md#xyz)

### Properties

- [default](color.md#default)

### Variables

- [attributes](color.md#attributes)
- [colorSpaces](color.md#colorspaces)

### Functions

- [blackness](color.md#blackness)
- [blend](color.md#blend)
- [chroma](color.md#chroma)
- [colorDistance](color.md#colordistance)
- [contrast](color.md#contrast)
- [deltaE1976](color.md#deltae1976)
- [deltaE1994](color.md#deltae1994)
- [deltaE2000](color.md#deltae2000)
- [fade](color.md#fade)
- [grayscale](color.md#grayscale)
- [greyness](color.md#greyness)
- [intensity](color.md#intensity)
- [isDark](color.md#isdark)
- [isLight](color.md#islight)
- [lightness](color.md#lightness)
- [luminosity](color.md#luminosity)
- [negate](color.md#negate)
- [rotate](color.md#rotate)
- [saturation](color.md#saturation)
- [scheme](color.md#scheme)
- [to](color.md#to)
- [toCMY](color.md#tocmy)
- [toCMYK](color.md#tocmyk)
- [toHCG](color.md#tohcg)
- [toHSI](color.md#tohsi)
- [toHSL](color.md#tohsl)
- [toHSV](color.md#tohsv)
- [toHWB](color.md#tohwb)
- [toLAB](color.md#tolab)
- [toLCH](color.md#tolch)
- [toRGB](color.md#torgb)
- [toXYZ](color.md#toxyz)
- [value](color.md#value)
- [whiteness](color.md#whiteness)

## Type aliases

### CMY

Ƭ **CMY**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `c` | *number* |
| `cyan?` | *number* |
| `m` | *number* |
| `magenta?` | *number* |
| `y` | *number* |
| `yellow?` | *number* |

Defined in: [color.ts:19](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L19)

___

### CMYK

Ƭ **CMYK**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `black?` | *number* |
| `c` | *number* |
| `cyan?` | *number* |
| `k` | *number* |
| `m` | *number* |
| `magenta?` | *number* |
| `y` | *number* |
| `yellow?` | *number* |

Defined in: [color.ts:20](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L20)

___

### Color

Ƭ **Color**: [*RGB*](color.md#rgb) \| [*HSL*](color.md#hsl) \| [*HSV*](color.md#hsv) \| [*HSI*](color.md#hsi) \| [*HWB*](color.md#hwb) \| [*HCG*](color.md#hcg) \| [*CMY*](color.md#cmy) \| [*CMYK*](color.md#cmyk) \| [*XYZ*](color.md#xyz) \| [*LAB*](color.md#lab) \| [*LCH*](color.md#lch)

Defined in: [color.ts:25](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L25)

___

### HCG

Ƭ **HCG**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `c` | *number* |
| `chroma?` | *number* |
| `g` | *number* |
| `greyness?` | *number* |
| `h` | *number* |
| `hue?` | *number* |

Defined in: [color.ts:18](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L18)

___

### HSI

Ƭ **HSI**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `h` | *number* |
| `hue?` | *number* |
| `i` | *number* |
| `intensity?` | *number* |
| `s` | *number* |
| `saturation?` | *number* |

Defined in: [color.ts:16](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L16)

___

### HSL

Ƭ **HSL**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `h` | *number* |
| `hue?` | *number* |
| `l` | *number* |
| `lightness?` | *number* |
| `s` | *number* |
| `saturation?` | *number* |

Defined in: [color.ts:14](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L14)

___

### HSV

Ƭ **HSV**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `h` | *number* |
| `hue?` | *number* |
| `s` | *number* |
| `saturation?` | *number* |
| `v` | *number* |
| `value?` | *number* |

Defined in: [color.ts:15](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L15)

___

### HWB

Ƭ **HWB**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `b` | *number* |
| `blackness?` | *number* |
| `h` | *number* |
| `hue?` | *number* |
| `w` | *number* |
| `whiteness?` | *number* |

Defined in: [color.ts:17](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L17)

___

### LAB

Ƭ **LAB**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `a` | *number* |
| `alpha?` | *number* |
| `b` | *number* |
| `blueYellow?` | *number* |
| `l` | *number* |
| `lightness?` | *number* |
| `redGreen?` | *number* |

Defined in: [color.ts:22](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L22)

___

### LCH

Ƭ **LCH**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `c` | *number* |
| `chroma?` | *number* |
| `h` | *number* |
| `hue?` | *number* |
| `l` | *number* |
| `lightness?` | *number* |

Defined in: [color.ts:23](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L23)

___

### RGB

Ƭ **RGB**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | *number* |
| `b` | *number* |
| `blue?` | *number* |
| `g` | *number* |
| `green?` | *number* |
| `r` | *number* |
| `red?` | *number* |

Defined in: [color.ts:13](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L13)

___

### XYZ

Ƭ **XYZ**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `X?` | *number* |
| `Y?` | *number* |
| `Z?` | *number* |
| `alpha?` | *number* |
| `x` | *number* |
| `y` | *number* |
| `z` | *number* |

Defined in: [color.ts:21](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L21)

## Properties

### default

• **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | *object* |
| `attributes.blackness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.chroma` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.greyness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.intensity` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.lightness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.saturation` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.value` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `attributes.whiteness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `blackness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `blend` | <T\>(`color1`: T, `color2`: [*Color*](color.md#color), `weight`: *number*) => T |
| `chroma` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `deltaE1976` | (`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)) => *number* |
| `deltaE1994` | (`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)) => *number* |
| `deltaE2000` | (`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)) => *number* |
| `fade` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `greyness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `intensity` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `isDark` | (`color`: [*Color*](color.md#color) \| *string*) => *boolean* |
| `isLight` | (`color`: [*Color*](color.md#color) \| *string*) => *boolean* |
| `lightness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `luminosity` | (`color`: [*Color*](color.md#color)) => *number* |
| `negate` | <T\>(`color`: T) => T |
| `rotate` | <T\>(`color`: T, `degrees`: *number*) => T |
| `saturation` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `scheme` | <T\>(`color`: T, `scheme`: keyof *typeof* schemes) => T[] |
| `to` | (`color`: [*Color*](color.md#color), `space`: *string*) => [*Color*](color.md#color) |
| `toCMY` | (`color`: [*Color*](color.md#color) \| *string*) => [*CMY*](color.md#cmy) |
| `toCMYK` | (`color`: [*Color*](color.md#color) \| *string*) => [*CMYK*](color.md#cmyk) |
| `toHCG` | (`color`: [*Color*](color.md#color) \| *string*) => [*HCG*](color.md#hcg) |
| `toHSI` | (`color`: [*Color*](color.md#color) \| *string*) => [*HSI*](color.md#hsi) |
| `toHSL` | (`color`: [*Color*](color.md#color) \| *string*) => [*HSL*](color.md#hsl) |
| `toHSV` | (`color`: [*Color*](color.md#color) \| *string*) => [*HSV*](color.md#hsv) |
| `toHWB` | (`color`: [*Color*](color.md#color) \| *string*) => [*HWB*](color.md#hwb) |
| `toLAB` | (`color`: [*Color*](color.md#color) \| *string*) => [*LAB*](color.md#lab) |
| `toLCH` | (`color`: [*Color*](color.md#color) \| *string*) => [*LCH*](color.md#lch) |
| `toRGB` | (`color`: [*Color*](color.md#color) \| *string*) => [*RGB*](color.md#rgb) |
| `toXYZ` | (`color`: [*Color*](color.md#color) \| *string*) => [*XYZ*](color.md#xyz) |
| `value` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `whiteness` | <T\>(`color`: T, `amount`: AmountRatio) => T |

## Variables

### attributes

• `Const` **attributes**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blackness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `chroma` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `greyness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `intensity` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `lightness` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `saturation` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `value` | <T\>(`color`: T, `amount`: AmountRatio) => T |
| `whiteness` | <T\>(`color`: T, `amount`: AmountRatio) => T |

Defined in: [color.ts:497](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L497)

___

### colorSpaces

• `Const` **colorSpaces**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CMY` | *typeof* [*cmy*](cmy.cmy-1.md) |
| `CMYK` | *typeof* [*cmyk*](cmyk.cmyk-1.md) |
| `HCG` | *typeof* [*hcg*](hcg.hcg-1.md) |
| `HSI` | *typeof* [*hsi*](hsi.hsi-1.md) |
| `HSL` | *typeof* [*hsl*](hsl.hsl-1.md) |
| `HSV` | *typeof* [*hsv*](hsv.hsv-1.md) |
| `HWB` | *typeof* [*hwb*](hwb.hwb-1.md) |
| `LAB` | *typeof* [*lab*](lab.lab-1.md) |
| `LCH` | *typeof* [*lch*](lch.lch-1.md) |
| `RGB` | *typeof* [*rgb*](rgb.rgb-1.md) |
| `XYZ` | *typeof* [*xyz*](xyz.xyz-1.md) |

Defined in: [color.ts:30](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L30)

## Functions

### blackness

▸ **blackness**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:417](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L417)

___

### blend

▸ **blend**<T\>(`color1`: T, `color2`: [*Color*](color.md#color), `weight?`: *number*): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color1` | T | - |
| `color2` | [*Color*](color.md#color) | - |
| `weight` | *number* | 0.5 |

**Returns:** T

Defined in: [color.ts:446](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L446)

___

### chroma

▸ **chroma**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:423](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L423)

___

### colorDistance

▸ **colorDistance**(`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*Color*](color.md#color) |
| `color2` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:481](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L481)

___

### contrast

▸ **contrast**(`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*Color*](color.md#color) |
| `color2` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:360](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L360)

___

### deltaE1976

▸ **deltaE1976**(`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*Color*](color.md#color) |
| `color2` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:485](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L485)

___

### deltaE1994

▸ **deltaE1994**(`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*Color*](color.md#color) |
| `color2` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:489](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L489)

___

### deltaE2000

▸ **deltaE2000**(`color1`: [*Color*](color.md#color), `color2`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*Color*](color.md#color) |
| `color2` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:493](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L493)

___

### fade

▸ **fade**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:441](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L441)

___

### grayscale

▸ **grayscale**<T\>(`color`: T): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | T |

**Returns:** T

Defined in: [color.ts:476](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L476)

___

### greyness

▸ **greyness**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:429](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L429)

___

### intensity

▸ **intensity**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:435](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L435)

___

### isDark

▸ **isDark**(`color`: [*Color*](color.md#color) \| *string*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** *boolean*

Defined in: [color.ts:369](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L369)

___

### isLight

▸ **isLight**(`color`: [*Color*](color.md#color) \| *string*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** *boolean*

Defined in: [color.ts:376](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L376)

___

### lightness

▸ **lightness**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:399](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L399)

___

### luminosity

▸ **luminosity**(`color`: [*Color*](color.md#color)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) |

**Returns:** *number*

Defined in: [color.ts:351](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L351)

___

### negate

▸ **negate**<T\>(`color`: T): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | T |

**Returns:** T

Defined in: [color.ts:380](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L380)

___

### rotate

▸ **rotate**<T\>(`color`: T, `degrees?`: *number*): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `degrees` | *number* | 10 |

**Returns:** T

Defined in: [color.ts:385](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L385)

___

### saturation

▸ **saturation**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:393](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L393)

___

### scheme

▸ **scheme**<T\>(`color`: T, `scheme`: keyof *typeof* schemes): T[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | T |
| `scheme` | keyof *typeof* schemes |

**Returns:** T[]

Defined in: [color.ts:466](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L466)

___

### to

▸ **to**(`color`: [*Color*](color.md#color), `space`: *string*): [*Color*](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) |
| `space` | *string* |

**Returns:** [*Color*](color.md#color)

Defined in: [color.ts:141](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L141)

___

### toCMY

▸ **toCMY**(`color`: [*Color*](color.md#color) \| *string*): [*CMY*](color.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*CMY*](color.md#cmy)

Defined in: [color.ts:255](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L255)

___

### toCMYK

▸ **toCMYK**(`color`: [*Color*](color.md#color) \| *string*): [*CMYK*](color.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*CMYK*](color.md#cmyk)

Defined in: [color.ts:271](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L271)

___

### toHCG

▸ **toHCG**(`color`: [*Color*](color.md#color) \| *string*): [*HCG*](color.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*HCG*](color.md#hcg)

Defined in: [color.ts:239](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L239)

___

### toHSI

▸ **toHSI**(`color`: [*Color*](color.md#color) \| *string*): [*HSI*](color.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*HSI*](color.md#hsi)

Defined in: [color.ts:207](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L207)

___

### toHSL

▸ **toHSL**(`color`: [*Color*](color.md#color) \| *string*): [*HSL*](color.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*HSL*](color.md#hsl)

Defined in: [color.ts:175](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L175)

___

### toHSV

▸ **toHSV**(`color`: [*Color*](color.md#color) \| *string*): [*HSV*](color.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*HSV*](color.md#hsv)

Defined in: [color.ts:191](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L191)

___

### toHWB

▸ **toHWB**(`color`: [*Color*](color.md#color) \| *string*): [*HWB*](color.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*HWB*](color.md#hwb)

Defined in: [color.ts:223](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L223)

___

### toLAB

▸ **toLAB**(`color`: [*Color*](color.md#color) \| *string*): [*LAB*](color.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*LAB*](color.md#lab)

Defined in: [color.ts:303](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L303)

___

### toLCH

▸ **toLCH**(`color`: [*Color*](color.md#color) \| *string*): [*LCH*](color.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*LCH*](color.md#lch)

Defined in: [color.ts:319](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L319)

___

### toRGB

▸ **toRGB**(`color`: [*Color*](color.md#color) \| *string*): [*RGB*](color.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*RGB*](color.md#rgb)

Defined in: [color.ts:159](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L159)

___

### toXYZ

▸ **toXYZ**(`color`: [*Color*](color.md#color) \| *string*): [*XYZ*](color.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*Color*](color.md#color) \| *string* |

**Returns:** [*XYZ*](color.md#xyz)

Defined in: [color.ts:287](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L287)

___

### value

▸ **value**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:405](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L405)

___

### whiteness

▸ **whiteness**<T\>(`color`: T, `amount?`: AmountRatio): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*Color*](color.md#color) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | T | - |
| `amount` | AmountRatio | 0.25 |

**Returns:** T

Defined in: [color.ts:411](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/color.ts#L411)
