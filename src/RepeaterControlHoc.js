const {withSelect, select, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components
import TextControlHoc from "./TextControlHoc";

const InnerControlComponent = props => {
	const {key, field, row_index, property_key, repeater_record_label, repeater_values, control_index} = props
	let ControlField = control_index['text']
	return <ControlField key={key}
							  field={field}
							  row_index={row_index}
							  property_key={property_key}
							  repeater_record_label={repeater_record_label}
							  repeater_values={repeater_values}
	/>
}

let ControlField = ({value, handleFieldChange, addItem, removeItem, field, controlsIndex}) => {
	const {meta_key, label, show_in_rest} = field
	console.log(label)

	const properties = show_in_rest?.schema?.items?.properties
	let propertiesKeys = Object.entries(properties).map(item => item[0])
	let repeaterValues = useSelect(
		select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
	);
	// let repeaterValues = select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
	return <>
		<h3>{`${label}`} (Repeater field):</h3>
		{repeaterValues.map((row, index) => {
			return <div key={`repeaterValues${index}${meta_key}`}>
				<div><b>Repeater Record {index + 1}:</b></div>
				{propertiesKeys.map((property_key, innerIndex) => {
					let innerField = properties[property_key]
					innerField.meta_key = meta_key
					// let InnerControlField = controlsIndex['text']
					console.log(index + property_key + meta_key)
					return <InnerControlComponent
						key={index + property_key}
						field={innerField}
						row_index={index}
						property_key={property_key}
						repeater_record_label={`${label} ${property_key}`}
						repeater_values={repeaterValues}
						control_index={controlsIndex}
					/>

					// <TextControl
					//     key={index + property_key}
					//     label={`Set ${label} ${property_key} ${index + 1}`}
					//     value={repeaterValues[index][property_key]}
					//     onChange={value => {
					//         handleFieldChange(repeaterValues,index, property_key,value)
					//     }}
					// />
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
			// handleFieldChange: (repeaterValues, index, property_key, value) => {
			// 	repeaterValues[index] = repeaterValues[index]
			// 	repeaterValues[index][property_key] = value
			// 	let repeaterValuesCopy = repeaterValues.splice(0)
			// 	dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})
			// },
			// handleFieldChange: (value)=>{
			// 		dispatch('core/editor').editPost({meta: {[meta_key]: value}})
			// },
			addItem: (meta_key, repeaterValues) => {
				repeaterValues.push({})
				let repeaterValuesCopy = repeaterValues.splice(0)
				dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})

			},
			removeItem: (meta_key, index, repeaterValues) => {
				if(confirm("Confirm delete")) {
					delete repeaterValues[index]
					repeaterValues = repeaterValues.filter(obj => typeof obj !== 'undefined')
					dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValues}})
				}

			}
		}
	}
)(ControlField);

const RepeaterControlHoc = ({field, controlsIndex}) => {
	return <><ControlField field={field} controlsIndex={controlsIndex}/></>
}

export default RepeaterControlHoc
