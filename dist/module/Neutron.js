parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,u,a){try{var i=t[u](a),c=i.value}catch(s){return void o(s)}i.done?e(c):Promise.resolve(c).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,u){var a=e.apply(o,n);function i(e){t(a,r,u,i,c,"next",e)}function c(e){t(a,r,u,i,c,"throw",e)}i(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('/**\n * @name Neutron\n * @version 8.0\n * @description A simple but highly customizable theme, now sugar free!\n * @author Spectra#7698\n * @invite PZdnCVD\n * @source https://github.com/codedotspectra/themes\n * @website https://codedotspectra.me/\n *//*\n$$\\   $$\\ $$$$$$$$\\ $$\\   $$\\ $$$$$$$$\\ $$$$$$$\\   $$$$$$\\  $$\\   $$\\\n$$$\\  $$ |$$  _____|$$ |  $$ |\\__$$  __|$$  __$$\\ $$  __$$\\ $$$\\  $$ |\n$$$$\\ $$ |$$ |      $$ |  $$ |   $$ |   $$ |  $$ |$$ /  $$ |$$$$\\ $$ |\n$$ $$\\$$ |$$$$$\\    $$ |  $$ |   $$ |   $$$$$$$  |$$ |  $$ |$$ $$\\$$ |\n$$ \\$$$$ |$$  __|   $$ |  $$ |   $$ |   $$  __$$< $$ |  $$ |$$ \\$$$$ |\n$$ |\\$$$ |$$ |      $$ |  $$ |   $$ |   $$ |  $$ |$$ |  $$ |$$ |\\$$$ |\n$$ | \\$$ |$$$$$$$$\\ \\$$$$$$  |   $$ |   $$ |  $$ | $$$$$$  |$$ | \\$$ |\n\\__|  \\__|\\________| \\______/    \\__|   \\__|  \\__| \\______/ \\__|  \\__|\n*/\n@import url("https://codedotspectra.github.io/themes/themes-cores/neutron8.css");\n@import url(\'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\'); /* Custom font import link (see fonts.google.com) */\n/*##########################################################################\n\n                 CHANGE VALUES BELOW TO CUSTOMIZE YOU THEME\n\n##########################################################################*/\n:root {\n  /* COLORS */\n  --themeColor1: #36D1DC; /* Theme\'s color 1 */\n  --themeColor2: #5B86E5; /* Theme\'s color 2 */\n\n  /* CUSTOM FONT */\n  --customFont: \'Open sans\', sans-serif; /* Custom font, change the name in \'font name here\', you must import the font first */\n\n  /* HOME BUTTON */\n  --homeImage: url(\'https://limeshark.dev/img/bdi/n8h.png\');/* Home button image, must be a direct link | You can also set it to a gradient, google "css gradient"*/\n  --homeImageSize: cover;/* To cover the button, set to "cover". You can also set it to "100% 100%" but the image will be stretched. Set to "contain" to see the entire image */\n\n  /* BACKGROUND */\n  --backgroundColor: #0d0d0d; /* Background color */\n  --backgroundImage: url(\'https://limeshark.dev/img/bdi/n8b.jpg\'); /* Backround image, must be a direct link | You can also set it to a gradient, google "css gradient"*/\n  --backgroundPosition: center; /* Image position | center, left, right, bottom, top */\n  --backgroundSize: cover; /* To cover the entire app, set to "cover". You can also set it to "100% 100%" but the image will be stretched. Set to "contain" to see the entire image */\n  --backgroundRepeat: no-repeat; /* if you want the image to repeat | Google "css background repeat" */\n  --backgroundBlur: 100px; /* Set to 0 to remove blur | Set to 10px for average blur */\n  --backgroundOpacity: .65; /* 0 is transparent */\n\n  /* CODE BLOCKS */\n  --backgroundCode: rgba(0,0,0,.5);\n  --backgroundName: rgba(0,0,0,.5);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Neutron",["",{type:"text-and-color",text:"Themecolor1",oninput:function(t){document.body.style.setProperty("--themeColor1",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--themeColor1")||"#36D1DC";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Themecolor2",oninput:function(t){document.body.style.setProperty("--themeColor2",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--themeColor2")||"#5B86E5";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Customfont",oninput:function(t){document.body.style.setProperty("--customFont",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--customFont")||"'Open sans', sans-serif";return console.log(t),t}},{type:"text-input",text:"Homeimage",oninput:function(t){document.body.style.setProperty("--homeImage",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--homeImage")||"url('https://limeshark.dev/img/bdi/n8h.png')";return console.log(t),t}},{type:"text-input",text:"Homeimagesize",oninput:function(t){document.body.style.setProperty("--homeImageSize",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--homeImageSize")||"cover";return console.log(t),t}},{type:"text-and-color",text:"Backgroundcolor",oninput:function(t){document.body.style.setProperty("--backgroundColor",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundColor")||"#0d0d0d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Backgroundimage",oninput:function(t){document.body.style.setProperty("--backgroundImage",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundImage")||"url('https://limeshark.dev/img/bdi/n8b.jpg')";return console.log(t),t}},{type:"text-input",text:"Backgroundposition",oninput:function(t){document.body.style.setProperty("--backgroundPosition",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundPosition")||"center";return console.log(t),t}},{type:"text-input",text:"Backgroundsize",oninput:function(t){document.body.style.setProperty("--backgroundSize",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundSize")||"cover";return console.log(t),t}},{type:"text-input",text:"Backgroundrepeat",oninput:function(t){document.body.style.setProperty("--backgroundRepeat",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundRepeat")||"no-repeat";return console.log(t),t}},{type:"text-input",text:"Backgroundblur",oninput:function(t){document.body.style.setProperty("--backgroundBlur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundBlur")||"100px";return console.log(t),t}},{type:"text-input",text:"Backgroundopacity",oninput:function(t){document.body.style.setProperty("--backgroundOpacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundOpacity")||".65";return console.log(t),t}},{type:"text-and-color",text:"Backgroundcode",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--backgroundCode",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundCode")||"rgba(0,0,0,.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Backgroundname",oninput:function(t){t=parseInt(t.substring(1,3),16).toString()+", "+parseInt(t.substring(3,5),16).toString()+", "+parseInt(t.substring(5,7),16).toString(),document.body.style.setProperty("--backgroundName",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--backgroundName")||"rgba(0,0,0,.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Neutron")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--themeColor1",document.body.style.getPropertyValue("--themeColor1")],["--themeColor2",document.body.style.getPropertyValue("--themeColor2")],["--customFont",document.body.style.getPropertyValue("--customFont")],["--homeImage",document.body.style.getPropertyValue("--homeImage")],["--homeImageSize",document.body.style.getPropertyValue("--homeImageSize")],["--backgroundColor",document.body.style.getPropertyValue("--backgroundColor")],["--backgroundImage",document.body.style.getPropertyValue("--backgroundImage")],["--backgroundPosition",document.body.style.getPropertyValue("--backgroundPosition")],["--backgroundSize",document.body.style.getPropertyValue("--backgroundSize")],["--backgroundRepeat",document.body.style.getPropertyValue("--backgroundRepeat")],["--backgroundBlur",document.body.style.getPropertyValue("--backgroundBlur")],["--backgroundOpacity",document.body.style.getPropertyValue("--backgroundOpacity")],["--backgroundCode",document.body.style.getPropertyValue("--backgroundCode")],["--backgroundName",document.body.style.getPropertyValue("--backgroundName")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default