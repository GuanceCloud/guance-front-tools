# Untitled object in ChartColorsSettings Schema

```txt
charts/settings/settings-colors-schema.json#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-colors-schema.json\*](../out/charts/settings/settings-colors-schema.json "open original schema") |

## items Type

`object` ([Details](settings-colors-schema-items.md))

## items Examples

```json
{
  "color": "#dddddd",
  "key": "avg(load5s)",
  "name": "avg(load5s)"
}
```

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                    |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [color](#color) | `string` | Required | cannot be null | [ChartColorsSettings](settings-colors-schema-items-properties-color.md "charts/settings/settings-colors-schema.json#/items/properties/color") |
| [name](#name)   | `string` | Required | cannot be null | [ChartColorsSettings](settings-colors-schema-items-properties-name.md "charts/settings/settings-colors-schema.json#/items/properties/name")   |
| [key](#key)     | `string` | Required | cannot be null | [ChartColorsSettings](settings-colors-schema-items-properties-key.md "charts/settings/settings-colors-schema.json#/items/properties/key")     |

## color

颜色色值

`color`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartColorsSettings](settings-colors-schema-items-properties-color.md "charts/settings/settings-colors-schema.json#/items/properties/color")

### color Type

`string`

### color Examples

```json
"#dddddd"
```

```json
"rgba(10,10,10,30)"
```

## name

需要设置颜色对应的指标名称

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartColorsSettings](settings-colors-schema-items-properties-name.md "charts/settings/settings-colors-schema.json#/items/properties/name")

### name Type

`string`

### name Examples

```json
"avg(load5s)"
```

## key

需要设置颜色的指标名称,冗余字段

`key`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartColorsSettings](settings-colors-schema-items-properties-key.md "charts/settings/settings-colors-schema.json#/items/properties/key")

### key Type

`string`

### key Examples

```json
"avg(load5s)"
```
