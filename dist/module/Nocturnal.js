parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,o,e,n,r,a,u){try{var l=t[a](u),c=l.value}catch(i){return void e(i)}l.done?o(c):Promise.resolve(c).then(n,r)}function o(o){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=o.apply(e,n);function l(o){t(u,r,a,l,c,"next",o)}function c(o){t(u,r,a,l,c,"throw",o)}l(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('/**\n* @name Nocturnal\n* @author Spectra#4577\n* @description For when default discord just isn\'t dark enough, a theme for those who live a night\n* @invite PZdnCVD\n* @version 3.0.0\n*/\n@import url("https://codedotspectra.github.io/themes/themes-cores/nocturnal.css");\n/*\n                                                                                                                                                                     \n                                                                                                                                                                     \nNNNNNNNN        NNNNNNNN                                              tttt                                                                                   lllllll \nN:::::::N       N::::::N                                           ttt:::t                                                                                   l:::::l \nN::::::::N      N::::::N                                           t:::::t                                                                                   l:::::l \nN:::::::::N     N::::::N                                           t:::::t                                                                                   l:::::l \nN::::::::::N    N::::::N   ooooooooooo       ccccccccccccccccttttttt:::::ttttttt    uuuuuu    uuuuuu rrrrr   rrrrrrrrr   nnnn  nnnnnnnn      aaaaaaaaaaaaa    l::::l \nN:::::::::::N   N::::::N oo:::::::::::oo   cc:::::::::::::::ct:::::::::::::::::t    u::::u    u::::u r::::rrr:::::::::r  n:::nn::::::::nn    a::::::::::::a   l::::l \nN:::::::N::::N  N::::::No:::::::::::::::o c:::::::::::::::::ct:::::::::::::::::t    u::::u    u::::u r:::::::::::::::::r n::::::::::::::nn   aaaaaaaaa:::::a  l::::l \nN::::::N N::::N N::::::No:::::ooooo:::::oc:::::::cccccc:::::ctttttt:::::::tttttt    u::::u    u::::u rr::::::rrrrr::::::rnn:::::::::::::::n           a::::a  l::::l \nN::::::N  N::::N:::::::No::::o     o::::oc::::::c     ccccccc      t:::::t          u::::u    u::::u  r:::::r     r:::::r  n:::::nnnn:::::n    aaaaaaa:::::a  l::::l \nN::::::N   N:::::::::::No::::o     o::::oc:::::c                   t:::::t          u::::u    u::::u  r:::::r     rrrrrrr  n::::n    n::::n  aa::::::::::::a  l::::l \nN::::::N    N::::::::::No::::o     o::::oc:::::c                   t:::::t          u::::u    u::::u  r:::::r              n::::n    n::::n a::::aaaa::::::a  l::::l \nN::::::N     N:::::::::No::::o     o::::oc::::::c     ccccccc      t:::::t    ttttttu:::::uuuu:::::u  r:::::r              n::::n    n::::na::::a    a:::::a  l::::l \nN::::::N      N::::::::No:::::ooooo:::::oc:::::::cccccc:::::c      t::::::tttt:::::tu:::::::::::::::uur:::::r              n::::n    n::::na::::a    a:::::a l::::::l\nN::::::N       N:::::::No:::::::::::::::o c:::::::::::::::::c      tt::::::::::::::t u:::::::::::::::ur:::::r              n::::n    n::::na:::::aaaa::::::a l::::::l\nN::::::N        N::::::N oo:::::::::::oo   cc:::::::::::::::c        tt:::::::::::tt  uu::::::::uu:::ur:::::r              n::::n    n::::n a::::::::::aa:::al::::::l\nNNNNNNNN         NNNNNNN   ooooooooooo       cccccccccccccccc          ttttttttttt      uuuuuuuu  uuuurrrrrrr              nnnnnn    nnnnnn  aaaaaaaaaa  aaaallllllll\n                                                                                                                                                                     \n                                                                                                                                                                     \n*/\n@import url("https://monstrousdev.github.io/themes/addons/user-tags.css");\n@import url("https://discord-custom-covers.github.io/usrbg/dist/usrbg.css");\n@import url("https://codedotspectra.github.io/themes/core/badges.css");\n\n@import url("https://codedotspectra.github.io/themes/core/hljs.css"); /* Better Hljs */\n@import url("https://discordstyles.github.io/RadialStatus/base.css"); /* Radial Status */\n:root {\n  --backgroundColor01: #1e2731;\n  --backgroundColor02: #12171d;\n  --mainColor: #2275c9;\n  --gradientColor01: #00F260;\n  --gradientColor02: #0575E6;\n\n  /* Better Hljs */\n  --backgroundCode: #1e2731;\n  --backgroundName: rgba(0, 0, 0, .2);\n\n  /* Radial Status */\n  --rs-small-spacing: 2px;\n  --rs-large-spacing: 3px;\n  --rs-width: 2px;\n  --rs-avatar-shape: 50%;\n  --rs-online-color: #43b581;\n  --rs-idle-color: #faa61a;\n  --rs-dnd-color: #f04747;\n  --rs-offline-color: #636b75;\n  --rs-streaming-color: #643da7;\n  --rs-invisible-color: #747f8d;\n  --rs-phone-visible: block;\n  --rs-phone-color: var(--rs-online-color);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Nocturnal",["",{type:"text-and-color",text:"Backgroundcolor01",oninput:function(t){document.body.style.setProperty("--backgroundColor01",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundColor01")||"#1e2731";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Backgroundcolor02",oninput:function(t){document.body.style.setProperty("--backgroundColor02",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundColor02")||"#12171d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Maincolor",oninput:function(t){document.body.style.setProperty("--mainColor",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mainColor")||"#2275c9";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Gradientcolor01",oninput:function(t){document.body.style.setProperty("--gradientColor01",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradientColor01")||"#00F260";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Gradientcolor02",oninput:function(t){document.body.style.setProperty("--gradientColor02",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--gradientColor02")||"#0575E6";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Backgroundcode",oninput:function(t){document.body.style.setProperty("--backgroundCode",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundCode")||"#1e2731";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Backgroundname",oninput:function(t){document.body.style.setProperty("--backgroundName",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundName")||"rgba(0, 0, 0, .2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Small Spacing",oninput:function(t){document.body.style.setProperty("--rs-small-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-small-spacing")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Large Spacing",oninput:function(t){document.body.style.setProperty("--rs-large-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-large-spacing")||"3px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Width",oninput:function(t){document.body.style.setProperty("--rs-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-width")||"2px";return console.log(t),t}},{type:"text-input",text:"Radial Status: Avatar Shape",oninput:function(t){document.body.style.setProperty("--rs-avatar-shape",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-avatar-shape")||"50%";return console.log(t),t}},{type:"text-and-color",text:"Radial Status: Online Color",oninput:function(t){document.body.style.setProperty("--rs-online-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-online-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Idle Color",oninput:function(t){document.body.style.setProperty("--rs-idle-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-idle-color")||"#faa61a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: DND Color",oninput:function(t){document.body.style.setProperty("--rs-dnd-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-dnd-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Offline Color",oninput:function(t){document.body.style.setProperty("--rs-offline-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-offline-color")||"#636b75";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Streaming Color",oninput:function(t){document.body.style.setProperty("--rs-streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-streaming-color")||"#643da7";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Radial Status: Invisible Color",oninput:function(t){document.body.style.setProperty("--rs-invisible-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-invisible-color")||"#747f8d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Radial Status: Phone Visible",oninput:function(t){document.body.style.setProperty("--rs-phone-visible",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--rs-phone-visible")||"block";return console.log(t),t}},{type:"text-input",text:"Switch Color",oninput:function(t){document.body.style.setProperty("--switch-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-color")||"base.$accent";return console.log(t),t}},{type:"text-input",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#000";return console.log(t),t}},{type:"text-input",text:"User Popout Position",oninput:function(t){document.body.style.setProperty("--user-popout-position",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--user-popout-position")||"center";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Nocturnal")}catch(o){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--backgroundColor01",document.body.style.getPropertyValue("--backgroundColor01")],["--backgroundColor02",document.body.style.getPropertyValue("--backgroundColor02")],["--mainColor",document.body.style.getPropertyValue("--mainColor")],["--gradientColor01",document.body.style.getPropertyValue("--gradientColor01")],["--gradientColor02",document.body.style.getPropertyValue("--gradientColor02")],["--backgroundCode",document.body.style.getPropertyValue("--backgroundCode")],["--backgroundName",document.body.style.getPropertyValue("--backgroundName")],["--rs-small-spacing",document.body.style.getPropertyValue("--rs-small-spacing")],["--rs-large-spacing",document.body.style.getPropertyValue("--rs-large-spacing")],["--rs-width",document.body.style.getPropertyValue("--rs-width")],["--rs-avatar-shape",document.body.style.getPropertyValue("--rs-avatar-shape")],["--rs-online-color",document.body.style.getPropertyValue("--rs-online-color")],["--rs-idle-color",document.body.style.getPropertyValue("--rs-idle-color")],["--rs-dnd-color",document.body.style.getPropertyValue("--rs-dnd-color")],["--rs-offline-color",document.body.style.getPropertyValue("--rs-offline-color")],["--rs-streaming-color",document.body.style.getPropertyValue("--rs-streaming-color")],["--rs-invisible-color",document.body.style.getPropertyValue("--rs-invisible-color")],["--rs-phone-visible",document.body.style.getPropertyValue("--rs-phone-visible")],["--switch-color",document.body.style.getPropertyValue("--switch-color")],["--main-color",document.body.style.getPropertyValue("--main-color")],["--user-popout-position",document.body.style.getPropertyValue("--user-popout-position")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=o(regeneratorRuntime.mark(function t(o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(o){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default