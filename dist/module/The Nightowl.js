parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,n,t,o,r,a,i){try{var _=e[a](i),c=_.value}catch(l){return void t(l)}_.done?n(c):Promise.resolve(c).then(o,r)}function n(n){return function(){var t=this,o=arguments;return new Promise(function(r,a){var i=n.apply(t,o);function _(n){e(i,r,a,_,c,"next",n)}function c(n){e(i,r,a,_,c,"throw",n)}_(void 0)})}}var t;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={goosemodHandlers:{onImport:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("style"),document.head.appendChild(t),t.appendChild(document.createTextNode('/*\n _________  ___  ___  _______           ________   ___  ________  ___  ___  _________  ________  ___       __   ___\n|\\___   ___\\\\  \\|\\  \\|\\  ___ \\         |\\   ___  \\|\\  \\|\\   ____\\|\\  \\|\\  \\|\\___   ___\\\\   __  \\|\\  \\     |\\  \\|\\  \\|___ \\  \\_\\ \\  \\\\\\  \\ \\   __/|        \\ \\  \\\\ \\  \\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\    \\ \\  \\ \\       \\ \\  \\ \\ \\   __  \\ \\  \\_|/__       \\ \\  \\\\ \\  \\ \\  \\ \\  \\  __\\ \\   __  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\  __\\ \\  \\ \\        \\ \\  \\ \\ \\  \\ \\  \\ \\  \\_|\\ \\       \\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\|\\__\\_\\  \\ \\  \\____\n       \\ \\__\\ \\ \\__\\ \\__\\ \\_______\\       \\ \\__\\\\ \\__\\ \\__\\ \\_______\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\____________\\ \\_______        \\|__|  \\|__|\\|__|\\|_______|        \\|__| \\|__|\\|__|\\|_______|\\|__|\\|__|    \\|__|  \\|_______|\\|____________|\\|_______|\n         The nightowl brings ease to your eyes in the night.\n          Made by Kreato\n           This theme is licensed under LGPL.\n*/\n/* Configure The Nightowl here */\n/* Set your colors here. */\n@import url("https://Goose-Nest.github.io/GT-RevertRebrand/src/main.css");\n:root {\n  --bgcolor3: #1a1a1a;\n  --background-primary: black;\n  --background-secondary: #0f0f0f;\n}\n\n.cozy-3raOZG:hover {\n  background-color: #111 !important;\n}\n\n.autocomplete-1vrmpx {\n  background-color: #111 !important;\n}\n\n.expandedFolderBackground-1cujaW {\n  background-color: #1c1c1c;\n}\n\ncanvas[class^=lottieCanvas-] {\n  display: none;\n}\n\n#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div > div.chat-3bRxxu > section > div.toolbar-1t6TWx > a > div {\n  display: none;\n}\n\n/* From yellowsink */\n/*\n*:not(code):not(span):not(td):not(.vz-code-block-inner):not(.view-lines) {\n    font-family: "Roboto" !important;\n}\n*/\ncode, .inlineCode-2ngu6Y, code *, .view-lines * {\n  font-family: "Jetbrains Mono" !important;\n}\n\n.noChannel-3LgMRp.peopleListItem-2nzedh, .nowPlayingColumn-2sl4cE, .peopleListItem-2nzedh, .button-1PXUl0.button-38aScr.lookInverted-2D7oAl.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN, .member-3-YXUe, .vz-dashboard-section.vz-dashboard-home-section-features, .vz-wave-divider-svg-path, .scroller-1d5FgU.vz-dashboard-scroller.auto-Ge5KZx.scrollerBase-289Jih {\n  background-color: var(--background-primary);\n}\n\n#app-mount > div:nth-child(6) > div.modal-3c3bKg > div > div > div.topSectionNormal-2-vo2m > div, .tabBar-2MuP6-.top-28JiJ-, .activity-1ythUs, .activityUserPopout-2yItg2.activity-fViXj7.newPopoutActivityStyles, .fieldList-21DyL8, .headerTop-2y3V6H, .body-3iLsc4.thin-1ybCId.scrollerBase-289Jih.fade-2kXiP2, .scroller-2hZ97C.thin-1ybCId.scrollerBase-289Jih, .vz-updater-top-section-header, .emptyChannelIcon-cc932w, .section-2gLsgF, .codeRedemptionRedirect-1wVR4b.card-3Qj_Yx, .content-1LAB8Z.container-1_ClKi.content-s2SEQO.thin-1ybCId.scrollerBase-289Jih, .flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.paymentRowHeader-2sfDdN, .flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyCenter-3D2jYp.alignCenter-1dQNNs.noWrap-3jynv6.headerTop-3C2Zn0, .flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.enableContainer-6E-puu, .activityUserPopout-2yItg2.activity-11LB_k, .paymentRow-2e7VM6.bottomDivider-1K9Gao, .content-1LAB8Z.thin-1ybCId.scrollerBase-289Jih, .footer-3mqk7D.hasSpoilers-1IRtQC, .vz-addon-card-content, .vz-sticky.vz-addons-list-sticky-bar, .topSectionPlaying-1J5E4n, .header-2Y0-A-, .upsellFooter-ZYsio_, .header-ykumBX, .header-QKLPzZ, .flex-1xMQg5.flex-1O1GKY.vertical-V37hAW.flex-1O1GKY.directionColumn-35P_nr.justifyCenter-3D2jYp.alignCenter-1dQNNs.noWrap-3jynv6.headerTop-3C2Zn0 {\n  background-color: var(--bgcolor3);\n}\n\n.panel-24C3ux.activityPanel-28dQGo, .container-1giJp5, .invite-18yqGF.container-o3RxSG, .description-1RsfgZ, .vz-commands-autocomplete.autocomplete-1vrmpx.autocomplete-3l_oCd, .scroller-1Bvpku.none-2Eo-qx.scrollerBase-289Jih, .scroller-3BxosC.thin-1ybCId.scrollerBase-289Jih, .form-2fGMdU, .flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.emojiSection-3Fb9ix, .circleIconButton-1QV--U, .feature-2w65J5.featureEmoji-3pTtR2, .scrollableContainer-2NUZem.webkit-HjD9Er, .flex-1xMQg5.flex-1O1GKY.horizontalReverse-2eTKWD.horizontalReverse-3tRjY7.flex-1O1GKY.directionRowReverse-m8IjIq.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.footer-2gL1pp, .flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.footer-2gL1pp, flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignCenter-1dQNNs.noWrap-3jynv6.header-1TKi98, .shinyButton-3uFlM-.button-1PXUl0.button-38aScr.lookInverted-2D7oAl.colorBrand-3pXr91.sizeMedium-1AC_Sl.grow-q77ONN, .itemCard-v9viV7.wrapper-3D2qGf.outer-1AjyKL.padded-302COx.interactive-3B9GmY, .privateChannelsHeaderContainer-3NB1K1.container-2ax-kl, .container-3baos1, .feature-2w65J5.featureBadge-3ZA-Ca, .pageActions-1SVAnA, .feature-2w65J5.featurePremiumGuild-2KpCr6, .feature-2w65J5.featureBadge-3ZA-Ca, .feature-2w65J5.featureGoLive-30cvVw, .feature-2w65J5.featureProfile-tTo0C-, .feature-2w65J5.featureUploadSize-2CAVFL {\n  background-color: var(--background-secondary);\n}\n\n/* importants */\n.tabBarContainer-1s1u-z, .childWrapper-anI2G9, .autocompleteRowVertical-q1K4ky.autocompleteRow-2OthDa {\n  background-color: var(---background-secondary) !important;\n}\n\n.container-1D34oG, .form-2fGMdU, .title-30qZAO.container-2ax-kl, .popout_29539 {\n  background-color: var(--background-primary) !important;\n}\n\n.footer-1fjuF6 {\n  background-color: var(--bgcolor3) !important;\n}\n\n.inner-3nWsbo {\n  background-color: var(--bgcolor3);\n  margin: 0px !important;\n}\n\n.profile-1eT9hT .field-1HUseB > :last-child span {\n  display: none !important;\n}\n\n/* others */\n.members-1998pB, .members-1998pB > div {\n  background: black;\n}\n\n.layout-2DM8Md {\n  fill: transparent;\n}\n\n.mainContent-2h-GEV::before, .form-2fGMdU::before, .guildSeparator-33mFX6, .children-19S4PO::after, .content-3YMskv::before, .unreadBottom-1_LF_w.unread-15xhX5.container-35XQWE, .icon-3N9Bhy, .anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB.twitterLink-3NsWMp.links-3Ldd4A, .anchor-3Z-8Bb.anchorUnderlineOnHover-2ESHQB.statusLink-gFXhrL.links-3Ldd4A {\n  display: none;\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("The Nightowl",["",{type:"text-and-color",text:"Bgcolor3",oninput:function(e){document.body.style.setProperty("--bgcolor3",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--bgcolor3")||"#1a1a1a";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.remove();try{goosemodScope.settings.removeItem("The Nightowl")}catch(n){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=n(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--bgcolor3",document.body.style.getPropertyValue("--bgcolor3")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=n(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()}};exports.default=o;
},{}]},{},["index.js"], null);parcelRequire('index.js').default