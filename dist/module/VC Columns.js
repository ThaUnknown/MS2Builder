parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
function e(e,o){return i(e)||r(e,o)||t(e,o)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function r(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);a=!0);}catch(c){s=!0,r=c}finally{try{a||null==t.return||t.return()}finally{if(s)throw r}}return i}}function i(e){if(Array.isArray(e))return e}function a(e,n,t,o,r,i,a){try{var s=e[i](a),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var i=e.apply(n,t);function s(e){a(i,o,r,s,c,"next",e)}function c(e){a(i,o,r,s,c,"throw",e)}s(void 0)})}}var c="1.1.3",u=!1,l=!0,d=function(){l&&(document.getElementsByClassName("rtcConnectionStatus-2-jIsi")[0]?document.body.classList.contains("voice-mode")||u||(u=!0,m()):document.body.classList.contains("voice-mode")&&u&&(u=!1,m()))},m=function(){u&&!document.body.classList.contains("voice-mode")?document.body.classList.add("voice-mode"):u||document.body.classList.remove("voice-mode")},f={onImport:function(){var e=s(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.document.styleSheets[0]).insertRule("body.voice-mode .container-2Rl01u, body.voice-mode .chat-3bRxxu {\n      display: inherit;\n    }",n.cssRules.length),n.insertRule("body.voice-mode .sidebar-2K8pFh {\n      width: 100%;\n      height: 65vh;\n    }",n.cssRules.length),n.insertRule("body.voice-mode .content-98HsJk {\n      flex-direction: column;\n    }",n.cssRules.length),n.insertRule('body.voice-mode [aria-label="User area"] .nameTag-3uD-yy + .directionRow-3v3tfG {\n      transform: scale(1.5) translate(-50%, -190%);\n\n      position: absolute;\n      left: 50vw;\n    }',n.cssRules.length),n.insertRule('body.voice-mode [aria-label="Disconnect"] {\n      transform: scale(1.5) translate(-10%, 0);\n    }',n.cssRules.length);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onLoadingFinished:function(){var e=s(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:goosemodScope.settings.createItem("VC Columns",["(v".concat(c,")"),{type:"toggle",text:"Auto-enable",subtext:"Automatically enables when entering voice chat (and disables when leaving)",onToggle:function(e){l=e},isToggled:function(){return l}}]),interval=setInterval(d,500);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=s(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:clearInterval(interval),n=goosemodScope.settings.items.find(function(e){return"VC Columns"===e[1]}),goosemodScope.settings.items.splice(goosemodScope.settings.items.indexOf(n),1),u=!1,l=!1,m();case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){return[l]},loadSettings:function(n){var t=e(n,1)[0];l=t},logRegionColor:"darkred"};
},{}]},{},["index.js"], null);parcelRequire('index.js').default