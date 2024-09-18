# Untitled undefined type in ChartTableSettings Schema

```txt
charts/settings/chart-table-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-table-settings-schema.json\*](../out/charts/settings/chart-table-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                       |
| :---------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias)                                       | `array`   | Optional | cannot be null | [ChartTableSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")                                                                            |
| [colors](#colors)                                     | `array`   | Optional | cannot be null | [ChartTableSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")                                                                         |
| [levels](#levels)                                     | `array`   | Optional | cannot be null | [ChartTableSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")                                                                         |
| [isTimeInterval](#istimeinterval)                     | `boolean` | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/isTimeInterval")                     |
| [queryMode](#querymode)                               | `string`  | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-querymode.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/queryMode")                               |
| [showColumns](#showcolumns)                           | `array`   | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-showcolumns.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/showColumns")                           |
| [valMappings](#valmappings)                           | `array`   | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings")                           |
| [valColorMappings](#valcolormappings)                 | `array`   | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings")                 |
| [mainMeasurementQueryCode](#mainmeasurementquerycode) | `string`  | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode") |
| [mainMeasurementSort](#mainmeasurementsort)           | `string`  | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementSort")           |
| [mainMeasurementLimit](#mainmeasurementlimit)         | `integer` | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")         |
| [disableFuncList](#disablefunclist)                   | `boolean` | Optional | cannot be null | [ChartTableSettings](chart-table-settings-schema-allof-1-properties-disablefunclist.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/disableFuncList")                   |

## alias

图表别名配置完整结构。

`alias`

* is optional

* Type: `object[]` ([Details](settings-alias-schema-items.md))

* cannot be null

* defined in: [ChartTableSettings](settings-alias-schema.md "charts/settings/settings-alias-schema.json#/allOf/1/properties/alias")

### alias Type

`object[]` ([Details](settings-alias-schema-items.md))

## colors

图表颜色配置完整结构。

`colors`

* is optional

* Type: `object[]` ([Details](settings-colors-schema-items.md))

* cannot be null

* defined in: [ChartTableSettings](settings-colors-schema.md "charts/settings/settings-colors-schema.json#/allOf/1/properties/colors")

### colors Type

`object[]` ([Details](settings-colors-schema-items.md))

## levels

图表基线配置完整结构。

`levels`

* is optional

* Type: `object[]` ([Details](settings-levels-schema-items.md))

* cannot be null

* defined in: [ChartTableSettings](settings-levels-schema.md "charts/settings/settings-levels-schema.json#/allOf/1/properties/levels")

### levels Type

`object[]` ([Details](settings-levels-schema-items.md))

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## queryMode

表格类型：支持分组模式和时序模式

`queryMode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-querymode.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/queryMode")

### queryMode Type

`string`

### queryMode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"toGroupColumn"` |             |
| `"toOneColumn"`   |             |

## showColumns

需要显示的列，指标名称列表

`showColumns`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-showcolumns.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/showColumns")

### showColumns Type

`string[]`

## valMappings

表格图规则映射配置

`valMappings`

* is optional

* Type: `object[]` ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items.md))

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valmappings.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valMappings")

### valMappings Type

`object[]` ([Details](chart-table-settings-schema-allof-1-properties-valmappings-items.md))

## valColorMappings

表格图规则映射对应颜色配置数据

`valColorMappings`

* is optional

* Type: `object[]` ([Details](chart-table-settings-schema-allof-1-properties-valcolormappings-items.md))

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-valcolormappings.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/valColorMappings")

### valColorMappings Type

`object[]` ([Details](chart-table-settings-schema-allof-1-properties-valcolormappings-items.md))

## mainMeasurementQueryCode

选择指标对应的code 名称,根据查询语句顺序以大些字母命名

`mainMeasurementQueryCode`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementquerycode.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementQueryCode")

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

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementsort.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementSort")

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

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-mainmeasurementlimit.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/mainMeasurementLimit")

### mainMeasurementLimit Type

`integer`

## disableFuncList

冗余字段, 时序表格图为true, 分组表格图为false

`disableFuncList`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartTableSettings](chart-table-settings-schema-allof-1-properties-disablefunclist.md "charts/settings/chart-table-settings-schema.json#/allOf/1/properties/disableFuncList")

### disableFuncList Type

`boolean`

### disableFuncList Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority
