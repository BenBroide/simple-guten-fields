import InnerControlComponent from "./InnerControlComponent";
const {select, withDispatch, useSelect} = wp.data

let ControlField = ({ addItem, removeItem, field, controlsIndex, property_key, row_index}) => {
	const {meta_key, label, show_in_rest, parent} = field

	const properties = show_in_rest?.schema?.items?.properties
	let propertiesKeys = Object.entries(properties).map(item => item[0])
	let repeaterValues = useSelect(
		select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
	);

	const loopRepeaterValues = parent ? repeaterValues : repeaterValues[row_index][property_key];
	return <div style={{marginLeft: parent ? 0 : 10}}>
		<h3>{`${label}`} (Repeater field):</h3>
		{Array.isArray(loopRepeaterValues) && loopRepeaterValues.map((row, index) => {
			return <div key={`repeaterValues${index}${meta_key}`}>
				<div><b>Repeater Record {index + 1}:</b></div>
				{propertiesKeys.map((propertyKey, innerIndex) => {
					let innerField = properties[propertyKey]
					innerField.meta_key = meta_key
					return <InnerControlComponent
						key={index + property_key}
						field={innerField}
						row_index={index}
						parent_row_index={row_index}
						property_key={propertyKey}
						parent_property_key={property_key}
						repeater_record_label={`${label} ${propertyKey}`}
						repeater_values={loopRepeaterValues}
						control_index={controlsIndex}
						parent={parent}
					/>
				})}
				{index > 0 && <button onClick={() => {
					removeItem(meta_key, index, repeaterValues, parent, row_index, property_key)
				}}>Remove line {index + 1}
				</button>}
				<hr/>
			</div>
		})}
		<button
			style={{marginTop: '10px'}}
			onClick={() => {
				addItem(meta_key, repeaterValues, parent, row_index, property_key)
			}
			}>Add Item
		</button>
	</div>
};

ControlField = withDispatch(
	(dispatch) => {
		return {
			addItem: (meta_key, repeaterValues, parent, row_index, property_key) => {
				if (!parent) {
					if (!repeaterValues) {
						repeaterValues = [];
					}
					if (repeaterValues[row_index]?.[property_key]) {
						repeaterValues[row_index][property_key].push({});
					} else {
						repeaterValues[row_index] = {
							[property_key]: [{}]
						}
					}
				} else {
					repeaterValues.push({})
				}

				let repeaterValuesCopy = repeaterValues.splice(0)
				dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})

			},
			removeItem: (meta_key, index, repeaterValues, parent, row_index, property_key) => {
				if(confirm("Confirm delete")) {
					if (parent) {
						repeaterValues = repeaterValues.filter((obj,loopIndex) => loopIndex !== index)
					} else {
						repeaterValues[row_index][property_key] = repeaterValues[row_index][property_key].filter((obj,loopIndex) => loopIndex !== index)
					}

					repeaterValues = JSON.parse(JSON.stringify(repeaterValues));
					dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValues}})
				}

			}
		}
	}
)(ControlField);

const RepeaterControl = ({field, controlsIndex, property_key, row_index}) => {
	return <><ControlField field={field} controlsIndex={controlsIndex} property_key={property_key} row_index={row_index} /></>
}

export default RepeaterControl
