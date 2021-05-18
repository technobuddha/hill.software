[@technobuddha/library](../../README.md) / [Modules](../Modules.md) / shallowEquals

# Module: shallowEquals

## Table of contents

### References

- [default](shallowequals.md#default)

### Functions

- [shallowEquals](shallowequals.md#shallowequals)

## References

### default

Renames and exports: [shallowEquals](shallowequals.md#shallowequals)

## Functions

### shallowEquals

▸ **shallowEquals**(`objA`: *Record*<string, unknown\> \| ``null`` \| *undefined*, `objB`: *Record*<string, unknown\> \| ``null`` \| *undefined*, `exclude?`: *string*[]): *boolean*

Compare two object for equality.  Testing goes one level deep.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `objA` | *Record*<string, unknown\> \| ``null`` \| *undefined* | - | First object to compare |
| `objB` | *Record*<string, unknown\> \| ``null`` \| *undefined* | - | Second object to compare |
| `exclude` | *string*[] | [] | Array of key names to exclude from the comparison |

**Returns:** *boolean*

true if the two objects have the same members

Defined in: [shallowEquals.ts:16](../../src/shallowEquals.ts#L16)