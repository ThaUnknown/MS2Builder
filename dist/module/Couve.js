parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,a,c){try{var u=t[a](c),l=u.value}catch(i){return void o(i)}u.done?e(l):Promise.resolve(l).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,a){var c=e.apply(o,n);function u(e){t(c,r,a,u,l,"next",e)}function l(e){t(c,r,a,u,l,"throw",e)}u(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Couve\n * @version Auto Update\n * @description A new look to discord\n * @authorId 264062457448759296\n * \n * @invite jGmSTkk\n * @source https://github.com/A-User-s-Discord-Themes/Couve\n */\n\n @import url("https://a-user-s-discord-themes.github.io/Couve/app/main.css");\n\n/* Settings */\n:root{\n    /* Colors */\n    --main-color: #419e85;\n\n    /*Borders*/\n    --avatar-radius: 5px;\n}\n\n/* Dark/Light vars */\n.theme-dark{\n    /*BGs*/\n    --colornav: #060c24;\n    --color1: #1e2337;\n    --color2: #252a3e;\n    --color3: #1c2438;\n    --color4: #1b1d31;\n    --colortransparency: #0003;\n    /*Cards*/\n    --card: #212332;\n    /*Other stuff*/\n    --textcolor: #fff;\n    --epicshadow1: #fff3;\n}\n\n.theme-light{\n    /*BGs*/\n    --colornav: #fff;\n    --color1: #f7f7f7;\n    --color2: #fff;\n    --color3: #fff;\n    --color4: #eee;\n    --colortransparency: #0001;\n    /*Cards*/\n    --card: #aaaaaa;\n    /*Other stuff*/\n    --textcolor: #000;\n    --epicshadow1: #0003;\n}\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Couve",["",{type:"text-and-color",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#419e85";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Avatar Radius",oninput:function(t){document.body.style.setProperty("--avatar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-radius")||"5px";return console.log(t),t}},{type:"text-and-color",text:"Colornav",oninput:function(t){document.body.style.setProperty("--colornav",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--colornav")||"#060c24";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color1",oninput:function(t){document.body.style.setProperty("--color1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color1")||"#1e2337";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color2",oninput:function(t){document.body.style.setProperty("--color2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color2")||"#252a3e";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color3",oninput:function(t){document.body.style.setProperty("--color3",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color3")||"#1c2438";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Color4",oninput:function(t){document.body.style.setProperty("--color4",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--color4")||"#1b1d31";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Colortransparency",oninput:function(t){document.body.style.setProperty("--colortransparency",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--colortransparency")||"#0003";return console.log(t),t}},{type:"text-and-color",text:"Card",oninput:function(t){document.body.style.setProperty("--card",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card")||"#212332";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Textcolor",oninput:function(t){document.body.style.setProperty("--textcolor",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textcolor")||"#fff";return console.log(t),t}},{type:"text-input",text:"Epicshadow1",oninput:function(t){document.body.style.setProperty("--epicshadow1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--epicshadow1")||"#fff3";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Couve")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--main-color",document.body.style.getPropertyValue("--main-color")],["--avatar-radius",document.body.style.getPropertyValue("--avatar-radius")],["--colornav",document.body.style.getPropertyValue("--colornav")],["--color1",document.body.style.getPropertyValue("--color1")],["--color2",document.body.style.getPropertyValue("--color2")],["--color3",document.body.style.getPropertyValue("--color3")],["--color4",document.body.style.getPropertyValue("--color4")],["--colortransparency",document.body.style.getPropertyValue("--colortransparency")],["--card",document.body.style.getPropertyValue("--card")],["--textcolor",document.body.style.getPropertyValue("--textcolor")],["--epicshadow1",document.body.style.getPropertyValue("--epicshadow1")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default