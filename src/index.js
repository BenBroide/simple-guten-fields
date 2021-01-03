import {registerPlugin} from '@wordpress/plugins';
import {PluginDocumentSettingPanel} from '@wordpress/edit-post';
import TextFieldHoc from './TextControlHoc'
import SelectControlHoc from './SelectControlHoc'
import ColorPickerHoc from './ColorPickerHoc'
import MediaUploadHoc from './MediaUploadHoc'
import RepeaterControlHoc from './RepeaterControlHoc'

const controlsIndex =
	{
		text: TextFieldHoc,
		color: ColorPickerHoc,
		select: SelectControlHoc,
		media: MediaUploadHoc,
		repeater: RepeaterControlHoc
	}

const CustomFieldsPanel = () => {

	let fields = window.sgf_data.fields;

	let currentCpt = wp.data.select('core/editor').getCurrentPostType()
	if(!fields.map(field => field.post_type).includes( currentCpt)) {
		return null;
	}

	if(fields) {
		fields = fields.filter(field => field.post_type == currentCpt)
	}

	let panels = fields.map(field => field.panel).filter((item, i, array) => array.indexOf(item) === i)
	return <div>
		{panels.map((panel, panelIndex) => {
			return <div key={panelIndex}>
				<PluginDocumentSettingPanel
					name={panel}
					title={panel.replace('-', ' ').replace('_', ' ')}
					className="custom-panel"
				>
					{fields.filter(field => field.panel === panel).map((field, index) => {
						let ControlHoc = controlsIndex[field.control]
						return <><ControlHoc key={index} field={field}/>
							<hr/>
						</>
					})}
				</PluginDocumentSettingPanel>
			</div>
		})}
	</div>;
}

registerPlugin('plugin-document-setting-panel-demo', {
	render: CustomFieldsPanel
})
