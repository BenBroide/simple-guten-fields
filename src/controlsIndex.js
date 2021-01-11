import TextFieldHoc from "./TextControlHoc";
import ColorPickerHoc from "./ColorPickerHoc";
import SelectControlHoc from "./SelectControlHoc";
import MediaUploadHoc from "./MediaUploadHoc";
import RepeaterControlHoc from "./RepeaterControlHoc";

const controlsIndex =
	{
		text: TextFieldHoc,
		color: ColorPickerHoc,
		select: SelectControlHoc,
		media: MediaUploadHoc,
		repeater: RepeaterControlHoc
	}
	export default controlsIndex
