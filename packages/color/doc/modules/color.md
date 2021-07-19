[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / color

# Module: color

## Table of contents

### References

- [CMY](color.md#cmy)
- [CMYK](color.md#cmyk)
- [HCG](color.md#hcg)
- [HSI](color.md#hsi)
- [HSL](color.md#hsl)
- [HSV](color.md#hsv)
- [HWB](color.md#hwb)
- [LAB](color.md#lab)
- [LCH](color.md#lch)
- [RGB](color.md#rgb)
- [XYZ](color.md#xyz)
- [partialCMY](color.md#partialcmy)
- [partialCMYK](color.md#partialcmyk)
- [partialHCG](color.md#partialhcg)
- [partialHSI](color.md#partialhsi)
- [partialHSL](color.md#partialhsl)
- [partialHSV](color.md#partialhsv)
- [partialHWB](color.md#partialhwb)
- [partialLAB](color.md#partiallab)
- [partialLCH](color.md#partiallch)
- [partialRGB](color.md#partialrgb)
- [partialXYZ](color.md#partialxyz)

### Type aliases

- [Alpha](color.md#alpha)
- [AmountRatio](color.md#amountratio)
- [Color](color.md#color)
- [ColorFormat](color.md#colorformat)
- [ColorSpecification](color.md#colorspecification)
- [PartialColor](color.md#partialcolor)
- [StringFormat](color.md#stringformat)
- [StringOptions](color.md#stringoptions)

### Properties

- [default](color.md#default)

### Variables

- [attributes](color.md#attributes)
- [colorSpaces](color.md#colorspaces)
- [defaultStringOptions](color.md#defaultstringoptions)

### Functions

- [alpha](color.md#alpha)
- [blackness](color.md#blackness)
- [chroma](color.md#chroma)
- [colorDistance](color.md#colordistance)
- [contrast](color.md#contrast)
- [deltaC](color.md#deltac)
- [deltaCMC](color.md#deltacmc)
- [deltaE1976](color.md#deltae1976)
- [deltaE1994](color.md#deltae1994)
- [deltaE2000](color.md#deltae2000)
- [deltaH](color.md#deltah)
- [getStringOptions](color.md#getstringoptions)
- [grayscale](color.md#grayscale)
- [greyness](color.md#greyness)
- [hue](color.md#hue)
- [intensity](color.md#intensity)
- [isDark](color.md#isdark)
- [isLight](color.md#islight)
- [lightness](color.md#lightness)
- [luminosity](color.md#luminosity)
- [negate](color.md#negate)
- [parse](color.md#parse)
- [saturation](color.md#saturation)
- [scheme](color.md#scheme)
- [string](color.md#string)
- [to](color.md#to)
- [toCMY](color.md#tocmy)
- [toCMYK](color.md#tocmyk)
- [toColor](color.md#tocolor)
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

## References

### CMY

Re-exports: [CMY](cmy.md#cmy)

___

### CMYK

Re-exports: [CMYK](cmyk.md#cmyk)

___

### HCG

Re-exports: [HCG](hcg.md#hcg)

___

### HSI

Re-exports: [HSI](hsi.md#hsi)

___

### HSL

Re-exports: [HSL](hsl.md#hsl)

___

### HSV

Re-exports: [HSV](hsv.md#hsv)

___

### HWB

Re-exports: [HWB](hwb.md#hwb)

___

### LAB

Re-exports: [LAB](lab.md#lab)

___

### LCH

Re-exports: [LCH](lch.md#lch)

___

### RGB

Re-exports: [RGB](rgb.md#rgb)

___

### XYZ

Re-exports: [XYZ](xyz.md#xyz)

___

### partialCMY

Re-exports: [partialCMY](cmy.md#partialcmy)

___

### partialCMYK

Re-exports: [partialCMYK](cmyk.md#partialcmyk)

___

### partialHCG

Re-exports: [partialHCG](hcg.md#partialhcg)

___

### partialHSI

Re-exports: [partialHSI](hsi.md#partialhsi)

___

### partialHSL

Re-exports: [partialHSL](hsl.md#partialhsl)

___

### partialHSV

Re-exports: [partialHSV](hsv.md#partialhsv)

___

### partialHWB

Re-exports: [partialHWB](hwb.md#partialhwb)

___

### partialLAB

Re-exports: [partialLAB](lab.md#partiallab)

___

### partialLCH

Re-exports: [partialLCH](lch.md#partiallch)

___

### partialRGB

Re-exports: [partialRGB](rgb.md#partialrgb)

___

### partialXYZ

Re-exports: [partialXYZ](xyz.md#partialxyz)

## Type aliases

### Alpha

Ƭ **Alpha**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha?` | `number` |

#### Defined in

[color.ts:14](../../src/color.ts#L14)

___

### AmountRatio

Ƭ **AmountRatio**: { `ratio`: `number`  } \| { `amount`: `number`  } \| `number`

#### Defined in

[color.ts:42](../../src/color.ts#L42)

___

### Color

Ƭ **Color**: [`RGB`](rgb.md#rgb) \| [`HSL`](hsl.md#hsl) \| [`HSV`](hsv.md#hsv) \| [`HSI`](hsi.md#hsi) \| [`HWB`](hwb.md#hwb) \| [`HCG`](hcg.md#hcg) \| [`CMY`](cmy.md#cmy) \| [`CMYK`](cmyk.md#cmyk) \| [`XYZ`](xyz.md#xyz) \| [`LAB`](lab.md#lab) \| [`LCH`](lch.md#lch)

#### Defined in

[color.ts:39](../../src/color.ts#L39)

___

### ColorFormat

Ƭ **ColorFormat**: ``"name"`` \| ``"hex"`` \| ``"css"`` \| ``"default"``

#### Defined in

[color.ts:142](../../src/color.ts#L142)

___

### ColorSpecification

Ƭ **ColorSpecification**: [`PartialColor`](color.md#partialcolor) \| `string`

#### Defined in

[color.ts:41](../../src/color.ts#L41)

___

### PartialColor

Ƭ **PartialColor**: [`partialRGB`](rgb.md#partialrgb) \| [`partialHSL`](hsl.md#partialhsl) \| [`partialHSV`](hsv.md#partialhsv) \| [`partialHSI`](hsi.md#partialhsi) \| [`partialHWB`](hwb.md#partialhwb) \| [`partialHCG`](hcg.md#partialhcg) \| [`partialCMY`](cmy.md#partialcmy) \| [`partialCMYK`](cmyk.md#partialcmyk) \| [`partialXYZ`](xyz.md#partialxyz) \| [`partialLAB`](lab.md#partiallab) \| [`partialLCH`](lch.md#partiallch)

#### Defined in

[color.ts:40](../../src/color.ts#L40)

___

### StringFormat

Ƭ **StringFormat**: [`ColorFormat`](color.md#colorformat) \| `Partial`<[`StringOptions`](color.md#stringoptions)\>

#### Defined in

[color.ts:148](../../src/color.ts#L148)

___

### StringOptions

Ƭ **StringOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cssVersion` | ``3`` \| ``4`` |
| `format` | [`ColorFormat`](color.md#colorformat) |
| `hexShorthand` | `boolean` |

#### Defined in

[color.ts:143](../../src/color.ts#L143)

## Properties

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alpha` | (`input`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes` | `Object` |
| `attributes.blackness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.chroma` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.greyness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.intensity` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.lightness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.saturation` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.value` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `attributes.whiteness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `blackness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `chroma` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `colorDistance` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `contrast` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaC` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaCMC` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaE1976` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaE1994` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaE2000` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `deltaH` | (`color1`: [`ColorSpecification`](color.md#colorspecification), `color2`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `grayscale` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`Color`](color.md#color) |
| `greyness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `hue` | (`color`: [`ColorSpecification`](color.md#colorspecification), `degrees`: `number`) => [`Color`](color.md#color) |
| `intensity` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `isDark` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => `boolean` |
| `isLight` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => `boolean` |
| `lightness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `luminosity` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => `number` |
| `negate` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`Color`](color.md#color) |
| `parse` | (`input`: `string`) => [`Color`](color.md#color) |
| `saturation` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `scheme` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => `Record`<`string`, [`Color`](color.md#color)[]\> |
| `string` | (`color`: [`ColorSpecification`](color.md#colorspecification), `format?`: [`StringFormat`](color.md#stringformat)) => [`ColorSpecification`](color.md#colorspecification) |
| `to` | (`color`: [`ColorSpecification`](color.md#colorspecification), `space`: keyof typeof [`colorSpaces`](color.md#colorspaces)) => [`Color`](color.md#color) |
| `toCMY` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`CMY`](cmy.md#cmy) |
| `toCMYK` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`CMYK`](cmyk.md#cmyk) |
| `toHCG` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`HCG`](hcg.md#hcg) |
| `toHSI` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`HSI`](hsi.md#hsi) |
| `toHSL` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`HSL`](hsl.md#hsl) |
| `toHSV` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`HSV`](hsv.md#hsv) |
| `toHWB` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`HWB`](hwb.md#hwb) |
| `toLAB` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`LAB`](lab.md#lab) |
| `toLCH` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`LCH`](lch.md#lch) |
| `toRGB` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`RGB`](rgb.md#rgb) |
| `toXYZ` | (`color`: [`ColorSpecification`](color.md#colorspecification)) => [`XYZ`](xyz.md#xyz) |
| `value` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `whiteness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |

## Variables

### attributes

• `Const` **attributes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blackness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `chroma` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `greyness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `intensity` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `lightness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `saturation` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `value` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |
| `whiteness` | (`color`: [`ColorSpecification`](color.md#colorspecification), `amount`: [`AmountRatio`](color.md#amountratio)) => [`Color`](color.md#color) |

#### Defined in

[color.ts:639](../../src/color.ts#L639)

___

### colorSpaces

• `Const` **colorSpaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CMY` | [`ColorSpace`](color_space.md#colorspace)<[`CMY`](cmy.md#cmy), [`partialCMY`](cmy.md#partialcmy), `internalCMY`\> |
| `CMYK` | [`ColorSpace`](color_space.md#colorspace)<[`CMYK`](cmyk.md#cmyk), [`partialCMYK`](cmyk.md#partialcmyk), `internalCMYK`\> |
| `HCG` | [`ColorSpace`](color_space.md#colorspace)<[`HCG`](hcg.md#hcg), [`partialHCG`](hcg.md#partialhcg), `internalHCG`\> |
| `HSI` | [`ColorSpace`](color_space.md#colorspace)<[`HSI`](hsi.md#hsi), [`partialHSI`](hsi.md#partialhsi), `internalHSI`\> |
| `HSL` | [`ColorSpace`](color_space.md#colorspace)<[`HSL`](hsl.md#hsl), [`partialHSL`](hsl.md#partialhsl), `internalHSL`\> |
| `HSV` | [`ColorSpace`](color_space.md#colorspace)<[`HSV`](hsv.md#hsv), [`partialHSV`](hsv.md#partialhsv), `internalHSV`\> |
| `HWB` | [`ColorSpace`](color_space.md#colorspace)<[`HWB`](hwb.md#hwb), [`partialHWB`](hwb.md#partialhwb), `internalHWB`\> |
| `LAB` | [`ColorSpace`](color_space.md#colorspace)<[`LAB`](lab.md#lab), [`partialLAB`](lab.md#partiallab), `internalLAB`\> |
| `LCH` | [`ColorSpace`](color_space.md#colorspace)<[`LCH`](lch.md#lch), [`partialLCH`](lch.md#partiallch), `internalLCH`\> |
| `RGB` | [`ColorSpace`](color_space.md#colorspace)<[`RGB`](rgb.md#rgb), [`partialRGB`](rgb.md#partialrgb), `internalRGB`\> |
| `XYZ` | [`ColorSpace`](color_space.md#colorspace)<[`XYZ`](xyz.md#xyz), [`partialXYZ`](xyz.md#partialxyz), `internalXYZ`\> |

#### Defined in

[color.ts:47](../../src/color.ts#L47)

___

### defaultStringOptions

• `Let` **defaultStringOptions**: [`StringOptions`](color.md#stringoptions)

#### Defined in

[color.ts:150](../../src/color.ts#L150)

## Functions

### alpha

▸ **alpha**(`input`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:540](../../src/color.ts#L540)

___

### blackness

▸ **blackness**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:516](../../src/color.ts#L516)

___

### chroma

▸ **chroma**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:522](../../src/color.ts#L522)

___

### colorDistance

▸ **colorDistance**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:611](../../src/color.ts#L611)

___

### contrast

▸ **contrast**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:461](../../src/color.ts#L461)

___

### deltaC

▸ **deltaC**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:615](../../src/color.ts#L615)

___

### deltaCMC

▸ **deltaCMC**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:635](../../src/color.ts#L635)

___

### deltaE1976

▸ **deltaE1976**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:623](../../src/color.ts#L623)

___

### deltaE1994

▸ **deltaE1994**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:627](../../src/color.ts#L627)

___

### deltaE2000

▸ **deltaE2000**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:631](../../src/color.ts#L631)

___

### deltaH

▸ **deltaH**(`color1`, `color2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [`ColorSpecification`](color.md#colorspecification) |
| `color2` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:619](../../src/color.ts#L619)

___

### getStringOptions

▸ **getStringOptions**(`so?`): [`StringOptions`](color.md#stringoptions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `so?` | [`StringFormat`](color.md#stringformat) |

#### Returns

[`StringOptions`](color.md#stringoptions)

#### Defined in

[color.ts:156](../../src/color.ts#L156)

___

### grayscale

▸ **grayscale**(`color`): [`Color`](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:605](../../src/color.ts#L605)

___

### greyness

▸ **greyness**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:528](../../src/color.ts#L528)

___

### hue

▸ **hue**(`color`, `degrees?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `degrees` | `number` | `45` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:484](../../src/color.ts#L484)

___

### intensity

▸ **intensity**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:534](../../src/color.ts#L534)

___

### isDark

▸ **isDark**(`color`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`boolean`

#### Defined in

[color.ts:468](../../src/color.ts#L468)

___

### isLight

▸ **isLight**(`color`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`boolean`

#### Defined in

[color.ts:475](../../src/color.ts#L475)

___

### lightness

▸ **lightness**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:498](../../src/color.ts#L498)

___

### luminosity

▸ **luminosity**(`color`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`number`

#### Defined in

[color.ts:452](../../src/color.ts#L452)

___

### negate

▸ **negate**(`color`): [`Color`](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:479](../../src/color.ts#L479)

___

### parse

▸ **parse**(`input`): [`Color`](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:123](../../src/color.ts#L123)

___

### saturation

▸ **saturation**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:492](../../src/color.ts#L492)

___

### scheme

▸ **scheme**(`color`): `Record`<`string`, [`Color`](color.md#color)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

`Record`<`string`, [`Color`](color.md#color)[]\>

#### Defined in

[color.ts:597](../../src/color.ts#L597)

___

### string

▸ **string**(`color`, `format?`): [`ColorSpecification`](color.md#colorspecification)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |
| `format?` | [`StringFormat`](color.md#stringformat) |

#### Returns

[`ColorSpecification`](color.md#colorspecification)

#### Defined in

[color.ts:170](../../src/color.ts#L170)

___

### to

▸ **to**(`color`, `space`): [`Color`](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |
| `space` | keyof typeof [`colorSpaces`](color.md#colorspaces) |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:191](../../src/color.ts#L191)

___

### toCMY

▸ **toCMY**(`color`): [`CMY`](cmy.md#cmy)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`CMY`](cmy.md#cmy)

#### Defined in

[color.ts:340](../../src/color.ts#L340)

___

### toCMYK

▸ **toCMYK**(`color`): [`CMYK`](cmyk.md#cmyk)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`CMYK`](cmyk.md#cmyk)

#### Defined in

[color.ts:359](../../src/color.ts#L359)

___

### toColor

▸ **toColor**(`input`): [`Color`](color.md#color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:209](../../src/color.ts#L209)

___

### toHCG

▸ **toHCG**(`color`): [`HCG`](hcg.md#hcg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`HCG`](hcg.md#hcg)

#### Defined in

[color.ts:321](../../src/color.ts#L321)

___

### toHSI

▸ **toHSI**(`color`): [`HSI`](hsi.md#hsi)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`HSI`](hsi.md#hsi)

#### Defined in

[color.ts:283](../../src/color.ts#L283)

___

### toHSL

▸ **toHSL**(`color`): [`HSL`](hsl.md#hsl)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`HSL`](hsl.md#hsl)

#### Defined in

[color.ts:245](../../src/color.ts#L245)

___

### toHSV

▸ **toHSV**(`color`): [`HSV`](hsv.md#hsv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`HSV`](hsv.md#hsv)

#### Defined in

[color.ts:264](../../src/color.ts#L264)

___

### toHWB

▸ **toHWB**(`color`): [`HWB`](hwb.md#hwb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`HWB`](hwb.md#hwb)

#### Defined in

[color.ts:302](../../src/color.ts#L302)

___

### toLAB

▸ **toLAB**(`color`): [`LAB`](lab.md#lab)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`LAB`](lab.md#lab)

#### Defined in

[color.ts:397](../../src/color.ts#L397)

___

### toLCH

▸ **toLCH**(`color`): [`LCH`](lch.md#lch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`LCH`](lch.md#lch)

#### Defined in

[color.ts:416](../../src/color.ts#L416)

___

### toRGB

▸ **toRGB**(`color`): [`RGB`](rgb.md#rgb)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`RGB`](rgb.md#rgb)

#### Defined in

[color.ts:226](../../src/color.ts#L226)

___

### toXYZ

▸ **toXYZ**(`color`): [`XYZ`](xyz.md#xyz)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) |

#### Returns

[`XYZ`](xyz.md#xyz)

#### Defined in

[color.ts:378](../../src/color.ts#L378)

___

### value

▸ **value**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:504](../../src/color.ts#L504)

___

### whiteness

▸ **whiteness**(`color`, `amount?`): [`Color`](color.md#color)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color` | [`ColorSpecification`](color.md#colorspecification) | `undefined` |
| `amount` | [`AmountRatio`](color.md#amountratio) | `0.25` |

#### Returns

[`Color`](color.md#color)

#### Defined in

[color.ts:510](../../src/color.ts#L510)
