parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,t,o,e,r,i,a){try{var p=n[i](a),c=p.value}catch(s){return void o(s)}p.done?t(c):Promise.resolve(c).then(e,r)}function t(t){return function(){var o=this,e=arguments;return new Promise(function(r,i){var a=t.apply(o,e);function p(t){n(a,r,i,p,c,"next",t)}function c(t){n(a,r,i,p,c,"throw",t)}p(void 0)})}}var o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={goosemodHandlers:{onImport:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=document.createElement("style"),document.head.appendChild(o),o.appendChild(document.createTextNode('\n/* -- Layout -- */\n.layer-3QrUeG {\n    background-color: var(--background-tertiary) !important;\n}\n.wrapper-1Rf91z {\n    width: 127px;\n    overflow: visible;\n}\n.tree-3tCaw8 {\n    outline: none !important;\n}\n.tree-3tCaw8::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 57px;\n    bottom: 0;\n    width: 80px;\n    display: flex;\n    z-index: 0;\n    background-color: var(--background-secondary-alt);\n    border-top-left-radius: 8px;\n    pointer-events: none;\n}\n.scroller-2TZvBN {\n    background: none !important;\n    padding-left: 56.5px;\n}\n.unreadMentionsIndicatorBottom-BXS58x, .unreadMentionsIndicatorTop-gA6RCh {\n    left: 55.5px;\n}\n\n.base-3dtUhz {\n    left: 127px;\n}\n\n/* Chatbar */\n.form-2fGMdU {\n    padding-left: 16px !important;\n}\n\n/* -- Buttons -- */\n/* Home Button */\n.tutorialContainer-1v44GL {\n    position: sticky;\n    top: 0;\n    margin-left: -57px !important;\n    margin-right: 70px !important;\n    margin-top: 0 !important;\n    padding-top: 0 !important;\n    margin-bottom: -48px;\n    z-index: 100;\n}\n.tutorialContainer-1v44GL .listItem-2P_4kh {\n    width: 57px;\n}\n.tutorialContainer-1v44GL .childWrapper-anI2G9, .tutorialContainer-1v44GL .childWrapper-anI2G9:hover {\n    background: none !important;\n}\n\n\n/* Avatar */\n.avatarWrapper-2yR4wp {\n    position: fixed;\n    bottom: 15px;\n    left: 8px;\n    width: 52px;\n    height: 41px;\n}\n.avatarWrapper-2yR4wp .avatar-SmRMf2 {\n    width: 41px !important;\n    height: 41px !important;\n}\n.avatarWrapper-2yR4wp .avatar-SmRMf2 foreignObject {\n    mask: none !important;\n    border-radius: 8px;\n}\n\n/* VC Buttons */\n.container-3baos1 .directionRow-3v3tfG {\n    position: fixed !important;\n    left: 8px !important;\n    bottom: 65px !important;\n    display: flex !important;\n    filter: none !important;\n    \n    flex-direction: column !important;\n    width: 41px !important;\n    height: auto !important;\n    background: none !important;\n    align-items: center !important;\n\n    padding-left: 0 !important;\n}\n.container-3baos1 .directionRow-3v3tfG button {\n    width: 41px !important;\n    height: 41px !important;\n    margin: 2px 0 !important;\n}\n.container-3baos1 .directionRow-3v3tfG button svg {\n    width: 24px !important;\n    height: 24px !important;\n}\n\n\n/* Display Name & Status */\n.container-3baos1 {\n    position: absolute;\n    z-index: 100;\n}\n.container-3baos1 .nameTag-3uD-yy {\n    position: fixed;\n    left: 60px;\n    bottom: 8px;\n    display: block !important;\n    \n    background-color: black;\n    padding: 10px 15px;\n    border-radius: 8px;\n    z-index: 100;\n    transform: scale(.95) translateX(-5px);\n    filter: opacity(0);\n    pointer-events: none;\n    box-shadow: var(--elevation-high);\n    transition: transform .1s, filter .1s;\n}\n.container-3baos1 .nameTag-3uD-yy::before {\n    content: "";\n    border: 5px solid transparent;\n    border-right-color: black;\n    width: 0;\n    height: 0;\n    position: absolute;\n    right: 100%;\n    margin-top: -5px;\n    top: 50%;\n}\n.avatarWrapper-2yR4wp:hover + .nameTag-3uD-yy, .nameTag-3uD-yy:hover {\n    transform: none;\n    filter: opacity(1);\n    pointer-events: all;\n}\n\n\n/* Action Buttons */\n.actionButtons-14eAc_ {\n    position: fixed;\n    left: 8px;\n    bottom: 202px;\n    \n    width: 41px;\n    \n    flex-direction: column;\n}\n.actionButtons-14eAc_ div, .actionButtons-14eAc_ span {\n    display: contents;\n    flex: none;\n}\n.actionButtons-14eAc_ button {\n    padding: 0;\n    margin: 0;\n    width: 41px;\n    height: 41px;\n    margin: 2px 0;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    background: none !important;\n}\n.actionButtons-14eAc_ button:hover {\n    background: var(--background-modifier-selected) !important;\n}\n.actionButtons-14eAc_ button svg {\n    width: 24px !important;\n    height: 24px !important;\n}\n.actionButtons-14eAc_ svg {\n    margin: 0 !important;\n}\n.actionButtons-14eAc_ .contents-18-Yxp > div {\n    font-size: 0;\n}\n\n/* Disconnect Button */\n.container-1giJp5 {\n    position: fixed;\n    left: 8px;\n    bottom: 374px;\n    padding: 0;\n    width: 52px;\n    height: auto;\n    margin-bottom: -82px;\n    \n    border: none;\n    z-index: 100;\n}\n.container-1giJp5 .inner-tyMogq {\n    position: fixed;\n    left: 60px;\n    bottom: 246px;\n    \n    height: min-content !important;\n    background-color: black;\n    padding: 10px 15px;\n    border-radius: 8px;\n    z-index: 100;\n    transform: scale(.95) translateX(-5px);\n    filter: opacity(0);\n    pointer-events: none;\n    box-shadow: var(--elevation-high);\n    transition: transform .1s, filter .1s;\n}\n.container-1giJp5 .inner-tyMogq::before {\n    content: "";\n    border: 5px solid transparent;\n    border-right-color: black;\n    width: 0;\n    height: 0;\n    position: absolute;\n    right: 100%;\n    margin-top: -5px;\n    top: 50%;\n}\n.container-1giJp5:hover .inner-tyMogq {\n    transform: none;\n    filter: opacity(1);\n    pointer-events: all;\n}\n\n.container-1giJp5 .horizontal-1ae9ci {\n    margin: 0;\n    width: 41px;\n    height: auto !important;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.container-1giJp5 .horizontal-1ae9ci button:not(.statusWithPopout-3ZfFol) {\n    width: 100%;\n    height: 40px;\n    margin: 2px 0;\n}\n.container-1giJp5 .horizontal-1ae9ci button:not(.statusWithPopout-3ZfFol) svg {\n    width: 24px !important;\n    height: 24px !important;\n}\n.container-1giJp5 .horizontal-1ae9ci button[aria-label="Disconnect"] svg {\n    color: #f04747;\n}\n\n\n/* Inbox Button */\n.iconWrapper-2OrFZ1[aria-label="Inbox"] {\n    position: fixed;\n    left: 4px;\n    top: 75px;\n    width: 48px;\n    height: 48px;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.iconWrapper-2OrFZ1[aria-label="Inbox"] .icon-22AiRD {\n    width: 30px;\n    height: 30px;\n    color: var(--text-normal);\n}\n.iconWrapper-2OrFZ1[aria-label="Inbox"]:hover .icon-22AiRD {\n    color: white;\n    background: none !important;\n}\n.recentMentionsPopout-3rCiI6 {\n    position: fixed;\n    left: 68px !important;\n    top: 32px !important;\n    bottom: 10px !important;\n    border-radius: 10px !important;\n    box-shadow: var(--elevation-high) !important;\n}\n\n/* Nitro Gift Button */\n.buttons-3JBrkn > button:first-child {\n    position: fixed;\n    top: 135px;\n    left: 4px;\n    display: unset !important;\n    width: 48px;\n} .buttons-3JBrkn > button:first-child svg {\n    width: 30px;\n    height: 30px;\n}\n\n/* -- POPUPS -- */\n.noiseCancellationPopout-iRK2A0 {\n    position: fixed;\n    left: 38px;\n}\n')),goosemodScope.settings.gmSettings.allThemeSettings&&goosemodScope.settings.createItem("Another Sidebar",[""]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o.remove();try{goosemodScope.settings.removeItem("Another Sidebar")}catch(t){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=t(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}};exports.default=e;
},{}]},{},["index.js"], null);parcelRequire('index.js').default