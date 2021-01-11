const {withSelect, select, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components

let ControlField = (props) => {
	const {field, handleValueChange} = props
	const meta_key = field.meta_key

	const property_key = props?.property_key
	const row_index = props?.row_index
	const notRepeaterField = typeof row_index === 'undefined'
	let fieldLabel = ''
	let value = select('core/editor').getEditedPostAttribute('meta')[field.meta_key]
	if(notRepeaterField) {
		fieldLabel = field.label
	} else {
		fieldLabel = property_key.replace('_', ' ')
	}
	return <TextControl
		key={meta_key + row_index + property_key}
		label={`Set ${fieldLabel}`}
		value={value}
		onChange={value => handleValueChange(value)}
	/>
};

ControlField = withSelect(
	(select,{field}) => {
		return   select('core/editor').getEditedPostAttribute('meta')[field.meta_key]
	}
)(ControlField);

ControlField = withDispatch(
	(dispatch) => {
		return {
			handleValueChange: (value) => {
				let newValue = value
				if(!notRepeaterField) {
					let repeaterValues = useSelect(
							select => select('core/editor').getEditedPostAttribute('meta')?.[props.meta_key]
						);
					newValue = repeaterValues.map((row, innerIndex) => {
						return innerIndex === row_index ? {...row, [property_key]: value} : row
					})
				}
				dispatch('core/editor').editPost({meta: {[meta_key]: newValue}})

			}

		}
	}
)(ControlField);


const TextFieldHoc = (props) => {
	return <div><ControlField {...props}/></div>
}
export default TextFieldHoc
