# Untitled undefined type in ChartLogSettings Schema

```txt
charts/settings/chart-log-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-log-settings-schema.json\*](../out/charts/settings/chart-log-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                 |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isTimeInterval](#istimeinterval)     | `boolean` | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/isTimeInterval")     |
| [currentChartType](#currentcharttype) | `string`  | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/currentChartType") |
| [index](#index)                       | `string`  | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-index.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/index")                       |
| [inColumns](#incolumns)               | `array`   | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-incolumns.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/inColumns")               |
| [addColumns](#addcolumns)             | `array`   | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns")             |

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## currentChartType

冗余字段，在对象列表图中，固定为 log

`currentChartType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/currentChartType")

### currentChartType Type

`string`

### currentChartType Constraints

**constant**: the value of this property must be equal to:

```json
"log"
```

### currentChartType Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## index

需要查询日志索引名称的合集，多个索引名称用 “,”号分割

`index`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-index.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/index")

### index Type

`string`

### index Examples

```json
"index1,index2"
```

## inColumns

默认固定显示的列，不能删除修改，比如时间

`inColumns`

* is optional

* Type: `object[]` ([Details](chart-log-settings-schema-allof-1-properties-incolumns-items.md))

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-incolumns.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/inColumns")

### inColumns Type

`object[]` ([Details](chart-log-settings-schema-allof-1-properties-incolumns-items.md))

## addColumns

添加显示列

`addColumns`

* is optional

* Type: `object[]` ([Details](chart-log-settings-schema-allof-1-properties-addcolumns-items.md))

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns")

### addColumns Type

`object[]` ([Details](chart-log-settings-schema-allof-1-properties-addcolumns-items.md))
