# Untitled object in ChartTopologySettings Schema

```txt
charts/settings/chart-topology-settings-schema.json#/properties/color
```

颜色配置

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [chart-topology-settings-schema.json\*](../out/charts/settings/chart-topology-settings-schema.json "open original schema") |

## color Type

`object` ([Details](chart-topology-settings-schema-properties-color.md))

# color Properties

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                                                                        |
| :---------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [key](#key) | `string` | Required | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-key.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/key") |
| [min](#min) | Merged   | Required | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-min.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/min") |
| [max](#max) | Merged   | Required | cannot be null | [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-max.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/max") |

## key

颜色色系

`key`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-key.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/key")

### key Type

`string`

### key Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"color-first"`  |             |
| `"color-second"` |             |
| `"color-third"`  |             |

## min



`min`

* is required

* Type: merged type ([Details](chart-topology-settings-schema-properties-color-properties-min.md))

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-min.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/min")

### min Type

merged type ([Details](chart-topology-settings-schema-properties-color-properties-min.md))

any of

* [Untitled integer in ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-min-anyof-0.md "check type definition")

* [Untitled null in ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-min-anyof-1.md "check type definition")

## max



`max`

* is required

* Type: merged type ([Details](chart-topology-settings-schema-properties-color-properties-max.md))

* cannot be null

* defined in: [ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-max.md "charts/settings/chart-topology-settings-schema.json#/properties/color/properties/max")

### max Type

merged type ([Details](chart-topology-settings-schema-properties-color-properties-max.md))

any of

* [Untitled integer in ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-max-anyof-0.md "check type definition")

* [Untitled null in ChartTopologySettings](chart-topology-settings-schema-properties-color-properties-max-anyof-1.md "check type definition")
