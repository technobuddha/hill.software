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

• `Const` **alpha**: `RegExp`

#### Defined in

[util.ts:46](../../src/util.ts#L46)

___

### angle

• `Const` **angle**: `RegExp`

#### Defined in

[util.ts:45](../../src/util.ts#L45)

___

### cp

• `Const` **cp**: `RegExp`

#### Defined in

[util.ts:41](../../src/util.ts#L41)

___

### num

• `Const` **num**: `RegExp`

#### Defined in

[util.ts:42](../../src/util.ts#L42)

___

### number

• `Const` **number**: `RegExp`

#### Defined in

[util.ts:43](../../src/util.ts#L43)

___

### op

• `Const` **op**: `RegExp`

#### Defined in

[util.ts:40](../../src/util.ts#L40)

___

### percent

• `Const` **percent**: `RegExp`

#### Defined in

[util.ts:44](../../src/util.ts#L44)

___

### sep

• `Const` **sep**: `RegExp`

#### Defined in

[util.ts:38](../../src/util.ts#L38)

___

### space

• `Const` **space**: `RegExp`

#### Defined in

[util.ts:39](../../src/util.ts#L39)

## Functions

### approxEq

▸ **approxEq**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`boolean`

#### Defined in

[util.ts:7](../../src/util.ts#L7)

___

### getAngle

▸ **getAngle**(`input`, `precision?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`number`

#### Defined in

[util.ts:54](../../src/util.ts#L54)

___

### getNumber

▸ **getNumber**(`input`, `precision?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`number`

#### Defined in

[util.ts:66](../../src/util.ts#L66)

___

### getPercent

▸ **getPercent**(`input`, `scale`, `precision?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `scale` | `number` | `undefined` |
| `precision` | `number` | `2` |

#### Returns

`number`

#### Defined in

[util.ts:48](../../src/util.ts#L48)

___

### modulo

▸ **modulo**(`dividend`, `divisor`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dividend` | `number` |
| `divisor` | `number` |

#### Returns

`number`

#### Defined in

[util.ts:2](../../src/util.ts#L2)

___

### re

▸ **re**(`template`, ...`args`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `template` | `TemplateStringsArray` |
| `...args` | `RegExp`[] |

#### Returns

`RegExp`

#### Defined in

[util.ts:26](../../src/util.ts#L26)

___

### round

▸ **round**(`n`, `precision`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `precision` | `number` |

#### Returns

`number`

#### Defined in

[util.ts:19](../../src/util.ts#L19)

___

### toDegrees

▸ **toDegrees**(`angle`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`number`

#### Defined in

[util.ts:11](../../src/util.ts#L11)

___

### toRadians

▸ **toRadians**(`angle`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`number`

#### Defined in

[util.ts:15](../../src/util.ts#L15)
