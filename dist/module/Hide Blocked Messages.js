parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function n(n){return function(){var t=this,r=arguments;return new Promise(function(o,u){var a=n.apply(t,r);function i(n){e(a,o,u,i,c,"next",n)}function c(n){e(a,o,u,i,c,"throw",n)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,r="1.0.0",o=".groupStart-23k01U:not(.message-2qnXI6) {\n  display: none;\n}",u={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode(o));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.remove();case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}};exports.default=u;
},{}]},{},["index.js"], null);parcelRequire('index.js').default