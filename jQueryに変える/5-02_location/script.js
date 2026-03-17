'use strict';

$(function () {
  const lang = $('html').attr('lang');

  switch (lang) {
    case 'ja':
      $('option[value="index.html"]').prop('selected', true);
      break;
    case 'en':
      $('option[value="index-en.html"]').prop('selected', true);
      break;
    case 'zh':
      $('option[value="index-zh.html"]').prop('selected', true);
      break;
    default:
  }

  $('#form select').on('change', function(){
    location.href = $(this).val();
  });
});



