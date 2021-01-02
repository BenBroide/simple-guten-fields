<?php
/**
 * Plugin Name:     Simple Guten Fields
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     simple-guten-fields
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_simple_guten_fields_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/simple-guten-fields" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'sgf-script',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$fields = apply_filters( 'sgf_register_fields', [] );
	$data   = [
		'fields'      => $fields,
	];
	wp_localize_script( 'sgf-script', 'sgf_data', $data );

	wp_enqueue_script('sgf-script');
}
add_action( 'admin_enqueue_scripts', 'create_block_simple_guten_fields_init' );

function sgf_meta_fields() {
	$fields_array = apply_filters( 'sgf_register_fields', [] );
	foreach ( $fields_array as $field ) {

		// Ensure post type exists and field name is valid
		if ( ! $field['post_type'] || ! post_type_exists( $field['post_type'] ) || ! $field['meta_key'] || ! is_string( $field['meta_key'] ) ) {
			return;
		}


		// Using Null Coalesce Operator to set defaults
		register_post_meta( $field['post_type'], $field['meta_key'], [
			'type'         => $field['type'] ?? 'string',
			'single'       => $field['single'] ?? true,
			'default'      => $field['default'] ?? '',
			'show_in_rest' => $field['show_in_rest'] ?? true,
			'control'      => $field['control'] ?? 'text'
		] );

	}

	add_filter( 'sgf_data', function ( $fields_array_before_filter = [] ) use ( $fields_array ) {

		return array_merge( $fields_array_before_filter, $fields_array );
	}, 10
	);
}
//add_action('init', 'sgf_filters', 0);
//function sgf_filters(){
//	add_filter( 'sgf_meta_fields', 'sgf_post_fields' );
//	sgf_meta_fields();
//}

add_action( 'rest_api_init', 'sgf_meta_fields' , 0);
add_filter( 'sgf_register_fields', 'sgf_post_fields' );

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
		$label = date('F', strtotime(date('Y')."-".str_pad($value,2,'0',STR_PAD_LEFT)."-01"));
		return [ 'value' => $value, 'label' => $label ];
	}, range( 1, 12 ) ) ;

	$fields_array[] = [
		'meta_key' => 'month',
		'default'  => (int)date('F'),
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

	$fields_array = array_map( function ( $field ) {
		$field['post_type'] = $field['post_type'] ?? 'post';
		$field['control']   = $field['control'] ?? 'text';
		$field['panel']   = $field['panel'] ?? 'custom-fields';
		$field['label']     = ucfirst( str_replace( '_', ' ', $field['meta_key'] ) );

		return $field;
	}, $fields_array );

	return $fields_array;
}



