# Untitled string in ChartBarSettings Schema

```txt
charts/settings/chart-bar-settings-schema.json#/allOf/1/properties/direction
```

柱状图显示类型，横向显示还是纵向显示

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [chart-bar-settings-schema.json\*](../out/charts/settings/chart-bar-settings-schema.json "open original schema") |

## direction Type

`string`

## direction Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"vertical"`   |             |
| `"horizontal"` |             |

## direction Default Value

The default value is:

```json
"vertical"
```
