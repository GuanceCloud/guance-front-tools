# Untitled string in ChartAliasSettings Schema

```txt
charts/settings/settings-alias-schema.json#/items/properties/alias
```

别名，可以是固定字符串，也可以是特殊变量，{{tags}} 表示替换为所有“标签名”和“标签值”，{{host}} 表示替换为 host 的“标签值”

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [settings-alias-schema.json\*](../out/charts/settings/settings-alias-schema.json "open original schema") |

## alias Type

`string`

## alias Examples

```json
"{{tags}}"
```

```json
"{{host}}"
```

```json
"test"
```
