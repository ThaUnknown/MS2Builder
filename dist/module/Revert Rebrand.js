parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,n,r,o,a,i){try{var p=e[a](i),d=p.value}catch(u){return void n(u)}p.done?t(d):Promise.resolve(d).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function p(t){e(i,o,a,p,d,"next",t)}function d(t){e(i,o,a,p,d,"throw",t)}p(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode('body {\n  /* Revert new green to old color */\n  --old-green: #43b581;\n  --info-positive-foreground: var(--old-green);\n  --status-positive-background: var(--old-green);\n  --text-positive: var(--old-green);\n\n  /* Revert new red to old color */\n  --old-red: #f04747;\n  --text-danger: var(--old-red);\n  --info-danger-foreground: var(--old-red);\n  --status-danger-background: var(--old-red);\n\n  /* Revert to old font var */\n  --font-display: var(--font-primary);\n\n  /* Found in Discord\'s CSS file: oldBrand vs newBrand HTML class - here we force old brand vars via copying */\n  --brand-experiment-100: #f8f9fd;\n  --brand-experiment-130: #f2f4fc;\n  --brand-experiment-160: #ebeefa;\n  --brand-experiment-200: #e3e7f8;\n  --brand-experiment-230: #dae0f5;\n  --brand-experiment-260: #d1d9f3;\n  --brand-experiment-300: #c7d0f0;\n  --brand-experiment-330: #b5c1ec;\n  --brand-experiment-360: #a5b3e7;\n  --brand-experiment-400: #8ea1e1;\n  --brand-experiment-430: #869adf;\n  --brand-experiment-460: #7d92dd;\n\n  --brand-experiment: #7289da;\n\n  --brand-experiment-500: #7289da;\n  --brand-experiment-530: #687dc6;\n  --brand-experiment-560: #5c6fb1;\n  --brand-experiment-600: #4e5d94;\n  --brand-experiment-630: #435180;\n  --brand-experiment-660: #3b4770;\n  --brand-experiment-700: #2e3757;\n  --brand-experiment-730: #2b3352;\n  --brand-experiment-760: #272f4b;\n  --brand-experiment-800: #222941;\n  --brand-experiment-830: #1a2032;\n  --brand-experiment-860: #111521;\n  --brand-experiment-900: #06070b;\n\n  --brand-experiment-05a: rgba(114,137,218,0.05);\n  --brand-experiment-10a: rgba(114,137,218,0.1);\n  --brand-experiment-15a: rgba(114,137,218,0.15);\n  --brand-experiment-20a: rgba(114,137,218,0.2);\n  --brand-experiment-25a: rgba(114,137,218,0.25);\n  --brand-experiment-30a: rgba(114,137,218,0.3);\n  --brand-experiment-35a: rgba(114,137,218,0.35);\n  --brand-experiment-40a: rgba(114,137,218,0.4);\n  --brand-experiment-45a: rgba(114,137,218,0.45);\n  --brand-experiment-50a: rgba(114,137,218,0.5);\n  --brand-experiment-55a: rgba(114,137,218,0.55);\n  --brand-experiment-60a: rgba(114,137,218,0.6);\n  --brand-experiment-65a: rgba(114,137,218,0.65);\n  --brand-experiment-70a: rgba(114,137,218,0.7);\n  --brand-experiment-75a: rgba(114,137,218,0.75);\n  --brand-experiment-80a: rgba(114,137,218,0.8);\n  --brand-experiment-85a: rgba(114,137,218,0.85);\n  --brand-experiment-90a: rgba(114,137,218,0.9);\n  --brand-experiment-95a: rgba(114,137,218,0.95);\n}\n\n/* Revert mentions */\n.wrapper-3WhCwL {\n  color: var(--brand-experiment-530) !important;\n  background: var(--brand-experiment-10a) !important;\n}\n\n.wrapper-3WhCwL:hover {\n  background: var(--brand-experiment-25a) !important;\n}\n\n/* Revert reactions */\n.reaction-1hd86g {\n  border-radius: .25rem;\n  background: var(--background-modifier-accent);\n\n  border-color: transparent !important;\n}\n\n.reaction-1hd86g.reactionMe-wv5HKu .reactionCount-2mvXRV {\n  color: var(--brand-experiment);\n}\n\n/* Set proper reaction background color */\n.reaction-1hd86g.reactionMe-wv5HKu {\n  background-color: var(--brand-experiment-30a);\n}\n\n.reaction-1hd86g:hover {\n  background: var(--brand-experiment-50a) !important;\n}\n\n/* Revert loading tip title color */\n.tipTitle-GL9qAt {\n  color: var(--brand-experiment) !important;\n}\n\n/* Revert home icon */\n.homeIcon-FuNwkv > path {\n  d: path("M 20.6644 20 C 20.6644 20 19.8014 18.9762 19.0822 18.0714 C 22.2226 17.1905 23.4212 15.2381 23.4212 15.2381 C 22.4384 15.881 21.5034 16.3334 20.6644 16.6429 C 19.4658 17.1429 18.3151 17.4762 17.1884 17.6667 C 14.887 18.0953 12.7774 17.9762 10.9795 17.6429 C 9.61301 17.381 8.43836 17 7.45548 16.6191 C 6.90411 16.4048 6.30479 16.1429 5.70548 15.8096 C 5.63356 15.7619 5.56164 15.7381 5.48973 15.6905 C 5.44178 15.6667 5.41781 15.6429 5.39384 15.6191 C 4.96233 15.381 4.7226 15.2143 4.7226 15.2143 C 4.7226 15.2143 5.87329 17.1191 8.91781 18.0238 C 8.19863 18.9286 7.31164 20 7.31164 20 C 2.0137 19.8333 0 16.381 0 16.381 C 0 8.7144 3.45205 2.50017 3.45205 2.50017 C 6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861 L 10.4281 0.285909 C 6.11301 1.52399 4.12329 3.40493 4.12329 3.40493 C 4.12329 3.40493 4.65068 3.11921 5.53767 2.71446 C 8.10274 1.59542 10.1404 1.2859 10.9795 1.21447 C 11.1233 1.19066 11.2432 1.16685 11.387 1.16685 C 12.8493 0.976379 14.5034 0.92876 16.2295 1.11923 C 18.5068 1.38114 20.9521 2.0478 23.4452 3.40493 C 23.4452 3.40493 21.5514 1.61923 17.476 0.381146 L 17.8116 0.000197861 C 17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017 C 24.5479 2.50017 28 8.7144 28 16.381 C 28 16.381 25.9623 19.8333 20.6644 20 Z M 9.51712 8.88106 C 8.15068 8.88106 7.07192 10.0715 7.07192 11.5239 C 7.07192 12.9763 8.17466 14.1667 9.51712 14.1667 C 10.8836 14.1667 11.9623 12.9763 11.9623 11.5239 C 11.9863 10.0715 10.8836 8.88106 9.51712 8.88106 Z M 18.2671 8.88106 C 16.9007 8.88106 15.8219 10.0715 15.8219 11.5239 C 15.8219 12.9763 16.9247 14.1667 18.2671 14.1667 C 19.6336 14.1667 20.7123 12.9763 20.7123 11.5239 C 20.7123 10.0715 19.6336 8.88106 18.2671 8.88106 Z");\n}\n\n/* Revert ping mention button being link colored (used to be brand) */\n.colorLink-2vG20E.size14-e6ZScH.mentionButton-3710-W {\n  color: var(--brand-experiment) !important;\n}\n\n/* Revert specific elements with old colors */\n\n/* Online status */\n.wrapper-3t9DeA rect.pointerEvents-2zdfdO[mask="url(#svg-mask-status-online)"] {\n  fill: var(--old-green);\n}\n\n/* Online status (mobile) */\n.wrapper-3t9DeA rect.pointerEvents-2zdfdO[mask="url(#svg-mask-status-online-mobile)"] {\n  fill: var(--old-green);\n}\n\n/* Online status (typing and other) */\n.wrapper-3t9DeA svg.cursorDefault-dsQJ1n > rect[fill="#3ba55c"] {\n  fill: var(--old-green);\n}\n\n/* Filled green buttons */\n.button-38aScr.lookFilled-1Gx00P.colorGreen-29iAKY {\n  background-color: var(--old-green);\n}\n\n/* Filled red buttons */\n.button-38aScr.lookFilled-1Gx00P.colorRed-1TFJan {\n  background-color: var(--old-red);\n}\n\n/* Text input focus border color is now focus / link, change back to original brand color */\n.input-cIJ7To.focused-1mmYsC, .input-cIJ7To:focus {\n  border-color: var(--brand-experiment);\n}')),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("Revert Rebrand",["",{type:"text-and-color",text:"Old Green",oninput:function(e){console.log(e),document.body.style.setProperty("--old-green",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--old-green")||"#43b581";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Old Red",oninput:function(e){console.log(e),document.body.style.setProperty("--old-red",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--old-red")||"#f04747";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 100",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-100",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-100")||"#f8f9fd";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 130",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-130",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-130")||"#f2f4fc";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 160",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-160",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-160")||"#ebeefa";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 200",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-200",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-200")||"#e3e7f8";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 230",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-230",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-230")||"#dae0f5";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 260",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-260",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-260")||"#d1d9f3";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 300",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-300",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-300")||"#c7d0f0";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 330",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-330",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-330")||"#b5c1ec";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 360",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-360",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-360")||"#a5b3e7";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 400",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-400",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-400")||"#8ea1e1";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 430",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-430",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-430")||"#869adf";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 460",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-460",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-460")||"#7d92dd";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment")||"#7289da";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 500",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-500",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-500")||"#7289da";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 530",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-530",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-530")||"#687dc6";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 560",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-560",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-560")||"#5c6fb1";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 600",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-600",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-600")||"#4e5d94";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 630",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-630",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-630")||"#435180";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 660",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-660",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-660")||"#3b4770";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 700",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-700",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-700")||"#2e3757";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 730",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-730",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-730")||"#2b3352";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 760",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-760",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-760")||"#272f4b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 800",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-800",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-800")||"#222941";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 830",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-830",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-830")||"#1a2032";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 860",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-860",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-860")||"#111521";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 900",oninput:function(e){console.log(e),document.body.style.setProperty("--brand-experiment-900",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-900")||"#06070b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 05a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-05a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-05a")||"rgba(114,137,218,0.05)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 10a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-10a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-10a")||"rgba(114,137,218,0.1)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 15a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-15a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-15a")||"rgba(114,137,218,0.15)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 20a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-20a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-20a")||"rgba(114,137,218,0.2)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 25a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-25a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-25a")||"rgba(114,137,218,0.25)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 30a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-30a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-30a")||"rgba(114,137,218,0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 35a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-35a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-35a")||"rgba(114,137,218,0.35)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 40a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-40a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-40a")||"rgba(114,137,218,0.4)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 45a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-45a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-45a")||"rgba(114,137,218,0.45)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 50a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-50a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-50a")||"rgba(114,137,218,0.5)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 55a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-55a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-55a")||"rgba(114,137,218,0.55)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 60a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-60a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-60a")||"rgba(114,137,218,0.6)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 65a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-65a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-65a")||"rgba(114,137,218,0.65)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 70a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-70a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-70a")||"rgba(114,137,218,0.7)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 75a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-75a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-75a")||"rgba(114,137,218,0.75)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 80a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-80a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-80a")||"rgba(114,137,218,0.8)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 85a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-85a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-85a")||"rgba(114,137,218,0.85)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 90a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-90a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-90a")||"rgba(114,137,218,0.9)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 95a",oninput:function(e){e=parseInt(e.substring(1,3),16).toString()+", "+parseInt(e.substring(3,5),16).toString()+", "+parseInt(e.substring(5,7),16).toString(),console.log(e),document.body.style.setProperty("--brand-experiment-95a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-95a")||"rgba(114,137,218,0.95)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.remove();try{goosemodScope.settings.removeItem("Revert Rebrand")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--old-green",document.body.style.getPropertyValue("--old-green")],["--old-red",document.body.style.getPropertyValue("--old-red")],["--brand-experiment-100",document.body.style.getPropertyValue("--brand-experiment-100")],["--brand-experiment-130",document.body.style.getPropertyValue("--brand-experiment-130")],["--brand-experiment-160",document.body.style.getPropertyValue("--brand-experiment-160")],["--brand-experiment-200",document.body.style.getPropertyValue("--brand-experiment-200")],["--brand-experiment-230",document.body.style.getPropertyValue("--brand-experiment-230")],["--brand-experiment-260",document.body.style.getPropertyValue("--brand-experiment-260")],["--brand-experiment-300",document.body.style.getPropertyValue("--brand-experiment-300")],["--brand-experiment-330",document.body.style.getPropertyValue("--brand-experiment-330")],["--brand-experiment-360",document.body.style.getPropertyValue("--brand-experiment-360")],["--brand-experiment-400",document.body.style.getPropertyValue("--brand-experiment-400")],["--brand-experiment-430",document.body.style.getPropertyValue("--brand-experiment-430")],["--brand-experiment-460",document.body.style.getPropertyValue("--brand-experiment-460")],["--brand-experiment",document.body.style.getPropertyValue("--brand-experiment")],["--brand-experiment-500",document.body.style.getPropertyValue("--brand-experiment-500")],["--brand-experiment-530",document.body.style.getPropertyValue("--brand-experiment-530")],["--brand-experiment-560",document.body.style.getPropertyValue("--brand-experiment-560")],["--brand-experiment-600",document.body.style.getPropertyValue("--brand-experiment-600")],["--brand-experiment-630",document.body.style.getPropertyValue("--brand-experiment-630")],["--brand-experiment-660",document.body.style.getPropertyValue("--brand-experiment-660")],["--brand-experiment-700",document.body.style.getPropertyValue("--brand-experiment-700")],["--brand-experiment-730",document.body.style.getPropertyValue("--brand-experiment-730")],["--brand-experiment-760",document.body.style.getPropertyValue("--brand-experiment-760")],["--brand-experiment-800",document.body.style.getPropertyValue("--brand-experiment-800")],["--brand-experiment-830",document.body.style.getPropertyValue("--brand-experiment-830")],["--brand-experiment-860",document.body.style.getPropertyValue("--brand-experiment-860")],["--brand-experiment-900",document.body.style.getPropertyValue("--brand-experiment-900")],["--brand-experiment-05a",document.body.style.getPropertyValue("--brand-experiment-05a")],["--brand-experiment-10a",document.body.style.getPropertyValue("--brand-experiment-10a")],["--brand-experiment-15a",document.body.style.getPropertyValue("--brand-experiment-15a")],["--brand-experiment-20a",document.body.style.getPropertyValue("--brand-experiment-20a")],["--brand-experiment-25a",document.body.style.getPropertyValue("--brand-experiment-25a")],["--brand-experiment-30a",document.body.style.getPropertyValue("--brand-experiment-30a")],["--brand-experiment-35a",document.body.style.getPropertyValue("--brand-experiment-35a")],["--brand-experiment-40a",document.body.style.getPropertyValue("--brand-experiment-40a")],["--brand-experiment-45a",document.body.style.getPropertyValue("--brand-experiment-45a")],["--brand-experiment-50a",document.body.style.getPropertyValue("--brand-experiment-50a")],["--brand-experiment-55a",document.body.style.getPropertyValue("--brand-experiment-55a")],["--brand-experiment-60a",document.body.style.getPropertyValue("--brand-experiment-60a")],["--brand-experiment-65a",document.body.style.getPropertyValue("--brand-experiment-65a")],["--brand-experiment-70a",document.body.style.getPropertyValue("--brand-experiment-70a")],["--brand-experiment-75a",document.body.style.getPropertyValue("--brand-experiment-75a")],["--brand-experiment-80a",document.body.style.getPropertyValue("--brand-experiment-80a")],["--brand-experiment-85a",document.body.style.getPropertyValue("--brand-experiment-85a")],["--brand-experiment-90a",document.body.style.getPropertyValue("--brand-experiment-90a")],["--brand-experiment-95a",document.body.style.getPropertyValue("--brand-experiment-95a")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default