[@technobuddha/library](../../README.md) / [Modules](../Modules.md) / tag

# Module: tag

## Table of contents

### References

- [default](tag.md#default)

### Functions

- [tag](tag.md#tag)

## References

### default

Renames and exports: [tag](tag.md#tag)

## Functions

### tag

▸ **tag**(`input`, `tagName?`, `attributes?`): `string`

Surround text with an HTML tag

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | `string` | `undefined` | The text to surround |
| `tagName` | `string` | `'span'` | The name of the tag |
| `attributes` | `Record`<`string`, `string`\> | `{}` | A dictionary of name value pairs to use for attributes |

#### Returns

`string`

HTML tag with text

#### Defined in

[tag.ts:13](../../src/tag.ts#L13)
