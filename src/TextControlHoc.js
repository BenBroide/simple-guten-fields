const {withSelect, select, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components

const ControlField = withSelect(
	(select, props) => {
		const {field, row_index, property_key,meta_key} = props;
		const value = select('core/editor').getEditedPostAttribute('meta')[field.meta_key];
		const key = meta_key + row_index + property_key

		if( row_index === undefined ) {
			return {
				value,
				key,
				label: `Set ${field.label}`
			};
		}

		return {
			value: value[row_index][property_key],
			key,
			label: `Set ${property_key.replace('_', ' ')}`
		};
	}
)( TextControl );

export default withDispatch(
	(dispatch, props) => {
		const {row_index, meta_key, repeater_values, property_key} = props;

		return {
			onChange: (value) => {
				let newValue = value;

				if(row_index !== undefined) {
					newValue = repeater_values.map((row, innerIndex) => {
						return innerIndex === row_index ? {...row, [property_key]: value} : row
					});
				}

				dispatch('core/editor').editPost({meta: {[meta_key]: newValue}});
			}
		}
	}
)(ControlField);

// const TextFieldHoc = (props) => {
// 	return <div><ControlField {...props}/></div>
// }
// export default TextFieldHoc
