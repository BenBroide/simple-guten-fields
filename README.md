## Adding Custom fields to Gutenberg simplified.

Simple Guten Fields is a concept for developers how to add custom fields to Gutenberg editor.

Get started:
* Install the plugin via zip file or git clone to ```wp-content/plugins``` folder
* Activate Plugin

In post type "post" editor rigth sidebar should now appear new panels with fields matching the fields set in ```register-fields.php```.

**Note**: If the fields do not update after saving, ensure in editor settings->preferences->additional panels "custom fields" is not checked, since that the default custom fields of WordPress appear below may override your fields values.

### Filter for fields registration from a diffrent theme/plugin
the filter ```sgf_register_fields```  accepts array with fields. For a simple start you can copy the content of ```register-fields.php``` file which includes a few fields examples to your theme/plugin.

example:

```php
add_filter( 'sgf_register_fields', 'sgf_post_fields' );

// Register operator fields
function sgf_post_fields( $fields_array ) {
	$fields_array[] = [
		'meta_key' => 'publisher',
	];
	return $fields_array;
}
```

### Field parameters
The field parameters map to ```register_post_meta``` params, except the ```control``` and ```panel``` params than are used in JavaScript to render the fields.

In the resources below you can more about `register_post_meta` and `show_in_rest` parameter.

[register_post_meta](https://developer.wordpress.org/block-editor/tutorials/metabox/meta-block-2-register-meta/)

[show_in_rest](https://make.wordpress.org/core/2019/10/03/wp-5-3-supports-object-and-array-meta-types-in-the-rest-api/)

### Controls values type references

| control  | type |
| --- | --- |
| text.default  | string - hex color ```#51de68```|
| color.default  | string  |
| select.options  | array ```[['label'=>'','value'=> '']]```|
| media.default  | int ```Image Post ID``` |
| repeater.default   |array (per show_in_rest schema) |
  
The file ```register-fields.php``` contains examples for all fields

### Experimental concept
This plugin goal is to demonstrate a concept and may be used as a base for fields setup but is not production ready. It's strongly recommended to not the plugin as is on a live site.
