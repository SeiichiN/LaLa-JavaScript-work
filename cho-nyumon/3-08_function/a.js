'use strict';

// total関数(オブジェクト)を
// ブラウザに組み込む
function total(price) {
  const tax = 0.1;
  return price + price * tax;
}
