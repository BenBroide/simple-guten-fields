import controlsIndex from "./controlsIndex";
const {select} = wp.data

const InnerControlComponent = props => {
  const {key, field, row_index, property_key, repeater_record_label, parent} = props

  let controlFieldKey = field.control ?? 'text'
  let ControlField = controlsIndex[controlFieldKey]
  let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[props.meta_key]

  return <ControlField
    key={key}
    field={field}
    row_index={row_index}
    property_key={property_key}
    parent_property_key={props.parent_property_key}
    repeater_record_label={repeater_record_label}
    repeater_values={repeaterValues}
    parent_row_index={props.parent_row_index}
    parent={parent}
  />
}

export default InnerControlComponent;
