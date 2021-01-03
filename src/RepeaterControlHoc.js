const {withSelect, withDispatch, useSelect} = wp.data
const {TextControl} = wp.components

const RepeaterControlHoc = ({field}) => {
    const {meta_key, label, show_in_rest} = field


    const properties = show_in_rest?.schema?.items?.properties
    let propertiesKeys = Object.entries(properties).map(item => item[0])

    let ControlField = ({value, handleFieldChange, addItem, removeItem}) => {

		let arrayValues = useSelect(
			select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
		);

        return <>
            <h3>{label}:</h3>
            {arrayValues.map((row, index) => {
                return <div key={`arrayValues${index}`}>

                    {propertiesKeys.map((propertyKey, innerIndex) => {
                        return <TextControl
                            key={index + propertyKey}
                            label={`Set ${label} ${propertyKey} ${index + 1}`}
                            value={arrayValues[index][propertyKey]}
                            onChange={value => {
                                handleFieldChange(arrayValues,index, propertyKey,value)
                            }}
                        />
                    })}
                    {index > 0 && <button onClick={() => {
                        removeItem(index, arrayValues)
                    }}>Remove line {index + 1}
                    </button>}
                    <hr/>
                </div>
            })}
            <button
                style={{marginTop: '10px'}}
                onClick={() => {
                    addItem(arrayValues)
                }
                }>Add Item
            </button>
        </>
    };

    ControlField = withDispatch(
        (dispatch) => {
            return {
                handleFieldChange: (arrayValues,index, propertyKey,value) => {
                    arrayValues[index] =arrayValues[index]
                    arrayValues[index][propertyKey] = value
                    let arrayValuesCopy = arrayValues.splice(0)
                    dispatch('core/editor').editPost({meta: {[meta_key]: arrayValuesCopy}})
                },
                addItem: (arrayValues) => {
                    arrayValues.push({})
                    let arrayValuesCopy = arrayValues.splice(0)
                    dispatch('core/editor').editPost({meta: {[meta_key]: arrayValuesCopy}})

                },
                removeItem: (index, arrayValues) => {
                    if(confirm("Confirm delete")) {
                        delete arrayValues[index]
                        arrayValues = arrayValues.filter(obj => typeof obj !== 'undefined')
                        dispatch('core/editor').editPost({meta: {[meta_key]: arrayValues}})
                    }

                }
            }
        }
    )(ControlField);
    return <><ControlField/></>
}

export default RepeaterControlHoc
