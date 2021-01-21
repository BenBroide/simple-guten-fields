import TextField from "./TextControl";
import TextareaField from "./TextareaControl";
import ColorPickerComponent from "./ColorPicker";
import SelectControlComponent from "./SelectControl";
import MediaUpload from "./MediaUpload";
import RepeaterControl from "./RepeaterControl";

const controlsIndex =
	{
		text: TextField,
		textarea : TextareaField,
		color: ColorPickerComponent,
		select: SelectControlComponent,
		media: MediaUpload,
		repeater: RepeaterControl
	}
	export default controlsIndex
