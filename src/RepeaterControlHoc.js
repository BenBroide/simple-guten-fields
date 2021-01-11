const {withSelect, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components
import TextControlHoc from "./TextControlHoc";

const RepeaterControlHoc = ({field,controlsIndex}) => {
	const {meta_key, label, show_in_rest} = field
	console.log(label)

	const properties = show_in_rest?.schema?.items?.properties
	let propertiesKeys = Object.entries(properties).map(item => item[0])

	let ControlField = ({value, handleFieldChange, addItem, removeItem}) => {
		let repeaterValues = useSelect(
			select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
		);

		return <>
			<h3>{`${label}`} (Repeater field):</h3>
			{repeaterValues.map((row, index) => {
				return <div key={`repeaterValues${index}`}>
					<div><b>Repeater Record {index+1}:</b></div>
					{propertiesKeys.map((property_key, innerIndex) => {
						let innerField = properties[property_key]
						innerField.meta_key = meta_key
						let InnerControlField = controlsIndex['text']
						return <InnerControlField key={index + property_key}
												  field={innerField}
												  row_index = {index}
												  property_key={property_key}
												  repeater_record_label={`${label} ${property_key}`}
												  repeater_values={repeaterValues}
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
						removeItem(index, repeaterValues)
					}}>Remove line {index + 1}
					</button>}
					<hr/>
				</div>
			})}
			<button
				style={{marginTop: '10px'}}
				onClick={() => {
					addItem(repeaterValues)
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
				addItem: (repeaterValues) => {
					repeaterValues.push({})
					let repeaterValuesCopy = repeaterValues.splice(0)
					dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})

				},
				removeItem: (index, repeaterValues) => {
					if(confirm("Confirm delete")) {
						delete repeaterValues[index]
						repeaterValues = repeaterValues.filter(obj => typeof obj !== 'undefined')
						dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValues}})
					}

				}
			}
		}
	)(ControlField);
	return <><ControlField/></>
}

export default RepeaterControlHoc
