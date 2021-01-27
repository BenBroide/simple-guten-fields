import controlsIndex from "./controlsIndex";
const {select, withDispatch, useSelect} = wp.data

const InnerControlComponent = props => {
	const {key, field, row_index, property_key, repeater_record_label} = props
	let controlFieldKey = field.control ?? 'text'
	let ControlField = controlsIndex[controlFieldKey]
	let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[props.meta_key]
		return <ControlField key={key}
					  field={field}
					  row_index={row_index}
					  property_key={property_key}
					  repeater_record_label={repeater_record_label}
					  repeater_values={repeaterValues}
		/>
}

let ControlField = ({ addItem, removeItem, field, controlsIndex}) => {
	const {meta_key, label, show_in_rest} = field

	const properties = show_in_rest?.schema?.items?.properties
	let propertiesKeys = Object.entries(properties).map(item => item[0])
	let repeaterValues = useSelect(
		select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
	);
	return <>
		<h3>{`${label}`} (Repeater field):</h3>
		{Array.isArray(repeaterValues) && repeaterValues.map((row, index) => {
			return <div key={`repeaterValues${index}${meta_key}`}>
				<div><b>Repeater Record {index + 1}:</b></div>
				{propertiesKeys.map((property_key, innerIndex) => {
					let innerField = properties[property_key]
					innerField.meta_key = meta_key
					return <InnerControlComponent
						key={index + property_key}
						field={innerField}
						row_index={index}
						property_key={property_key}
						repeater_record_label={`${label} ${property_key}`}
						repeater_values={repeaterValues}
						control_index={controlsIndex}
					/>
				})}
				{index > 0 && <button onClick={() => {
					removeItem(meta_key, index, repeaterValues)
				}}>Remove line {index + 1}
				</button>}
				<hr/>
			</div>
		})}
		<button
			style={{marginTop: '10px'}}
			onClick={() => {
				addItem(meta_key, repeaterValues)
			}
			}>Add Item
		</button>
	</>
};

ControlField = withDispatch(
	(dispatch) => {
		return {
			addItem: (meta_key, repeaterValues) => {
				repeaterValues.push({})
				let repeaterValuesCopy = repeaterValues.splice(0)
				dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})

			},
			removeItem: (meta_key, index, repeaterValues) => {
				if(confirm("Confirm delete")) {
					repeaterValues = repeaterValues.filter((obj,loopIndex) => loopIndex !== index)
					dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValues}})
				}

			}
		}
	}
)(ControlField);

const RepeaterControl = ({field, controlsIndex}) => {
	return <><ControlField field={field} controlsIndex={controlsIndex}/></>
}

export default RepeaterControl
