[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / useLocal

# Module: useLocal

## Table of contents

### References

- [default](useLocal.md#default)

### Functions

- [useLocal](useLocal.md#uselocal)

## References

### default

Renames and exports: [useLocal](useLocal.md#uselocal)

## Functions

### useLocal

▸ **useLocal**<`T`\>(`initialState`): [`T`, (`set`: `T` \| (`prev`: `T`) => `T`) => `void`]

Similar to `React.useState`, returns a stateful value and a function to update it.  Unlike `React.useState`
updating the state will not cause a re-render.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `T` \| () => `T` | Initial state value, or a function that returns the initial state value. |

#### Returns

[`T`, (`set`: `T` \| (`prev`: `T`) => `T`) => `void`]

#### Defined in

[useLocal.ts:11](../../src/useLocal.ts#L11)
