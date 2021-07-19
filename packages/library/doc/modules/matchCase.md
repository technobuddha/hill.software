[@technobuddha/library](../../README.md) / [Modules](../Modules.md) / matchCase

# Module: matchCase

## Table of contents

### References

- [default](matchCase.md#default)

### Functions

- [matchCase](matchCase.md#matchcase)

## References

### default

Renames and exports: [matchCase](matchCase.md#matchcase)

## Functions

### matchCase

▸ **matchCase**(`input`, `target`): `string`

Attempt to convert the input string into the same case as the target string

**`remarks`** The best guess is made to try to figure out what case the target is in:
 * lowercase
 * UPPERCASE
 * Capitalcase
 * sMALLCASE

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The input string |
| `target` | `string` | The target string |

#### Returns

`string`

The input in the case case as the target string

#### Defined in

[matchCase.ts:19](../../src/matchCase.ts#L19)
