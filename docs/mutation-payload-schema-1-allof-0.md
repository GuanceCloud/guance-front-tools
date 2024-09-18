# Untitled undefined type in MobileMutationPayload Schema

```txt
session-replay/mobile/mutation-payload-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mutation-payload-schema.json\*](../out/session-replay/mobile/mutation-payload-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property            | Type    | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------ | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [adds](#adds)       | `array` | Optional | cannot be null | [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-adds.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/adds")       |
| [removes](#removes) | `array` | Optional | cannot be null | [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-removes.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/removes") |
| [updates](#updates) | `array` | Optional | cannot be null | [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-updates.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/updates") |

## adds

Contains the newly added wireframes.

`adds`

* is optional

* Type: `object[]` ([Details](mutation-payload-schema-1-allof-0-properties-adds-items.md))

* cannot be null

* defined in: [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-adds.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/adds")

### adds Type

`object[]` ([Details](mutation-payload-schema-1-allof-0-properties-adds-items.md))

### adds Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## removes

Contains the removed wireframes as an array of ids.

`removes`

* is optional

* Type: `object[]` ([Details](mutation-payload-schema-1-allof-0-properties-removes-items.md))

* cannot be null

* defined in: [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-removes.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/removes")

### removes Type

`object[]` ([Details](mutation-payload-schema-1-allof-0-properties-removes-items.md))

### removes Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## updates

Contains the updated wireframes mutations.

`updates`

* is optional

* Type: `object[]` ([WireframeUpdateMutation](wireframe-update-mutation-schema.md))

* cannot be null

* defined in: [MobileMutationPayload](mutation-payload-schema-1-allof-0-properties-updates.md "session-replay/mobile/mutation-payload-schema.json#/allOf/0/properties/updates")

### updates Type

`object[]` ([WireframeUpdateMutation](wireframe-update-mutation-schema.md))

### updates Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
