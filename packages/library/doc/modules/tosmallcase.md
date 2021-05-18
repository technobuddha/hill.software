[@technobuddha/library](../../README.md) / [Modules](../Modules.md) / toSmallCase

# Module: toSmallCase

## Table of contents

### References

- [default](tosmallcase.md#default)

### Type aliases

- [Options](tosmallcase.md#options)

### Functions

- [toSmallCase](tosmallcase.md#tosmallcase)

## References

### default

Renames and exports: [toSmallCase](tosmallcase.md#tosmallcase)

## Type aliases

### Options

Ƭ **Options**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `upperCase?` | *boolean* | Convert other characters in the string to upper case |

Defined in: [toSmallCase.ts:1](../../src/toSmallCase.ts#L1)

## Functions

### toSmallCase

▸ **toSmallCase**(`input`: *string*, `__namedParameters?`: [*Options*](tosmallcase.md#options)): *string*

Convert the first letter of a string to lower case

**`default`** upperCase false

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `input` | *string* | - | The string to make small case |
| `__namedParameters` | [*Options*](tosmallcase.md#options) | {} | - |

**Returns:** *string*

the string in small case

Defined in: [toSmallCase.ts:13](../../src/toSmallCase.ts#L13)