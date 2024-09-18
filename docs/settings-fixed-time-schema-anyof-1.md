# Untitled object in undefined Schema

```txt
charts/settings/settings-fixed-time-schema.json#/anyOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-fixed-time-schema.json\*](../out/charts/settings/settings-fixed-time-schema.json "open original schema") |

## 1 Type

`object` ([Details](settings-fixed-time-schema-anyof-1.md))

# 1 Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                    |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [key](#key)             | `string`  | Required | cannot be null | [Untitled schema](settings-fixed-time-schema-anyof-1-properties-key.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/key")             |
| [originKey](#originkey) | `string`  | Required | cannot be null | [Untitled schema](settings-fixed-time-schema-anyof-1-properties-originkey.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/originKey") |
| [startTime](#starttime) | `integer` | Required | cannot be null | [Untitled schema](settings-fixed-time-schema-anyof-1-properties-starttime.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/startTime") |
| [endTime](#endtime)     | `integer` | Required | cannot be null | [Untitled schema](settings-fixed-time-schema-anyof-1-properties-endtime.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/endTime")     |
| [text](#text)           | `string`  | Required | cannot be null | [Untitled schema](settings-fixed-time-schema-anyof-1-properties-text.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/text")           |

## key



`key`

* is required

* Type: `string`

* cannot be null

* defined in: [Untitled schema](settings-fixed-time-schema-anyof-1-properties-key.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/key")

### key Type

`string`

### key Constraints

**constant**: the value of this property must be equal to:

```json
"range"
```

## originKey



`originKey`

* is required

* Type: `string`

* cannot be null

* defined in: [Untitled schema](settings-fixed-time-schema-anyof-1-properties-originkey.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/originKey")

### originKey Type

`string`

### originKey Constraints

**constant**: the value of this property must be equal to:

```json
"range"
```

## startTime

开始时间时间戳，单位毫秒

`startTime`

* is required

* Type: `integer`

* cannot be null

* defined in: [Untitled schema](settings-fixed-time-schema-anyof-1-properties-starttime.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/startTime")

### startTime Type

`integer`

## endTime

结束时间时间戳，单位毫秒

`endTime`

* is required

* Type: `integer`

* cannot be null

* defined in: [Untitled schema](settings-fixed-time-schema-anyof-1-properties-endtime.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/endTime")

### endTime Type

`integer`

## text

开始时间与结束时间的显示格式

`text`

* is required

* Type: `string`

* cannot be null

* defined in: [Untitled schema](settings-fixed-time-schema-anyof-1-properties-text.md "charts/settings/settings-fixed-time-schema.json#/anyOf/1/properties/text")

### text Type

`string`

### text Examples

```json
"2024/09/09 00:00:00 ~ 2024/09/09 16:25:33"
```
