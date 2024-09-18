# Untitled object in MobileFullSnapshotRecord Schema

```txt
session-replay/mobile/full-snapshot-record-schema.json#/allOf/1/properties/data
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | Read only           | [full-snapshot-record-schema.json\*](../out/session-replay/mobile/full-snapshot-record-schema.json "open original schema") |

## data Type

`object` ([Details](full-snapshot-record-schema-2-allof-1-properties-data.md))

# data Properties

| Property                  | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :------------------------ | :------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [wireframes](#wireframes) | `array` | Required | cannot be null | [MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1-properties-data-properties-wireframes.md "session-replay/mobile/full-snapshot-record-schema.json#/allOf/1/properties/data/properties/wireframes") |

## wireframes

The Wireframes contained by this Record.

`wireframes`

* is required

* Type: `object[]` ([Wireframe](wireframe-schema.md))

* cannot be null

* defined in: [MobileFullSnapshotRecord](full-snapshot-record-schema-2-allof-1-properties-data-properties-wireframes.md "session-replay/mobile/full-snapshot-record-schema.json#/allOf/1/properties/data/properties/wireframes")

### wireframes Type

`object[]` ([Wireframe](wireframe-schema.md))

### wireframes Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
