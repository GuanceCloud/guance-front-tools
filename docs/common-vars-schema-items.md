# Untitled object in chartVarsSettings Schema

```txt
charts/common/common-vars-schema.json#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [common-vars-schema.json\*](../out/charts/common/common-vars-schema.json "open original schema") |

## items Type

`object` ([Details](common-vars-schema-items.md))

# items Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :-------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [definition](#definition)   | `object`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition.md "charts/common/common-vars-schema.json#/items/properties/definition")   |
| [type](#type)               | `string`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-type.md "charts/common/common-vars-schema.json#/items/properties/type")               |
| [code](#code)               | `string`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-code.md "charts/common/common-vars-schema.json#/items/properties/code")               |
| [datasource](#datasource)   | `string`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-datasource.md "charts/common/common-vars-schema.json#/items/properties/datasource")   |
| [name](#name)               | `string`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-name.md "charts/common/common-vars-schema.json#/items/properties/name")               |
| [seq](#seq)                 | `integer` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-seq.md "charts/common/common-vars-schema.json#/items/properties/seq")                 |
| [hide](#hide)               | `integer` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-hide.md "charts/common/common-vars-schema.json#/items/properties/hide")               |
| [multiple](#multiple)       | `boolean` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-multiple.md "charts/common/common-vars-schema.json#/items/properties/multiple")       |
| [includeStar](#includestar) | `boolean` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-includestar.md "charts/common/common-vars-schema.json#/items/properties/includeStar") |
| [valueSort](#valuesort)     | `string`  | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-valuesort.md "charts/common/common-vars-schema.json#/items/properties/valueSort")     |
| Additional Properties       | Any       | Optional | can be null    |                                                                                                                                               |

## definition



`definition`

* is optional

* Type: `object` ([Details](common-vars-schema-items-properties-definition.md))

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition.md "charts/common/common-vars-schema.json#/items/properties/definition")

### definition Type

`object` ([Details](common-vars-schema-items-properties-definition.md))

## type

视图变量查询类型，对应关系分别为 QUERY:【DQL】,PROMQL\_QUERY:【PROMQL】,TAG:【指标】,FIELD:【基础对象】,FIELD:【自定义对象】,LOGGING:【日志】,TRACING:【应用性能】,RUM:【用户访问】,SECURITY:【安全巡检】,CUSTOM\_LIST:【自定义】

`type`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-type.md "charts/common/common-vars-schema.json#/items/properties/type")

### type Type

`string`

### type Constraints

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

## code

需要被替换的变量名

`code`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-code.md "charts/common/common-vars-schema.json#/items/properties/code")

### code Type

`string`

## datasource

对应关系分别为 dataflux:【DQL】,dataflux:【PROMQL】,ftinfluxdb:【指标】,object:【基础对象】,custom\_object:【自定义对象】,dataflux:【日志】,dataflux:【应用性能】,dataflux:【用户访问】,dataflux:【安全巡检】,custom:【自定义】

`datasource`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-datasource.md "charts/common/common-vars-schema.json#/items/properties/datasource")

### datasource Type

`string`

### datasource Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"dataflux"`      |             |
| `"ftinfluxdb"`    |             |
| `"custom"`        |             |
| `"object"`        |             |
| `"custom_object"` |             |

## name

视图变量显示名称

`name`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-name.md "charts/common/common-vars-schema.json#/items/properties/name")

### name Type

`string`

## seq

当前项视图变量在列表中的顺序

`seq`

* is optional

* Type: `integer`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-seq.md "charts/common/common-vars-schema.json#/items/properties/seq")

### seq Type

`integer`

### seq Examples

```json
0
```

```json
1
```

```json
2
```

## hide

是否隐藏该项视图变量

`hide`

* is optional

* Type: `integer`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-hide.md "charts/common/common-vars-schema.json#/items/properties/hide")

### hide Type

`integer`

### hide Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |

## multiple

设置视图变量是否能多选

`multiple`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-multiple.md "charts/common/common-vars-schema.json#/items/properties/multiple")

### multiple Type

`boolean`

### multiple Default Value

The default value is:

```json
true
```

## includeStar

设置视图变量列出值是否包含 \*

`includeStar`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-includestar.md "charts/common/common-vars-schema.json#/items/properties/includeStar")

### includeStar Type

`boolean`

## valueSort

列出值排序

`valueSort`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-valuesort.md "charts/common/common-vars-schema.json#/items/properties/valueSort")

### valueSort Type

`string`

### valueSort Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"asc"`  |             |
| `"desc"` |             |

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
