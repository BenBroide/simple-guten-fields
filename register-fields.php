<?php
//add_filter( 'sgf_register_fields', 'sgf_post_fields' );

// Register operator fields
function sgf_post_fields( $fields_array ) {
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

	$fields_array = array_map( function ( $field ) {
		$field['post_type'] = $field['post_type'] ?? 'post';
		$field['control']   = $field['control'] ?? 'text';
		$field['panel']     = $field['panel'] ?? 'custom-fields';
		$field['label']     = ucfirst( str_replace( '_', ' ', $field['meta_key'] ) );

		return $field;
	}, $fields_array );

	return $fields_array;
}



