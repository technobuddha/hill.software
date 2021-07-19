[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / usePrevious

# Module: usePrevious

## Table of contents

### References

- [default](usePrevious.md#default)

### Functions

- [usePrevious](usePrevious.md#useprevious)

## References

### default

Renames and exports: [usePrevious](usePrevious.md#useprevious)

## Functions

### usePrevious

▸ **usePrevious**<`T`\>(`value`): `T` \| `undefined`

Return the 'previous' value of an expression.

On the first render, the value will be `undefined`.  On the second and subsequent renders,
the value returned will be the previous value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` \| (`prevValue`: `T` \| `undefined`) => `T` | The 'current' value, or a function to return the current value |

#### Returns

`T` \| `undefined`

The previous value.

#### Defined in

[usePrevious.ts:13](../../src/usePrevious.ts#L13)
