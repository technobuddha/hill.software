[@technobuddha/react-hooks](../../README.md) / [Modules](../Modules.md) / useWindowSize

# Module: useWindowSize

## Table of contents

### References

- [default](usewindowsize.md#default)

### Functions

- [useWindowSize](usewindowsize.md#usewindowsize)

## References

### default

Renames and exports: [useWindowSize](usewindowsize.md#usewindowsize)

## Functions

### useWindowSize

▸ **useWindowSize**(): *object*

Gets the current window size, including the dimensions of the scroll bars.

If the actual size of the window is unimportant, it also returns a count of how many times the window
has been resized since the first render.

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `count` | *number* |
| `height` | *number* |
| `scrollbarHeight` | *number* |
| `scrollbarWidth` | *number* |
| `width` | *number* |

[{ width, height, scrollbarWidth, scrollbarHeight, count }

Defined in: [useWindowSize.ts:13](../../src/useWindowSize.ts#L13)
