# Untitled object in ChartLogSettings Schema

```txt
charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-log-settings-schema.json\*](../out/charts/settings/chart-log-settings-schema.json "open original schema") |

## items Type

`object` ([Details](chart-log-settings-schema-allof-1-properties-addcolumns-items.md))

# items Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                             |
| :------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [field](#field)           | `string`  | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-field.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/field")           |
| [headerName](#headername) | `string`  | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-headername.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/headerName") |
| [hide](#hide)             | `boolean` | Optional | cannot be null | [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-hide.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/hide")             |

## field

需要添加列的字段名称

`field`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-field.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/field")

### field Type

`string`

## headerName

显示表头的名称

`headerName`

* is optional

* Type: `string`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-headername.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/headerName")

### headerName Type

`string`

## hide

是否需要隐藏列

`hide`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [ChartLogSettings](chart-log-settings-schema-allof-1-properties-addcolumns-items-properties-hide.md "charts/settings/chart-log-settings-schema.json#/allOf/1/properties/addColumns/items/properties/hide")

### hide Type

`boolean`
