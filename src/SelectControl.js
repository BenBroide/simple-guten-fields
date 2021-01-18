const {withSelect, withDispatch, select} = wp.data
const {SelectControl} = wp.components


const SelectControlComponent = ({field}) => {
	const {meta_key, options,label} = field

	let SelectControlField = ({value, handleSelectChange}) => (
		<SelectControl
			label={`Set ${label}`}
			value={ select('core/editor').getEditedPostAttribute('meta')[meta_key]}
			onChange={value => handleSelectChange(value)}
			options={options}
		/>
	);

	SelectControlField = withSelect(
		(select) => {
			return {
				[meta_key]: select('core/editor').getEditedPostAttribute('meta')[meta_key]
			}
		}
	)(SelectControlField);

	SelectControlField = withDispatch(
		(dispatch) => {
			return {
				handleSelectChange: (value) => {
					dispatch('core/editor').editPost({meta: {[meta_key]: value}})
				}
			}
		}
	)(SelectControlField);
	return <><SelectControlField/></>
}

export default SelectControlComponent
