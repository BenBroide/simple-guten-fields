const {
    components: { DateTimePicker, TextControl, Popover },
    data: { dispatch, useSelect },
    element: { useState, useCallback },
    date: { format },
} = wp;

const DatePickerControlField = ({
                                    field: { label, meta_key, placeholder },
                                    row_index,
                                    property_key,
                                    values,
                                    isChild,
                                    onChange,
                                }) => {
    const [openDatePopup, setOpenDatePopup] = useState(false);

    const value = isChild
        ? values
        : useSelect(select => select('core/editor').getEditedPostAttribute('meta')[meta_key]);

    const onChangeHandler = useCallback((value) => {
        const formattedValue = format('Y-m-d H:i:s', value);

        if (onChange) {
            onChange(formattedValue, property_key, row_index);

            return;
        }

        dispatch('core/editor').editPost({ meta: { [meta_key]: formattedValue } });
    }, [property_key, row_index, meta_key, onChange, dispatch]);

    return (
        <div>
            <TextControl
                label={`Set ${(property_key || '').replace('_', ' ') || label}`}
                value={value}
                readonly={true}
                onClick={() => setOpenDatePopup(true)}
                style={{ margin: 0 }}
                placeholder={placeholder}
            />
            {
                openDatePopup
                && <Popover
                    noArrow={false}
                    onClose={() => setOpenDatePopup(false)}
                >
                    <div style={{ padding: 15 }}>
                        <DateTimePicker
                            currentDate={value}
                            onChange={onChangeHandler}
                        />
                    </div>
                </Popover>
            }
        </div>
    );
}

export default DatePickerControlField;
