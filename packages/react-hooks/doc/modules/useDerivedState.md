[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / useDerivedState

# Module: useDerivedState

## Table of contents

### References

- [default](useDerivedState.md#default)

### Functions

- [useDerivedState](useDerivedState.md#usederivedstate)

## References

### default

Renames and exports: [useDerivedState](useDerivedState.md#usederivedstate)

## Functions

### useDerivedState

▸ **useDerivedState**<`T`\>(`initialValue`, `deps`): [`T`, `React.Dispatch`<`React.SetStateAction`<`T`\>\>]

Similar to `React.useState`, returns a stateful value and a function to update it.  Whenever the `deps` change, the
value will be re-initialized from `initialValue`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialValue` | `T` \| (`prevValue`: `T`) => `T` | - |
| `deps` | readonly `unknown`[] | Array of values that when changed will cause a re-initialization of the value |

#### Returns

[`T`, `React.Dispatch`<`React.SetStateAction`<`T`\>\>]

#### Defined in

[useDerivedState.ts:13](../../src/useDerivedState.ts#L13)
