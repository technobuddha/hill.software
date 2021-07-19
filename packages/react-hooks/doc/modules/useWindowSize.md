[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / useWindowSize

# Module: useWindowSize

## Table of contents

### References

- [default](useWindowSize.md#default)

### Functions

- [useWindowSize](useWindowSize.md#usewindowsize)

## References

### default

Renames and exports: [useWindowSize](useWindowSize.md#usewindowsize)

## Functions

### useWindowSize

▸ **useWindowSize**(): `Object`

Gets the current window size, including the dimensions of the scroll bars.

If the actual size of the window is unimportant, it also returns a count of how many times the window
has been resized since the first render.

#### Returns

`Object`

[{ width, height, scrollbarWidth, scrollbarHeight, count }

| Name | Type |
| :------ | :------ |
| `count` | `number` |
| `height` | `number` |
| `scrollbarHeight` | `number` |
| `scrollbarWidth` | `number` |
| `width` | `number` |

#### Defined in

[useWindowSize.ts:13](../../src/useWindowSize.ts#L13)
