[@technobuddha/react-hooks](../..) / [Modules](../Modules.md) / useLocal

# Module: useLocal

## Table of contents

### References

- [default](uselocal.md#default)

### Functions

- [useLocal](uselocal.md#uselocal)

## References

### default

Renames and exports: [useLocal](uselocal.md#uselocal)

## Functions

### useLocal

▸ **useLocal**<T\>(`initialState`: T \| () => T): [T, (`set`: T \| (`prev`: T) => T) => *void*]

Similar to **React.useState**, returns a stateful value and a function to update it.  Unlike **React.useState**
updating the state will not cause a re-render.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | T \| () => T | Initial state value, or a function that returns the initial state value. |

**Returns:** [T, (`set`: T \| (`prev`: T) => T) => *void*]

Defined in: [src/useLocal.ts:11](../../src/useLocal.ts#L11)
