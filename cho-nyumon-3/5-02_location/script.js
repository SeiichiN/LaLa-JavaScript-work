'use strict';

$(function(){
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
  }

  // form要素
  const $form = document.getElementById('form');

  // name="select"
  $('select[name="select"]').on('change', function() {
    location.href = $(this).val();
  });
});



/* 修正時刻: Thu 2025/09/11 15:31:57 */
