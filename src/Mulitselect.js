import MultiSelect from 'react-select'

const {withSelect, select, withDispatch} = wp.data

let ControlField = withSelect(
    (select, props) => {

        const {label, meta_key, options, isMulti} = props.field;
        const {row_index, property_key} = props
        const value = select('core/editor').getEditedPostAttribute('meta')[meta_key];
        const key = meta_key + row_index + property_key;
        let isMultiProp = isMulti ?? true

        let defaultValue = []

        if(typeof row_index === 'undefined') {
            defaultValue = []

            defaultValue = Array.isArray(value) ? value.map(item => {
                let arrayItemProperties = props?.field?.show_in_rest?.schema?.items?.properties;
                let arrayItemKey = Object.keys(arrayItemProperties)[0];

                let lookInOptions = item[arrayItemKey]

                let labelOption = options.find(propOption => propOption.value === lookInOptions)
                let label = labelOption ? labelOption.label : item[arrayItemKey]

                let val = item[arrayItemKey]

                return {value: val, label: label}
            }) : []
        } else {
            defaultValue = value[row_index] && Array.isArray(value[row_index][property_key]) ? value[row_index][property_key].map(option => {
                let labelOption = options.find(propOption => propOption.value === option)
                let label = labelOption ? labelOption.label : option
                return {value: option, label: label}
            }) : []
        }

        if(typeof row_index === 'undefined') {
            return {isMulti: isMultiProp, placeholder: label, defaultValue, key, options, label: `Set ${label}`};
        }

        return {
            placeholder: label,
            isMulti: isMultiProp,
            defaultValue,
            key,
            options,
            label: `Set ${property_key.replace('_', ' ')}`
        };
    }
)(MultiSelect);

ControlField = withDispatch(
    (dispatch, props) => {
        const {meta_key} = props.field;
        const {row_index, property_key} = props

        return {
            onChange: (value) => {
                console.log(value)
                let flatArray = value.map ? value.map(option => option.value) : [value.value]
                let newValue
                if(typeof row_index !== 'undefined') {
                    let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
                    newValue = repeaterValues.map((row, innerIndex) => {

                        return innerIndex === row_index ? {...row, [property_key]: flatArray} : row
                    });
                } else {
                    let arrayItemProperties = props?.field?.show_in_rest?.schema?.items?.properties;
                    let arrayItemKey = Object.keys(arrayItemProperties)[0];
                    newValue = flatArray.map(val => {
                        return {[arrayItemKey]: val}
                    })
                }

                dispatch('core/editor').editPost({meta: {[meta_key]: newValue}});
            }
        }
    }
)(ControlField);

export default ControlField
