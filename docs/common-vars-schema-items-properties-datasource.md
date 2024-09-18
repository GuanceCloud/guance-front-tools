# Untitled string in chartVarsSettings Schema

```txt
charts/common/common-vars-schema.json#/items/properties/datasource
```

对应关系分别为 dataflux:【DQL】,dataflux:【PROMQL】,ftinfluxdb:【指标】,object:【基础对象】,custom\_object:【自定义对象】,dataflux:【日志】,dataflux:【应用性能】,dataflux:【用户访问】,dataflux:【安全巡检】,custom:【自定义】

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common-vars-schema.json\*](../out/charts/common/common-vars-schema.json "open original schema") |

## datasource Type

`string`

## datasource Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"dataflux"`      |             |
| `"ftinfluxdb"`    |             |
| `"custom"`        |             |
| `"object"`        |             |
| `"custom_object"` |             |
