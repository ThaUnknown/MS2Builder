parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,e,t,o,a,i){try{var d=n[a](i),p=d.value}catch(s){return void e(s)}d.done?r(p):Promise.resolve(p).then(t,o)}function r(r){return function(){var e=this,t=arguments;return new Promise(function(o,a){var i=r.apply(e,t);function d(r){n(i,o,a,d,p,"next",r)}function p(r){n(i,o,a,d,p,"throw",r)}d(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('/**\n* @name Roundrect\n* @author KawaiiZenbo#8387\n* @description starring your favorite shape\n* @version 1.5.1\n*/\n\n:root \n{\n    /* colours (only works in dark mode) */\n    --bg1: rgb(24, 28, 37);\n    --bg2: rgb(22, 26, 35);\n    --bg3: rgb(20, 24, 33);\n    --bg4: rgb(18, 22, 31);\n  \n    --avatar-shape: 20%;\n}\n\n.theme-dark\n{\n    --background-modifier-selected: var(--bg4);\n    --background-message-hover: var(--bg2);\n    --background-modifier-hover: var(--bg2);\n    --background-modifier-active: var(--bg4);\n    --background-floating: var(--bg3);\n    --elevation-low: none;\n    --scrollbar-auto-thumb: var(--bg4);\n    --scrollbar-auto-track: var(--bg1);\n    --scrollbar-thin-thumb: var(--bg4);\n    --activity-card-background: var(--bg3);\n    --background-tertiary: var(--bg4);\n    --background-secondary: var(--bg3);\n    --background-secondary-alt: var(--bg3);\n    --background-primary: var(--bg1);\n    --channeltextarea-background: var(--bg3);\n}\n\n.peopleColumn-1wMU14 \n{\n    background: var(--background-primary);\n}\n\n/* teal mentions */\n.mentioned-Tre-dv\n{\n    background-color: #0378781f !important;\n}\n\n.mentioned-Tre-dv:hover\n{\n    background-color: #03787810 !important;\n}\n\ndiv[class*="mentioned"]::before \n{\n    width: 4px;\n    background-color: #037878;\n}\n  \ndiv[class*="mentioned"] \n{\n    border-radius: 0px 20px 20px 0px;\n}\n\n/* remove stupid shit/shit i keep clicking on on accident >:( */\ndiv.iconWrapper-2awDjA.clickable-ZD7xvu[aria-label="Help"],\n.wordmarkWindows-2dq6rw,\ndiv[id="user-context-invite-to-server"],\ndiv[id="user-context-call"],\n.guildIconContainer-2FW_iA \n{\n    display: none !important;\n}\n\n/* make image attachments all the way square */\n.imageWrapper-oMkQl4 \n{\n    border-radius: 0;\n}\n\n/* nicer buttons */\n.winButtonClose-3Q8ZH5 \n{\n    height: 20px;\n    width: 20px;\n    border-radius: 15%;\n    right: 1px;\n    top: -3px;\n}\n  \n.winButtonMinMax-3RsPUg:nth-child(3) \n{\n    height: 20px;\n    width: 20px;\n    border-radius: 15%;\n    right: 3px;\n    top: -3px;\n}\n  \n.winButtonMinMax-3RsPUg:nth-child(4) \n{\n    height: 20px;\n    width: 20px;\n    border-radius: 15%;\n    right: 5px;\n    top: -3px;\n}\n\n/* reorder top bar */\n.searchBar-jGtisZ\n{\n    width: 210px;\n}\n\n.iconWrapper-2awDjA \n{\n    order: -1;\n}\n\n/* remove that weird curve near the top left on windows */\n.platform-win .sidebar-1tnWFu \n{\n    border-radius: 0 0 0 0;\n}\n\n/* settings wide */\n.contentRegion-3HkfJJ \n{\n    flex: 1 1 100%;\n}\n  \n.contentColumn-1C7as6,\n.customColumn-2n-oKU,\n.sidebarScrollable-2mW9Ls+.content-2ssVKB,\n.customScroller-m1-jZn>div \n{\n    max-width: 95%;\n}\n  \n.sidebar-nqHbhN \n{\n    padding: 60px 0 35px 50px;\n    width: 260px;\n}\n  \n.sidebar-nqHbhN>div>.item-3XjbnG,\n#bd-settings-sidebar .ui-tab-bar-item \n{\n    padding: 8px 0 8px 10px;\n    margin-bottom: 0;\n    border-radius: 5px 0 0 5px;\n}\n\n/* role indicators on user profile */\n.role-2TIOKu \n{\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    border: solid;\n    border-width: 0px 0px 0px 2px;\n    border-radius: 0px 12px 12px 0px;\n}\n\n.roleCircle-1EgnFN \n{\n    width: 5 !important;\n    height: 5 !important;\n}\n\n.roleCircle-1EgnFN::before \n{\n    position: absolute;\n    content: "";\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    background: inherit;\n    opacity: 0.3;\n    z-index: -1;\n}\n\n/* server channels */\n.content-1gYQeQ \n{\n    background-color: var(--background-tertiary);\n    border-style: solid;\n    border-color: #666666;\n    border-width: 0px 0px 0px 4px;\n    border-radius: 0px 25px 25px 0px;\n}\n\n.unread-36eUEm \n{\n    z-index: 1;\n    position: absolute;\n    height: 32px;\n    width: 4px;\n    border-radius: 0 0 0 0;\n    top: 1px;\n    left: 8px;\n    margin-top: 0px;\n}\n\n/* message text box */\n.scrollableContainer-15eg7h \n{\n    border: solid;\n    border-color: var(--background-tertiary);\n    border-width: 0px 0px 0px 4px;\n    border-radius: 0px 25px 25px 0px;\n}\n\n/* status indicators that are broken for no reason sometimes */\n.svg-2azL_l rect \n{\n  mask: var(--avatar-shape);\n  stroke-width: 2px;\n  stroke: var(--channeltextarea-background);\n}\n\n/* embed round on one side */\n.embedFull-1HGV2S \n{\n  border-radius: 0px 20px 20px 0px;\n}\n\n/* shamelessly stolen from serenade https://github.com/b4skyx/discord-serenade */\n[class^="lowerBadge-"]>[class^="numberBadge"] \n{\n    border-radius: var(--avatar-shape);\n}\n  \n:root .wrapper-1VLyxH foreignObject,\n:root .callAvatarMask-fiNMWy foreignObject,\n:root .avatarContainer-gPrCzX foreignObject,\n:root .avatarMasked-qX7NI7\n{\n    mask: none;\n    -webkit-mask: none;\n}\n  \n:root .wrapper-1VLyxH,\n:root .avatar-2e8lTP,\n:root .profile-1o7I_1 .avatarUploaderInner-yEhTv5,\n:root .voiceAvatar-lRbblo,\n:root .avatar-3FKimL,\n:root .border-2BJQjd,\n:root .avatar-3TrM7c,\n:root .clickableAvatar-igrb2Y,\n:root .emptyUser-2FDCJv,\n:root .avatar-b5OQ1N,\n:root .wrapper-3mYmFS.ringingIncoming-fibTw-::after,\n:root .wrapper-3mYmFS.ringingOutgoing-1NjfRn::after,\n:root .replyAvatar-sHd2sU,\n:root .avatarSpeaking-33RRJU,\n:root .avatar-2EVtgZ,\n:root .avatarContainer-3tBLDx,\n:root .appAvatar-2_lufo \n{\n    border-radius: var(--avatar-shape);\n}\n  \n:root .wrapper-28eC3z foreignObject \n{\n    mask: none;\n    -webkit-mask: none;\n}\n  \n:root .wrapperSimple-Js2rIO\n{\n    overflow: visible;\n}\n  \n:root .wrapperSimple-Js2rIO,\n:root .wrapper-28eC3z foreignObject,\n:root .folderIconWrapper-226oVY,\n:root .folderIconWrapper-1_bOZe,\n:root .expandedFolderBackground-2sPsd-,\n:root .flexChild-3PzYmX .avatarUploaderInner-yEhTv5 \n{\n    border-radius: var(--avatar-shape);\n}\n  \n:root .iconInactive-26M06U \n{\n    border-radius: var(--avatar-shape);\n}\n  \n:root .wrapper-28eC3z foreignObject:hover foreignObject \n{\n    border-radius: var(--avatar-shape);\n}\n  \n.avatarHint-k7pYop foreignObject:not(.avatarHintInner-2HUAWj) \n{\n    mask: unset !important;\n}\n  \n/* end of skid */\n\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Roundrect",["",{type:"text-and-color",text:"Bg1",oninput:function(n){document.body.style.setProperty("--bg1",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--bg1")||"rgb(24, 28, 37)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Bg2",oninput:function(n){document.body.style.setProperty("--bg2",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--bg2")||"rgb(22, 26, 35)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Bg3",oninput:function(n){document.body.style.setProperty("--bg3",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--bg3")||"rgb(20, 24, 33)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Bg4",oninput:function(n){document.body.style.setProperty("--bg4",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--bg4")||"rgb(18, 22, 31)";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"Avatar Shape",oninput:function(n){document.body.style.setProperty("--avatar-shape",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--avatar-shape")||"20%";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Roundrect")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--bg1",document.body.style.getPropertyValue("--bg1")],["--bg2",document.body.style.getPropertyValue("--bg2")],["--bg3",document.body.style.getPropertyValue("--bg3")],["--bg4",document.body.style.getPropertyValue("--bg4")],["--avatar-shape",document.body.style.getPropertyValue("--avatar-shape")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=t;
},{}]},{},["index.js"], null);parcelRequire('index.js').default