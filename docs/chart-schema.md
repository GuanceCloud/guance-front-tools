# ChartData Schema

```txt
charts/chart-schema.json
```

图表完整结构

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-schema.json](../out/charts/chart-schema.json "open original schema") |

## ChartData Type

`object` ([ChartData](chart-schema.md))

# ChartData Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------- |
| [extend](#extend)   | `object` | Required | cannot be null | [ChartData](chart-schema-properties-extend.md "charts/chart-schema.json#/properties/extend")              |
| [group](#group)     | `object` | Optional | cannot be null | [ChartData](chart-schema-properties-group.md "charts/chart-schema.json#/properties/group")                |
| [name](#name)       | `string` | Required | cannot be null | [ChartData](chart-schema-properties-name.md "charts/chart-schema.json#/properties/name")                  |
| [pos](#pos)         | `object` | Required | cannot be null | [ChartData](chart-schema-properties-pos.md "charts/chart-schema.json#/properties/pos")                    |
| [type](#type)       | `string` | Required | cannot be null | [ChartData](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/type") |
| [queries](#queries) | `array`  | Required | cannot be null | [ChartData](queries-schema.md "charts/query/queries-schema.json#/properties/queries")                     |

## extend



`extend`

* is required

* Type: `object` ([Details](chart-schema-properties-extend.md))

* cannot be null

* defined in: [ChartData](chart-schema-properties-extend.md "charts/chart-schema.json#/properties/extend")

### extend Type

`object` ([Details](chart-schema-properties-extend.md))

## group



`group`

* is optional

* Type: `object` ([Details](chart-schema-properties-group.md))

* cannot be null

* defined in: [ChartData](chart-schema-properties-group.md "charts/chart-schema.json#/properties/group")

### group Type

`object` ([Details](chart-schema-properties-group.md))

## name

图表名称

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartData](chart-schema-properties-name.md "charts/chart-schema.json#/properties/name")

### name Type

`string`

## pos

图表位置信息

`pos`

* is required

* Type: `object` ([Details](chart-schema-properties-pos.md))

* cannot be null

* defined in: [ChartData](chart-schema-properties-pos.md "charts/chart-schema.json#/properties/pos")

### pos Type

`object` ([Details](chart-schema-properties-pos.md))

## type

支持图表类型枚举

`type`

* is required

* Type: `string` ([ChartType](common-chart-types-schema.md))

* cannot be null

* defined in: [ChartData](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/type")

### type Type

`string` ([ChartType](common-chart-types-schema.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"group"`      |             |
| `"sequence"`   |             |
| `"singlestat"` |             |
| `"pie"`        |             |
| `"bar"`        |             |
| `"histogram"`  |             |
| `"slo"`        |             |
| `"toplist"`    |             |
| `"gauge"`      |             |
| `"scatter"`    |             |
| `"bubble"`     |             |
| `"table"`      |             |
| `"treemap"`    |             |
| `"funnel"`     |             |
| `"chinamap"`   |             |
| `"worldmap"`   |             |
| `"hexgon"`     |             |
| `"heatmap"`    |             |
| `"topology"`   |             |
| `"sankey"`     |             |
| `"log"`        |             |
| `"object"`     |             |
| `"alarm"`      |             |
| `"text"`       |             |
| `"video"`      |             |
| `"picture"`    |             |
| `"command"`    |             |
| `"iframe"`     |             |

## queries

图表查询语句列表结构

`queries`

* is required

* Type: `object[]` ([ChartQueryItem](query-item-schema.md))

* cannot be null

* defined in: [ChartData](queries-schema.md "charts/query/queries-schema.json#/properties/queries")

### queries Type

`object[]` ([ChartQueryItem](query-item-schema.md))
