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
- [space](util.md#space)

### Functions

- [approxEq](util.md#approxeq)
- [getAngle](util.md#getangle)
- [getNumber](util.md#getnumber)
- [getPercent](util.md#getpercent)
- [modulo](util.md#modulo)
- [re](util.md#re)
- [round](util.md#round)
- [toDegrees](util.md#todegrees)
- [toRadians](util.md#toradians)

## Variables

### alpha

• `Const` **alpha**: *RegExp*

Defined in: [util.ts:45](../../src/util.ts#L45)

___

### angle

• `Const` **angle**: *RegExp*

Defined in: [util.ts:44](../../src/util.ts#L44)

___

### cp

• `Const` **cp**: *RegExp*

Defined in: [util.ts:40](../../src/util.ts#L40)

___

### num

• `Const` **num**: *RegExp*

Defined in: [util.ts:41](../../src/util.ts#L41)

___

### number

• `Const` **number**: *RegExp*

Defined in: [util.ts:42](../../src/util.ts#L42)

___

### op

• `Const` **op**: *RegExp*

Defined in: [util.ts:39](../../src/util.ts#L39)

___

### percent

• `Const` **percent**: *RegExp*

Defined in: [util.ts:43](../../src/util.ts#L43)

___

### sep

• `Const` **sep**: *RegExp*

Defined in: [util.ts:37](../../src/util.ts#L37)

___

### space

• `Const` **space**: *RegExp*

Defined in: [util.ts:38](../../src/util.ts#L38)

## Functions

### approxEq

▸ **approxEq**(`a`: *number*, `b`: *number*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | *number* |
| `b` | *number* |

**Returns:** *boolean*

Defined in: [util.ts:7](../../src/util.ts#L7)

___

### getAngle

▸ **getAngle**(`input`: *string*, `precision?`: *number*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | *string* | - |
| `precision` | *number* | 2 |

**Returns:** *number*

Defined in: [util.ts:53](../../src/util.ts#L53)

___

### getNumber

▸ **getNumber**(`input`: *string*, `precision?`: *number*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | *string* | - |
| `precision` | *number* | 2 |

**Returns:** *number*

Defined in: [util.ts:65](../../src/util.ts#L65)

___

### getPercent

▸ **getPercent**(`input`: *string*, `scale`: *number*, `precision?`: *number*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | *string* | - |
| `scale` | *number* | - |
| `precision` | *number* | 2 |

**Returns:** *number*

Defined in: [util.ts:47](../../src/util.ts#L47)

___

### modulo

▸ **modulo**(`dividend`: *number*, `divisor`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `dividend` | *number* |
| `divisor` | *number* |

**Returns:** *number*

Defined in: [util.ts:2](../../src/util.ts#L2)

___

### re

▸ **re**(`template`: TemplateStringsArray, ...`args`: RegExp[]): RegExp

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | TemplateStringsArray |
| `...args` | RegExp[] |

**Returns:** RegExp

Defined in: [util.ts:26](../../src/util.ts#L26)

___

### round

▸ **round**(`n`: *number*, `precision`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |
| `precision` | *number* |

**Returns:** *number*

Defined in: [util.ts:19](../../src/util.ts#L19)

___

### toDegrees

▸ **toDegrees**(`angle`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | *number* |

**Returns:** *number*

Defined in: [util.ts:11](../../src/util.ts#L11)

___

### toRadians

▸ **toRadians**(`angle`: *number*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | *number* |

**Returns:** *number*

Defined in: [util.ts:15](../../src/util.ts#L15)
