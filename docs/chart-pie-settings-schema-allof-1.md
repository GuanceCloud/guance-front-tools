# Untitled undefined type in ChartPieSettings Schema

```txt
charts/settings/chart-pie-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-pie-settings-schema.json\*](../out/charts/settings/chart-pie-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartPieSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                        |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartPieSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                     |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartPieSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                     |
| [chartType](#charttype)                               | Merged    | Optional | cannot be null | [ChartPieSettings](settings-chart-type-schema.md "charts/settings/settings-chart-type-schema.json#/allOf/1/properties/chartType")                                                          |
| [legendPostion](#legendpostion)                       | `string`  | Optional | cannot be null | [ChartPieSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")                            |
| [enableCombine](#enablecombine)                       | `boolean` | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-enablecombine.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/enableCombine")                       |
| [combine](#combine)                                   | `object`  | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine")                                   |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |
| [mainMeasurementSort](#mainmeasurementsort)           | `string`  | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementSort")           |
| [mainMeasurementLimit](#mainmeasurementlimit)         | `integer` | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")         |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [otherColor](#othercolor)                             | `string`  | Optional | cannot be null | [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-othercolor.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/otherColor")                             |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartPieSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartPieSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartPieSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## chartType

图表对应显示类型。

`chartType`

* is optional

* Type: `string` ([ChartChartType](settings-chart-type-schema.md))

* cannot be null

* defined in: [ChartPieSettings](settings-chart-type-schema.md "charts/settings/settings-chart-type-schema.json#/allOf/1/properties/chartType")

### chartType Type

`string` ([ChartChartType](settings-chart-type-schema.md))

any of

* [Untitled undefined type in ChartChartType](settings-chart-type-schema-anyof-0.md "check type definition")

* [Untitled undefined type in ChartChartType](settings-chart-type-schema-anyof-1.md "check type definition")

## legendPostion

图表图列位置显示配置信息

`legendPostion`

* is optional

* Type: `string` ([CommonChartLegendPositionSettings](_common-settings-legend-position-schema.md))

* cannot be null

* defined in: [ChartPieSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")

### legendPostion Type

`string` ([CommonChartLegendPositionSettings](_common-settings-legend-position-schema.md))

### legendPostion Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"none"`   |             |
| `"bottom"` |             |
| `"right"`  |             |
| `"circle"` |             |

### legendPostion Default Value

The default value is:

```json
"none"
```

## enableCombine

是否开启合并数据项配置

`enableCombine`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-enablecombine.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/enableCombine")

### enableCombine Type

`boolean`

## combine

饼图合并数据项配置

`combine`

* is optional

* Type: `object` ([Details](chart-pie-settings-schema-allof-1-properties-combine.md))

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-combine.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/combine")

### combine Type

`object` ([Details](chart-pie-settings-schema-allof-1-properties-combine.md))

## mainMeasurementQueryCode

主指标对应的code 名称，在饼图中固定为 A

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

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

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementSort")

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

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")

### mainMeasurementLimit Type

`integer`

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## otherColor

饼图没有匹配数据指标，显示的颜色块色值

`otherColor`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartPieSettings](chart-pie-settings-schema-allof-1-properties-othercolor.md "charts/settings/chart-pie-settings-schema.json#/allOf/1/properties/otherColor")

### otherColor Type

`string`
