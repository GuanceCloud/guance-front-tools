# Untitled undefined type in ChartSinglestatSettings Schema

```txt
charts/settings/chart-singlestat-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-singlestat-settings-schema.json\*](../out/charts/settings/chart-singlestat-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                | Type          | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :-------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [alias](#alias)                         | `array`       | Optional | cannot be null | [ChartSinglestatSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                        |
| [colors](#colors)                       | `array`       | Optional | cannot be null | [ChartSinglestatSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                     |
| [levels](#levels)                       | `array`       | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-levels.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/levels")                       |
| [mappings](#mappings)                   | `array`       | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings")                   |
| [showLine](#showline)                   | `boolean`     | Optional | cannot be null | [ChartSinglestatSettings](_common-settings-show-line-schema.md "charts/settings/_common-settings-show-line-schema.json#/allOf/1/properties/showLine")                                             |
| [isTimeInterval](#istimeinterval)       | `boolean`     | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/isTimeInterval")       |
| [xAxisShowType](#xaxisshowtype)         | `string`      | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/xAxisShowType")         |
| [fontColor](#fontcolor)                 | `string`      | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-fontcolor.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/fontColor")                 |
| [bgColor](#bgcolor)                     | `string`      | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-bgcolor.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/bgColor")                     |
| [sequenceChartType](#sequencecharttype) | Not specified | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-sequencecharttype.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/sequenceChartType") |
| [showLineAxis](#showlineaxis)           | `boolean`     | Optional | cannot be null | [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-showlineaxis.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/showLineAxis")           |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartSinglestatSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartSinglestatSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

概览图规则映射对应颜色配置数据

`levels`

* is optional

* Type: `object[]` ([Details](chart-singlestat-settings-schema-allof-1-properties-levels-items.md))

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-levels.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](chart-singlestat-settings-schema-allof-1-properties-levels-items.md))

## mappings

概览图规则映射对应显示指标配置

`mappings`

* is optional

* Type: `object[]` ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items.md))

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-mappings.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/mappings")

### mappings Type

`object[]` ([Details](chart-singlestat-settings-schema-allof-1-properties-mappings-items.md))

## showLine

是否开启混合图模式，柱状图或者概览图可以开启该选项。

`showLine`

* is optional

* Type: `boolean` ([CommonChartShowLineSettings](_common-settings-show-line-schema.md))

* cannot be null

* defined in: [ChartSinglestatSettings](_common-settings-show-line-schema.md "charts/settings/_common-settings-show-line-schema.json#/allOf/1/properties/showLine")

### showLine Type

`boolean` ([CommonChartShowLineSettings](_common-settings-show-line-schema.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## xAxisShowType

横坐标显示数据类型，时序图柱状图固定显示时间

`xAxisShowType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-xaxisshowtype.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/xAxisShowType")

### xAxisShowType Type

`string`

### xAxisShowType Constraints

**constant**: the value of this property must be equal to:

```json
"time"
```

## fontColor

字体颜色的色值

`fontColor`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-fontcolor.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/fontColor")

### fontColor Type

`string`

## bgColor

概览图背景颜色色值

`bgColor`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-bgcolor.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/bgColor")

### bgColor Type

`string`

## sequenceChartType

混合图开启后，显示背景图表类型，可以选择柱状图或者折线图

`sequenceChartType`

* is optional

* Type: unknown

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-sequencecharttype.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/sequenceChartType")

### sequenceChartType Type

unknown

### sequenceChartType Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"line"` |             |
| `"bar"`  |             |

## showLineAxis

混合图开启后，是否显示背景图表的坐标轴

`showLineAxis`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartSinglestatSettings](chart-singlestat-settings-schema-allof-1-properties-showlineaxis.md "charts/settings/chart-singlestat-settings-schema.json#/allOf/1/properties/showLineAxis")

### showLineAxis Type

`boolean`
