parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,l,a){try{var u=t[l](a),i=u.value}catch(c){return void o(c)}u.done?e(i):Promise.resolve(i).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,l){var a=e.apply(o,n);function u(e){t(a,r,l,u,i,"next",e)}function i(e){t(a,r,l,u,i,"throw",e)}u(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Translucence\n * @version 1.0.6.3\n * @description A translucent/frosted glass Discord theme\n * @author CapnKitten\n *\n * @website http://github.com/CapnKitten\n * @source https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Translucence/css/source.css\n * @donate https://paypal.me/capnkitten\n * @invite jzJkA6Z\n */\n\n@import url(https://capnkitten.github.io/BetterDiscord/Themes/Translucence/css/source.css);\n\n:root {\n\t--app-bg: url(https://i.imgur.com/bgmVeyt.jpg);\n\t--app-blur: 6px;\n\t--app-margin: 24px;\n\t--app-radius: 8px; /*\t-\t*/\n\t\n\t--accent-hue: 156;\n\t--accent-saturation: 77.5%;\n\t--accent-lightness: 47.1%;\n\t--accent-opacity: 1;\n\t--accent-text-color: #000; /*\t-\t*/\n\n\t--sidebar-color: rgba(0,0,0,0.4);\n\t--main-content-color: rgba(0,0,0,0.2); /*\t-\t*/\n\n\t--message-color: rgba(0,0,0,0.4);\n\t--message-radius: 8px;\n\t--message-padding-top: 8px;\n\t--message-padding-side: 8px; /*\t-\t*/\n\t\n\t--reply-hue: 226;\n\t--reply-saturation: 77.4%;\n\t--reply-lightness: 61.8%;\n\t--reply-opacity: 1; /*\t-\t*/\n\n\t--textarea-color: 255,255,255;\n\t--textarea-alpha: 0.1;\n\t--textarea-alpha-focus: 0.15;\n\t--textarea-text-color: #fff;\n\t--textarea-radius: 22px;  /*\t-\t*/\n\n\t--card-color: rgba(0,0,0,0.4);\n\t--card-color-hover: rgba(0,0,0,0.5);\n\t--card-color-select: rgba(0,0,0,0.7); /*\t-\t*/\n\n\t--interactive-normal: #aaa;\n\t--interactive-hover: #ddd;\n\t--interactive-active: #fff;\n\t--interactive-muted: #777; /*\t-\t*/\n\n\t--background-modifier-hover: rgba(255,255,255,0.075);\n\t--background-modifier-selected: rgba(255,255,255,0.125);\n}\n")),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Translucence",["",{type:"text-input",text:"App Bg",oninput:function(t){document.body.style.setProperty("--app-bg",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-bg")||"url(https://i.imgur.com/bgmVeyt.jpg)";return console.log(t),t}},{type:"text-input",text:"App Blur",oninput:function(t){document.body.style.setProperty("--app-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-blur")||"6px";return console.log(t),t}},{type:"text-input",text:"App Margin",oninput:function(t){document.body.style.setProperty("--app-margin",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-margin")||"24px";return console.log(t),t}},{type:"text-input",text:"App Radius",oninput:function(t){document.body.style.setProperty("--app-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--app-radius")||"8px";return console.log(t),t}},{type:"text-input",text:"Accent Hue",oninput:function(t){document.body.style.setProperty("--accent-hue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-hue")||"156";return console.log(t),t}},{type:"text-input",text:"Accent Saturation",oninput:function(t){document.body.style.setProperty("--accent-saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-saturation")||"77.5%";return console.log(t),t}},{type:"text-input",text:"Accent Lightness",oninput:function(t){document.body.style.setProperty("--accent-lightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-lightness")||"47.1%";return console.log(t),t}},{type:"text-input",text:"Accent Opacity",oninput:function(t){document.body.style.setProperty("--accent-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-opacity")||"1";return console.log(t),t}},{type:"text-input",text:"Accent Text Color",oninput:function(t){document.body.style.setProperty("--accent-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-text-color")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Sidebar Color",oninput:function(t){document.body.style.setProperty("--sidebar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Content Color",oninput:function(t){document.body.style.setProperty("--main-content-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-content-color")||"rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Message Color",oninput:function(t){document.body.style.setProperty("--message-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Message Radius",oninput:function(t){document.body.style.setProperty("--message-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-radius")||"8px";return console.log(t),t}},{type:"text-input",text:"Message Padding Top",oninput:function(t){document.body.style.setProperty("--message-padding-top",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-padding-top")||"8px";return console.log(t),t}},{type:"text-input",text:"Message Padding Side",oninput:function(t){document.body.style.setProperty("--message-padding-side",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-padding-side")||"8px";return console.log(t),t}},{type:"text-input",text:"Reply Hue",oninput:function(t){document.body.style.setProperty("--reply-hue",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--reply-hue")||"226";return console.log(t),t}},{type:"text-input",text:"Reply Saturation",oninput:function(t){document.body.style.setProperty("--reply-saturation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--reply-saturation")||"77.4%";return console.log(t),t}},{type:"text-input",text:"Reply Lightness",oninput:function(t){document.body.style.setProperty("--reply-lightness",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--reply-lightness")||"61.8%";return console.log(t),t}},{type:"text-input",text:"Reply Opacity",oninput:function(t){document.body.style.setProperty("--reply-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--reply-opacity")||"1";return console.log(t),t}},{type:"text-and-color",text:"Textarea Color",oninput:function(t){document.body.style.setProperty("--textarea-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Textarea Alpha",oninput:function(t){document.body.style.setProperty("--textarea-alpha",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-alpha")||"0.1";return console.log(t),t}},{type:"text-input",text:"Textarea Alpha Focus",oninput:function(t){document.body.style.setProperty("--textarea-alpha-focus",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-alpha-focus")||"0.15";return console.log(t),t}},{type:"text-input",text:"Textarea Text Color",oninput:function(t){document.body.style.setProperty("--textarea-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-text-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Textarea Radius",oninput:function(t){document.body.style.setProperty("--textarea-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-radius")||"22px";return console.log(t),t}},{type:"text-and-color",text:"Card Color",oninput:function(t){document.body.style.setProperty("--card-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color")||"rgba(0,0,0,0.4)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Hover",oninput:function(t){document.body.style.setProperty("--card-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-hover")||"rgba(0,0,0,0.5)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Select",oninput:function(t){document.body.style.setProperty("--card-color-select",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-select")||"rgba(0,0,0,0.7)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Message Color Hover",oninput:function(t){document.body.style.setProperty("--message-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-color-hover")||"rgba(0,0,0,0.55)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Mention Opacity",oninput:function(t){document.body.style.setProperty("--mention-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--mention-opacity")||"1";return console.log(t),t}},{type:"text-input",text:"Notification Color",oninput:function(t){document.body.style.setProperty("--notification-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--notification-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Textarea Placeholder Color",oninput:function(t){document.body.style.setProperty("--textarea-placeholder-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--textarea-placeholder-color")||"#aaa";return console.log(t),t}},{type:"text-input",text:"Input Height",oninput:function(t){document.body.style.setProperty("--input-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-height")||"36px";return console.log(t),t}},{type:"text-and-color",text:"Search Block Color",oninput:function(t){document.body.style.setProperty("--search-block-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--search-block-color")||"rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Search Block Text Color",oninput:function(t){document.body.style.setProperty("--search-block-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--search-block-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Card Header Shadow",oninput:function(t){document.body.style.setProperty("--card-header-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-header-shadow")||"0px 3px 9px 0px rgba(0,0,0,0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Button Action Color",oninput:function(t){document.body.style.setProperty("--button-action-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-action-color")||"#000";return console.log(t),t}},{type:"text-and-color",text:"Switch Slider Color",oninput:function(t){document.body.style.setProperty("--switch-slider-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-slider-color")||"rgba(114,118,125,0.85)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Switch Knob Color",oninput:function(t){document.body.style.setProperty("--switch-knob-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-knob-color")||"#222";return console.log(t),t}},{type:"text-and-color",text:"Alert Color",oninput:function(t){document.body.style.setProperty("--alert-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Alert Action Color",oninput:function(t){document.body.style.setProperty("--alert-action-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-action-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Alert Text Color",oninput:function(t){document.body.style.setProperty("--alert-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Popout Color",oninput:function(t){document.body.style.setProperty("--popout-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-color")||"rgba(0,0,0,0.55)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Popout Blur",oninput:function(t){document.body.style.setProperty("--popout-blur",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-blur")||"8px";return console.log(t),t}},{type:"text-input",text:"Popout Header Opacity",oninput:function(t){document.body.style.setProperty("--popout-header-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-header-opacity")||"0.3";return console.log(t),t}},{type:"text-and-color",text:"Popout Header Shadow",oninput:function(t){document.body.style.setProperty("--popout-header-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-header-shadow")||"0px 3px 9px 0px rgba(0,0,0,0.25)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Popout Shadow",oninput:function(t){document.body.style.setProperty("--popout-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-shadow")||"0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Nowplaying Color",oninput:function(t){document.body.style.setProperty("--nowplaying-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--nowplaying-color")||"88,101,242";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Streaming Color",oninput:function(t){document.body.style.setProperty("--streaming-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--streaming-color")||"89,54,149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Spotify Color",oninput:function(t){document.body.style.setProperty("--spotify-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-color")||"29,185,84";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Server Folder Color",oninput:function(t){document.body.style.setProperty("--server-folder-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-folder-color")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Tooltip Font Size",oninput:function(t){document.body.style.setProperty("--tooltip-font-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-font-size")||"14px";return console.log(t),t}},{type:"text-input",text:"Tooltip Padding",oninput:function(t){document.body.style.setProperty("--tooltip-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-padding")||"8px 12px";return console.log(t),t}},{type:"text-input",text:"Transition Time",oninput:function(t){document.body.style.setProperty("--transition-time",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition-time")||"250ms";return console.log(t),t}},{type:"text-and-color",text:"Transition Type",oninput:function(t){document.body.style.setProperty("--transition-type",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--transition-type")||"cubic-bezier(0.4,0,0.2,1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Color",oninput:function(t){document.body.style.setProperty("--scrollbar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Color Alt",oninput:function(t){document.body.style.setProperty("--scrollbar-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-color-alt")||"0,0,0";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Scrollbar Opacity",oninput:function(t){document.body.style.setProperty("--scrollbar-opacity",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-opacity")||"0.2";return console.log(t),t}},{type:"text-input",text:"Scrollbar Opacity Hover",oninput:function(t){document.body.style.setProperty("--scrollbar-opacity-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-opacity-hover")||"0.3";return console.log(t),t}},{type:"text-input",text:"Scrollbar Width",oninput:function(t){document.body.style.setProperty("--scrollbar-width",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-width")||"10px";return console.log(t),t}},{type:"text-input",text:"Font Primary",oninput:function(t){document.body.style.setProperty("--font-primary",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-primary")||'Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Font Display",oninput:function(t){document.body.style.setProperty("--font-display",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--font-display")||'Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif';return console.log(t),t}},{type:"text-input",text:"Spinner Size",oninput:function(t){document.body.style.setProperty("--spinner-size",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spinner-size")||"auto";return console.log(t),t}},{type:"text-input",text:"Button Background",oninput:function(t){document.body.style.setProperty("--button-background",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-background")||"transparent";return console.log(t),t}},{type:"text-input",text:"Button Outline",oninput:function(t){document.body.style.setProperty("--button-outline",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-outline")||"none";return console.log(t),t}},{type:"text-input",text:"Button Height",oninput:function(t){document.body.style.setProperty("--button-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-height")||"32px";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Translucence")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--app-bg",document.body.style.getPropertyValue("--app-bg")],["--app-blur",document.body.style.getPropertyValue("--app-blur")],["--app-margin",document.body.style.getPropertyValue("--app-margin")],["--app-radius",document.body.style.getPropertyValue("--app-radius")],["--accent-hue",document.body.style.getPropertyValue("--accent-hue")],["--accent-saturation",document.body.style.getPropertyValue("--accent-saturation")],["--accent-lightness",document.body.style.getPropertyValue("--accent-lightness")],["--accent-opacity",document.body.style.getPropertyValue("--accent-opacity")],["--accent-text-color",document.body.style.getPropertyValue("--accent-text-color")],["--sidebar-color",document.body.style.getPropertyValue("--sidebar-color")],["--main-content-color",document.body.style.getPropertyValue("--main-content-color")],["--message-color",document.body.style.getPropertyValue("--message-color")],["--message-radius",document.body.style.getPropertyValue("--message-radius")],["--message-padding-top",document.body.style.getPropertyValue("--message-padding-top")],["--message-padding-side",document.body.style.getPropertyValue("--message-padding-side")],["--reply-hue",document.body.style.getPropertyValue("--reply-hue")],["--reply-saturation",document.body.style.getPropertyValue("--reply-saturation")],["--reply-lightness",document.body.style.getPropertyValue("--reply-lightness")],["--reply-opacity",document.body.style.getPropertyValue("--reply-opacity")],["--textarea-color",document.body.style.getPropertyValue("--textarea-color")],["--textarea-alpha",document.body.style.getPropertyValue("--textarea-alpha")],["--textarea-alpha-focus",document.body.style.getPropertyValue("--textarea-alpha-focus")],["--textarea-text-color",document.body.style.getPropertyValue("--textarea-text-color")],["--textarea-radius",document.body.style.getPropertyValue("--textarea-radius")],["--card-color",document.body.style.getPropertyValue("--card-color")],["--card-color-hover",document.body.style.getPropertyValue("--card-color-hover")],["--card-color-select",document.body.style.getPropertyValue("--card-color-select")],["--message-color-hover",document.body.style.getPropertyValue("--message-color-hover")],["--mention-opacity",document.body.style.getPropertyValue("--mention-opacity")],["--notification-color",document.body.style.getPropertyValue("--notification-color")],["--textarea-placeholder-color",document.body.style.getPropertyValue("--textarea-placeholder-color")],["--input-height",document.body.style.getPropertyValue("--input-height")],["--search-block-color",document.body.style.getPropertyValue("--search-block-color")],["--search-block-text-color",document.body.style.getPropertyValue("--search-block-text-color")],["--card-header-shadow",document.body.style.getPropertyValue("--card-header-shadow")],["--button-action-color",document.body.style.getPropertyValue("--button-action-color")],["--switch-slider-color",document.body.style.getPropertyValue("--switch-slider-color")],["--switch-knob-color",document.body.style.getPropertyValue("--switch-knob-color")],["--alert-color",document.body.style.getPropertyValue("--alert-color")],["--alert-action-color",document.body.style.getPropertyValue("--alert-action-color")],["--alert-text-color",document.body.style.getPropertyValue("--alert-text-color")],["--popout-color",document.body.style.getPropertyValue("--popout-color")],["--popout-blur",document.body.style.getPropertyValue("--popout-blur")],["--popout-header-opacity",document.body.style.getPropertyValue("--popout-header-opacity")],["--popout-header-shadow",document.body.style.getPropertyValue("--popout-header-shadow")],["--popout-shadow",document.body.style.getPropertyValue("--popout-shadow")],["--nowplaying-color",document.body.style.getPropertyValue("--nowplaying-color")],["--streaming-color",document.body.style.getPropertyValue("--streaming-color")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--server-folder-color",document.body.style.getPropertyValue("--server-folder-color")],["--tooltip-font-size",document.body.style.getPropertyValue("--tooltip-font-size")],["--tooltip-padding",document.body.style.getPropertyValue("--tooltip-padding")],["--transition-time",document.body.style.getPropertyValue("--transition-time")],["--transition-type",document.body.style.getPropertyValue("--transition-type")],["--scrollbar-color",document.body.style.getPropertyValue("--scrollbar-color")],["--scrollbar-color-alt",document.body.style.getPropertyValue("--scrollbar-color-alt")],["--scrollbar-opacity",document.body.style.getPropertyValue("--scrollbar-opacity")],["--scrollbar-opacity-hover",document.body.style.getPropertyValue("--scrollbar-opacity-hover")],["--scrollbar-width",document.body.style.getPropertyValue("--scrollbar-width")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--spinner-size",document.body.style.getPropertyValue("--spinner-size")],["--button-background",document.body.style.getPropertyValue("--button-background")],["--button-outline",document.body.style.getPropertyValue("--button-outline")],["--button-height",document.body.style.getPropertyValue("--button-height")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default