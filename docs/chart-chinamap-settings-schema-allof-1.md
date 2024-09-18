# Untitled undefined type in ChartChinaMapSettings Schema

```txt
charts/settings/chart-chinamap-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-chinamap-settings-schema.json\*](../out/charts/settings/chart-chinamap-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartChinaMapSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                                  |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartChinaMapSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                               |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartChinaMapSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                               |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [rangeColorKey](#rangecolorkey)                       | `string`  | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-rangecolorkey.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/rangeColorKey")                       |
| [levelArr](#levelarr)                                 | `array`   | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr")                                 |
| [showLegend](#showlegend)                             | `string`  | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-showlegend.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/showLegend")                             |
| [showTopList](#showtoplist)                           | `boolean` | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-showtoplist.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/showTopList")                           |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |
| [provinceKey](#provincekey)                           | `string`  | Optional | cannot be null | [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-provincekey.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/provinceKey")                           |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartChinaMapSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartChinaMapSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartChinaMapSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## rangeColorKey

区间颜色选择色系的唯一对应健

`rangeColorKey`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-rangecolorkey.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/rangeColorKey")

### rangeColorKey Type

`string`

### rangeColorKey Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"light-blue"`   |             |
| `"light-red"`    |             |
| `"dark-red"`     |             |
| `"dark-yellow"`  |             |
| `"dark-green"`   |             |
| `"dark-blue"`    |             |
| `"dark-purple"`  |             |
| `"light-yellow"` |             |
| `"light-purple"` |             |
| `"light-green"`  |             |

## levelArr

区间颜色配置

`levelArr`

* is optional

* Type: `object[]` ([Details](chart-chinamap-settings-schema-allof-1-properties-levelarr-items.md))

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-levelarr.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/levelArr")

### levelArr Type

`object[]` ([Details](chart-chinamap-settings-schema-allof-1-properties-levelarr-items.md))

## showLegend

显示图例的位置信息，可以选择隐藏，以及在底部区域

`showLegend`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-showlegend.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/showLegend")

### showLegend Type

`string`

### showLegend Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"none"`   |             |
| `"bottom"` |             |

## showTopList

是否显示地区排名列表

`showTopList`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-showtoplist.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/showTopList")

### showTopList Type

`boolean`

## mainMeasurementQueryCode

选择指标匹配色块大小，值为对应查询语句 code 名称,根据查询语句顺序以大些字母命名

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

### mainMeasurementQueryCode Type

`string`

### mainMeasurementQueryCode Default Value

The default value is:

```json
"A"
```

## provinceKey

选择对应省份的指标名称

`provinceKey`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartChinaMapSettings](chart-chinamap-settings-schema-allof-1-properties-provincekey.md "charts/settings/chart-chinamap-settings-schema.json#/allOf/1/properties/provinceKey")

### provinceKey Type

`string`
