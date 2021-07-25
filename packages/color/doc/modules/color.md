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

[color.ts:26](../../src/color.ts#L26)

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

[color.ts:640](../../src/color.ts#L640)

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

[color.ts:151](../../src/color.ts#L151)

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

[color.ts:541](../../src/color.ts#L541)

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

[color.ts:517](../../src/color.ts#L517)

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

[color.ts:523](../../src/color.ts#L523)

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

[color.ts:612](../../src/color.ts#L612)

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

[color.ts:462](../../src/color.ts#L462)

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

[color.ts:616](../../src/color.ts#L616)

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

[color.ts:636](../../src/color.ts#L636)

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

[color.ts:624](../../src/color.ts#L624)

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

[color.ts:628](../../src/color.ts#L628)

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

[color.ts:632](../../src/color.ts#L632)

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

[color.ts:620](../../src/color.ts#L620)

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

[color.ts:157](../../src/color.ts#L157)

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

[color.ts:606](../../src/color.ts#L606)

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

[color.ts:529](../../src/color.ts#L529)

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

[color.ts:485](../../src/color.ts#L485)

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

[color.ts:535](../../src/color.ts#L535)

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

[color.ts:469](../../src/color.ts#L469)

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

[color.ts:476](../../src/color.ts#L476)

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

[color.ts:499](../../src/color.ts#L499)

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

[color.ts:453](../../src/color.ts#L453)

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

[color.ts:480](../../src/color.ts#L480)

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

[color.ts:493](../../src/color.ts#L493)

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

[color.ts:598](../../src/color.ts#L598)

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

[color.ts:171](../../src/color.ts#L171)

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

[color.ts:192](../../src/color.ts#L192)

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

[color.ts:341](../../src/color.ts#L341)

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

[color.ts:360](../../src/color.ts#L360)

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

[color.ts:210](../../src/color.ts#L210)

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

[color.ts:322](../../src/color.ts#L322)

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

[color.ts:284](../../src/color.ts#L284)

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

[color.ts:246](../../src/color.ts#L246)

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

[color.ts:265](../../src/color.ts#L265)

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

[color.ts:303](../../src/color.ts#L303)

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

[color.ts:398](../../src/color.ts#L398)

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

[color.ts:417](../../src/color.ts#L417)

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

[color.ts:227](../../src/color.ts#L227)

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

[color.ts:379](../../src/color.ts#L379)

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

[color.ts:505](../../src/color.ts#L505)

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

[color.ts:511](../../src/color.ts#L511)
