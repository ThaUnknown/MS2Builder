parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,i,s){try{var u=t[i](s),a=u.value}catch(c){return void n(c)}u.done?e(a):Promise.resolve(a).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,i){var s=e.apply(n,o);function u(e){t(s,r,i,u,a,"next",e)}function a(e){t(s,r,i,u,a,"throw",e)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/**\n * @name SimplyDark\n * @author Gibbu#1211\n * @version 2.0.0\n * @description A sharp and simple theme for Discord\n * @source https://github.com/DiscordStyles/SimplyDark\n * @website https://gibbu.me/\n*/\n\n@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');\n@import url(\"https://discordstyles.github.io/SimplyDark/base.css\");\n\n/* Black Box user tags */\n@import url('https://monstrousdev.github.io/themes/addons/user-tags.css');\n\n/* Old Windows titlebar - remove this @import if you wish to use default titlebar */\n@import url(\"https://gibbu.github.io/BetterDiscord-Themes/addons/windows-titlebar.css\");\n\n:root {\n\n    --SD-bgR: 10; /* RED value | 0 - 255 | DEFAULT: 10 */\n    --SD-bgG: 10; /* GREEN value | 0 - 255 | DEFAULT: 10 */\n    --SD-bgB: 10; /* BLUE value | 0 - 255 | DEFAULT: 10 */\n\n    --SD-emojipickerheight: 224px; /* Height of the emojipicker. Changing this may cause issues in some places. | DEFAULT: 224px */\n    --SD-roundness: 0px; /* Roundness for avatars, servers ect... | DEFAULT: 0px | MAX: 30px */\n    --SD-avatar-status-width: 2px; /* Width of status border around avatars (must end in px) | DEFAULT: 2px */\n\n    /*\n        Accent variable\n        Use this website: https://htmlcolorcodes.com/color-picker/\n        to get your desired RGB numbers. Then simply put each number in their respective area.\n        R,G,B\n    */\n    --SD-accent: 33,150,243;\n\n    /*\n        To use a custom font. Visit https://fonts.google.com and select one to your liking.\n        Now just follow this tutorial: https://imgur.com/a/CNbw7xC\n    */\n    --SD-font: 'Roboto';\n\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("SimplyDark",["",{type:"text-input",text:"Sd Bgr",oninput:function(t){document.body.style.setProperty("--SD-bgR",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-bgR")||"10";return console.log(t),t}},{type:"text-input",text:"Sd Bgg",oninput:function(t){document.body.style.setProperty("--SD-bgG",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-bgG")||"10";return console.log(t),t}},{type:"text-input",text:"Sd Bgb",oninput:function(t){document.body.style.setProperty("--SD-bgB",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-bgB")||"10";return console.log(t),t}},{type:"text-input",text:"Sd Emojipickerheight",oninput:function(t){document.body.style.setProperty("--SD-emojipickerheight",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-emojipickerheight")||"224px";return console.log(t),t}},{type:"text-input",text:"Sd Roundness",oninput:function(t){document.body.style.setProperty("--SD-roundness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-roundness")||"0px";return console.log(t),t}},{type:"text-input",text:"Sd Avatar Status Width",oninput:function(t){document.body.style.setProperty("--SD-avatar-status-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-avatar-status-width")||"2px";return console.log(t),t}},{type:"text-and-color",text:"Sd Accent",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--SD-accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-accent")||"33,150,243";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Sd Font",oninput:function(t){document.body.style.setProperty("--SD-font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--SD-font")||"'Roboto'";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("SimplyDark")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--SD-bgR",document.body.style.getPropertyValue("--SD-bgR")],["--SD-bgG",document.body.style.getPropertyValue("--SD-bgG")],["--SD-bgB",document.body.style.getPropertyValue("--SD-bgB")],["--SD-emojipickerheight",document.body.style.getPropertyValue("--SD-emojipickerheight")],["--SD-roundness",document.body.style.getPropertyValue("--SD-roundness")],["--SD-avatar-status-width",document.body.style.getPropertyValue("--SD-avatar-status-width")],["--SD-accent",document.body.style.getPropertyValue("--SD-accent")],["--SD-font",document.body.style.getPropertyValue("--SD-font")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default