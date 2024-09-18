# CommonChartGroupbySettings Schema

```txt
charts/settings/_common-settings-groupby-schema.json
```

图表分组排序相关配置

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [\_common-settings-groupby-schema.json](../out/charts/settings/_common-settings-groupby-schema.json "open original schema") |

## CommonChartGroupbySettings Type

`object` ([CommonChartGroupbySettings](_common-settings-groupby-schema.md))

# CommonChartGroupbySettings Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                 |
| :------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [slimit](#slimit)               | `integer` | Optional | cannot be null | [CommonChartGroupbySettings](_common-settings-groupby-schema-properties-slimit.md "charts/settings/_common-settings-groupby-schema.json#/properties/slimit")               |
| [sorderByOrder](#sorderbyorder) | `string`  | Optional | cannot be null | [CommonChartGroupbySettings](_common-settings-groupby-schema-properties-sorderbyorder.md "charts/settings/_common-settings-groupby-schema.json#/properties/sorderByOrder") |

## slimit

当分组存在时，最大显示分组数量

`slimit`

* is optional

* Type: `integer`

* cannot be null

* defined in: [CommonChartGroupbySettings](_common-settings-groupby-schema-properties-slimit.md "charts/settings/_common-settings-groupby-schema.json#/properties/slimit")

### slimit Type

`integer`

## sorderByOrder

当分组存在时，分组返回的排序

`sorderByOrder`

* is optional

* Type: `string`

* cannot be null

* defined in: [CommonChartGroupbySettings](_common-settings-groupby-schema-properties-sorderbyorder.md "charts/settings/_common-settings-groupby-schema.json#/properties/sorderByOrder")

### sorderByOrder Type

`string`

### sorderByOrder Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"asc"`  |             |
| `"desc"` |             |

### sorderByOrder Default Value

The default value is:

```json
"desc"
```
