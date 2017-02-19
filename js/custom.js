jQuery(document).ready(function(){

  if ( jQuery(window).width() <= 1024 ){
    jQuery('#welcome').insertBefore(jQuery('#sabai'));
  }

});  // end function

jQuery(window).resize(function(){

  if ( jQuery(window).width() <= 1024 ){
    jQuery('#welcome').insertBefore(jQuery('#sabai'));
  }

  else{
    jQuery('#sabai').insertBefore(jQuery('#welcome'));
  }

}); //end function
