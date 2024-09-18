# StyleSheet Schema

```txt
session-replay/browser/stylesheet-schema.json
```

Browser-specific. Schema of a StyleSheet

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [stylesheet-schema.json](../out/session-replay/browser/stylesheet-schema.json "open original schema") |

## StyleSheet Type

`object` ([StyleSheet](stylesheet-schema.md))

# StyleSheet Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :-------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [cssRules](#cssrules) | `array`   | Required | cannot be null | [StyleSheet](stylesheet-schema-properties-cssrules.md "session-replay/browser/stylesheet-schema.json#/properties/cssRules") |
| [media](#media)       | `array`   | Optional | cannot be null | [StyleSheet](stylesheet-schema-properties-media.md "session-replay/browser/stylesheet-schema.json#/properties/media")       |
| [disabled](#disabled) | `boolean` | Optional | cannot be null | [StyleSheet](stylesheet-schema-properties-disabled.md "session-replay/browser/stylesheet-schema.json#/properties/disabled") |

## cssRules

CSS rules applied (rule.cssText)

`cssRules`

* is required

* Type: `string[]`

* cannot be null

* defined in: [StyleSheet](stylesheet-schema-properties-cssrules.md "session-replay/browser/stylesheet-schema.json#/properties/cssRules")

### cssRules Type

`string[]`

## media

MediaList of the stylesheet

`media`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [StyleSheet](stylesheet-schema-properties-media.md "session-replay/browser/stylesheet-schema.json#/properties/media")

### media Type

`string[]`

## disabled

Is the stylesheet disabled

`disabled`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [StyleSheet](stylesheet-schema-properties-disabled.md "session-replay/browser/stylesheet-schema.json#/properties/disabled")

### disabled Type

`boolean`
