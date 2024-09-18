# Untitled undefined type in ChartToplistSettings Schema

```txt
charts/settings/chart-toplist-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-toplist-settings-schema.json\*](../out/charts/settings/chart-toplist-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartToplistSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                                |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartToplistSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                             |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartToplistSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                             |
| [chartType](#charttype)                               | `string`  | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-charttype.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/chartType")                               |
| [colorMappings](#colormappings)                       | `array`   | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-colormappings.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/colorMappings")                       |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |
| [mainMeasurementSort](#mainmeasurementsort)           | `string`  | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementSort")           |
| [mainMeasurementLimit](#mainmeasurementlimit)         | `integer` | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")         |
| [bar](#bar)                                           | `object`  | Optional | cannot be null | [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar")                                           |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartToplistSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartToplistSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartToplistSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## chartType

冗余字段图表类型，排行榜固定为 bar

`chartType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-charttype.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/chartType")

### chartType Type

`string`

### chartType Constraints

**constant**: the value of this property must be equal to:

```json
"bar"
```

## colorMappings

排行榜规则映射对应颜色配置数据

`colorMappings`

* is optional

* Type: `object[]` ([Details](chart-toplist-settings-schema-allof-1-properties-colormappings-items.md))

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-colormappings.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/colorMappings")

### colorMappings Type

`object[]` ([Details](chart-toplist-settings-schema-allof-1-properties-colormappings-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## mainMeasurementQueryCode

主指标对应的code 名称，在饼图中固定为 A

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

### mainMeasurementQueryCode Type

`string`

### mainMeasurementQueryCode Constraints

**constant**: the value of this property must be equal to:

```json
"A"
```

## mainMeasurementSort

主指标的排序方式

`mainMeasurementSort`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementSort")

### mainMeasurementSort Type

`string`

### mainMeasurementSort Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"top"`    |             |
| `"bottom"` |             |

## mainMeasurementLimit

主指标排序返回数据线的限制条数

`mainMeasurementLimit`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")

### mainMeasurementLimit Type

`integer`

## bar

冗余字段，固定值

`bar`

* is optional

* Type: `object` ([Details](chart-toplist-settings-schema-allof-1-properties-bar.md))

* cannot be null

* defined in: [ChartToplistSettings](chart-toplist-settings-schema-allof-1-properties-bar.md "charts/settings/chart-toplist-settings-schema.json#/allOf/1/properties/bar")

### bar Type

`object` ([Details](chart-toplist-settings-schema-allof-1-properties-bar.md))
