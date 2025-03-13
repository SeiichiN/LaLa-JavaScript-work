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
    document.querySelector('option[value="index-zn.html"]').selected = true;
    break;
  default:
    console.log('ありえない');
}

document.getElementById('form').select.onchange = function() {
                       // id    name="select"
                       
  location.href = document.getElementById('form').select.value;
  // location.href='https://www.yahoo.co.jp';
}