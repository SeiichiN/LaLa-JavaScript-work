<style>
.my-text {
background-color: #f5f5f5;
padding: 10px;
margin-left: 30%;
}
</style>

<div class="my-text">
JavaScriptについての疑問です。
次のコードは functionの定義です。

index.html
```
  ...(略)...
  
function total(price) {
  const tax = 0.1;
  return price + price * tax;
}

  ...(略)...
```
この場合は、ブラウザのコンソールで確認すると、
`window.total`
と、windowオブジェクトのメソッドとして組み込まれます。
しかし、

index.html
```
  ...(略)...
  
const total = function(price) {
  const tax = 0.1;
  return price + price * tax;
}

  ...(略)...
```
この場合は、windowオブジェクトとして組み込まれずに、
totalオブジェクトとなっているように思います。
このあたりの事情をわかりやすく説明してもらえませんか。
</div>


---

ポイントは **「グローバルスコープの変数」と「windowオブジェクトのプロパティ」は似ているが同じではない** という点です。
ES2015（`let` / `const` が導入された仕様）以降、この違いがはっきりしました。

順番に説明します。

---

# 1. `function total()` の場合

```javascript
function total(price) {
  const tax = 0.1;
  return price + price * tax;
}
```

ブラウザでは通常、`<script>` のトップレベルは **グローバルスコープ**です。

このとき **function宣言**は次のように扱われます。

* グローバル変数 `total` を作る
* 同時に `window.total` にも登録する

つまり次の2つは同じものになります。

```javascript
total === window.total  // true
```

イメージ：

```
Global Scope
   │
   ├─ total
   │
window object
   │
   ├─ total  ──┘ (同じ関数)
```

これは歴史的な仕様（古いJavaScript）によるものです。

---

# 2. `const total = function()` の場合

```javascript
const total = function(price) {
  const tax = 0.1;
  return price + price * tax;
}
```

これは **function宣言ではなく変数宣言**です。

そして **`const` / `let` のグローバル変数は window に登録されません。**

つまり

```
Global Scope
   │
   └─ total

window object
   │
   └─ (存在しない)
```

結果：

```javascript
total           // OK
window.total    // undefined
```

---

# 3. `var` だとどうなるか

昔の `var` は `window` に登録されます。

```javascript
var total = function(price) {
  return price * 1.1;
}
```

この場合

```javascript
window.total  // 使える
```

つまり

| 書き方        | windowに登録 |
| ---------- | --------- |
| function宣言 | される       |
| var        | される       |
| let        | されない      |
| const      | されない      |

---

# 4. なぜこんな仕様なのか

昔のJavaScriptでは

```
グローバル変数 = windowのプロパティ
```

でした。

しかしこれには問題がありました。

* 変数が全部 `window` を汚染する
* 名前衝突が起きる
* 大規模開発に向かない

そこで ES2015 で

```
グローバル変数 ≠ windowプロパティ
```

に変更されました。

ただし **後方互換性のため**

* function
* var

だけは従来通り残されています。

---

# 5. さらに重要な話（module）

もし `<script type="module">` を使うと

```html
<script type="module">
```

この場合は **すべて window に入りません。**

```javascript
function total(){}
```

でも

```
window.total // undefined
```

になります。

モジュールは完全に独立スコープです。

---

# 6. まとめ（重要）

ブラウザのグローバルでの挙動

| 書き方              | windowプロパティ |
| ---------------- | ----------- |
| `function f(){}` | なる          |
| `var f = ...`    | なる          |
| `let f = ...`    | ならない        |
| `const f = ...`  | ならない        |

つまり今回の違いは

**function宣言とconst宣言の違いではなく**

**「古いグローバル変数」と「新しいグローバル変数」の違い**

です。

---

もし興味があればですが、この話の延長にある

* **JavaScriptのスコープの本当の構造（Lexical Environment）**
* **windowとglobalThisの関係**
* **なぜ function だけ特別扱いなのか**

を説明すると、JavaScriptの理解がかなり深まります。


<!-- 修正時刻: Thu 2026/03/05 09:27:31 -->
