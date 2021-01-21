const {withSelect, select, withDispatch, useSelect} = wp.data
const {TextareaControl} = wp.components

const ControlField = withSelect(
	(select, props) => {
		const {  label, meta_key} = props.field;
		const {row_index,property_key} = props
		const value = select('core/editor').getEditedPostAttribute('meta')[meta_key];
		const key = meta_key + row_index + property_key;
		const rows = 20
		if( typeof row_index === 'undefined' ) {
			return {value, key, rows, label: `Set ${label}`};
		}

		return {
			value: value[row_index][property_key],
			key,
			rows,
			label: `Set ${property_key.replace('_', ' ')}`,

		};
	}
)(TextareaControl);

export default withDispatch(
	(dispatch, props) => {
		const {meta_key} = props.field;
		const {row_index,property_key} = props


		return {
			onChange: (value) => {
				let newValue = value;

				if(typeof row_index !== 'undefined') {
					let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
					newValue = repeaterValues.map((row, innerIndex) => {
						return innerIndex === row_index ? {...row, [property_key]: value} : row
					});
				}
				dispatch('core/editor').editPost({meta: {[meta_key]: newValue}});
			}
		}
	}
)(ControlField);
