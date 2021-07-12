[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / color-compare

# Module: color-compare

## Table of contents

### Properties

- [default](color_compare.md#default)

### Functions

- [colorDistance](color_compare.md#colordistance)
- [deltaC](color_compare.md#deltac)
- [deltaCMC](color_compare.md#deltacmc)
- [deltaE1976](color_compare.md#deltae1976)
- [deltaE1994](color_compare.md#deltae1994)
- [deltaE2000](color_compare.md#deltae2000)
- [deltaH](color_compare.md#deltah)

## Properties

### default

• **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `colorDistance` | (`color`: [*RGB*](rgb.md#rgb), `other`: [*RGB*](rgb.md#rgb)) => *number* |
| `deltaC` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |
| `deltaCMC` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |
| `deltaE1976` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |
| `deltaE1994` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |
| `deltaE2000` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |
| `deltaH` | (`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)) => *number* |

## Functions

### colorDistance

▸ **colorDistance**(`color`: [*RGB*](rgb.md#rgb), `other`: [*RGB*](rgb.md#rgb)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [*RGB*](rgb.md#rgb) |
| `other` | [*RGB*](rgb.md#rgb) |

**Returns:** *number*

Defined in: [color-compare.ts:7](../../src/color-compare.ts#L7)

___

### deltaC

▸ **deltaC**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:25](../../src/color-compare.ts#L25)

___

### deltaCMC

▸ **deltaCMC**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:151](../../src/color-compare.ts#L151)

___

### deltaE1976

▸ **deltaE1976**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:39](../../src/color-compare.ts#L39)

___

### deltaE1994

▸ **deltaE1994**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:45](../../src/color-compare.ts#L45)

___

### deltaE2000

▸ **deltaE2000**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:81](../../src/color-compare.ts#L81)

___

### deltaH

▸ **deltaH**(`color1`: [*LAB*](lab.md#lab), `color2`: [*LAB*](lab.md#lab)): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `color1` | [*LAB*](lab.md#lab) |
| `color2` | [*LAB*](lab.md#lab) |

**Returns:** *number*

Defined in: [color-compare.ts:32](../../src/color-compare.ts#L32)
