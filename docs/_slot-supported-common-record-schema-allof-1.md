# Untitled undefined type in SlotSupportedCommonRecordSchema Schema

```txt
session-replay/common/_slot-supported-common-record-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_slot-supported-common-record-schema.json\*](../out/session-replay/common/_slot-supported-common-record-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :---------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [slotId](#slotid) | `string` | Optional | cannot be null | [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1-properties-slotid.md "session-replay/common/_slot-supported-common-record-schema.json#/allOf/1/properties/slotId") |

## slotId

Unique ID of the slot that generated this record.

`slotId`

* is optional

* Type: `string`

* cannot be null

* defined in: [SlotSupportedCommonRecordSchema](_slot-supported-common-record-schema-allof-1-properties-slotid.md "session-replay/common/_slot-supported-common-record-schema.json#/allOf/1/properties/slotId")

### slotId Type

`string`

### slotId Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
