# CommonChartStackContentSettings Schema

```txt
charts/settings/_common-settings-stack-content-schema.json
```

柱状图堆叠模式下，横坐标显示类型

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [\_common-settings-stack-content-schema.json](../out/charts/settings/_common-settings-stack-content-schema.json "open original schema") |

## CommonChartStackContentSettings Type

`string` ([CommonChartStackContentSettings](_common-settings-stack-content-schema.md))

## CommonChartStackContentSettings Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"group"` |             |
| `"index"` |             |

## CommonChartStackContentSettings Default Value

The default value is:

```json
"group"
```
