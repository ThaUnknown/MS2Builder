parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function e(e,t,n,r,o,a,i){try{var u=e[a](i),p=u.value}catch(d){return void n(d)}u.done?t(p):Promise.resolve(p).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise(function(o,a){var i=t.apply(n,r);function u(t){e(i,o,a,u,p,"next",t)}function p(t){e(i,o,a,u,p,"throw",t)}u(void 0)})}}var n;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={goosemodHandlers:{onImport:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=document.createElement("style"),document.head.appendChild(n),n.appendChild(document.createTextNode("/**\n* @name DTM-16\n* @author 11pixels#2004\n* @version 5\n* @invite JB6axYch8m\n* @description Formerly known as Oldcord, this theme tries to bring back the 2016 look of Discord\n* @source https://github.com/XYZenix/XYZenixThemes/blob/master/DTM-16.theme.css\n*/\n\n@import url(https://xyzenix.github.io/XYZenixThemes/DTM-16-V5/DTM-16.css);\n:root {\n --showRtcConnectionStatusIcon: block; /* show the vc ping/status icon | block = show | none = hide */\n --jumboEmojiSize: 2rem; /* Old - 2rem | New - 3rem */\n}\n")),goosemodScope.settings.gmSettings.get().allThemeSettings&&goosemodScope.settings.createItem("DTM-16",["",{type:"text-input",text:"Showrtcconnectionstatusicon",oninput:function(e){document.body.style.setProperty("--showRtcConnectionStatusIcon",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--showRtcConnectionStatusIcon")||"block";return console.log(e),e}},{type:"text-input",text:"Jumboemojisize",oninput:function(e){document.body.style.setProperty("--jumboEmojiSize",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--jumboEmojiSize")||"2rem";return console.log(e),e}},{type:"text-input",text:"Font Primary",oninput:function(e){document.body.style.setProperty("--font-primary",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--font-primary")||"Whitney";return console.log(e),e}},{type:"text-input",text:"Font Display",oninput:function(e){document.body.style.setProperty("--font-display",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--font-display")||'Whitney,"Helvetica Neue",Helvetica,Arial,sans-serif!important';return console.log(e),e}},{type:"text-and-color",text:"Text Positive",oninput:function(e){document.body.style.setProperty("--text-positive",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--text-positive")||"#43b581";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Blurple",oninput:function(e){document.body.style.setProperty("--blurple",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple")||"#7289DA";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Blurple Hover",oninput:function(e){document.body.style.setProperty("--blurple-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple-hover")||"#677BC4";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Blurple Active",oninput:function(e){document.body.style.setProperty("--blurple-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple-active")||"#5B6EAE";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Blurple Inverted",oninput:function(e){document.body.style.setProperty("--blurple-inverted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple-inverted")||"#F8F9FD";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Blurple Inverted Active",oninput:function(e){document.body.style.setProperty("--blurple-inverted-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--blurple-inverted-active")||"#E3E7F8";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red",oninput:function(e){document.body.style.setProperty("--red",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red")||"#F04747";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red Hover",oninput:function(e){document.body.style.setProperty("--red-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red-hover")||"#D84040";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red Active",oninput:function(e){document.body.style.setProperty("--red-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red-active")||"#C03939";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red Inverted",oninput:function(e){document.body.style.setProperty("--red-inverted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red-inverted")||"#FEF6F6";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Red Inverted Active",oninput:function(e){document.body.style.setProperty("--red-inverted-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--red-inverted-active")||"#FCDADA";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Yellow",oninput:function(e){document.body.style.setProperty("--yellow",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--yellow")||"#FAA61A";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Yellow Hover",oninput:function(e){document.body.style.setProperty("--yellow-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--yellow-hover")||"#E19517";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Yellow Inverted",oninput:function(e){document.body.style.setProperty("--yellow-inverted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--yellow-inverted")||"#FFFBF4";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Yellow Inverted Active",oninput:function(e){document.body.style.setProperty("--yellow-inverted-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--yellow-inverted-active")||"#FEEDD1";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Green",oninput:function(e){document.body.style.setProperty("--green",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green")||"#43B581";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Green Hover",oninput:function(e){document.body.style.setProperty("--green-hover",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green-hover")||"#3CA374";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Green Active",oninput:function(e){document.body.style.setProperty("--green-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green-active")||"#369167";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Green Inverted",oninput:function(e){document.body.style.setProperty("--green-inverted",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green-inverted")||"#F6FBF9";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Green Inverted Active",oninput:function(e){document.body.style.setProperty("--green-inverted-active",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--green-inverted-active")||"#D9F0E6";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 100",oninput:function(e){document.body.style.setProperty("--brand-experiment-100",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-100")||"#f8f9fd";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 130",oninput:function(e){document.body.style.setProperty("--brand-experiment-130",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-130")||"#f2f4fc";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 160",oninput:function(e){document.body.style.setProperty("--brand-experiment-160",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-160")||"#ebeefa";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 200",oninput:function(e){document.body.style.setProperty("--brand-experiment-200",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-200")||"#e3e7f8";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 230",oninput:function(e){document.body.style.setProperty("--brand-experiment-230",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-230")||"#dae0f5";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 260",oninput:function(e){document.body.style.setProperty("--brand-experiment-260",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-260")||"#d1d9f3";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 300",oninput:function(e){document.body.style.setProperty("--brand-experiment-300",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-300")||"#c7d0f0";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 330",oninput:function(e){document.body.style.setProperty("--brand-experiment-330",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-330")||"#b5c1ec";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 360",oninput:function(e){document.body.style.setProperty("--brand-experiment-360",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-360")||"#a5b3e7";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 400",oninput:function(e){document.body.style.setProperty("--brand-experiment-400",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-400")||"#8ea1e1";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 430",oninput:function(e){document.body.style.setProperty("--brand-experiment-430",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-430")||"#869adf";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 460",oninput:function(e){document.body.style.setProperty("--brand-experiment-460",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-460")||"#7d92dd";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment",oninput:function(e){document.body.style.setProperty("--brand-experiment",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment")||"#7289da";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 500",oninput:function(e){document.body.style.setProperty("--brand-experiment-500",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-500")||"#7289da";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 530",oninput:function(e){document.body.style.setProperty("--brand-experiment-530",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-530")||"#687dc6";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 560",oninput:function(e){document.body.style.setProperty("--brand-experiment-560",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-560")||"#5c6fb1";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 600",oninput:function(e){document.body.style.setProperty("--brand-experiment-600",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-600")||"#4e5d94";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 630",oninput:function(e){document.body.style.setProperty("--brand-experiment-630",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-630")||"#435180";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 660",oninput:function(e){document.body.style.setProperty("--brand-experiment-660",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-660")||"#3b4770";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 700",oninput:function(e){document.body.style.setProperty("--brand-experiment-700",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-700")||"#2e3757";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 730",oninput:function(e){document.body.style.setProperty("--brand-experiment-730",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-730")||"#2b3352";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 760",oninput:function(e){document.body.style.setProperty("--brand-experiment-760",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-760")||"#272f4b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 800",oninput:function(e){document.body.style.setProperty("--brand-experiment-800",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-800")||"#222941";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 830",oninput:function(e){document.body.style.setProperty("--brand-experiment-830",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-830")||"#1a2032";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 860",oninput:function(e){document.body.style.setProperty("--brand-experiment-860",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-860")||"#111521";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 900",oninput:function(e){document.body.style.setProperty("--brand-experiment-900",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-900")||"#06070b";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 05a",oninput:function(e){document.body.style.setProperty("--brand-experiment-05a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-05a")||"rgba(114,137,218,0.05)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 10a",oninput:function(e){document.body.style.setProperty("--brand-experiment-10a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-10a")||"rgba(114,137,218,0.1)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 15a",oninput:function(e){document.body.style.setProperty("--brand-experiment-15a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-15a")||"rgba(114,137,218,0.15)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 20a",oninput:function(e){document.body.style.setProperty("--brand-experiment-20a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-20a")||"rgba(114,137,218,0.2)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 25a",oninput:function(e){document.body.style.setProperty("--brand-experiment-25a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-25a")||"rgba(114,137,218,0.25)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 30a",oninput:function(e){document.body.style.setProperty("--brand-experiment-30a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-30a")||"rgba(114,137,218,0.3)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 35a",oninput:function(e){document.body.style.setProperty("--brand-experiment-35a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-35a")||"rgba(114,137,218,0.35)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 40a",oninput:function(e){document.body.style.setProperty("--brand-experiment-40a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-40a")||"rgba(114,137,218,0.4)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 45a",oninput:function(e){document.body.style.setProperty("--brand-experiment-45a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-45a")||"rgba(114,137,218,0.45)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 50a",oninput:function(e){document.body.style.setProperty("--brand-experiment-50a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-50a")||"rgba(114,137,218,0.5)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 55a",oninput:function(e){document.body.style.setProperty("--brand-experiment-55a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-55a")||"rgba(114,137,218,0.55)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 60a",oninput:function(e){document.body.style.setProperty("--brand-experiment-60a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-60a")||"rgba(114,137,218,0.6)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 65a",oninput:function(e){document.body.style.setProperty("--brand-experiment-65a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-65a")||"rgba(114,137,218,0.65)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 70a",oninput:function(e){document.body.style.setProperty("--brand-experiment-70a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-70a")||"rgba(114,137,218,0.7)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 75a",oninput:function(e){document.body.style.setProperty("--brand-experiment-75a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-75a")||"rgba(114,137,218,0.75)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 80a",oninput:function(e){document.body.style.setProperty("--brand-experiment-80a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-80a")||"rgba(114,137,218,0.8)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 85a",oninput:function(e){document.body.style.setProperty("--brand-experiment-85a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-85a")||"rgba(114,137,218,0.85)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 90a",oninput:function(e){document.body.style.setProperty("--brand-experiment-90a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-90a")||"rgba(114,137,218,0.9)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}},{type:"text-and-color",text:"Brand Experiment 95a",oninput:function(e){document.body.style.setProperty("--brand-experiment-95a",e)},initialValue:function(){var e=document.body.style.getPropertyValue("--brand-experiment-95a")||"rgba(114,137,218,0.95)";return"#"!==e[0]&&(e="#"+e.split(", ").map(function(e){return parseInt(e).toString(16).padStart(2,"0")}).join("")),console.log(e),e}}]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),onRemove:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.remove();try{goosemodScope.settings.removeItem("DTM-16")}catch(t){}case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getSettings:function(){var e=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[["--showRtcConnectionStatusIcon",document.body.style.getPropertyValue("--showRtcConnectionStatusIcon")],["--jumboEmojiSize",document.body.style.getPropertyValue("--jumboEmojiSize")],["--font-primary",document.body.style.getPropertyValue("--font-primary")],["--font-display",document.body.style.getPropertyValue("--font-display")],["--text-positive",document.body.style.getPropertyValue("--text-positive")],["--blurple",document.body.style.getPropertyValue("--blurple")],["--blurple-hover",document.body.style.getPropertyValue("--blurple-hover")],["--blurple-active",document.body.style.getPropertyValue("--blurple-active")],["--blurple-inverted",document.body.style.getPropertyValue("--blurple-inverted")],["--blurple-inverted-active",document.body.style.getPropertyValue("--blurple-inverted-active")],["--red",document.body.style.getPropertyValue("--red")],["--red-hover",document.body.style.getPropertyValue("--red-hover")],["--red-active",document.body.style.getPropertyValue("--red-active")],["--red-inverted",document.body.style.getPropertyValue("--red-inverted")],["--red-inverted-active",document.body.style.getPropertyValue("--red-inverted-active")],["--yellow",document.body.style.getPropertyValue("--yellow")],["--yellow-hover",document.body.style.getPropertyValue("--yellow-hover")],["--yellow-inverted",document.body.style.getPropertyValue("--yellow-inverted")],["--yellow-inverted-active",document.body.style.getPropertyValue("--yellow-inverted-active")],["--green",document.body.style.getPropertyValue("--green")],["--green-hover",document.body.style.getPropertyValue("--green-hover")],["--green-active",document.body.style.getPropertyValue("--green-active")],["--green-inverted",document.body.style.getPropertyValue("--green-inverted")],["--green-inverted-active",document.body.style.getPropertyValue("--green-inverted-active")],["--brand-experiment-100",document.body.style.getPropertyValue("--brand-experiment-100")],["--brand-experiment-130",document.body.style.getPropertyValue("--brand-experiment-130")],["--brand-experiment-160",document.body.style.getPropertyValue("--brand-experiment-160")],["--brand-experiment-200",document.body.style.getPropertyValue("--brand-experiment-200")],["--brand-experiment-230",document.body.style.getPropertyValue("--brand-experiment-230")],["--brand-experiment-260",document.body.style.getPropertyValue("--brand-experiment-260")],["--brand-experiment-300",document.body.style.getPropertyValue("--brand-experiment-300")],["--brand-experiment-330",document.body.style.getPropertyValue("--brand-experiment-330")],["--brand-experiment-360",document.body.style.getPropertyValue("--brand-experiment-360")],["--brand-experiment-400",document.body.style.getPropertyValue("--brand-experiment-400")],["--brand-experiment-430",document.body.style.getPropertyValue("--brand-experiment-430")],["--brand-experiment-460",document.body.style.getPropertyValue("--brand-experiment-460")],["--brand-experiment",document.body.style.getPropertyValue("--brand-experiment")],["--brand-experiment-500",document.body.style.getPropertyValue("--brand-experiment-500")],["--brand-experiment-530",document.body.style.getPropertyValue("--brand-experiment-530")],["--brand-experiment-560",document.body.style.getPropertyValue("--brand-experiment-560")],["--brand-experiment-600",document.body.style.getPropertyValue("--brand-experiment-600")],["--brand-experiment-630",document.body.style.getPropertyValue("--brand-experiment-630")],["--brand-experiment-660",document.body.style.getPropertyValue("--brand-experiment-660")],["--brand-experiment-700",document.body.style.getPropertyValue("--brand-experiment-700")],["--brand-experiment-730",document.body.style.getPropertyValue("--brand-experiment-730")],["--brand-experiment-760",document.body.style.getPropertyValue("--brand-experiment-760")],["--brand-experiment-800",document.body.style.getPropertyValue("--brand-experiment-800")],["--brand-experiment-830",document.body.style.getPropertyValue("--brand-experiment-830")],["--brand-experiment-860",document.body.style.getPropertyValue("--brand-experiment-860")],["--brand-experiment-900",document.body.style.getPropertyValue("--brand-experiment-900")],["--brand-experiment-05a",document.body.style.getPropertyValue("--brand-experiment-05a")],["--brand-experiment-10a",document.body.style.getPropertyValue("--brand-experiment-10a")],["--brand-experiment-15a",document.body.style.getPropertyValue("--brand-experiment-15a")],["--brand-experiment-20a",document.body.style.getPropertyValue("--brand-experiment-20a")],["--brand-experiment-25a",document.body.style.getPropertyValue("--brand-experiment-25a")],["--brand-experiment-30a",document.body.style.getPropertyValue("--brand-experiment-30a")],["--brand-experiment-35a",document.body.style.getPropertyValue("--brand-experiment-35a")],["--brand-experiment-40a",document.body.style.getPropertyValue("--brand-experiment-40a")],["--brand-experiment-45a",document.body.style.getPropertyValue("--brand-experiment-45a")],["--brand-experiment-50a",document.body.style.getPropertyValue("--brand-experiment-50a")],["--brand-experiment-55a",document.body.style.getPropertyValue("--brand-experiment-55a")],["--brand-experiment-60a",document.body.style.getPropertyValue("--brand-experiment-60a")],["--brand-experiment-65a",document.body.style.getPropertyValue("--brand-experiment-65a")],["--brand-experiment-70a",document.body.style.getPropertyValue("--brand-experiment-70a")],["--brand-experiment-75a",document.body.style.getPropertyValue("--brand-experiment-75a")],["--brand-experiment-80a",document.body.style.getPropertyValue("--brand-experiment-80a")],["--brand-experiment-85a",document.body.style.getPropertyValue("--brand-experiment-85a")],["--brand-experiment-90a",document.body.style.getPropertyValue("--brand-experiment-90a")],["--brand-experiment-95a",document.body.style.getPropertyValue("--brand-experiment-95a")]]);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),loadSettings:function(){var e=t(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(e){document.body.style.setProperty(e[0],e[1])});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}};exports.default=r;
},{}]},{},["index.js"], null);parcelRequire('index.js').default