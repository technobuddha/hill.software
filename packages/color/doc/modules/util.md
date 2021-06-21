[@technobuddha/color](../../README.md) / [Modules](../Modules.md) / util

# Module: util

## Table of contents

### Variables

- [alpha](util.md#alpha)
- [angle](util.md#angle)
- [cp](util.md#cp)
- [num](util.md#num)
- [number](util.md#number)
- [op](util.md#op)
- [percent](util.md#percent)
- [sep](util.md#sep)

### Functions

- [approxEq](util.md#approxeq)
- [getAngle](util.md#getangle)
- [getNumber](util.md#getnumber)
- [getPercent](util.md#getpercent)
- [hypot](util.md#hypot)
- [modulo](util.md#modulo)
- [re](util.md#re)
- [round](util.md#round)
- [toDegrees](util.md#todegrees)
- [toRadians](util.md#toradians)

## Variables

### alpha

• `Const` **alpha**: *RegExp*

Defined in: [util.ts:48](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L48)

___

### angle

• `Const` **angle**: *RegExp*

Defined in: [util.ts:47](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L47)

___

### cp

• `Const` **cp**: *RegExp*

Defined in: [util.ts:43](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L43)

___

### num

• `Const` **num**: *RegExp*

Defined in: [util.ts:44](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L44)

___

### number

• `Const` **number**: *RegExp*

Defined in: [util.ts:45](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L45)

___

### op

• `Const` **op**: *RegExp*

Defined in: [util.ts:42](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L42)

___

### percent

• `Const` **percent**: *RegExp*

Defined in: [util.ts:46](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L46)

___

### sep

• `Const` **sep**: *RegExp*

Defined in: [util.ts:41](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L41)

## Functions

### approxEq

▸ **approxEq**(`a`: *number*, `b`: *number*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | *number* |
| `b` | *number* |

**Returns:** *boolean*

Defined in: [util.ts:11](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L11)

___

### getAngle

▸ **getAngle**(`input`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** *number*

Defined in: [util.ts:56](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L56)

___

### getNumber

▸ **getNumber**(`input`: *string*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | *string* |

**Returns:** *number*

Defined in: [util.ts:68](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L68)

___

### getPercent

▸ **getPercent**(`input`: *string*, `scale?`: *number*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | *string* | - |
| `scale` | *number* | 100 |

**Returns:** *number*

Defined in: [util.ts:50](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L50)

___

### hypot

▸ **hypot**(...`sides`: *number*[]): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `...sides` | *number*[] |

**Returns:** *number*

Defined in: [util.ts:7](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L7)

___

### modulo

▸ **modulo**(`dividend`: *number*, `divisor`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `dividend` | *number* |
| `divisor` | *number* |

**Returns:** *number*

Defined in: [util.ts:2](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L2)

___

### re

▸ **re**(`template`: TemplateStringsArray, ...`args`: RegExp[]): RegExp

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | TemplateStringsArray |
| `...args` | RegExp[] |

**Returns:** RegExp

Defined in: [util.ts:30](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L30)

___

### round

▸ **round**(`n`: *number*, `precision?`: *number*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `n` | *number* | - |
| `precision` | *number* | 0 |

**Returns:** *number*

Defined in: [util.ts:23](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L23)

___

### toDegrees

▸ **toDegrees**(`angle`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | *number* |

**Returns:** *number*

Defined in: [util.ts:15](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L15)

___

### toRadians

▸ **toRadians**(`angle`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | *number* |

**Returns:** *number*

Defined in: [util.ts:19](https://github.com/technobuddha/hill.software/blob/d33fddd/packages/color/src/util.ts#L19)
