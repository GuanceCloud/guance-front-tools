# Untitled undefined type in ChartScatterBubbleSettings Schema

```txt
charts/settings/chart-scatter-bubble-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-scatter-bubble-settings-schema.json\*](../out/charts/settings/chart-scatter-bubble-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :-------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                   | `array`   | Optional | cannot be null | [ChartScatterBubbleSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                          |
| [colors](#colors)                 | `array`   | Optional | cannot be null | [ChartScatterBubbleSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                       |
| [isTimeInterval](#istimeinterval) | `boolean` | Optional | cannot be null | [ChartScatterBubbleSettings](chart-scatter-bubble-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-scatter-bubble-settings-schema.json#/allOf/1/properties/isTimeInterval") |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartScatterBubbleSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartScatterBubbleSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartScatterBubbleSettings](chart-scatter-bubble-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-scatter-bubble-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`
