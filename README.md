Simple Guten Fields is a concept for developers how to add custom fields to Gutenberg editor.

Get started:
* Install the plugin via zip file or git clone to ```wp-content/plugins``` folder
* Activate Plugin

In post type "post" editor rigth sidebar should now appear new panels with fields matching the fields set in ```register-fields.php```.

**Note**: If the fields do not update after saving, ensure in editor settings->preferences->additional panels "custom fields" is not checked, since that the default custom fields of WordPress appear below may override your fields values.

### Register fields from your theme/plugin
the filter ```add_filter( 'sgf_register_fields', 'sgf_post_fields' );```  accepts array with fields. For a simple start you can copy the content of ```register-fields``` file which includes a few fields examples to your theme/plugin.

### Experimental concept
This plugin goal is to demonstrate a concept and may be used as a base for fields setup but is not production ready. It's strongly recommended to not use this as is on a live site.
