# Untitled object in ChartQueryItem Schema

```txt
charts/query/query-item-schema.json#/properties/query
```

查询语句的额外信息

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [query-item-schema.json\*](../out/charts/query/query-item-schema.json "open original schema") |

## query Type

`object` ([Details](query-item-schema-properties-query.md))

# query Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                      |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [q](#q)               | `string` | Optional | cannot be null | [ChartQueryItem](query-item-schema-properties-query-properties-q.md "charts/query/query-item-schema.json#/properties/query/properties/q")       |
| [code](#code)         | `string` | Optional | cannot be null | [ChartQueryItem](query-item-schema-properties-query-properties-code.md "charts/query/query-item-schema.json#/properties/query/properties/code") |
| Additional Properties | Any      | Optional | can be null    |                                                                                                                                                 |

## q

图表查询语句，可以是 dql语句，也可以是 promql 语句

`q`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartQueryItem](query-item-schema-properties-query-properties-q.md "charts/query/query-item-schema.json#/properties/query/properties/q")

### q Type

`string`

## code

查询语句的唯一标识，由单个大写英文字母构成

`code`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartQueryItem](query-item-schema-properties-query-properties-code.md "charts/query/query-item-schema.json#/properties/query/properties/code")

### code Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
