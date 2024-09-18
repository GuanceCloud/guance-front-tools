# Untitled string in ChartQueryItem Schema

```txt
charts/query/query-item-schema.json#/properties/qtype
```

查询语句类型，目前支持 dql 以及promql

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [query-item-schema.json\*](../out/charts/query/query-item-schema.json "open original schema") |

## qtype Type

`string`

## qtype Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"dql"`    |             |
| `"promql"` |             |
