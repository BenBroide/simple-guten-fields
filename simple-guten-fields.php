<?php
/**
 * Plugin Name:     Simple Guten Fields
 * Description:     Simple Guten Fields is a concept of adding custom fields to Gutenberg editor.
 */
include ('register-fields.php');
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

add_action( 'rest_api_init', 'sgf_meta_fields' , 0);
