parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t,e,o,a,r,p){try{var i=n[r](p),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(o,a)}function t(t){return function(){var e=this,o=arguments;return new Promise(function(a,r){var p=t.apply(e,o);function i(t){n(p,a,r,i,s,"next",t)}function s(t){n(p,a,r,i,s,"throw",t)}i(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode(':root {\n  --container-color: var(--background-floating);\n}\n\n.platform-win .container-3baos1 {\n  top: 30px !important;\n}\n.platform-win .guilds-1SWlCJ {\n  margin-top: 72px;\n}\n\n.platform-osx .container-3baos1 {\n  top: 30px !important;\n}\n.platform-osx .guilds-1SWlCJ {\n  margin-top: 98px;\n}\n\n.platform-linux .container-3baos1 {\n  top: 8px !important;\n}\n.platform-linux .guilds-1SWlCJ {\n  margin-top: 64px;\n}\n\n.platform-web .container-3baos1 {\n  top: 8px !important;\n}\n.platform-web .guilds-1SWlCJ {\n  margin-top: 64px;\n}\n\n#app-mount .container-1taM1r,\n#app-mount .searchBar-6Kv8R2 {\n  z-index: 1;\n}\n#app-mount .container-3baos1 {\n  position: fixed !important;\n  left: 4px !important;\n  border-radius: 25px;\n  background-color: transparent !important;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp .wrapper-3t9DeA {\n  --avatar-size: 48px;\n  width: var(--avatar-size) !important;\n  height: var(--avatar-size) !important;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp .wrapper-3t9DeA::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  border-radius: 12px 8px 8px 12px;\n  height: var(--avatar-size);\n  width: var(--avatar-size);\n  left: 20px;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp .wrapper-3t9DeA::after {\n  content: "";\n  position: absolute;\n  height: 2px;\n  width: 32px;\n  border-radius: 1px;\n  background-color: var(--background-modifier-accent);\n  bottom: -10px;\n  left: 8px;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp:hover ~ .nameTag-3uD-yy.canCopy-2VBT7N,\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp:hover ~ .flex-1xMQg5:not(.spotify-buttons) {\n  opacity: 1;\n  pointer-events: all;\n  animation: left-right 0.2s ease-in;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp ~ .nameTag-3uD-yy.canCopy-2VBT7N,\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp ~ .flex-1xMQg5:not(.spotify-buttons) {\n  transition: 250ms ease;\n}\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp ~ .nameTag-3uD-yy.canCopy-2VBT7N:hover,\n#app-mount .container-3baos1 .avatarWrapper-2yR4wp ~ .flex-1xMQg5:not(.spotify-buttons):hover {\n  opacity: 1;\n  pointer-events: all;\n  animation: left-right 0.2s ease-in;\n}\n#app-mount .container-3baos1 .nameTag-3uD-yy {\n  position: absolute;\n  left: 175px;\n  order: 2;\n  max-width: 75px;\n  padding: 2px 15px 2px 5px;\n  border-radius: 0 5px 5px 0;\n  background-color: var(--container-color);\n  opacity: 0;\n  pointer-events: none;\n}\n#app-mount .container-3baos1 .nameTag-3uD-yy .customStatus-3tC2ig {\n  opacity: 0;\n}\n#app-mount .container-3baos1 .nameTag-3uD-yy .hovered-d5PMVU {\n  opacity: 1;\n  transform: none;\n}\n#app-mount .container-3baos1 .flex-1xMQg5 {\n  position: absolute;\n  left: calc(100% + 4px);\n  min-width: 100px;\n  max-width: 125px;\n  padding: 2px 0 2px 2px;\n  border-radius: 5px;\n  background-color: var(--container-color);\n  opacity: 0;\n  pointer-events: none;\n}\n#app-mount .container-3baos1 .flex-1xMQg5::before {\n  content: "";\n  position: absolute;\n  left: -10px;\n  top: 50%;\n  margin-top: -5px;\n  border-left-width: 5px;\n  transform: rotate(90deg);\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border-top-color: var(--container-color);\n}\n\n#app-mount .scale-3iLZhb {\n  opacity: 1;\n  transform: none;\n}\n#app-mount #status-picker {\n  top: 5px;\n  left: 4px;\n  width: 40px;\n  transition: 250ms ease;\n  animation: top-bottom 0.2s ease-out;\n}\n#app-mount #status-picker::before {\n  position: absolute;\n  right: 38%;\n  bottom: 100%;\n  content: "";\n  margin-top: -5px;\n  border: 5px solid transparent;\n  border-left-width: 5px;\n  width: 0;\n  height: 0;\n  border-right-color: var(--container-color);\n  transform: rotate(90deg);\n}\n#app-mount #status-picker .scroller-3BxosC::-webkit-scrollbar,\n#app-mount #status-picker .scroller-3BxosC .separator-2I32lJ {\n  display: none;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte {\n  padding-left: 2px;\n  right: 5px;\n  left: -4px;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte.focused-3afm-j#status-picker-custom-status div .customStatusWithEmoji-8-XZ8I .emoji {\n  display: none;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte.focused-3afm-j#status-picker-custom-status div .customStatusWithEmoji-8-XZ8I .clearStatusButton-1Mxs1q {\n  visibility: visible;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte .statusItem-33LqPf:not([aria-label="Set a custom status"]):not(.customStatusWithEmoji-8-XZ8I) {\n  margin-left: 1px;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte .statusItem-33LqPf .clearStatusButton-1Mxs1q {\n  margin-left: -60px;\n  visibility: hidden;\n}\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte .statusItem-33LqPf .status-1fhblQ,\n#app-mount #status-picker .scroller-3BxosC .item-1tOPte .statusItem-33LqPf .description-2L932D {\n  display: none;\n}\n#app-mount #status-picker .scroller-3BxosC #status-picker-game-activity {\n  left: -7px;\n}\n\n@keyframes top-bottom {\n  0% {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes left-right {\n  0% {\n    opacity: 0;\n    transform: translateX(-4px);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Compact Userarea",["",{type:"text-input",text:"Avatar Size",oninput:function(n){n=parseInt(n.substring(1,3),16).toString()+", "+parseInt(n.substring(3,5),16).toString()+", "+parseInt(n.substring(5,7),16).toString(),console.log(n),document.body.style.setProperty("--avatar-size",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--avatar-size")||"48px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Compact Userarea")}catch(t){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--avatar-size",document.body.style.getPropertyValue("--avatar-size")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=t(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default