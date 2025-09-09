'use strict';

const lang = document.querySelector('html').lang;

switch (lang) {
  case 'ja':
    document.querySelector('option[value="index.html"]').selected = true;
    break;
  case 'en':
    document.querySelector('option[value="index-en.html"]').selected = true;
    break;
  case 'zh':
    document.querySelector('option[value="index-zh.html"]').selected = true;
    break;
}

// form要素
const $form = document.getElementById('form');

// name="select"
$form.select.onchange = function() {
  location.href = $form.select.value;
};
