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

▸ **useWindowSize**(): `Size` & { `count`: `number`  }

Gets the current window size, including the dimensions of the scroll bars.

If the actual size of the window is unimportant, it also returns a count of how many times the window
has been resized since the first render.

#### Returns

`Size` & { `count`: `number`  }

[{ width, height, scrollbarWidth, scrollbarHeight, count }

#### Defined in

[useWindowSize.ts:14](../../src/useWindowSize.ts#L14)
