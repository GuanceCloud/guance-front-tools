# Untitled undefined type in ChartSequenceSettings Schema

```txt
charts/settings/chart-sequence-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-sequence-settings-schema.json\*](../out/charts/settings/chart-sequence-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartSequenceSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                                  |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartSequenceSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                               |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartSequenceSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                               |
| [showLine](#showline)                                 | `boolean` | Optional | cannot be null | [ChartSequenceSettings](_common-settings-show-line-schema.md "charts/settings/_common-settings-show-line-schema.json#/allOf/1/properties/showLine")                                                       |
| [chartType](#charttype)                               | Merged    | Optional | cannot be null | [ChartSequenceSettings](settings-chart-type-schema.md "charts/settings/settings-chart-type-schema.json#/allOf/1/properties/chartType")                                                                    |
| [showLabel](#showlabel)                               | `boolean` | Optional | cannot be null | [ChartSequenceSettings](_common-settings-show-label-schema.md "charts/settings/_common-settings-show-label-schema.json#/allOf/1/properties/showLabel")                                                    |
| [stackType](#stacktype)                               | `string`  | Optional | cannot be null | [ChartSequenceSettings](_common-settings-stack-type-schema.md "charts/settings/_common-settings-stack-type-schema.json#/allOf/1/properties/stackType")                                                    |
| [openStack](#openstack)                               | `boolean` | Optional | cannot be null | [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-openstack.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/openStack")                               |
| [connectNulls](#connectnulls)                         | `boolean` | Optional | cannot be null | [ChartSequenceSettings](_common-settings-connect-null-schema.md "charts/settings/_common-settings-connect-null-schema.json#/allOf/1/properties/connectNulls")                                             |
| [legendValues](#legendvalues)                         | `array`   | Optional | cannot be null | [ChartSequenceSettings](_common-settings-legend-values-schema.md "charts/settings/_common-settings-legend-values-schema.json#/allOf/1/properties/legendValues")                                           |
| [legendPostion](#legendpostion)                       | `string`  | Optional | cannot be null | [ChartSequenceSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")                                      |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [xAxisShowType](#xaxisshowtype)                       | `string`  | Optional | cannot be null | [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/xAxisShowType")                       |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartSequenceSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartSequenceSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartSequenceSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## showLine

是否开启混合图模式，柱状图或者概览图可以开启该选项。

`showLine`

* is optional

* Type: `boolean` ([CommonChartShowLineSettings](_common-settings-show-line-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-show-line-schema.md "charts/settings/_common-settings-show-line-schema.json#/allOf/1/properties/showLine")

### showLine Type

`boolean` ([CommonChartShowLineSettings](_common-settings-show-line-schema.md))

## chartType

图表对应显示类型。

`chartType`

* is optional

* Type: `string` ([ChartChartType](settings-chart-type-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](settings-chart-type-schema.md "charts/settings/settings-chart-type-schema.json#/allOf/1/properties/chartType")

### chartType Type

`string` ([ChartChartType](settings-chart-type-schema.md))

any of

* [Untitled undefined type in ChartChartType](settings-chart-type-schema-anyof-0.md "check type definition")

* [Untitled undefined type in ChartChartType](settings-chart-type-schema-anyof-1.md "check type definition")

## showLabel

柱状图是否显示，每个柱对应的 value 值

`showLabel`

* is optional

* Type: `boolean` ([CommonChartShowLabelSettings](_common-settings-show-label-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-show-label-schema.md "charts/settings/_common-settings-show-label-schema.json#/allOf/1/properties/showLabel")

### showLabel Type

`boolean` ([CommonChartShowLabelSettings](_common-settings-show-label-schema.md))

## stackType

柱状图堆叠模式

`stackType`

* is optional

* Type: `string` ([CommonChartStackTypeSettings](_common-settings-stack-type-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-stack-type-schema.md "charts/settings/_common-settings-stack-type-schema.json#/allOf/1/properties/stackType")

### stackType Type

`string` ([CommonChartStackTypeSettings](_common-settings-stack-type-schema.md))

### stackType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"time"`    |             |
| `"percent"` |             |

## openStack

是否开启堆叠模式

`openStack`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-openstack.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/openStack")

### openStack Type

`boolean`

## connectNulls



`connectNulls`

* is optional

* Type: `boolean` ([CommonChartConnectNullSettings](_common-settings-connect-null-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-connect-null-schema.md "charts/settings/_common-settings-connect-null-schema.json#/allOf/1/properties/connectNulls")

### connectNulls Type

`boolean` ([CommonChartConnectNullSettings](_common-settings-connect-null-schema.md))

### connectNulls Default Value

The default value is:

```json
true
```

## legendValues



`legendValues`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-legend-values-schema.md "charts/settings/_common-settings-legend-values-schema.json#/allOf/1/properties/legendValues")

### legendValues Type

`string[]`

## legendPostion

图表图列位置显示配置信息

`legendPostion`

* is optional

* Type: `string` ([CommonChartLegendPositionSettings](_common-settings-legend-position-schema.md))

* cannot be null

* defined in: [ChartSequenceSettings](_common-settings-legend-position-schema.md "charts/settings/_common-settings-legend-position-schema.json#/allOf/1/properties/legendPostion")

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

## isTimeInterval

是否开启时间分片，时序图固定开启

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

### isTimeInterval Constraints

**constant**: the value of this property must be equal to:

```json
true
```

## xAxisShowType

横坐标显示数据类型，时序图柱状图固定显示时间

`xAxisShowType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/xAxisShowType")

### xAxisShowType Type

`string`

### xAxisShowType Constraints

**constant**: the value of this property must be equal to:

```json
"time"
```

## mainMeasurementQueryCode

主指标对应的code 名称，在时序图中固定为 A

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartSequenceSettings](chart-sequence-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-sequence-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

### mainMeasurementQueryCode Type

`string`

### mainMeasurementQueryCode Constraints

**constant**: the value of this property must be equal to:

```json
"A"
```
