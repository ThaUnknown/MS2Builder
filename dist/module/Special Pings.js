parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/goosemod/webpack.js":[function(require,module,exports) {
module.exports=goosemodScope.webpackModules;
},{}],"../../../moduleWrappers/goosemod/patcher.js":[function(require,module,exports) {
module.exports=goosemodScope.patcher;
},{}],"../../../moduleWrappers/goosemod/reactUtils.js":[function(require,module,exports) {
module.exports=goosemodScope.reactUtils;
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("@goosemod/webpack")),n=r(require("@goosemod/patcher")),t=require("@goosemod/reactUtils");function r(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return u(e)||a(e,n)||s(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}}function u(e){if(Array.isArray(e))return e}function c(e){return f(e)||d(e)||s(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){if(e){if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function d(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function f(e){if(Array.isArray(e))return y(e)}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e){throw new TypeError('"'+e+'" is read-only')}var p=[],g=new Audio;g.src="https://cdn.discordapp.com/attachments/958047577922740345/958118222341767248/Final_Fantasy_VII_Sound_Effects_-_Save_and_Load.mp3";var v,h=function(e){p.find(function(n){return n[0]===e.channelId&&(e.message.content.includes(n[1]+">")||"@everyone"===n[1]&&e.message.mention_everyone)})&&g.play()},b=e.default.findByProps("getGuildCount"),S=b.getGuild,_={goosemodHandlers:{onImport:function(){e.default.findByProps("register")._subscriptions.MESSAGE_CREATE.add(h),v=n.default.contextMenu.patch("message",{label:"Special Ping",sub:function(){var e;try{e=(0,t.getNodeInternals)((0,t.getOwnerInstance)(document.getElementById("message"))).return.return.memoizedProps}catch(u){return}var n=e.channel.id,r=e.channel.guild_id,o=c(new Set(c(e.message.content.matchAll(/<@&([0-9]{17,18})>/g)).map(function(e){return e[1]}))),i=S(r).roles,a=o.map(function(e){return{label:i[e].name,checked:!!p.find(function(t){return t[0]===n&&t[1]===e}),action:function(){var t=p.find(function(t){return t[0]===n&&t[1]===e});t?p.splice(p.indexOf(t),1):p.push([n,e])}}});return e.message.mentionEveryone&&a.push({label:"@everyone",checked:!!p.find(function(e){return e[0]===n&&"@everyone"===e[1]}),action:function(){var e=p.find(function(e){return e[0]===n&&"@everyone"===e[1]});e?p.splice(p.indexOf(e),1):p.push([n,"@everyone"])}}),a}})},onRemove:function(){e.default.findByProps("register")._subscriptions.MESSAGE_CREATE.delete(h),v()},getSettings:function(){return[p]},loadSettings:function(e){o(e,1)[0];m("toPing")}}};exports.default=_;
},{"@goosemod/webpack":"../../../moduleWrappers/goosemod/webpack.js","@goosemod/patcher":"../../../moduleWrappers/goosemod/patcher.js","@goosemod/reactUtils":"../../../moduleWrappers/goosemod/reactUtils.js"}]},{},["index.js"], null);parcelRequire('index.js').default