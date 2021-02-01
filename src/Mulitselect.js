import Select, { components } from 'react-select';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { arrayMove } from "./utils";

const { withSelect, select, withDispatch } = wp.data;

const SortableMultiValue = SortableElement(props => {
  const onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  const innerProps = { onMouseDown };
  return <components.MultiValue {...props} innerProps={innerProps}/>;
});

const SortableSelect = SortableContainer(Select);

let ControlField = withSelect(
  (select, { field: { label, meta_key, options, isMulti, show_in_rest }, row_index, property_key }) => {
    const values = select('core/editor').getEditedPostAttribute('meta')[meta_key];
    const key = meta_key + row_index + property_key;
    const isMultiProp = isMulti ?? true;

    if (typeof row_index === 'undefined') {
      const defaultValue = Array.isArray(values) ? values.map(item => {
        const arrayItemProperties = show_in_rest?.schema?.items?.properties;
        const arrayItemKey = Object.keys(arrayItemProperties)[0];

        const lookInOptions = item[arrayItemKey];

        const labelOption = options.find(propOption => propOption.value === lookInOptions);
        const label = labelOption ? labelOption.label : item[arrayItemKey];

        const value = item[arrayItemKey];

        return { value, label };
      }) : [];

      return {
        axis: 'xy',
        distance: 4,
        isMulti: isMultiProp,
        placeholder: label,
        value: defaultValue,
        key,
        options,
        label: `Set ${label}`,
        components: { MultiValue: SortableMultiValue }
      };
    }

    const defaultValue = values[row_index] && Array.isArray(values[row_index][property_key])
      ? values[row_index][property_key].map(option => {
        const labelOption = options.find(propOption => propOption.value === option);
        const label = labelOption ? labelOption.label : option;

        return { value: option, label: label };
      })
      : [];

    return {
      axis: 'xy',
      distance: 4,
      placeholder: label,
      isMulti: isMultiProp,
      defaultValue,
      key,
      options,
      label: `Set ${property_key.replace('_', ' ')}`,
      components: { MultiValue: SortableMultiValue }
    };
  }
)(SortableSelect);

ControlField = withDispatch(
  (dispatch, { field: { meta_key, show_in_rest }, row_index, property_key }) => {
    return {
      onChange: (value) => {
        let newValue;
        const flatArray = value.map ? value.map(option => option.value) : [ value.value ];

        if (typeof row_index !== 'undefined') {
          const repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key];

          newValue = repeaterValues.map((row, innerIndex) => (
            innerIndex === row_index ? { ...row, [property_key]: flatArray } : row
          ));
        } else {
          const arrayItemProperties = show_in_rest?.schema?.items?.properties;
          const arrayItemKey = Object.keys(arrayItemProperties)[0];

          newValue = flatArray.map(val => ({ [arrayItemKey]: val }));
        }

        dispatch('core/editor').editPost({ meta: { [meta_key]: newValue } });
      },

      onSortEnd: ({ oldIndex, newIndex }) => {
        const values = select('core/editor').getEditedPostAttribute('meta')?.[meta_key];
        const newValues = arrayMove(values, oldIndex, newIndex);

        dispatch('core/editor').editPost({ meta: { [meta_key]: newValues } });
      }
    };
  }
)(ControlField);

export default ControlField;
