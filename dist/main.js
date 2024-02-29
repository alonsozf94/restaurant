(()=>{var n={106:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 100px;\n  margin: 0;\n  padding: 30px 150px 20px 150px;\n}\nbody > * {\n  width: 100%;\n}\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 2em;\n}\n.nav-btn {\n  background: none;\n  font-size: 1.2em;\n  border: none;\n  cursor: pointer;\n}\n.nav-btn:hover {\n  font-size: 1.3em;\n}\nfooter {\n  text-align: center;\n  font-size: 1.2em;\n}\n\n/* Home */\n.home {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#home-logo {\n  width: 300px;\n}\n\n/* Menu */\n.menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.product-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n.product-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.product-icon {\n  font-size: 6.5em;\n}\n\n/* About */\n.about {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 1.4em;\n  font-weight: normal;\n}\n.about ul {\n  list-style-type: none;\n  padding: 0;\n}\n.about .about-heading {\n  font-weight: bold;\n}\n.about ul li {\n  margin-bottom: 25px;\n}\n",""]);const s=a},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var d=t(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},239:()=>{const n=document.createElement("div");n.classList.add("home");const e=new Image;e.setAttribute("id","home-logo"),e.src=logo,n.appendChild(e)}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),c=t.n(s),u=t(540),d=t.n(u),l=t(113),p=t.n(l),f=t(106),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),e()(f.A,v),f.A&&f.A.locals&&f.A.locals,t.p;var h=t(239),m=t.n(h);const y=document.createElement("div");y.classList.add("menu"),y.innerHTML='\n  <h1>Our Menu</h1>\n  <h2 class="category">Breads and Pastries</h2>\n  <div class="product-container">\n    <div class="product-box">\n      <span class="product-icon">🥖</span>\n      <div>Freshly Baked Baguette</div>\n    </div>\n    <div class="product-box">\n      <span class="product-icon">🥐</span>\n      <div>Buttery Croissants</div>\n    </div>\n    <div class="product-box">\n      <span class="product-icon">🍞</span>\n      <div>Classic Sourdough</div>\n    </div>\n  </div>\n  <h2 class="category">Beverages</h2>\n  <div class="product-container">\n    <div class="product-box">\n      <span class="product-icon">🍵</span>\n      <div>Chai</div>\n    </div>\n    <div class="product-box">\n      <span class="product-icon">☕</span>\n      <div>Espresso Coffee</div>\n    </div>\n    <div class="product-box">\n      <span class="product-icon">🍃</span>\n      <div>Matcha Latte</div>\n    </div>\n  </div>\n';const b=y,g=document.createElement("div");g.classList.add("about"),g.innerHTML='\n  <h1>Our Bakery</h1>\n  <ul>\n    <li>\n      At our quaint bakery, the aroma of freshly baked breads and pastries wafts through the air,\n      beckoning you to step inside.\n    </li>\n    <li>\n      🥐 <span class="about-heading">Discover Our Story:</span> Established in the heart of Gotham, our bakery has been a cherished part of\n      the community since 1961. Generations have savored our secret family recipes, passed down through time.      \n    </li>\n    <li>\n      🥖 <span class="about-heading">Time-Tested Delights:</span> From flaky croissants to rustic sourdough loaves, each creation is a labor of love.\n      Our bakers knead dough with care, infusing it with memories of simpler days.\n    </li>\n    <li>\n      🍞 <span class="about-heading">Vintage Vibes:</span> As you enter, weathered wooden shelves display golden-crusted pies, delicate éclairs, and buttery cookies.\n    T he antique bell above the door jingles, welcoming you to a bygone era.\n    </li>\n  </ul>\n';const x=g,w=document.querySelector("#content");w.setAttribute("id","content");const T=document.querySelector("#home-btn"),A=document.querySelector("#menu-btn"),E=document.querySelector("#about-btn");function S(n){w.innerHTML="",w.appendChild(n)}S(x),T.addEventListener("click",(()=>S(m()))),A.addEventListener("click",(()=>S(b))),E.addEventListener("click",(()=>S(x)))})()})();