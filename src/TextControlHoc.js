const {withSelect, select,withDispatch, useSelect} = wp.data
const {TextControl} = wp.components
const TextFieldHoc = (props) => {
	const {field} = props
	const meta_key = field.meta_key

	const property_key = props?.property_key
	const row_index = props?.row_index
	const notRepeaterField = typeof row_index === 'undefined'
	let ControlField = ({handleValueChange}) => {
		let value = ''
		let fieldLabel = ''
		if(notRepeaterField) {
			fieldLabel = field.label
			value = select('core/editor').getEditedPostAttribute('meta')[meta_key]
		} else {
			console.log(meta_key)
			fieldLabel = property_key.replace('_', ' ')
			// if(select('core/editor').getEditedPostAttribute('meta')[meta_key][row_index]){
				value = select('core/editor').getEditedPostAttribute('meta')[meta_key][row_index][property_key]
			// } else {
			// 	value = ''
			// }

		}
		return <TextControl
			label={`Set ${fieldLabel}`}
			value={value}
			onChange={value => handleValueChange(value)}
		/>
	};

	ControlField = withSelect(
		(select) => {
			return select('core/editor').getEditedPostAttribute('meta')[meta_key]
		}
	)(ControlField);

	ControlField = withDispatch(
		(dispatch) => {
			return {
				handleValueChange: (value) => {
					let newValue = value
					if(!notRepeaterField) {
						let repeaterValues = props.repeater_values
						newValue = repeaterValues.map((row, innerIndex) => {
							return innerIndex === row_index ? {...row, [property_key]: value} : row
						})
					}
					dispatch('core/editor').editPost({meta: {[meta_key]: newValue}})

				}

			}
		}
	)(ControlField);

	return <div><ControlField/></div>
}
export default TextFieldHoc
