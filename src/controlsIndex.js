import TextField from "./TextControl";
import ColorPickerComponent from "./ColorPicker";
import SelectControlComponent from "./SelectControl";
import MediaUpload from "./MediaUpload";
import RepeaterControl from "./RepeaterControl";

const controlsIndex =
	{
		text: TextField,
		color: ColorPickerComponent,
		select: SelectControlComponent,
		media: MediaUpload,
		repeater: RepeaterControl
	}
	export default controlsIndex
