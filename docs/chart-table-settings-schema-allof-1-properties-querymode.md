# Untitled string in ChartTableSettings Schema

```txt
charts/settings/chart-table-settings-schema.json#/allOf/1/properties/queryMode
```

表格类型：支持分组模式和时序模式

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [chart-table-settings-schema.json\*](../out/charts/settings/chart-table-settings-schema.json "open original schema") |

## queryMode Type

`string`

## queryMode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"toGroupColumn"` |             |
| `"toOneColumn"`   |             |
