parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,i,a){try{var l=t[i](a),u=l.value}catch(c){return void o(c)}l.done?e(u):Promise.resolve(u).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,i){var a=e.apply(o,n);function l(e){t(a,r,i,l,u,"next",e)}function u(e){t(a,r,i,l,u,"throw",e)}l(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Fallout 4 Terminal\n * @author Bates#7075\n * @version 1.0.0\n * @source https://github.com/CommandCrafterHD/Fallout4TerminalTheme\n * @website https://commandcrafterhd.github.io/Fallout4TerminalTheme\n * @donate https://www.paypal.com/paypalme/floriancegledi\n * @patreon https://patreon.com/bates\n * @description A theme inspired by Fallout 4's terminals!\n * @authorId 137259132305539072\n*/\n\n@import url('https://commandcrafterhd.github.io/Fallout4TerminalTheme/css/main.css');\n\n/* TO CUSTOMIZE THE THEME, UNCOMMENT THE LINES BELOW AND REPLACE THE VARIABLES */\n\n/* REMOVE THIS LINE TO UNCOMMENT\n\n:root {\n  --background: #000700 !important;\n  --text-color: #4AEF98 !important;\n  --highlight: var(--text-color) !important;\n}\n\n   REMOVE THIS LINE TO UNCOMMENT ASWELL */\n")),goosemodScope.settings.createItem("Fallout 4 Terminal",["",{type:"text-and-color",text:"Background",oninput:function(t){document.body.style.setProperty("--background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background")||"#000700";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Text Color",oninput:function(t){document.body.style.setProperty("--text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--text-color")||"#4AEF98";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"RGB Highlight",oninput:function(t){document.body.style.setProperty("--rgb-highlight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rgb-highlight")||"4, 217, 255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Online Color",oninput:function(t){document.body.style.setProperty("--online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--online-color")||"#39ff14";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"AFK Color",oninput:function(t){document.body.style.setProperty("--afk-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--afk-color")||"#FFFF33";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"DND Color",oninput:function(t){document.body.style.setProperty("--dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--dnd-color")||"#FF0000";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming Color",oninput:function(t){document.body.style.setProperty("--streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming-color")||"#bc13fe";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"gray";return console.log(t),t}},{type:"text-input",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"gray";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Fallout 4 Terminal")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--background",document.body.style.getPropertyValue("--background")],["--text-color",document.body.style.getPropertyValue("--text-color")],["--rgb-highlight",document.body.style.getPropertyValue("--rgb-highlight")],["--online-color",document.body.style.getPropertyValue("--online-color")],["--afk-color",document.body.style.getPropertyValue("--afk-color")],["--dnd-color",document.body.style.getPropertyValue("--dnd-color")],["--streaming-color",document.body.style.getPropertyValue("--streaming-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default