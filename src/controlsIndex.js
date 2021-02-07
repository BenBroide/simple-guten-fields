import TextField from "./TextControl";
import TextareaField from "./TextareaControl";
import CheckboxField from "./CheckboxControl";
import ColorPickerComponent from "./ColorPicker";
import SelectControlComponent from "./SelectControl";
import MediaUpload from "./MediaUpload";
import RepeaterControl from "./RepeaterControl";
import Multiselect from "./Mulitselect";

const controlsIndex =
    {
        text: TextField,
        textarea: TextareaField,
        checkbox: CheckboxField,
        color: ColorPickerComponent,
        select: SelectControlComponent,
        media: MediaUpload,
        repeater: RepeaterControl,
        multiselect: Multiselect
    }
export default controlsIndex
