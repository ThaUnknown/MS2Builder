parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t){return a(n)||o(n,t)||r(n,t)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}function t(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function o(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,a=[],i=!0,u=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}}function a(n){if(Array.isArray(n))return n}function i(n,e,r,t,o,a,i){try{var u=n[a](i),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(t,o)}function u(n){return function(){var e=this,r=arguments;return new Promise(function(t,o){var a=n.apply(e,r);function u(n){i(a,t,o,u,c,"next",n)}function c(n){i(a,t,o,u,c,"throw",n)}u(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c,l,s="1.1.0",p={floating:!0},d=function(n){l&&c.removeChild(l),n?(l=document.createTextNode('@import url("https://raw.githack.com/Freeplayg/Discord-fullscreen-inbox/main/main.css");\n    .recentMentionsPopout-3rCiI6 {\n      animation: none;\n    }\n    .iconWrapper-2OrFZ1[aria-label="Inbox"] {\n      position: fixed;\n      top: 27px;\n      left: 12px;\n      height: 48px;\n      width: 48px;\n      margin: 0;\n      background-color: var(--background-secondary);\n      border-radius: 48px;\n      box-shadow: var(--elevation-low);\n      transition: border-radius .1s, background-color .1s;\n    }\n    .iconWrapper-2OrFZ1[aria-label="Inbox"]:hover {\n      background-color: #7289da;\n      border-radius: 15px;\n    }\n    .iconWrapper-2OrFZ1[aria-label="Inbox"]:active {\n      transform: translateY(1px);\n    }\n    .iconWrapper-2OrFZ1[aria-label="Inbox"] > svg {\n      margin: auto;\n      height: 100%;\n    }\n    .iconWrapper-2OrFZ1[aria-label="Inbox"]:hover > svg {\n      color: white !important;\n    }\n    .guilds-1SWlCJ .scroller-2TZvBN {\n      padding-top: 63px !important;\n    }\n    .unreadMentionsIndicatorTop-gA6RCh {\n      top: 48px;\n    }'),c.appendChild(l)):(l=document.createTextNode('@import url("https://raw.githack.com/Freeplayg/Discord-fullscreen-inbox/main/main.css");\n    .recentMentionsPopout-3rCiI6 {\n      animation: none;\n    }'),c.appendChild(l)),document.head.appendChild(c)},f={goosemodHandlers:{onImport:function(){var n=u(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:c=document.createElement("style"),d(p.floating);case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onLoadingFinished:function(){var n=u(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",goosemodScope.settings.createItem("Fullscreen Inbox",["(v".concat(s,")"),{type:"toggle",text:"Floating Inbox Button",subtext:"Makes the inbox button float on the top left side of the screen with an appearence similair to the DMs button.",onToggle:function(n){p.floating=n,d(n)},isToggled:function(){return p.floating}}]));case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=u(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:goosemodScope.settings.removeItem("Fullscreen Inbox"),c.remove();case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){return[p]},loadSettings:function(e){var r=n(e,1)[0];d((p=r).floating)}}};exports.default=f;
},{}]},{},["index.js"], null);parcelRequire('index.js').default