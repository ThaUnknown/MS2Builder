parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,i){var u=e.apply(n,r);function a(e){t(u,o,i,a,s,"next",e)}function s(e){t(u,o,i,a,s,"throw",e)}a(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('/**\n * @name Eris\n * @author Rock#5429\n * @version 1.2\n * @description A darker, cooler, classier look for Discord.\n * @source https://github.com/RockESV/Eris\n*/\n\n@import url("https://rockesv.github.io/Eris/ErisSource.css");')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Eris",["",{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||"'Whitney'";return console.log(t),t}},{type:"text-and-color",text:"Text Timestamp",oninput:function(t){document.body.style.setProperty("--text-timestamp",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-timestamp")||"#969696";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Highlight Color",oninput:function(t){document.body.style.setProperty("--highlight-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--highlight-color")||"#23262a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Eris")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--font-display",document.body.style.getPropertyValue("--font-display")],["--text-timestamp",document.body.style.getPropertyValue("--text-timestamp")],["--highlight-color",document.body.style.getPropertyValue("--highlight-color")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default