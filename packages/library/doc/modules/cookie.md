[@technobuddha/library](../../README.md) / [Modules](../Modules.md) / cookie

# Module: cookie

## Table of contents

### Properties

- [default](cookie.md#default)

### Functions

- [add](cookie.md#add)
- [del](cookie.md#del)
- [get](cookie.md#get)
- [names](cookie.md#names)
- [parse](cookie.md#parse)

## Properties

### default

• **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add` | (`name`: *string*, `value`: *string*, `expires?`: *string* \| Date) => *void* |
| `del` | (`name`: *string*) => *void* |
| `get` | (`name`: *string*) => *string* \| *undefined* |
| `init` | () => *void* |
| `names` | () => *string*[] |

## Functions

### add

▸ **add**(`name`: *string*, `value`: *string*, `expires?`: *string* \| Date): *void*

Add or update a cookie

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | name of the cookie |
| `value` | *string* | value of the cookie |
| `expires?` | *string* \| Date | Expiration date |

**Returns:** *void*

Defined in: [cookie.ts:53](../../src/cookie.ts#L53)

___

### del

▸ **del**(`name`: *string*): *void*

Delete a cookie

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

Defined in: [cookie.ts:71](../../src/cookie.ts#L71)

___

### get

▸ **get**(`name`: *string*): *string* \| *undefined*

Get the value of a cookie

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | name of a cookie |

**Returns:** *string* \| *undefined*

Defined in: [cookie.ts:31](../../src/cookie.ts#L31)

___

### names

▸ **names**(): *string*[]

Get the names of all cookies

**Returns:** *string*[]

array of cookie names

Defined in: [cookie.ts:41](../../src/cookie.ts#L41)

___

### parse

▸ **parse**(`input`: *string*): *void*

Parse a string containing cookies for use by other cookie method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | *string* | string to be decoded |

**Returns:** *void*

Defined in: [cookie.ts:18](../../src/cookie.ts#L18)