'use strict';

const lang = document.querySelector('html').lang;

if (lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
}
else if (lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
}
else if (lang === 'zh') {
  document.querySelector('option[value="index-zn.html"]').selected = true;
}



document.getElementById('form').select.onchange = function() {
                       // id    name="select"
                       
  location.href = document.getElementById('form').select.value;
  // location.href='https://www.yahoo.co.jp';
}