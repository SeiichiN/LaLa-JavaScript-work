'use strict';

$(function() {
  const lang = $('html').attr('lang');
  
  switch (lang) {
    case 'ja':
      $('option[value="index.html"]').prop('selected', true);
      break;
    case 'en':
      $('option[value="index-en.html"]').prop('selected', true);
      break;
    case 'zh':
      $('option[value="index-zn.html"]').prop('selected', true);
      break;
    default:
      console.log('ありえない');
  }
  
  $('select[name="select"]').on('change', function(){
    location.href = $(this).val();
  });
}); // jquery end

