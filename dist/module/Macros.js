parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,o){return n(e)||r(e,o)||a(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(i){o=!0,a=i}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}function n(e){if(Array.isArray(e))return e}function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,u=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw u}}}}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t,r,n,o,a,u){try{var c=e[a](u),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function u(e){c(a,n,o,u,i,"next",e)}function i(e){c(a,n,o,u,i,"throw",e)}u(void 0)})}}var s;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var f={},l="1.1.3",p=function(e){return new Promise(function(t){return setTimeout(t,e)})},m={gooseModHandlers:{onImport:function(){var e=i(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=goosemodScope.webpackModules.findByProps("jumpToMessage","_sendMessage"),s=t.sendMessage,t.sendMessage=function(){var e=i(regeneratorRuntime.mark(function e(t,r){var n,a,u,c,i,l,m=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.content.startsWith("/m")){e.next=41;break}if(n=r.content.replace("/m ",""),a=n.split(" ")[0],u=n.split(" ").slice(1).join(" "),console.log(a,u),u){e.next=38;break}if(a&&"/m"!==a){e.next=32;break}return goosemodScope.showToast('Syntax: "/m <macro_name> [macro content]" - no macro content = get macro, with macro content = set macro',{timeout:2e3}),e.next=10,p(2e3);case 10:return goosemodScope.showToast("Your Macros:",{timeout:1e3}),e.next=13,p(1e3);case 13:c=o(Object.keys(f).map(function(e){return"".concat(e,": ").concat(f[e])})),e.prev=14,c.s();case 16:if((i=c.n()).done){e.next=23;break}return l=i.value,goosemodScope.showToast(l,{timeout:1e3}),e.next=21,p(1e3);case 21:e.next=16;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(14),c.e(e.t0);case 28:return e.prev=28,c.f(),e.finish(28);case 31:return e.abrupt("return");case 32:if(f[a]){e.next=35;break}return goosemodScope.showToast('No macro "'.concat(a,'"')),e.abrupt("return");case 35:r.content=f[a],e.next=41;break;case 38:return f[a]=u,goosemodScope.showToast('Macro "'.concat(a,'" saved')),e.abrupt("return");case 41:return e.abrupt("return",s.apply(this,m));case 42:case"end":return e.stop()}},e,this,[[14,25,28,31]])}));return function(t,r){return e.apply(this,arguments)}}();case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=i(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.webpackModules.findByProps("jumpToMessage","_sendMessage").sendMessage=s;case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[f]},loadSettings:function(t){var r=e(t,1)[0];f=r},logRegionColor:"darkred"}};exports.default=m;
},{}]},{},["index.js"], null);parcelRequire('index.js').default