import controlsIndex from "./controlsIndex";

const { select } = wp.data;

const InnerControlComponent = ({
                                 key,
                                 meta_key,
                                 field,
                                 row_index,
                                 property_key,
                                 repeater_record_label,
                                 parent_property_key,
                                 parent_row_index,
                                 parent_control,
                                 isChild
                               }) => {
  const controlFieldKey = field.control ?? 'text';
  isChild = !!(isChild || field.control === parent_control);
  const ControlField = controlsIndex[controlFieldKey];
  const repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key];

  return (
    <ControlField
      key={key}
      field={field}
      row_index={row_index}
      property_key={property_key}
      parent_property_key={parent_property_key}
      repeater_record_label={repeater_record_label}
      repeater_values={repeaterValues}
      parent_row_index={parent_row_index}
      parent={parent}
      label={field.label}
      isChild={isChild}
    />
  );
};

export default InnerControlComponent;
