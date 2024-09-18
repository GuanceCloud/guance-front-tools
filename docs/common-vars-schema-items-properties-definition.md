# Untitled object in chartVarsSettings Schema

```txt
charts/common/common-vars-schema.json#/items/properties/definition
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [common-vars-schema.json\*](../out/charts/common/common-vars-schema.json "open original schema") |

## definition Type

`object` ([Details](common-vars-schema-items-properties-definition.md))

# definition Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tag](#tag)               | `string` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-tag.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/tag")               |
| [field](#field)           | `string` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-field.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/field")           |
| [value](#value)           | `string` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-value.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/value")           |
| [metric](#metric)         | `string` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-metric.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/metric")         |
| [object](#object)         | `string` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-object.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/object")         |
| [defaultVal](#defaultval) | `object` | Optional | cannot be null | [chartVarsSettings](common-vars-schema-items-properties-definition-properties-defaultval.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/defaultVal") |

## tag

定义 type 为 metrc 类型对应的指标 tag

`tag`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-tag.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/tag")

### tag Type

`string`

## field

定义 type 为 metrc,object,custom\_object, logging, tracing,rum,securit 类型对应的 field

`field`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-field.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/field")

### field Type

`string`

## value

定义 type 为 dql,promql,custom\_object类型对应的 dql、promql,或者以‘,’号分割的自定义字符串数据

`value`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-value.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/value")

### value Type

`string`

## metric

1.type 为 metric 对应指标集 2. type 为 logging,rum 对应 source。

`metric`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-metric.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/metric")

### metric Type

`string`

## object

type 为 object, custom\_object 对应对象 source

`object`

* is optional

* Type: `string`

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-object.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/object")

### object Type

`string`

## defaultVal

视图变量默认填充值

`defaultVal`

* is optional

* Type: `object` ([Details](common-vars-schema-items-properties-definition-properties-defaultval.md))

* cannot be null

* defined in: [chartVarsSettings](common-vars-schema-items-properties-definition-properties-defaultval.md "charts/common/common-vars-schema.json#/items/properties/definition/properties/defaultVal")

### defaultVal Type

`object` ([Details](common-vars-schema-items-properties-definition-properties-defaultval.md))
