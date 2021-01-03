import {MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';

const {Button} = wp.components
const {dispatch, useSelect} = wp.data

const ALLOWED_MEDIA_TYPES = ['image'];

const ImagePlaceholder = () => (
	<div style={{
		width: '100%',
		height: '100px',
		backgroundColor: 'gray',
		border: '1px solid black',
		padding: '5px',
		color: '#fff',
		textAlign: 'center'
	}}>SET IMAGE</div>
)

const mediaUploadHoc = ({field}) => {
	let {meta_key, label} = field
	const imageId = useSelect(
		select => select('core/editor').getEditedPostAttribute('meta')?.[meta_key]
	);
	const imageUrl = useSelect(
		select => select('core').getEntityRecord('postType', 'attachment', imageId)?.source_url,
		[imageId]
	);

	return (
		<div>
			<div>

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) => {
							dispatch('core/editor').editPost({meta: {[meta_key]: media.id}})
						}}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={imageId}
						render={({open}) => {
							return <div onClick={open}>
								{!imageUrl ? <ImagePlaceholder/> :
									<div style={{textAlign: 'center'}}><img style={{maxWidth: '200px'}} src={imageUrl}/>
									</div>}
								<Button className={'components-button is-secondary'}>Click to Select {label}</Button>
							</div>
						}}
					/>
				</MediaUploadCheck>
			</div>
		</div>
	);
}
export default mediaUploadHoc
