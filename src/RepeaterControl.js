import InnerControlComponent from "./InnerControlComponent";

const { withDispatch, useSelect } = wp.data;

let ControlField = ({
                      addItem,
                      removeItem,
                      field: { meta_key, label, show_in_rest, control },
                      controlsIndex,
                      property_key,
                      row_index,
                      isChild
                    }) => {

  const properties = show_in_rest?.schema?.items?.properties;
  const propertiesKeys = Object.entries(properties).map(item => item[0]);
  const repeaterValues = useSelect(
    select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
  );

  let loopRepeaterValues = repeaterValues;
  let innerText = '';

  if (isChild) {
    loopRepeaterValues = repeaterValues[row_index][property_key];
    innerText = 'Inner ';
  }

  return <div style={{ marginLeft: !isChild ? 0 : 10 }}>
    <h3>{`${innerText}${label}`} (Repeater field):</h3>
    {Array.isArray(loopRepeaterValues) && loopRepeaterValues.map((row, index) => {
      return (
        <div key={`repeaterValues${index}${meta_key}`}>
          <div><b>{innerText}Repeater Record {index + 1}:</b></div>
          {propertiesKeys.map((propertyKey) => {
            let innerField = properties[propertyKey];
            innerField.meta_key = meta_key;
            innerField.label = label;
            return (
              <InnerControlComponent
                key={index + property_key}
                field={innerField}
                row_index={index}
                parent_control={control}
                parent_row_index={row_index}
                property_key={propertyKey}
                parent_property_key={property_key}
                repeater_record_label={`${label} ${propertyKey}`}
                repeater_values={loopRepeaterValues}
                control_index={controlsIndex}
                isChild={isChild}
              />
            );
          })}
          {
            index > 0
            && <button onClick={() => removeItem(meta_key, index, repeaterValues, isChild, row_index, property_key)}
            >
              Remove {innerText}line {index + 1}
            </button>
          }
          <hr/>
        </div>
      );
    })}
    <button
      style={{ marginTop: '10px' }}
      onClick={() => addItem(meta_key, repeaterValues, isChild, row_index, property_key)}
    >
      Add {innerText}Item
    </button>
  </div>;
};

ControlField = withDispatch(
  (dispatch) => {
    return {
      addItem: (meta_key, repeaterValues, isChild, row_index, property_key) => {
        if (isChild) {
          if (repeaterValues[row_index][property_key]) {
            repeaterValues[row_index][property_key].push({});
          } else {
            repeaterValues[row_index][property_key] = [ {} ];
          }
        } else {
          repeaterValues.push({});
        }

        const repeaterValuesCopy = repeaterValues.splice(0);
        dispatch('core/editor').editPost({ meta: { [meta_key]: repeaterValuesCopy } });

      },
      removeItem: (meta_key, index, repeaterValues, isChild, row_index, property_key) => {
        if (confirm("Confirm delete")) {
          if (!isChild) {
            repeaterValues = repeaterValues.filter((obj, loopIndex) => loopIndex !== index);
          } else {
            repeaterValues[row_index][property_key] = repeaterValues[row_index][property_key].filter((obj, loopIndex) => loopIndex !== index);
          }

          const repeaterValuesCopy = repeaterValues.splice(0);
          dispatch('core/editor').editPost({ meta: { [meta_key]: repeaterValuesCopy } });
        }
      }
    };
  }
)(ControlField);

const RepeaterControl = ({ field, controlsIndex, property_key, row_index, isChild = false }) => {
  return (
    <ControlField
      field={field}
      controlsIndex={controlsIndex}
      property_key={property_key}
      row_index={row_index}
      isChild={isChild}
    />
  );
};

export default RepeaterControl;
