[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / useLocalStorage

# Module: useLocalStorage

## Table of contents

### References

- [default](uselocalstorage.md#default)

### Functions

- [useLocalStorage](uselocalstorage.md#uselocalstorage)

## References

### default

Renames and exports: [useLocalStorage](uselocalstorage.md#uselocalstorage)

## Functions

### useLocalStorage

▸ **useLocalStorage**<T\>(`key`: *string*, `initialState`: T): readonly [T, (`newValue`: T \| (`oldValue`: T) => T) => *void*]

Similar to `React.useState`, returns a stateful value and a function to update it.  The state
value is also saved in `localStorage`.

When initializing, if the key exists in `localStorage` the stored value is used, otherwise
the `initialState` value is used.

NOTE: values stored in localStorage are serialized using JSON.stringify.  Some types of objects
will not serialize and deserialize correctly.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | *string* | The keyname to use for storing the value in `localStorage` |
| `initialState` | T | Initial state value, or a function that returns the initial state value. |

**Returns:** readonly [T, (`newValue`: T \| (`oldValue`: T) => T) => *void*]

Defined in: [useLocalStorage.ts:18](../../src/useLocalStorage.ts#L18)
