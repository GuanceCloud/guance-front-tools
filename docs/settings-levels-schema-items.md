# Untitled object in ChartLevelsSettings Schema

```txt
charts/settings/settings-levels-schema.json#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-levels-schema.json\*](../out/charts/settings/settings-levels-schema.json "open original schema") |

## items Type

`object` ([Details](settings-levels-schema-items.md))

# items Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                        |
| :------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [bgColor](#bgcolor) | `string`  | Required | cannot be null | [ChartLevelsSettings](settings-levels-schema-items-properties-bgcolor.md "charts/settings/settings-levels-schema.json#/items/properties/bgColor") |
| [value](#value)     | `integer` | Required | cannot be null | [ChartLevelsSettings](settings-levels-schema-items-properties-value.md "charts/settings/settings-levels-schema.json#/items/properties/value")     |
| [title](#title)     | `string`  | Required | cannot be null | [ChartLevelsSettings](settings-levels-schema-items-properties-title.md "charts/settings/settings-levels-schema.json#/items/properties/title")     |

## bgColor

颜色色值

`bgColor`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartLevelsSettings](settings-levels-schema-items-properties-bgcolor.md "charts/settings/settings-levels-schema.json#/items/properties/bgColor")

### bgColor Type

`string`

### bgColor Examples

```json
"#dddddd"
```

```json
"rgba(10,10,10,30)"
```

## value

需要设置基线对应等级的指标值

`value`

* is required

* Type: `integer`

* cannot be null

* defined in: [ChartLevelsSettings](settings-levels-schema-items-properties-value.md "charts/settings/settings-levels-schema.json#/items/properties/value")

### value Type

`integer`

## title

基线显示名称

`title`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartLevelsSettings](settings-levels-schema-items-properties-title.md "charts/settings/settings-levels-schema.json#/items/properties/title")

### title Type

`string`
