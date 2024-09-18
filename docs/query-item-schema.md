# ChartQueryItem Schema

```txt
charts/query/query-item-schema.json
```

图表查询语句结构

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [query-item-schema.json](../out/charts/query/query-item-schema.json "open original schema") |

## ChartQueryItem Type

`object` ([ChartQueryItem](query-item-schema.md))

# ChartQueryItem Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)             | `string` | Optional | cannot be null | [ChartQueryItem](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/type")            |
| [datasource](#datasource) | `string` | Optional | cannot be null | [ChartQueryItem](query-item-schema-properties-datasource.md "charts/query/query-item-schema.json#/properties/datasource") |
| [qtype](#qtype)           | `string` | Optional | cannot be null | [ChartQueryItem](query-item-schema-properties-qtype.md "charts/query/query-item-schema.json#/properties/qtype")           |
| [query](#query)           | `object` | Optional | cannot be null | [ChartQueryItem](query-item-schema-properties-query.md "charts/query/query-item-schema.json#/properties/query")           |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                           |

## type

支持图表类型枚举

`type`

* is optional

* Type: `string` ([ChartType](common-chart-types-schema.md))

* cannot be null

* defined in: [ChartQueryItem](common-chart-types-schema.md "charts/common/common-chart-types-schema.json#/properties/type")

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

## datasource

冗余字段,固定值

`datasource`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartQueryItem](query-item-schema-properties-datasource.md "charts/query/query-item-schema.json#/properties/datasource")

### datasource Type

`string`

### datasource Constraints

**constant**: the value of this property must be equal to:

```json
"dataflux"
```

## qtype

查询语句类型，目前支持 dql 以及promql

`qtype`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartQueryItem](query-item-schema-properties-qtype.md "charts/query/query-item-schema.json#/properties/qtype")

### qtype Type

`string`

### qtype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"dql"`    |             |
| `"promql"` |             |

## query

查询语句的额外信息

`query`

* is optional

* Type: `object` ([Details](query-item-schema-properties-query.md))

* cannot be null

* defined in: [ChartQueryItem](query-item-schema-properties-query.md "charts/query/query-item-schema.json#/properties/query")

### query Type

`object` ([Details](query-item-schema-properties-query.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
