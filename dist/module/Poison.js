parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,n,o,r,i,s){try{var a=t[i](s),u=a.value}catch(l){return void n(l)}a.done?e(u):Promise.resolve(u).then(o,r)}function e(e){return function(){var n=this,o=arguments;return new Promise(function(r,i){var s=e.apply(n,o);function a(e){t(s,r,i,a,u,"next",e)}function u(e){t(s,r,i,a,u,"throw",e)}a(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/**\n* @name         Poison\n* @description  Enjoy Discord with a stylish dark theme with vibrant green elements\n* @donate       https://bit.ly/3fnzq1Z\n* @source       https://github.com/rmkx/rmkx.github.io/blob/main/Poison/src/poison.css\n* @author       rmkx\n* @invite       HnGWVQbQBv\n* @version      1.0.1 \n*/\n\n@import url('https://rmkx.github.io/src/avatarStyle.css'); /*Avatar's style mini-theme*/\n@import url('https://rmkx.github.io/src/hideGuilds.css'); /*Comment line if you don't want servers list to hide | This moves it to the default position*/\n@import url('https://rmkx.github.io/Poison/src/hideMembers.css'); /*Comment line if you don't want servers' members to hide*/\n@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap'); /*Import fonts*/\n@import url('https://rmkx.github.io/Poison/src/poison.css'); /*Main theme import*/\n\n:root {\n    /*Background settings*/\n    --background-image: url('https://i.imgur.com/B5pCrRt.jpg'); /*Background image*/\n    --menu-bg: url('https://i.imgur.com/pvk9Zir.png'); /*Background image for some panels, like right click*/\n    --bg-blur: 0px; /*Background blur | Default 0px*/\n    --bg-opacity: 0.4; /*Background opacity | Default 0.4*/\n\n    /*Server member panel*/\n    --members-hiding: 80%; /*Position of the members panel when it hides | Default 80%*/\n    --members-showing: 0%; /*Position of the members panel when it shows | Default 0%*/\n    --transition-speed: 0.35s; /*Changes the showing speed | Default 0.35s*/\n\n    /*General settings*/\n    --general-radius: 5px; /*Changes the radius of most modals | Default 5px*/\n    --main-color: 52, 52, 52; /*Main color of the theme | WARNING: USE RGB VALUES IF YOU CHANGE THE COLOR | Default 52, 52, 52*/\n    --main-accent: 147, 227, 32; /*Theme accent color | WARNING: USE RGB VALUES IF YOU CHANGE THE COLOR | Default 147, 227, 32*/\n    --avatar-radius: 5px; /*Avatar's radius | Default 5px*/\n    --links-color:  147, 227, 32; /*Changes the color of the links | Default 147, 227, 32*/\n    --settings-width: 60%; /*Width for the settings window | Default 60%*/\n    --settings-heigth: 85%; /*Width for the settings window | Default 85%*/\n    --embed-border: 0px; /*Border for some of the embeds | Default 0px*/\n    --embed-bg: rgba(0,0,0,0.75); /*Embeds background | Default rgba(0, 0, 0, 0.75)*/\n    --selection-bg: rgba(52, 52, 52, 0.6); /*Changes the background of the selected text | Default rgba(52, 52, 52, 0.6)*/\n    --selection-color: rgba(var(--main-accent), 1); /*Changes the color of the selected text | Default rgba(var(--main-accent), 1)*/\n    --scrollbar-color: rgba(var(--main-accent), 0.4); /*Changes the color of the scrollbar | Default rgba(var(--main-accent), 0.4)*/\n    --icon-padding: 35px; /*Changes the padding between the icon and the text | Default 35px*/\n\n\n    /*Font*/\n    --font: 'Fjalla One', sans-serif; /*Main font*/\n    --message-size: 90%; /*Chat message font size | Default 90%*/\n}")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Poison",["",{type:"text-input",text:"Background Image",oninput:function(t){document.body.style.setProperty("--background-image",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--background-image")||"url('https://i.imgur.com/B5pCrRt.jpg')";return console.log(t),t}},{type:"text-input",text:"Menu Bg",oninput:function(t){document.body.style.setProperty("--menu-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-bg")||"url('https://i.imgur.com/pvk9Zir.png')";return console.log(t),t}},{type:"text-input",text:"Bg Blur",oninput:function(t){document.body.style.setProperty("--bg-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg-blur")||"0px";return console.log(t),t}},{type:"text-input",text:"Bg Opacity",oninput:function(t){document.body.style.setProperty("--bg-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--bg-opacity")||"0.4";return console.log(t),t}},{type:"text-input",text:"Members Hiding",oninput:function(t){document.body.style.setProperty("--members-hiding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--members-hiding")||"80%";return console.log(t),t}},{type:"text-input",text:"Members Showing",oninput:function(t){document.body.style.setProperty("--members-showing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--members-showing")||"0%";return console.log(t),t}},{type:"text-input",text:"Transition Speed",oninput:function(t){document.body.style.setProperty("--transition-speed",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition-speed")||"0.35s";return console.log(t),t}},{type:"text-input",text:"General Radius",oninput:function(t){document.body.style.setProperty("--general-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--general-radius")||"5px";return console.log(t),t}},{type:"text-and-color",text:"Main Color",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"52, 52, 52";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Accent",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--main-accent",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-accent")||"147, 227, 32";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Avatar Radius",oninput:function(t){document.body.style.setProperty("--avatar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-radius")||"5px";return console.log(t),t}},{type:"text-and-color",text:"Links Color",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--links-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--links-color")||"147, 227, 32";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Settings Width",oninput:function(t){document.body.style.setProperty("--settings-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-width")||"60%";return console.log(t),t}},{type:"text-input",text:"Settings Heigth",oninput:function(t){document.body.style.setProperty("--settings-heigth",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--settings-heigth")||"85%";return console.log(t),t}},{type:"text-input",text:"Embed Border",oninput:function(t){document.body.style.setProperty("--embed-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--embed-border")||"0px";return console.log(t),t}},{type:"text-and-color",text:"Embed Bg",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--embed-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--embed-bg")||"rgba(0,0,0,0.75)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Selection Bg",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--selection-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--selection-bg")||"rgba(52, 52, 52, 0.6)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Icon Padding",oninput:function(t){document.body.style.setProperty("--icon-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--icon-padding")||"35px";return console.log(t),t}},{type:"text-input",text:"Font",oninput:function(t){document.body.style.setProperty("--font",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font")||"'Fjalla One', sans-serif";return console.log(t),t}},{type:"text-input",text:"Message Size",oninput:function(t){document.body.style.setProperty("--message-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-size")||"90%";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Poison")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--background-image",document.body.style.getPropertyValue("--background-image")],["--menu-bg",document.body.style.getPropertyValue("--menu-bg")],["--bg-blur",document.body.style.getPropertyValue("--bg-blur")],["--bg-opacity",document.body.style.getPropertyValue("--bg-opacity")],["--members-hiding",document.body.style.getPropertyValue("--members-hiding")],["--members-showing",document.body.style.getPropertyValue("--members-showing")],["--transition-speed",document.body.style.getPropertyValue("--transition-speed")],["--general-radius",document.body.style.getPropertyValue("--general-radius")],["--main-color",document.body.style.getPropertyValue("--main-color")],["--main-accent",document.body.style.getPropertyValue("--main-accent")],["--avatar-radius",document.body.style.getPropertyValue("--avatar-radius")],["--links-color",document.body.style.getPropertyValue("--links-color")],["--settings-width",document.body.style.getPropertyValue("--settings-width")],["--settings-heigth",document.body.style.getPropertyValue("--settings-heigth")],["--embed-border",document.body.style.getPropertyValue("--embed-border")],["--embed-bg",document.body.style.getPropertyValue("--embed-bg")],["--selection-bg",document.body.style.getPropertyValue("--selection-bg")],["--icon-padding",document.body.style.getPropertyValue("--icon-padding")],["--font",document.body.style.getPropertyValue("--font")],["--message-size",document.body.style.getPropertyValue("--message-size")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default