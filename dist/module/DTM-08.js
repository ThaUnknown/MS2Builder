parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,n,o,r,i,u){try{var a=e[i](u),l=a.value}catch(s){return void n(s)}a.done?t(l):Promise.resolve(l).then(o,r)}function t(t){return function(){var n=this,o=arguments;return new Promise(function(r,i){var u=t.apply(n,o);function a(t){e(u,r,i,a,l,"next",t)}function l(t){e(u,r,i,a,l,"throw",t)}a(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/**\n* @name DTM-08\n* @author 11pixels#2004\n* @version 1.1.1\n* @invite vUN9sNW\n* @description Discord Time Machine 2008 - A skeuomorphic/glossy theme for Discord\n* @source https://github.com/XYZenix/XYZenixThemes/blob/master/DTM-08.theme.css\n*/\n@import url(https://xyzenix.github.io/XYZenixThemes/DTM-08/dtm-08.css);\n\n:root { /* these variables are here because i think they're supposed to be customizable even tho some weren't supposed to be */\n  --login-background: url(https://images.unsplash.com/photo-1514902408987-9b4b79579a8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80);\n  --font-display: Whitney,\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\n  --ContextMenuBackgroundColorDark: #0008; /* set to #0a0a0a if you disable blur */\n  --ContextMenuBackgroundColorLight: #fffb; /* set to #fff if you disable blur */\n  --ContextMenuBackgroundBlur: blur(10px) /* context menu background blur | default: blur(10px) | disable: none*/;\n  --SettingsSlideAnimDuration1: 0s; /* the whole 'zoom out' effect thing idk what its called | default: .8s | disable: 0s */\n  --SettingsSlideAnimDuration2: 0s; /* the sliding effect | default: .5s | disable: 0s */\n  --PointlesslyLongVariableNameThatSupposedlyControlsAWarningAboutTheThemeBeingOutdatedButWhatDoIKnow: none; /* this variable wants you to leave it alone, please respect its wish unless you like red text at the bottom of the sidebar in user settings */\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("DTM-08",["",{type:"text-input",text:"Login Background",oninput:function(e){document.body.style.setProperty("--login-background",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--login-background")||"url(https://images.unsplash.com/photo-1514902408987-9b4b79579a8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80)";return console.log(e),e}},{type:"text-input",text:"Font Display",oninput:function(e){document.body.style.setProperty("--font-display",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--font-display")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif';return console.log(e),e}},{type:"text-input",text:"Contextmenubackgroundcolordark",oninput:function(e){document.body.style.setProperty("--ContextMenuBackgroundColorDark",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--ContextMenuBackgroundColorDark")||"#0008";return console.log(e),e}},{type:"text-input",text:"Contextmenubackgroundcolorlight",oninput:function(e){document.body.style.setProperty("--ContextMenuBackgroundColorLight",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--ContextMenuBackgroundColorLight")||"#fffb";return console.log(e),e}},{type:"text-input",text:"Settingsslideanimduration1",oninput:function(e){document.body.style.setProperty("--SettingsSlideAnimDuration1",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--SettingsSlideAnimDuration1")||"0s";return console.log(e),e}},{type:"text-input",text:"Settingsslideanimduration2",oninput:function(e){document.body.style.setProperty("--SettingsSlideAnimDuration2",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--SettingsSlideAnimDuration2")||"0s";return console.log(e),e}},{type:"text-input",text:"Pointlesslylongvariablenamethatsupposedlycontrolsawarningaboutthethemebeingoutdatedbutwhatdoiknow",oninput:function(e){document.body.style.setProperty("--PointlesslyLongVariableNameThatSupposedlyControlsAWarningAboutTheThemeBeingOutdatedButWhatDoIKnow",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--PointlesslyLongVariableNameThatSupposedlyControlsAWarningAboutTheThemeBeingOutdatedButWhatDoIKnow")||"none";return console.log(e),e}},{type:"text-input",text:"Theme Version",oninput:function(e){document.body.style.setProperty("--theme-version",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--theme-version")||'"22w03a"';return console.log(e),e}},{type:"text-input",text:"Theme Verdate",oninput:function(e){document.body.style.setProperty("--theme-verdate",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--theme-verdate")||'"24 January 2022"';return console.log(e),e}},{type:"text-input",text:"Randompokemon",oninput:function(e){document.body.style.setProperty("--randomPokemon",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--randomPokemon")||'"Kleavor"';return console.log(e),e}},{type:"text-input",text:"Radio Bar Accent Color",oninput:function(e){document.body.style.setProperty("--radio-bar-accent-color",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--radio-bar-accent-color")||"#000b";return console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.remove();try{goosemodScope.settings.removeItem("DTM-08")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--login-background",document.body.style.getPropertyValue("--login-background")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--ContextMenuBackgroundColorDark",document.body.style.getPropertyValue("--ContextMenuBackgroundColorDark")],["--ContextMenuBackgroundColorLight",document.body.style.getPropertyValue("--ContextMenuBackgroundColorLight")],["--SettingsSlideAnimDuration1",document.body.style.getPropertyValue("--SettingsSlideAnimDuration1")],["--SettingsSlideAnimDuration2",document.body.style.getPropertyValue("--SettingsSlideAnimDuration2")],["--PointlesslyLongVariableNameThatSupposedlyControlsAWarningAboutTheThemeBeingOutdatedButWhatDoIKnow",document.body.style.getPropertyValue("--PointlesslyLongVariableNameThatSupposedlyControlsAWarningAboutTheThemeBeingOutdatedButWhatDoIKnow")],["--theme-version",document.body.style.getPropertyValue("--theme-version")],["--theme-verdate",document.body.style.getPropertyValue("--theme-verdate")],["--randomPokemon",document.body.style.getPropertyValue("--randomPokemon")],["--radio-bar-accent-color",document.body.style.getPropertyValue("--radio-bar-accent-color")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default