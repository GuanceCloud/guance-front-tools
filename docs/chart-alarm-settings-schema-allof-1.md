# Untitled undefined type in ChartAlarmSettings Schema

```txt
charts/settings/chart-alarm-settings-schema.json#/allOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-alarm-settings-schema.json\*](../out/charts/settings/chart-alarm-settings-schema.json "open original schema") |

## 1 Type

unknown

# 1 Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                       |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isTimeInterval](#istimeinterval)     | `boolean` | Optional | cannot be null | [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/isTimeInterval")     |
| [currentChartType](#currentcharttype) | `string`  | Optional | cannot be null | [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/currentChartType") |
| [showPart](#showpart)                 | `string`  | Optional | cannot be null | [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-showpart.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/showPart")                 |
| [pageSize](#pagesize)                 | `integer` | Optional | cannot be null | [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-pagesize.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/pageSize")                 |

## isTimeInterval

是否开启时间分片

`isTimeInterval`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-istimeinterval.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/isTimeInterval")

### isTimeInterval Type

`boolean`

## currentChartType

冗余字段，在对象列表图中，固定为 alarm

`currentChartType`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-currentcharttype.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/currentChartType")

### currentChartType Type

`string`

### currentChartType Constraints

**constant**: the value of this property must be equal to:

```json
"alarm"
```

### currentChartType Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## showPart

告警统计图显示模式，可选配置分别为全部、仅统计图、仅告警列表

`showPart`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-showpart.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/showPart")

### showPart Type

`string`

### showPart Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"all"`       |             |
| `"statistic"` |             |
| `"list"`      |             |

## pageSize

列表每页显示的最大日志数量

`pageSize`

* is optional

* Type: `integer`

* cannot be null

* defined in: [ChartAlarmSettings](chart-alarm-settings-schema-allof-1-properties-pagesize.md "charts/settings/chart-alarm-settings-schema.json#/allOf/1/properties/pageSize")

### pageSize Type

`integer`

### pageSize Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `10`  |             |
| `20`  |             |
| `50`  |             |
| `100` |             |

### pageSize Default Value

The default value is:

```json
50
```
