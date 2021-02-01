## Adding Custom fields to Gutenberg simplified

Simple Guten Fields is a concept for developers how to add custom fields to Gutenberg editor.

Get started:
* Install the plugin via zip file or git clone to ```wp-content/plugins``` folder
* Activate Plugin
* To view the demo fields in post type "post" uncomment line 3 in the file "register-fields.php" ```//add_filter( 'sgf_register_fields', 'sgf_post_fields' );```

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

### Develoment 

```npm install``` in root folder
```npm run start``` for develpoment
```npm run build``` for build

The node commands are based on [wp scripts create block](https://developer.wordpress.org/block-editor/packages/packages-create-block/) 
### Experimental concept
This plugin goal is to demonstrate a concept and may be used as a base for fields setup but is not production ready. It's strongly recommended to not the plugin as is on a live site.

### Fields settings examples

```
//Simple text field
$fields_array[] = [
	'meta_key' => 'publisher',
];

// Number field with default
	$fields_array[] = [
	'meta_key' => 'sales',
	'type'     => 'number',
	'default'  => 100,
];

// Select with default

$month_options = array_map( function ( $value ) {
$label = date( 'F', strtotime( date( 'Y' ) . "-" . str_pad( $value, 2, '0', STR_PAD_LEFT ) . "-01" ) );

return [ 'value' => $value, 'label' => $label ];
}, range( 1, 12 ) );

$fields_array[] = [
	'meta_key' => 'month',
	'default'  => (int) date( 'F' ),
	'control'  => 'select',
	'options'  => $month_options,
	'type'     => 'number',
];

// Simple repeater
$fields_array[] = [
	'meta_key'     => 'books',
	'control'      => 'repeater',
	'type'         => 'array',
	'default'      => [ [ 'title' => '' ] ],
	'show_in_rest' => [
		'schema' => [
			'items' => [
				'type'       => 'object',
				'properties' => [
					'title' => [
						'type' => 'string',
					],
				],
			],
		],
	],
];

// Repeater with multiple fields
$fields_array[] = [
	'meta_key'     => 'external_reviews',
	'control'      => 'repeater',
	'type'         => 'array',
	'default'      => [],
	'show_in_rest' => [
		'schema' => [
			'items' => [
				'type'       => 'object',
				'properties' => [
					'url'       => [
						'type' => 'string',
					],
					'site_name' => [
						'type' => 'string',
					],
				],
			]
		],
	],
];

// Color fields in separate panel
$fields_array[] = [
	'meta_key' => 'footer_override_color',
	'control'  => 'color',
	'panel'    => 'override_styles',
];
$fields_array[] = [
	'meta_key' => 'sidebar_override_color',
	'control'  => 'color',
	'panel'    => 'override_styles',
];

// Image field in separate panel
$fields_array[] = [
	'meta_key' => 'footer_override_background_image',
	'type'     => 'integer',
	'default'  => 0,
	'control'  => 'media',
	'panel'    => 'override_background_image',
];

$fields_array[] = [
	'meta_key' => 'sidebar_override_background_image',
	'type'     => 'integer',
	'default'  => 0,
	'control'  => 'media',
	'panel'    => 'override_background_image',
];

// Multiselect
$fields_array[] = [
	'single'       => true,
	'meta_key'     => 'related_products',
	'control'      => 'multiselect',
	'type'         => 'array',
	'options'      => ats_get_operators_dropdown(),
	'show_in_rest' => [
		'schema' => [
			'type'  => 'array',
			'items' => [
				'type' => 'number'
			],
		],

	]
];

// Multiselect inside repeater
$fields_array[] = [
	'meta_key'     => 'books',
	'control'      => 'repeater',
	'type'         => 'array',
	'default'      => [],
	'show_in_rest' => [
		'schema' => [
			'items' => [
				'type'       => 'object',
				'properties' => [
					'book_name' => [
						'type'    => 'string',
						'control' => 'text'
					],
					'languages' => [
						'type'    => 'array',
						'control' => 'multiselect',
						'options' => [
							[ 'value' => 'EN', 'label' => 'English' ],
							[ 'value' => 'ES', 'label' => 'Spanish' ]
						],
						'default' => [],
						'label'   => 'Select States'
					],
				],
			]
		],
	],
	'panel'        => 'Books Repeater'
];
```
