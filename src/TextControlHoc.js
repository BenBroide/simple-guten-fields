const {withSelect, withDispatch, select} = wp.data
const { TextControl} = wp.components
const TextFieldHoc =({field}) =>{
	const {meta_key,label} = field

	let FieldControl = ({value, handleValueChange}) => (
		<TextControl
			label={`Set ${label}`}
			value={select('core/editor').getEditedPostAttribute('meta')[meta_key]}
			onChange={value => handleValueChange(value)}
		/>
	);

	FieldControl = withSelect(
		(select) => {
			return {
				[meta_key]: select('core/editor').getEditedPostAttribute('meta')[meta_key]
			}
		}
	)(FieldControl);

	FieldControl = withDispatch(
		(dispatch) => {
			return {
				handleValueChange: (value) => {
					value = `${value}`
					console.log(value)
					dispatch('core/editor').editPost({meta: {[meta_key]: value}})
				}
			}
		}
	)(FieldControl);

	return <><FieldControl /></>
}
export default TextFieldHoc
