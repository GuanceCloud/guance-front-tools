# Untitled boolean in CommonChartSettings Schema

```txt
charts/settings/common-settings-schema.json#/allOf/0/properties/isSampling
```

启用后，当数据量过大时，会对除“指标”外的其他类型数据自动执行采样查询，采样率不固定，会根据数据量大小动态调整

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common-settings-schema.json\*](../out/charts/settings/common-settings-schema.json "open original schema") |

## isSampling Type

`boolean`

## isSampling Default Value

The default value is:

```json
true
```
