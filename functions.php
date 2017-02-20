<?php

/* Change Footer Credits */
add_action( 'init', 'custom_remove_footer_credit', 10 );
function custom_remove_footer_credit () {
  remove_action( 'storefront_footer', 'storefront_credit', 20 );
  add_action( 'storefront_footer', 'custom_storefront_credit', 20 );
}
function custom_storefront_credit() {?>
  <div class="site-info">
    <span>
      &copy; <?php echo get_bloginfo( 'name' ) . ' ' . date( 'Y' ); ?>
    </span>
  </div><!-- .site-info -->
  <?php
}

/* Change number of product categories */
add_filter( 'storefront_product_categories_args', 'customize_home_product_categories' );
function customize_home_product_categories( $args ) {
  $args['limit'] = 6;
  $args['columns'] = 3;
  return $args;
}

#Load scripts
add_action('wp_enqueue_scripts', 'my_scripts');
function my_scripts() {
  wp_enqueue_script('custom-js', get_stylesheet_directory_uri().'/js/custom.js', array( 'jquery' ), 1.0, true);
  wp_enqueue_style( 'custom-css', get_stylesheet_directory_uri().'/css/custom.css', false, '1.1', 'all');
}
