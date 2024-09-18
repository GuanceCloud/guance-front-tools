# Untitled object in ChartCompare Schema

```txt
charts/settings/settings-compare-schema.json#/properties/compares/items
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [settings-compare-schema.json\*](../out/charts/settings/settings-compare-schema.json "open original schema") |

## items Type

`object` ([Details](settings-compare-schema-properties-compares-items.md))

# items Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [label](#label) | `string` | Required | cannot be null | [ChartCompare](settings-compare-schema-properties-compares-items-properties-label.md "charts/settings/settings-compare-schema.json#/properties/compares/items/properties/label") |
| [value](#value) | `string` | Required | cannot be null | [ChartCompare](settings-compare-schema-properties-compares-items-properties-value.md "charts/settings/settings-compare-schema.json#/properties/compares/items/properties/value") |

## label

对比名称

`label`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartCompare](settings-compare-schema-properties-compares-items-properties-label.md "charts/settings/settings-compare-schema.json#/properties/compares/items/properties/label")

### label Type

`string`

## value



`value`

* is required

* Type: `string`

* cannot be null

* defined in: [ChartCompare](settings-compare-schema-properties-compares-items-properties-value.md "charts/settings/settings-compare-schema.json#/properties/compares/items/properties/value")

### value Type

`string`

### value Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"hourCompare"`   |             |
| `"dayCompare"`    |             |
| `"weekCompare"`   |             |
| `"monthCompare"`  |             |
| `"circleCompare"` |             |
