# Untitled undefined type in ChartSankeySettings Schema

```txt
charts/settings/chart-sankey-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-sankey-settings-schema.json\*](../out/charts/settings/chart-sankey-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                      |
| :-------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [alias](#alias)                   | `array`   | Optional | cannot be null | [ChartSankeySettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                          |
| [colors](#colors)                 | `array`   | Optional | cannot be null | [ChartSankeySettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                       |
| [levels](#levels)                 | `array`   | Optional | cannot be null | [ChartSankeySettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                       |
| [isTimeInterval](#istimeinterval) | `boolean` | Optional | cannot be null | [ChartSankeySettings](chart-sankey-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-sankey-settings-schema.json#/allOf/1/properties/isTimeInterval") |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartSankeySettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartSankeySettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartSankeySettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartSankeySettings](chart-sankey-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-sankey-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

### isTimeInterval Default Value

The default value is:

```json
true
```
