parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,e,a,t,o,i){try{var l=n[o](i),c=l.value}catch(u){return void e(u)}l.done?r(c):Promise.resolve(c).then(a,t)}function r(r){return function(){var e=this,a=arguments;return new Promise(function(t,o){var i=r.apply(e,a);function l(r){n(i,t,o,l,c,"next",r)}function c(r){n(i,t,o,l,c,"throw",r)}l(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('/* Dracula theme + modifications C69 made */\n\n/* Fira Code font itself */\n@import url(\'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap\');\n\n\n:root {\n  /* Dracula Colors */\n  --dracula-background: #282a36 !important;\n  --dracula-current-line: #44475a !important;\n  --dracula-selection: #44475a !important;\n  --dracula-foreground: #f8f8f2 !important;\n  --dracula-comment: #6272a4 !important;\n  --dracula-cyan: #8be9fd !important;\n  --dracula-green: #50fa7b !important;\n  --dracula-orange: #ffb86c !important;\n  --dracula-pink: #ff79c6 !important;\n  --dracula-purple: #bd93f9 !important;\n  --dracula-red: #ff5555 !important;\n  --dracula-yellow: #f1fa8c !important;\n  /* Discord Root Colors */\n  --background-primary: var(--dracula-background) !important;\n  --background-secondary: var(--dracula-background) !important;\n  --background-secondary-alt: var(--dracula-background) !important;\n  --background-tertiary: var(--dracula-background) !important;\n  --background-accent: var(--dracula-current-line) !important;\n  --background-floating: var(--dracula-background) !important;\n  --activity-card-background: var(--dracula-background) !important;\n  --interactive-normal: var(--dracula-foreground) !important;\n  --channeltextarea-background: var(--dracula-selection) !important;\n  --rs-online-color: var(--dracula-green) !important;\n  --rs-idle-color: var(--dracula-orange) !important;\n  --rs-dnd-color: var(--dracula-red) !important;\n  --rs-offline-color: var(--dracula-selection) !important;\n  --rs-streaming-color: var(--dracula-purple) !important;\n  --rs-invisible-color: var(--dracula-comment) !important;\n  --interactive-muted: var(--dracula-comment) !important;\n}\n\n.da-acronym {\n  --background-primary: var(--dracula-selection) !important;\n}\n\n.da-repliedMessage {\n    --background-accent: var(--dracula-selection) !important;\n}\n\n.container-1D34oG.da-container {\n  background-color: var(--dracula-background) !important;\n}\n\n.wrapper-1BJsBx.selected-bZ3Lue .childWrapper-anI2G9, .wrapper-1BJsBx:hover .childWrapper-anI2G9 {\n  background-color: var(--dracula-selection) !important\n}\n\n.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {\n  background-color: var(--dracula-selection) !important;\n  border: 4px solid var(--dracula-background) !important;\n  border-radius: 8px !important;\n}\n\n/* Syntax Highlighing in Code Blocks*/\ncode {\n  color: var(--dracula-foreground) !important\n}\nspan.hljs-built_in {\n  color: var(--dracula-purple) !important;\n}\nspan.hljs-keyword {\n  color: var(--dracula-pink) !important;\n}\nspan.hljs-title {\n  color: var(--dracula-cyan) !important;\n}\nspan.hljs-attr {\n  color: var(--dracula-foreground) !important;\n}\nspan.hljs-string {\n  color: var(--dracula-yellow) !important;\n}\nspan.hljs-number {\n  color: var(--dracula-purple) !important;\n}\nspan.hljs-symbol {\n  color: var(--dracula-orange) !important;\n}\nspan.hljs-meta {\n  color: var(--dracula-foreground) !important;\n}\nspan.hljs-meta-keyword {\n  color: var(--dracula-pink) !important;\n}\nspan.hljs-meta-string {\n  color: var(--dracula-orange) !important;\n}\n\n/* Extra Shizz */\n\n* {\n  font-family: "Fira Code" !important;\n}\n\n.unread-1xRYoj {\n\tcolor: var(--dracula-green);\n}\n\n.closeButton-1tv5uR {\n  color: var(--dracula-purple);\n}\n\n.name-uJV0GL {\n  color: var(--dracula-purple);\n}\n\n.defaultColor-1_ajX0 {\n  color: var(--dracula-purple);\n}\n\n.item-2kk8m {\n  color: var(--dracula-pink);\n}\n\n.name-1jkAdW {\n  color: var(--dracula-foreground);\n}\n\n.item-PXvHYJ.themed-OHr7kt {\n  color: var(--dracula-foreground);\n}\n\n.homeIcon-FuNwkv {\n  color: var(--dracula-foreground);\n\n}\n\n.bodyInnerWrapper-Z8WDxe {\n  color: var(--dracula-foreground);\n}\n\n.label-22pbtT {\n  color: var(--dracula-purple);\n}\n\n.username-1A8OIy, .roleColor-rz2vM0 {\n  filter: brightness(100%);\n}\n\n/* Status Colours (thanks DoggyBootsy for making it) */\n\n[mask^="url(#svg-mask-status-online"] {\n  fill: var(--dracula-green);\n}\n[mask^="url(#svg-mask-status-idle"] {\n  fill: var(--dracula-orange);\n}\n[mask^="url(#svg-mask-status-dnd"] {\n  fill: var(--dracula-red);\n}\n[mask^="url(#svg-mask-status-streaming"] {\n  fill: var(--dracula-purple);\n}\n[mask^="url(#svg-mask-status-offline"] {\n  fill: rgb(116, 127, 141);\n}\n\n/* Garbage that am not gonna fix - C69\n\nIDFK what is this but meh:\n\n.side-8zPYf6 {\n  color: var(--dracula-purple);\n}\n\n.body-3iLsc4 {\n  color: var(--dracula-selection);\n}\n\n*/\n\n/* Status Scrollbar by Mackenzie */\n.root-SR8cQa .activity-1ythUs {\n  overflow: auto;\n}\n.root-SR8cQa .activity-1ythUs::-webkit-scrollbar {\n  height: 5px;\n}\n.root-SR8cQa .activity-1ythUs::-webkit-scrollbar-track {\n  border-radius: 4px;\n  margin-left: 18px;\n  margin-right: 18px;\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.root-SR8cQa .activity-1ythUs::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: var(--header-secondary);\n}\n\n/* Remove the text from the server popup (say Server Boost, Server Settings, etc) by Doggyboostsy */\n#guild-header-popout {\n  width: fit-content;\n}\n#guild-header-popout .scroller-3BxosC, #guild-header-popout [role="group"] {\n  display: flex;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n#guild-header-popout .scroller-3BxosC .item-1tOPte, #guild-header-popout [role="group"] .item-1tOPte {\n  width: 32px;\n}\n#guild-header-popout .scroller-3BxosC .iconContainer-2-XQPY, #guild-header-popout [role="group"] .iconContainer-2-XQPY {\n  margin: 0;\n  transform: translate(-1px,0);\n}\n#guild-header-popout .scroller-3BxosC .label-22pbtT, #guild-header-popout [role="group"] .label-22pbtT {\n  display: none;\n}\n\n/* Replace the black/gray colour of popups by KayoticCarnige and colour changed by C69 */\n/* Popup Thing :p */\n:root {\n    --popup-color: #bd93f9\n}\n\n.tooltipPrimary-1d1ph4 {\n    background: var(--popup-color) !important;\n}\n\n.tooltipPointer-3ZfirK {\n    border-top-color: var(--popup-color) !important;\n}\n/* Cooler message buttons by Mackenzie */\n.message-2qnXI6 .wrapper-2aW0bm .button-1ZiXG9 {\n  margin: 0 2px;\n  border-radius: 5px;\n  background-color: var(--background-tertiary);\n}\n\n.message-2qnXI6 .wrapper-2aW0bm .button-1ZiXG9:hover {\n  background-color: var(--background-modifier-selected);\n}\n\n/* Mute icon + text in servers that you\'re muted by Pukima */\n.muteText-gutGxh {\n  color:var(--dracula-red);\n  margin-top: 3px;\n  margin-left: 1.5px;\n  background: url(\'https://svgur.com/i/W9K.svg\') no-repeat;\n  background-size: 23px;\n}\n\n.muteText-gutGxh::before {\n  content: "‎‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‏‏‎ ‎‏‏‏‏‎ ‎‎‏‏‎ ‎";\n}\n\n/* Modern Profile Pop-ups by andr0id*/\n.protip-YaFfgO {\n  display: none;\n}\n.headerText-2sdzFM {\n  display: block;\n  position: relative;\n  left: 50px;\n  bottom: 65px;\n  max-height: 0px;\n  max-width: 125px;\n}\n.avatarWrapper-3H_478 {\n  right: 65px;\n  padding: 2px;\n}\n.headerTagWithNickname-3IthZD {\n  max-width: 115px;\n}\n.px-10SIf7.botTag-2WPJ74{\n  background-color: rgba(255, 255, 255, 0.438);\n}\n.customStatus-1bh2V9{\n  margin-top: 0px !important;\n}\n.avatarHint-1qgaV3 {\n  right: 65px;\n  padding: 2px;\n}\n/* Cooler Mentions by andr0id*/\n.wrapper-3WhCwL {\n  color: white;\n  background-color: #2b2b2b;\n  padding-left: 6px;\n  padding-right: 6px;\n  transition: 0.5s;\n}\n.wrapper-3WhCwL:hover {\n  background-color: #0f0f0f;\n  transition: 0.5s;\n}\n\n/* Resizing the Emoji and making it large */\n.emojiSection-3Fb9ix img {\n  margin: auto;\n  min-width: 80%;\n  height: auto !important;\n}\n/* Resizing the Emoji and making it large End */\n\n/* Text Wrapping */\n.emojiSection-3Fb9ix > .noWrap-3jynv6, .emojiSection-3Fb9ix{\n  flex: wrap;\n  flex-direction: column !important;\n}\n/* Text Wrapping End */\n\n/* Adjusting the text weight and aligning it to center */\n.emojiName-27Bjxw {\n  font-weight: 600;\n  margin-top: 8px;\n  text-align: center;\n}\n/* Adjusting the text weight and aligning it to center End */\n/* Show date of edits by DoggyBootsy */\n.cozyMessage-3V1Y8y:not(.systemMessage-1I9LCe) .markup-2BOw-j .timestampInline-yHQ6fX>[aria-label]::after{\n  content:"-(" attr(aria-label) ")";\n  font-size: 0.625rem;\n  font-weight: 400;\n  line-height: 1;\n}\n\n/* Make Emote preview thingys bigger by Awish */\n/* Resizing the Emoji and making it large */\n.emojiSection-3Fb9ix img {\n  margin: auto;\n  min-width: 80%;\n  height: auto !important;\n}\n/* Resizing the Emoji and making it large End */\n\n/* Text Wrapping */\n.emojiSection-3Fb9ix > .noWrap-3jynv6, .emojiSection-3Fb9ix{\n  flex: wrap;\n  flex-direction: column !important;\n}\n/* Text Wrapping End */\n\n/* Adjusting the text weight and aligning it to center */\n.emojiName-27Bjxw {\n  font-weight: 600;\n  margin-top: 8px;\n  text-align: center;\n}\n\n/* Remove inventory/nitro/stage text */\n#private-channels > [class*="content-"] {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]) {\n    flex-grow: 1;\n    margin-top: 8px !important;\n    margin-left: 0;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]):first-of-type {\n    margin-left: 8px !important;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]) [class*="layout-"] {\n    justify-content: center;\n    padding: 0 !important;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]) [class*="avatar-"] {\n    margin: 0 !important;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]) [class*="content-"] {\n    display: none;\n}\n#private-channels > [class*="content-"] > a:not([href*="/channels/@me/"]) [class*="children-"] {\n    position: absolute;\n    transform: translate(4px, 8px);\n    box-shadow: 0 0 0 3px var(--background-secondary);\n    border-radius: 100px;\n}\n#private-channels > [class*="content-"] > h2 {\n    width: 100%;\n}\n#private-channels > [class*="content-"] > a[href*="/channels/@me/"] {\n    width: 100%;\n}\n\n/*http link as red*/\n\na[href^="http://"] {\n  color: var(--dracula-red);\n}\n\n/*https link as red*/\n\na[href^="https://"] {\n  color: var(--dracula-green);\n}\n\n/* Scrollbar for Serverlist by KayoticCarnige */\n.none-2Eo-qx {\n  scrollbar-width: auto !important;\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n  margin-right: 3px;\n}\n\n.none-2Eo-qx:hover::-webkit-scrollbar {\n  width: 0.25em !important;\n  border-radius: 25px;\n  height: 0px !important;\n  background: transparent !important;\n  \n}\n\n.none-2Eo-qx::-webkit-scrollbar-thumb {\n  background: var(--background-accent);\n  border-radius: 25px;\n}\n\n/* Remove your phone number from settings by Mackenzie */\n.accountProfileCard-1XCH88 .field-1HUseB:last-child .size16-1P40sf {\n  --no-phone-number-text: \'Nothing to see here!\';\n  color: transparent;\n}\n.accountProfileCard-1XCH88 .field-1HUseB:last-child .size16-1P40sf::before {\n  color: var(--header-primary);\n  content: var(--no-phone-number-text, \'1-800-SUSSY\');\n}\n.accountProfileCard-1XCH88 .field-1HUseB:last-child .size16-1P40sf > .lookLink-9FtZy- {\n  transform: translateX(-88px);\n}\n\n/* fix that pesky activities bug by Davri */\n.assetsLargeMaskVoiceChannel-2k1oGM {-webkit-mask-size: cover;}\n\n/* Center the emoji the status while on profile by botato */\n.customStatus-oN4ZZY > .customStatusEmoji-3a2-Zo.customStatusSoloEmoji-1tDhmL:only-child {\n    margin-right: auto;\n    margin-left: auto;\n}\n\n/* make options colored and such */\n#message-actions-pin, #message-pin, #message-unpin{\n    color: skyblue;\n}\n#message-actions-pin:hover, #message-pin:hover, #message-unpin:hover {\n    background-color: "-";\n    color: #fff;\n}\n#message-actions-reply, #message-reply {\n    color: khaki;\n}\n#message-actions-reply:hover, #message-reply:hover {\n    background-color: #c5bb5d;\n    color: #fff;\n}\n#message-actions-thread, #message-thread {\n    color: #69c069;\n}\n#message-actions-thread:hover, #message-thread:hover {\n    background-color: #5dbd5d;\n    color: #fff;\n}\n#message-actions-mark-unread, #message-mark-unread {\n    color: plum;\n}\n#message-actions-mark-unread:hover, #message-mark-unread:hover {\n    background-color: #c27ec2;\n    color: #fff;\n}\n#message-actions-copy-link, #message-copy-link {\n    color: lightseagreen;\n}\n#message-actions-copy-link:hover, #message-copy-link:hover {\n    background-color: #199c96;\n    color: #fff;\n}\n#message-actions-tts, #message-tts{\n    color: var(--brand-experiment);\n}\n#message-actions-tts:hover, #message-tts:hover{\n    background-color: var(--brand-experiment);\n    color: #fff;\n}\n#message-actions-copy-id, #message-devmode-copy-id {\n    color: lightsalmon;\n}\n#message-actions-copy-id:hover #message-devmode-copy-id:hover{\n    background-color: lightsalmon;\n    color: #fff;\n}\n#message-edit, #message-actions-edit{\n    color: steelblue;\n}\n#message-edit:hover,  #message-actions-edit:hover{\n    background-color: steelblue;\n    color: #fff;\n}\n#message-add-reaction{\n    color: goldenrod;\n}\n#message-add-reaction:hover{\n    background-color: goldenrod;\n    color: #fff;\n}\n\n/* White badges (on hover) by... uhh... how do i put your name here? */\n/* doesn\'t work that well on goosemod tho */\n.clickable-17BDii:hover,\n.powercord-badge-wrapper:hover {\n    filter: brightness(500%) !important;\n}\n\n/* nebula user popout by heckbound */\n:root {\n     --primary-rounding: 5px;\n     --primary-spacing: 10px;\n     --secondary-spacing: 20px;\n     --secondary-rounding: 10px;\n}\n .userPopout-xaxa6l {\n     background-color: var(--background-secondary-alt);\n     border-radius: var(--primary-rounding);\n}\n .userPopout-xaxa6l .headerNormal-3KXFBt {\n     margin: var(--primary-spacing);\n     margin-bottom: 0 !important;\n}\n .userPopout-xaxa6l .headerNormal-3KXFBt .banner-2QYc2d {\n     background-color: var(--background-secondary) !important;\n     border-radius: var(--primary-rounding);\n     height: 120px;\n     width: 100%;\n}\n .userPopout-xaxa6l .headerNormal-3KXFBt .bannerPremium-2hSAwz {\n     filter: brightness(0.3);\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD {\n     left: var(--secondary-spacing);\n     top: var(--secondary-spacing);\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatar-37jOim {\n     background-color: transparent;\n     border-radius: var(--primary-rounding);\n     height: 99px !important;\n     width: 90px !important;\n     border: none;\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatar-37jOim .mask-1l8v16 foreignObject {\n     mask: none;\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatar-37jOim .mask-1l8v16 foreignObject .avatar-VxgULZ {\n     background-color: var(--background-primary);\n     border-radius: var(--primary-rounding);\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatar-37jOim .mask-1l8v16 .pointerEvents-2zdfdO {\n     user-select: none !important;\n     ry: var(--primary-rounding);\n     height: 16px !important;\n     width: 16px !important;\n     mask: none;\n     x: 60;\n     y: 60;\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatarHint-2A3RNb {\n     border-radius: var(--primary-rounding);\n     height: 99px;\n     width: 99px;\n     left: 0;\n     top: 0;\n}\n .userPopout-xaxa6l .avatarWrapper-3r9PdD .avatarHint-2A3RNb foreignObject {\n     mask: none;\n}\n .userPopout-xaxa6l .headerTop-3vNv-a {\n     padding: var(--secondary-spacing) 0 0 0;\n     right: var(--primary-spacing);\n     position: absolute;\n     height: 100px;\n     width: 171px;\n}\n .userPopout-xaxa6l .headerTop-3vNv-a .profileBadges-ohc0Vu {\n     right: var(--primary-spacing);\n     top: unset;\n     bottom: 0;\n}\n .userPopout-xaxa6l .headerTop-3vNv-a .headerText-1vVs-U {\n     padding-left: var(--primary-spacing);\n}\n .userPopout-xaxa6l .body-3HBlXn {\n     background-color: var(--background-secondary);\n     border-radius: var(--primary-rounding);\n     margin: var(--primary-spacing);\n     max-height: 400px;\n     padding: 10px;\n}\n .userPopout-xaxa6l .body-3HBlXn .bodyInnerWrapper-26fQXj {\n     background-color: var(--background-tertiary);\n     border-radius: var(--primary-rounding);\n     padding: 6px;\n}\n .userPopout-xaxa6l .footer-3UKYOU {\n     background-color: var(--background-secondary);\n     border-radius: var(--primary-rounding);\n     margin: var(--primary-spacing);\n     margin-top: 0 !important;\n     padding: 16px;\n}\n\n/* extended user panel (looks amazing btw) by ADudeCalledLeo */\n/* the main bit! */\n.container-3baos1 {\n  position: fixed;\n  left: 4px;\n  top: calc(100% - 52px);\n  width: 292px;\n  background-color: var(--background-tertiary);\n}\n\n/* PATCH for scrollers above the user panel to make space */\n.guilds-1SWlCJ, /* servers */\n.sidebar-2K8pFh /* channels */ {\n  height: calc(100% - 52px);\n}\n\n/* stops community server icons from shrinking on the emoji popouts by Davri */\n.guildSection-1EoFKd > .flex-1xMQg5 > svg {\n    flex-shrink: 0;\n}\n\n/* fix the friends list colours by c69 */\n.peopleList-3c4jOR.auto-Ge5KZx.scrollerBase-289Jih {\n  color: var(--dracula-background);\n  background-color: var(--dracula-background);\n}\n\n/* fix the community section piece of by c69 */\n.scroller-1d5FgU .auto-Ge5KZx .scrollerBase-289Jih{\n  color: var(--dracula-background);\n  background-color: var(--dracula-background);\n}\n\n.div-root-1gCeng.small-3iVZYw.fullScreenOnMobile-1bD22y{\n  color: var(--dracula-background);\n  background-color: var(--dracula-background);\n}\n\n.footerButton-ayFTfX .button-38aScr{\n  color: var(--dracula-purple);\n}\n/* Thanks to everyone who contributed their CSS Snipets and Themes for this theme, ik i\'ll never be able to credit you without being cringe but hey! Atleast this footnote serves of something.... right? */\n\n/* Reminder for stuff: https://cdn.discordapp.com/attachments/278340416628326400/844623014088015912/video0.mp4*/\n\n')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Drakula",["",{type:"text-and-color",text:"Dracula Background",oninput:function(n){document.body.style.setProperty("--dracula-background",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-background")||"#282a36";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Current Line",oninput:function(n){document.body.style.setProperty("--dracula-current-line",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-current-line")||"#44475a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Selection",oninput:function(n){document.body.style.setProperty("--dracula-selection",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-selection")||"#44475a";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Foreground",oninput:function(n){document.body.style.setProperty("--dracula-foreground",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-foreground")||"#f8f8f2";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Comment",oninput:function(n){document.body.style.setProperty("--dracula-comment",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-comment")||"#6272a4";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Cyan",oninput:function(n){document.body.style.setProperty("--dracula-cyan",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-cyan")||"#8be9fd";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Green",oninput:function(n){document.body.style.setProperty("--dracula-green",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-green")||"#50fa7b";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Orange",oninput:function(n){document.body.style.setProperty("--dracula-orange",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-orange")||"#ffb86c";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Pink",oninput:function(n){document.body.style.setProperty("--dracula-pink",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-pink")||"#ff79c6";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Purple",oninput:function(n){document.body.style.setProperty("--dracula-purple",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-purple")||"#bd93f9";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Red",oninput:function(n){document.body.style.setProperty("--dracula-red",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-red")||"#ff5555";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-and-color",text:"Dracula Yellow",oninput:function(n){document.body.style.setProperty("--dracula-yellow",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--dracula-yellow")||"#f1fa8c";return"#"!==n[0]&&(n="#"+n.split(", ").map(function(n){return parseInt(n).toString(16).padStart(2,"0")}).join("")),console.log(n),n}},{type:"text-input",text:"No Phone Number Text",oninput:function(n){document.body.style.setProperty("--no-phone-number-text",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--no-phone-number-text")||"'Nothing to see here!'";return console.log(n),n}},{type:"text-input",text:"Primary Rounding",oninput:function(n){document.body.style.setProperty("--primary-rounding",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--primary-rounding")||"5px";return console.log(n),n}},{type:"text-input",text:"Primary Spacing",oninput:function(n){document.body.style.setProperty("--primary-spacing",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--primary-spacing")||"10px";return console.log(n),n}},{type:"text-input",text:"Secondary Spacing",oninput:function(n){document.body.style.setProperty("--secondary-spacing",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--secondary-spacing")||"20px";return console.log(n),n}},{type:"text-input",text:"Secondary Rounding",oninput:function(n){document.body.style.setProperty("--secondary-rounding",n)},initialValue:function(){var n=document.body.style.getPropertyValue("--secondary-rounding")||"10px";return console.log(n),n}}]);case 4:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();try{goosemodScope.settings.removeItem("Drakula")}catch(r){}case 2:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),getSettings:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",[["--dracula-background",document.body.style.getPropertyValue("--dracula-background")],["--dracula-current-line",document.body.style.getPropertyValue("--dracula-current-line")],["--dracula-selection",document.body.style.getPropertyValue("--dracula-selection")],["--dracula-foreground",document.body.style.getPropertyValue("--dracula-foreground")],["--dracula-comment",document.body.style.getPropertyValue("--dracula-comment")],["--dracula-cyan",document.body.style.getPropertyValue("--dracula-cyan")],["--dracula-green",document.body.style.getPropertyValue("--dracula-green")],["--dracula-orange",document.body.style.getPropertyValue("--dracula-orange")],["--dracula-pink",document.body.style.getPropertyValue("--dracula-pink")],["--dracula-purple",document.body.style.getPropertyValue("--dracula-purple")],["--dracula-red",document.body.style.getPropertyValue("--dracula-red")],["--dracula-yellow",document.body.style.getPropertyValue("--dracula-yellow")],["--no-phone-number-text",document.body.style.getPropertyValue("--no-phone-number-text")],["--primary-rounding",document.body.style.getPropertyValue("--primary-rounding")],["--primary-spacing",document.body.style.getPropertyValue("--primary-spacing")],["--secondary-spacing",document.body.style.getPropertyValue("--secondary-spacing")],["--secondary-rounding",document.body.style.getPropertyValue("--secondary-rounding")]]);case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),loadSettings:function(){var n=r(regeneratorRuntime.mark(function n(r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r.forEach(function(n){document.body.style.setProperty(n[0],n[1])});case 1:case"end":return n.stop()}},n)}));return function(r){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default