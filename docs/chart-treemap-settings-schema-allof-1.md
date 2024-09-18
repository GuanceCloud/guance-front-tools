# Untitled undefined type in ChartTreeMapSettings Schema

```txt
charts/settings/chart-treemap-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-treemap-settings-schema.json\*](../out/charts/settings/chart-treemap-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                             |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartTreeMapSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                                |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartTreeMapSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                             |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartTreeMapSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                             |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [showLabel](#showlabel)                               | `boolean` | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showlabel.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showLabel")                               |
| [showPercent](#showpercent)                           | `boolean` | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showpercent.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showPercent")                           |
| [showLabelValue](#showlabelvalue)                     | `boolean` | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showlabelvalue.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showLabelValue")                     |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |
| [mainMeasurementSort](#mainmeasurementsort)           | `string`  | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementSort")           |
| [mainMeasurementLimit](#mainmeasurementlimit)         | `integer` | Optional | cannot be null | [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")         |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartTreeMapSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartTreeMapSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartTreeMapSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## showLabel

图例是否显示标签

`showLabel`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showlabel.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showLabel")

### showLabel Type

`boolean`

### showLabel Default Value

The default value is:

```json
true
```

## showPercent

图例是否显示百分比

`showPercent`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showpercent.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showPercent")

### showPercent Type

`boolean`

## showLabelValue

图例是否显示值

`showLabelValue`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-showlabelvalue.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/showLabelValue")

### showLabelValue Type

`boolean`

### showLabelValue Default Value

The default value is:

```json
true
```

## mainMeasurementQueryCode

选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

### mainMeasurementQueryCode Type

`string`

### mainMeasurementQueryCode Default Value

The default value is:

```json
"A"
```

## mainMeasurementSort

选择指标的排序方式

`mainMeasurementSort`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementSort")

### mainMeasurementSort Type

`string`

### mainMeasurementSort Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"top"`    |             |
| `"bottom"` |             |

## mainMeasurementLimit

选择指标排序返回数据线的限制条数

`mainMeasurementLimit`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartTreeMapSettings](chart-treemap-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-treemap-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")

### mainMeasurementLimit Type

`integer`
