const {withSelect, withDispatch, useSelect,select} = wp.data;
const { TextControl}  = wp.components;
const TextFieldHoc =({field}) =>{
	const {meta_key,label} = field

	let FieldControl = ({ value, handleValueChange}) => {
		return <TextControl
			label={`Set ${label}`}
			value={ value}
			onChange={value => handleValueChange(value)}
		/>
	};

	FieldControl = withSelect(
		(select) => {
			return {
				value: select('core/editor').getEditedPostAttribute('meta')[meta_key]
			}
		}
	)(FieldControl);

	FieldControl = withDispatch(
		(dispatch) => {
			return {
				handleValueChange: (value) => {
					dispatch('core/editor').editPost({meta: {[meta_key]: value}})
				}
			}
		}
	)(FieldControl);

	return <><FieldControl /></>
}
export default TextFieldHoc
