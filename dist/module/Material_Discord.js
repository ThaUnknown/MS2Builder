parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function t(t,e,o,n,r,a,l){try{var u=t[a](l),i=u.value}catch(c){return void o(c)}u.done?e(i):Promise.resolve(i).then(n,r)}function e(e){return function(){var o=this,n=arguments;return new Promise(function(r,a){var l=e.apply(o,n);function u(e){t(l,r,a,u,i,"next",e)}function i(e){t(l,r,a,u,i,"throw",e)}u(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={goosemodHandlers:{onImport:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode("/**\n * @name Material_Discord\n * @version 3.0.3\n * @description A theme based on Google's Material Design\n * @author CapnKitten\n * \n * @website http://github.com/CapnKitten\n * @source https://github.com/CapnKitten/BetterDiscord/blob/master/Themes/Material-Discord/css/source.css\n * @donate https://paypal.me/capnkitten\n * @invite jzJkA6Z\n */\n\n@import url(https://capnkitten.github.io/BetterDiscord/Themes/Material-Discord/css/source.css);\n\n:root {\n\t--accent-color: #577be2;\n\t--accent-rgb: 94,122,199;\n\t--accent-text-color: #fff;\n\t--accent-button-action: #fff; /*\t-\t*/\n\t\n\t--avatar-radius: 50%; /*\t-\t*/\n\n\t--message-radius: 19px;\n\t--message-padding: 8px 12px;\n\t--message-padding-alt: 4px 12px 8px 12px; /*\t-\t*/\n\n\t--card-radius: 5px;\n\t--card-radius-big: 10px;\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Material_Discord",["",{type:"text-and-color",text:"Accent Color",oninput:function(t){document.body.style.setProperty("--accent-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-color")||"#577be2";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Accent RGB",oninput:function(t){document.body.style.setProperty("--accent-rgb",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-rgb")||"94,122,199";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Accent Text Color",oninput:function(t){document.body.style.setProperty("--accent-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-text-color")||"#fff";return console.log(t),t}},{type:"text-input",text:"Accent Button Action",oninput:function(t){document.body.style.setProperty("--accent-button-action",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-button-action")||"#fff";return console.log(t),t}},{type:"text-input",text:"Avatar Radius",oninput:function(t){document.body.style.setProperty("--avatar-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--avatar-radius")||"50%";return console.log(t),t}},{type:"text-input",text:"Message Radius",oninput:function(t){document.body.style.setProperty("--message-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-radius")||"19px";return console.log(t),t}},{type:"text-input",text:"Message Padding",oninput:function(t){document.body.style.setProperty("--message-padding",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-padding")||"8px 12px";return console.log(t),t}},{type:"text-input",text:"Message Padding Alt",oninput:function(t){document.body.style.setProperty("--message-padding-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-padding-alt")||"4px 12px 8px 12px";return console.log(t),t}},{type:"text-input",text:"Card Radius",oninput:function(t){document.body.style.setProperty("--card-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-radius")||"5px";return console.log(t),t}},{type:"text-input",text:"Card Radius Big",oninput:function(t){document.body.style.setProperty("--card-radius-big",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-radius-big")||"10px";return console.log(t),t}},{type:"text-input",text:"Accent Button Action Hover",oninput:function(t){document.body.style.setProperty("--accent-button-action-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-button-action-hover")||"0.06";return console.log(t),t}},{type:"text-input",text:"Accent Button Action Active",oninput:function(t){document.body.style.setProperty("--accent-button-action-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--accent-button-action-active")||"0.12";return console.log(t),t}},{type:"text-and-color",text:"Alert Color",oninput:function(t){document.body.style.setProperty("--alert-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-color")||"#f04747";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Alert Button Action",oninput:function(t){document.body.style.setProperty("--alert-button-action",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-button-action")||"#fff";return console.log(t),t}},{type:"text-input",text:"Alert Button Action Hover",oninput:function(t){document.body.style.setProperty("--alert-button-action-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-button-action-hover")||"0.1";return console.log(t),t}},{type:"text-input",text:"Alert Button Action Active",oninput:function(t){document.body.style.setProperty("--alert-button-action-active",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-button-action-active")||"0.2";return console.log(t),t}},{type:"text-input",text:"Alert Text Color",oninput:function(t){document.body.style.setProperty("--alert-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--alert-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Success Color",oninput:function(t){document.body.style.setProperty("--success-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--success-color")||"#43b581";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Main Textarea Radius",oninput:function(t){document.body.style.setProperty("--main-textarea-radius",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-textarea-radius")||"24px";return console.log(t),t}},{type:"text-and-color",text:"Spotify Color",oninput:function(t){document.body.style.setProperty("--spotify-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--spotify-color")||"#1db954";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Stream Color",oninput:function(t){document.body.style.setProperty("--stream-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--stream-color")||"#593695";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Stream Flash",oninput:function(t){document.body.style.setProperty("--stream-flash",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--stream-flash")||"89,54,149";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Xbox Color",oninput:function(t){document.body.style.setProperty("--xbox-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--xbox-color")||"#107c10";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Tooltip Color",oninput:function(t){document.body.style.setProperty("--tooltip-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-color")||"rgba(97,97,97,0.9)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Tooltip Text Color",oninput:function(t){document.body.style.setProperty("--tooltip-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-text-color")||"#ddd";return console.log(t),t}},{type:"text-and-color",text:"Tooltip Shadow",oninput:function(t){document.body.style.setProperty("--tooltip-shadow",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tooltip-shadow")||"0px 5px 15px rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Shadow 1dp",oninput:function(t){document.body.style.setProperty("--shadow-1dp",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-1dp")||"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Shadow 2dp",oninput:function(t){document.body.style.setProperty("--shadow-2dp",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-2dp")||"0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Shadow 3dp",oninput:function(t){document.body.style.setProperty("--shadow-3dp",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--shadow-3dp")||"0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Default Animation",oninput:function(t){document.body.style.setProperty("--default-animation",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--default-animation")||"cubic-bezier(0.4,0,0.2,1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Default Time",oninput:function(t){document.body.style.setProperty("--default-time",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--default-time")||"250ms";return console.log(t),t}},{type:"text-input",text:"Window Title Bar",oninput:function(t){document.body.style.setProperty("--window-title-bar",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-title-bar")||"22px";return console.log(t),t}},{type:"text-and-color",text:"Window Button Min",oninput:function(t){document.body.style.setProperty("--window-button-min",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-min")||"#ffbd44";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button Max",oninput:function(t){document.body.style.setProperty("--window-button-max",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-max")||"#00ca4e";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button Close",oninput:function(t){document.body.style.setProperty("--window-button-close",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-close")||"#ff605c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Color",oninput:function(t){document.body.style.setProperty("--main-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-color")||"#16171a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Alt",oninput:function(t){document.body.style.setProperty("--main-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-alt")||"#0f1012";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Server Color",oninput:function(t){document.body.style.setProperty("--server-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--server-color")||"#232327";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Status Picker Color",oninput:function(t){document.body.style.setProperty("--status-picker-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--status-picker-color")||"#181a1d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Sidebar Panel Color",oninput:function(t){document.body.style.setProperty("--sidebar-panel-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--sidebar-panel-color")||"#111114";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Chat Color",oninput:function(t){document.body.style.setProperty("--chat-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--chat-color")||"#202225";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Message Color",oninput:function(t){document.body.style.setProperty("--message-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-color")||"#292d30";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Message Color Hover",oninput:function(t){document.body.style.setProperty("--message-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-color-hover")||"#303438";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Message Color Alt",oninput:function(t){document.body.style.setProperty("--message-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--message-color-alt")||"#1c1e21";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Attachment Color",oninput:function(t){document.body.style.setProperty("--attachment-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--attachment-color")||"rgb(0,0,0,0.325)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Textarea Color",oninput:function(t){document.body.style.setProperty("--main-textarea-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-textarea-color")||"#303338";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Textarea Color Alt",oninput:function(t){document.body.style.setProperty("--main-textarea-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-textarea-color-alt")||"#3b3f42";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Main Textarea Border",oninput:function(t){document.body.style.setProperty("--main-textarea-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--main-textarea-border")||"#3e434a";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Typing Color",oninput:function(t){document.body.style.setProperty("--typing-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--typing-color")||"rgba(32,34,37,0.9)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Popout Color",oninput:function(t){document.body.style.setProperty("--popout-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-color")||"#2c2f33";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Popout Color Alt",oninput:function(t){document.body.style.setProperty("--popout-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-color-alt")||"#202225";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Popout Header Border",oninput:function(t){document.body.style.setProperty("--popout-header-border",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--popout-header-border")||"#444";return console.log(t),t}},{type:"text-input",text:"Separator Color",oninput:function(t){document.body.style.setProperty("--separator-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--separator-color")||"#444";return console.log(t),t}},{type:"text-and-color",text:"Input Color",oninput:function(t){document.body.style.setProperty("--input-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-color")||"rgba(255,255,255,0.075)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Input Border Color",oninput:function(t){document.body.style.setProperty("--input-border-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--input-border-color")||"#444";return console.log(t),t}},{type:"text-input",text:"Tab Border Color",oninput:function(t){document.body.style.setProperty("--tab-border-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--tab-border-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Menu Item Hover",oninput:function(t){document.body.style.setProperty("--menu-item-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-item-hover")||"rgba(255,255,255,0.075)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Menu Item Select",oninput:function(t){document.body.style.setProperty("--menu-item-select",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-item-select")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Menu Item Text Color",oninput:function(t){document.body.style.setProperty("--menu-item-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--menu-item-text-color")||"#aaa";return console.log(t),t}},{type:"text-input",text:"Card Color",oninput:function(t){document.body.style.setProperty("--card-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color")||"transparent";return console.log(t),t}},{type:"text-and-color",text:"Card Color Hover",oninput:function(t){document.body.style.setProperty("--card-color-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-hover")||"#292b2f";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Alt",oninput:function(t){document.body.style.setProperty("--card-color-alt",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-alt")||"#2a2c30";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Card Color Alt Hover",oninput:function(t){document.body.style.setProperty("--card-color-alt-hover",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-color-alt-hover")||"#35383d";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Card Border Color",oninput:function(t){document.body.style.setProperty("--card-border-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-border-color")||"#444";return console.log(t),t}},{type:"text-and-color",text:"Card Header Text Color",oninput:function(t){document.body.style.setProperty("--card-header-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--card-header-text-color")||"#dcddde";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Button Link Color",oninput:function(t){document.body.style.setProperty("--button-link-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-link-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Button Link Text Color",oninput:function(t){document.body.style.setProperty("--button-link-text-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--button-link-text-color")||"#fff";return console.log(t),t}},{type:"text-and-color",text:"Slider Color",oninput:function(t){document.body.style.setProperty("--slider-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--slider-color")||"#4f545c";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Switch Knob Color",oninput:function(t){document.body.style.setProperty("--switch-knob-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-knob-color")||"#777";return console.log(t),t}},{type:"text-and-color",text:"Switch Slider Color",oninput:function(t){document.body.style.setProperty("--switch-slider-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--switch-slider-color")||"rgba(65,65,65,0.65)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Md Ripple Color",oninput:function(t){document.body.style.setProperty("--md-ripple-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--md-ripple-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Emoji Category Header",oninput:function(t){document.body.style.setProperty("--emoji-category-header",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--emoji-category-header")||"rgba(44,47,51,0.95)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Scrollbar Color",oninput:function(t){document.body.style.setProperty("--scrollbar-color",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--scrollbar-color")||"255,255,255";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button",oninput:function(t){document.body.style.setProperty("--window-button",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button")||"rgba(255,255,255,0.1)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-and-color",text:"Window Button Inactive",oninput:function(t){document.body.style.setProperty("--window-button-inactive",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--window-button-inactive")||"rgba(255,255,255,0.05)";return"#"!==t[0]&&(t="#"+t.split(", ").map(function(t){return parseInt(t).toString(16).padStart(2,"0")}).join("")),console.log(t),t}},{type:"text-input",text:"Group Spacing",oninput:function(t){document.body.style.setProperty("--group-spacing",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--group-spacing")||"0.125rem";return console.log(t),t}},{type:"text-input",text:"Usrbg Banner Height",oninput:function(t){document.body.style.setProperty("--USRBG-banner-height",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--USRBG-banner-height")||"60px";return console.log(t),t}},{type:"text-input",text:"Usrbg Avatar Offset",oninput:function(t){document.body.style.setProperty("--USRBG-avatar-offset",t)},initialValue:function(){var t=document.body.style.getPropertyValue("--USRBG-avatar-offset")||"76px";return console.log(t),t}}]);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),onRemove:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Material_Discord")}catch(e){}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getSettings:function(){var t=e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",[["--accent-color",document.body.style.getPropertyValue("--accent-color")],["--accent-rgb",document.body.style.getPropertyValue("--accent-rgb")],["--accent-text-color",document.body.style.getPropertyValue("--accent-text-color")],["--accent-button-action",document.body.style.getPropertyValue("--accent-button-action")],["--avatar-radius",document.body.style.getPropertyValue("--avatar-radius")],["--message-radius",document.body.style.getPropertyValue("--message-radius")],["--message-padding",document.body.style.getPropertyValue("--message-padding")],["--message-padding-alt",document.body.style.getPropertyValue("--message-padding-alt")],["--card-radius",document.body.style.getPropertyValue("--card-radius")],["--card-radius-big",document.body.style.getPropertyValue("--card-radius-big")],["--accent-button-action-hover",document.body.style.getPropertyValue("--accent-button-action-hover")],["--accent-button-action-active",document.body.style.getPropertyValue("--accent-button-action-active")],["--alert-color",document.body.style.getPropertyValue("--alert-color")],["--alert-button-action",document.body.style.getPropertyValue("--alert-button-action")],["--alert-button-action-hover",document.body.style.getPropertyValue("--alert-button-action-hover")],["--alert-button-action-active",document.body.style.getPropertyValue("--alert-button-action-active")],["--alert-text-color",document.body.style.getPropertyValue("--alert-text-color")],["--success-color",document.body.style.getPropertyValue("--success-color")],["--main-textarea-radius",document.body.style.getPropertyValue("--main-textarea-radius")],["--spotify-color",document.body.style.getPropertyValue("--spotify-color")],["--stream-color",document.body.style.getPropertyValue("--stream-color")],["--stream-flash",document.body.style.getPropertyValue("--stream-flash")],["--xbox-color",document.body.style.getPropertyValue("--xbox-color")],["--tooltip-color",document.body.style.getPropertyValue("--tooltip-color")],["--tooltip-text-color",document.body.style.getPropertyValue("--tooltip-text-color")],["--tooltip-shadow",document.body.style.getPropertyValue("--tooltip-shadow")],["--shadow-1dp",document.body.style.getPropertyValue("--shadow-1dp")],["--shadow-2dp",document.body.style.getPropertyValue("--shadow-2dp")],["--shadow-3dp",document.body.style.getPropertyValue("--shadow-3dp")],["--default-animation",document.body.style.getPropertyValue("--default-animation")],["--default-time",document.body.style.getPropertyValue("--default-time")],["--window-title-bar",document.body.style.getPropertyValue("--window-title-bar")],["--window-button-min",document.body.style.getPropertyValue("--window-button-min")],["--window-button-max",document.body.style.getPropertyValue("--window-button-max")],["--window-button-close",document.body.style.getPropertyValue("--window-button-close")],["--main-color",document.body.style.getPropertyValue("--main-color")],["--main-alt",document.body.style.getPropertyValue("--main-alt")],["--server-color",document.body.style.getPropertyValue("--server-color")],["--status-picker-color",document.body.style.getPropertyValue("--status-picker-color")],["--sidebar-panel-color",document.body.style.getPropertyValue("--sidebar-panel-color")],["--chat-color",document.body.style.getPropertyValue("--chat-color")],["--message-color",document.body.style.getPropertyValue("--message-color")],["--message-color-hover",document.body.style.getPropertyValue("--message-color-hover")],["--message-color-alt",document.body.style.getPropertyValue("--message-color-alt")],["--attachment-color",document.body.style.getPropertyValue("--attachment-color")],["--main-textarea-color",document.body.style.getPropertyValue("--main-textarea-color")],["--main-textarea-color-alt",document.body.style.getPropertyValue("--main-textarea-color-alt")],["--main-textarea-border",document.body.style.getPropertyValue("--main-textarea-border")],["--typing-color",document.body.style.getPropertyValue("--typing-color")],["--popout-color",document.body.style.getPropertyValue("--popout-color")],["--popout-color-alt",document.body.style.getPropertyValue("--popout-color-alt")],["--popout-header-border",document.body.style.getPropertyValue("--popout-header-border")],["--separator-color",document.body.style.getPropertyValue("--separator-color")],["--input-color",document.body.style.getPropertyValue("--input-color")],["--input-border-color",document.body.style.getPropertyValue("--input-border-color")],["--tab-border-color",document.body.style.getPropertyValue("--tab-border-color")],["--menu-item-hover",document.body.style.getPropertyValue("--menu-item-hover")],["--menu-item-select",document.body.style.getPropertyValue("--menu-item-select")],["--menu-item-text-color",document.body.style.getPropertyValue("--menu-item-text-color")],["--card-color",document.body.style.getPropertyValue("--card-color")],["--card-color-hover",document.body.style.getPropertyValue("--card-color-hover")],["--card-color-alt",document.body.style.getPropertyValue("--card-color-alt")],["--card-color-alt-hover",document.body.style.getPropertyValue("--card-color-alt-hover")],["--card-border-color",document.body.style.getPropertyValue("--card-border-color")],["--card-header-text-color",document.body.style.getPropertyValue("--card-header-text-color")],["--button-link-color",document.body.style.getPropertyValue("--button-link-color")],["--button-link-text-color",document.body.style.getPropertyValue("--button-link-text-color")],["--slider-color",document.body.style.getPropertyValue("--slider-color")],["--switch-knob-color",document.body.style.getPropertyValue("--switch-knob-color")],["--switch-slider-color",document.body.style.getPropertyValue("--switch-slider-color")],["--md-ripple-color",document.body.style.getPropertyValue("--md-ripple-color")],["--emoji-category-header",document.body.style.getPropertyValue("--emoji-category-header")],["--scrollbar-color",document.body.style.getPropertyValue("--scrollbar-color")],["--window-button",document.body.style.getPropertyValue("--window-button")],["--window-button-inactive",document.body.style.getPropertyValue("--window-button-inactive")],["--group-spacing",document.body.style.getPropertyValue("--group-spacing")],["--USRBG-banner-height",document.body.style.getPropertyValue("--USRBG-banner-height")],["--USRBG-avatar-offset",document.body.style.getPropertyValue("--USRBG-avatar-offset")]]);case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),loadSettings:function(){var t=e(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach(function(t){document.body.style.setProperty(t[0],t[1])});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}};exports.default=n;
},{}]},{},["index.js"], null);parcelRequire('index.js').default