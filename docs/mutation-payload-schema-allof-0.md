# Untitled undefined type in BrowserMutationPayload Schema

```txt
session-replay/browser/mutation-payload-schema.json#/allOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [mutation-payload-schema.json\*](../out/session-replay/browser/mutation-payload-schema.json "open original schema") |

## 0 Type

unknown

# 0 Properties

| Property                  | Type    | Required | Nullable       | Defined by                                                                                                                                                              |
| :------------------------ | :------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [adds](#adds)             | `array` | Required | cannot be null | [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-adds.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/adds")             |
| [removes](#removes)       | `array` | Required | cannot be null | [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-removes.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/removes")       |
| [attributes](#attributes) | `array` | Required | cannot be null | [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-attributes.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/attributes") |
| [texts](#texts)           | `array` | Required | cannot be null | [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-texts.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/texts")           |

## adds

Contains the newly added nodes.

`adds`

* is required

* Type: `object[]` ([AddedNodeMutation](node-added-mutation-schema.md))

* cannot be null

* defined in: [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-adds.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/adds")

### adds Type

`object[]` ([AddedNodeMutation](node-added-mutation-schema.md))

## removes

Contains the removed nodes.

`removes`

* is required

* Type: `object[]` ([RemovedNodeMutation](node-removed-mutation-schema.md))

* cannot be null

* defined in: [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-removes.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/removes")

### removes Type

`object[]` ([RemovedNodeMutation](node-removed-mutation-schema.md))

## attributes

Contains the updated attribute mutations.

`attributes`

* is required

* Type: `object[]` ([AttributeMutation](attribute-mutation-schema.md))

* cannot be null

* defined in: [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-attributes.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/attributes")

### attributes Type

`object[]` ([AttributeMutation](attribute-mutation-schema.md))

## texts

Contains the updated text mutations.

`texts`

* is required

* Type: `object[]` ([TextMutation](text-mutation-schema.md))

* cannot be null

* defined in: [BrowserMutationPayload](mutation-payload-schema-allof-0-properties-texts.md "session-replay/browser/mutation-payload-schema.json#/allOf/0/properties/texts")

### texts Type

`object[]` ([TextMutation](text-mutation-schema.md))
