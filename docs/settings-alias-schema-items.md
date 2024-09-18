# Untitled object in ChartAliasSettings Schema

```txt
charts/settings/settings-alias-schema.json#/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-alias-schema.json\*](../out/charts/settings/settings-alias-schema.json "open original schema") |

## items Type

`object` ([Details](settings-alias-schema-items.md))

## items Examples

```json
{
  "alias": "{{tags}}",
  "key": "avg(load5s)",
  "name": "avg(load5s)"
}
```

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :-------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [alias](#alias) | `string` | Required | cannot be null | [ChartAliasSettings](settings-alias-schema-items-properties-alias.md "charts/settings/settings-alias-schema.json#/items/properties/alias") |
| [name](#name)   | `string` | Required | cannot be null | [ChartAliasSettings](settings-alias-schema-items-properties-name.md "charts/settings/settings-alias-schema.json#/items/properties/name")   |
| [key](#key)     | `string` | Required | cannot be null | [ChartAliasSettings](settings-alias-schema-items-properties-key.md "charts/settings/settings-alias-schema.json#/items/properties/key")     |

## alias

别名，可以是固定字符串，也可以是特殊变量，{{tags}} 表示替换为所有“标签名”和“标签值”，{{host}} 表示替换为 host 的“标签值”

`alias`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartAliasSettings](settings-alias-schema-items-properties-alias.md "charts/settings/settings-alias-schema.json#/items/properties/alias")

### alias Type

`string`

### alias Examples

```json
"{{tags}}"
```

```json
"{{host}}"
```

```json
"test"
```

## name

需要替换为别名对应的指标名称

`name`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartAliasSettings](settings-alias-schema-items-properties-name.md "charts/settings/settings-alias-schema.json#/items/properties/name")

### name Type

`string`

### name Examples

```json
"avg(load5s)"
```

## key

需要替换为别名对应的指标名称,冗余字段

`key`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartAliasSettings](settings-alias-schema-items-properties-key.md "charts/settings/settings-alias-schema.json#/items/properties/key")

### key Type

`string`

### key Examples

```json
"avg(load5s)"
```
