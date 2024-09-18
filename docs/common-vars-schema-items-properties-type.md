# Untitled string in chartVarsSettings Schema

```txt
charts/common/common-vars-schema.json#/items/properties/type
```

视图变量查询类型，对应关系分别为 QUERY:【DQL】,PROMQL\_QUERY:【PROMQL】,TAG:【指标】,FIELD:【基础对象】,FIELD:【自定义对象】,LOGGING:【日志】,TRACING:【应用性能】,RUM:【用户访问】,SECURITY:【安全巡检】,CUSTOM\_LIST:【自定义】

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common-vars-schema.json\*](../out/charts/common/common-vars-schema.json "open original schema") |

## type Type

`string`

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"QUERY"`        |             |
| `"PROMQL_QUERY"` |             |
| `"FIELD"`        |             |
| `"TAG"`          |             |
| `"LOGGING"`      |             |
| `"TRACING"`      |             |
| `"RUM"`          |             |
| `"SECURITY"`     |             |
| `"CUSTOM_LIST"`  |             |
