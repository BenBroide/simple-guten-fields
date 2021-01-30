const {withSelect, select, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components

const ControlField = withSelect(
	(select, props) => {
		const {  label, meta_key} = props.field;

		const {row_index,property_key, parent_row_index, parent_property_key} = props
		const value = select('core/editor').getEditedPostAttribute('meta')[meta_key];
		const key = meta_key + row_index + property_key;

		if( typeof row_index === 'undefined' ) {
			return {value, key, label: `Set ${label}`};
		}

		const returnedValue = props.parent ? value[row_index][property_key] : value[parent_row_index][parent_property_key][row_index][property_key];

		return {
			value: returnedValue,
			key,
			label: `Set ${property_key.replace('_', ' ')}`
		};
	}
)(TextControl);

export default withDispatch(
	(dispatch, props) => {
		const {meta_key} = props.field;
		const {row_index,property_key, parent, parent_row_index, parent_property_key} = props

		return {
			onChange: (value) => {
				let newValue = value;

				if(typeof row_index !== 'undefined') {
					let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key]

					if (parent) {
						newValue = repeaterValues.map((row, innerIndex) => {
							return innerIndex === row_index ? {...row, [property_key]: value} : row
						});
					} else {
						const foo = repeaterValues[parent_row_index][parent_property_key].map((row, innerIndex) => {
							return innerIndex === row_index ? {...row, [property_key]: value} : row
						});

						newValue = [ ...repeaterValues ];
						newValue[parent_row_index][parent_property_key] = foo;
					}
				}
				dispatch('core/editor').editPost({meta: {[meta_key]: newValue}});
			}
		}
	}
)(ControlField);
