# Untitled boolean in CommonChartSettings Schema

```txt
charts/settings/common-settings-schema.json#/allOf/0/properties/openTimeOffset
```

启用时间偏移后，当查询相对时间区间时，实际查询时间范围向前偏移 1 分钟，以防止入库延迟导致数据获取为空。如：当前为12:30，查询最近15分钟的数据，开启时间偏移后，实际查询的时间是：12:14-12:29。

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [common-settings-schema.json\*](../out/charts/settings/common-settings-schema.json "open original schema") |

## openTimeOffset Type

`boolean`
