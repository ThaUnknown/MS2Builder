parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"../../../moduleWrappers/powercord/global/commands.js":[function(require,module,exports) {
"use strict";function e(e,n){return a(e)||o(e,n)||t(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],s=!0,i=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);s=!0);}catch(u){i=!0,o=u}finally{try{s||null==t.return||t.return()}finally{if(i)throw o}}return a}}function a(e){if(Array.isArray(e))return e}function s(e,r,t,n,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void t(c)}i.done?r(u):Promise.resolve(u).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function i(e){s(a,n,o,i,u,"next",e)}function u(e){s(a,n,o,i,u,"throw",e)}i(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterCommand=exports.registerCommand=void 0;var u=goosemodScope.webpackModules.findByProps("sendMessage","receiveMessage").sendMessage,c=goosemodScope.webpackModules.findByProps("getChannelId").getChannelId,l=function(r){var t=r.command,n=(r.alias,r.description),o=(r.usage,r.executor);goosemodScope.patcher.commands.add(t,n,function(){var r=i(regeneratorRuntime.mark(function r(t){var n,a,s,i;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n="",t.args&&(a=e(t.args,1),s=a[0].text,n=s),r.next=4,o(n.split(" "));case 4:if((i=r.sent).send){r.next=8;break}return goosemodScope.patcher.internalMessage(i.result),r.abrupt("return");case 8:u(c(),{content:i.result,tts:!1,invalidEmojis:[],validNonShortcutEmojis:[]});case 9:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),[{type:3,required:!1,name:"args",description:"Arguments for PC command"}])};exports.registerCommand=l;var d=function(e){goosemodScope.patcher.commands.remove(e)};exports.unregisterCommand=d;
},{}],"../../../moduleWrappers/powercord/global/notices.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sendToast=void 0;var e=function(e,o){o.header;var t=o.content;o.type,o.buttons;goosemodScope.showToast(t)};exports.sendToast=e;
},{}],"../../../moduleWrappers/powercord/util/settings.js":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.makeStore=exports.settingStores=void 0;var r={};exports.settingStores=r;var n=function(t){r[t]=new o};exports.makeStore=n;var o=function r(){var n=this;t(this,r),e(this,"getSetting",function(t,e){var r;return null!==(r=n.store[t])&&void 0!==r?r:e}),e(this,"updateSetting",function(t,e){return void 0===e?n.toggleSetting(t):(n.store[t]=e,n.store[t])}),e(this,"toggleSetting",function(t){return n.store[t]=!n.store[t],n.store[t]}),e(this,"deleteSetting",function(t){delete n.store[t]}),e(this,"getKeys",function(){return Object.keys(n.store)}),this.store={}};
},{}],"../../../moduleWrappers/powercord/global/settings.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregisterSettings=exports.registerSettings=void 0;var e=r(require("../util/settings"));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function r(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var a=i?Object.getOwnPropertyDescriptor(e,c):null;a&&(a.get||a.set)?Object.defineProperty(o,c,a):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var n=r.label,i=r.render,c=r.category,a=goosemodScope.webpackModules.common.React,u=goosemodScope.webpackModules.findByDisplayName("SettingsView"),s=goosemodScope.webpackModules.findByDisplayName("FormTitle"),p=goosemodScope.webpackModules.findByDisplayName("FormSection");e.settingStores[c]||e.makeStore(c),goosemodScope.patcher.inject(t,u.prototype,"getPredicateSections",function(t,r){var u=r.find(function(e){return"logout"===e.section});if(!u)return r;var f="function"==typeof n?n():n;return r.splice(r.indexOf(u)-1,0,{section:f,label:f,predicate:function(){},element:function(){return a.createElement(p,{},a.createElement(s,{tag:"h2"},f),a.createElement(i,o({},e.settingStores[c])))}}),r})};exports.registerSettings=c;var a=function(e){goosemodScope.patcher.uninject(e)};exports.unregisterSettings=a;
},{"../util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/global/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./commands.js")),t=o(require("./notices.js")),r=o(require("./settings.js"));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=u?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(o,i,a):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}var u={api:{commands:e,notices:t,settings:r}};exports.default=u;
},{"./commands.js":"../../../moduleWrappers/powercord/global/commands.js","./notices.js":"../../../moduleWrappers/powercord/global/notices.js","./settings.js":"../../../moduleWrappers/powercord/global/settings.js"}],"../../../moduleWrappers/powercord/entities.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plugin=void 0;var e=n(require("./util/settings"));function t(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,r=new WeakMap;return(t=function(e){return e?r:n})(e)}function n(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t(n);if(r&&r.has(e))return r.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=o?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(i,s,u):i[s]=e[s]}return i.default=e,r&&r.set(e,i),i}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=function(){function t(){r(this,t),this.stylesheets=[]}return o(t,[{key:"loadStylesheet",value:function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e)),document.head.appendChild(t),this.stylesheets.push(t)}},{key:"manifest",get:function(){return{name:this.name,description:this.description,version:this.version,author:this.authors.toString(),license:"Unknown"}}},{key:"entityID",get:function(){return this.name}},{key:"settings",get:function(){var t=e.settingStores[this.entityID];return{get:t.getSetting,set:t.updateSetting,delete:t.deleteSetting,getKeys:t.getKeys,connectStore:function(){}}}},{key:"goosemodHandlers",get:function(){var t=this;return{onImport:function(){e.makeStore(t.entityID),t.startPlugin.bind(t)()},onRemove:function(){t.stylesheets.forEach(function(e){return e.remove()}),t.pluginWillUnload.bind(t)()},getSettings:function(){return e.settingStores[t.entityID].store},loadSettings:function(n){return e.settingStores[t.entityID].store=n||{}}}}}]),t}();exports.Plugin=s;
},{"./util/settings":"../../../moduleWrappers/powercord/util/settings.js"}],"../../../moduleWrappers/powercord/components/settings/divider.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=l();return function(){var o,r=a(e);if(t){var n=a(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return i(this,o)}}function i(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=goosemodScope.webpackModules.common.React,s=goosemodScope.webpackModules.findByDisplayName("FormDivider"),y=goosemodScope.webpackModules.findByProps("dividerDefault","titleDefault"),d=function(e){n(u,p.PureComponent);var o=c(u);function u(){return t(this,u),o.apply(this,arguments)}return r(u,[{key:"render",value:function(){return p.createElement(s,{className:y.dividerDefault})}}]),u}();exports.default=d;
},{}],"../../../moduleWrappers/powercord/components/settings/formItem.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./divider"));function t(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=a();return function(){var o,r=l(e);if(t){var n=l(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return f(this,o)}}function f(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=goosemodScope.webpackModules.common.React,d=goosemodScope.webpackModules.findByDisplayName("FormItem"),m=goosemodScope.webpackModules.findByDisplayName("FormText"),b=goosemodScope.webpackModules.findByDisplayName("Flex"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),v=goosemodScope.webpackModules.findByProps("formText","description"),g=function(t){c(n,y.PureComponent);var o=s(n);function n(){return r(this,n),o.apply(this,arguments)}return i(n,[{key:"render",value:function(){var t=this;return y.createElement(d,{title:this.props.title,required:this.props.required,className:[b.Direction.VERTICAL,b.Justify.START,b.Align.STRETCH,b.Wrap.NO_WRAP,h.marginBottom20].join(" "),onClick:function(){t.props.onClick()}},this.props.children,this.props.note&&y.createElement(m,{className:v.description+(this.props.noteHasMargin?" "+h.marginTop8:"")},this.props.note),y.createElement(e.default))}}]),n}();exports.default=g;
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/textInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=b();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=goosemodScope.webpackModules.common.React,h=goosemodScope.webpackModules.findByDisplayName("TextInput"),m=function(t){p(n,O.PureComponent);var r=a(n);function n(){return u(this,n),r.apply(this,arguments)}return f(n,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,O.createElement(e.default,{title:t,note:this.props.note,required:this.props.required,noteHasMargin:!0},O.createElement(h,o({},this.props)))}}]),n}();exports.default=m;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/sliderInput.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=b();return function(){var r,o=d(e);if(t){var n=d(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=goosemodScope.webpackModules.common.React,O=goosemodScope.webpackModules.findByDisplayName("Slider"),h=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),v=function(t){p(o,m.PureComponent);var r=a(o);function o(){return u(this,o),r.apply(this,arguments)}return f(o,[{key:"render",value:function(){var t=this.props.children;return delete this.props.children,m.createElement(e.default,{title:t,note:this.props.note,required:this.props.required},m.createElement(O,n(n({},this.props),{},{className:h.marginTop20+(this.props.className?" "+this.props.className:"")})))}}]),o}();exports.default=v;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/buttonItem.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("./divider"));function o(e){return e&&e.__esModule?e:{default:e}}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function n(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}function c(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&s(e,o)}function s(e,o){return(s=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function l(e){var o=a();return function(){var t,r=f(e);if(o){var n=f(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return u(this,t)}}function u(e,o){if(o&&("object"===t(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=goosemodScope.webpackModules.common.React,y=goosemodScope.webpackModules.findByProps("Sizes","Colors","Looks","DropdownSizes"),m=goosemodScope.webpackModules.findByDisplayName("FormItem"),b=goosemodScope.webpackModules.findByDisplayName("FormText"),h=goosemodScope.webpackModules.findByDisplayName("Flex"),v=goosemodScope.webpackModules.findByProps("marginTop20","marginBottom20"),w=goosemodScope.webpackModules.findByProps("title","dividerDefault"),S=goosemodScope.webpackModules.findByProps("formText","placeholder"),g=goosemodScope.webpackModules.findByDisplayName("Tooltip"),E=function(o){c(n,d.PureComponent);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var o=this,t=this.props.children;return delete this.props.children,d.createElement(m,{className:[h.Direction.VERTICAL,h.Justify.START,h.Align.STRETCH,h.Wrap.NO_WRAP,v.marginBottom20].join(" ")},d.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},d.createElement("div",{},d.createElement("div",{className:w.labelRow,style:{marginBottom:"4px"}},d.createElement("label",{class:w.title},t)),d.createElement(b,{className:S.description},this.props.note)),d.createElement(g,{text:this.props.tooltipText,position:this.props.tooltipPosition,shouldShow:""!==this.props.tooltipText},function(){return d.createElement(y,{color:o.props.success?y.Colors.GREEN:o.props.color||y.Colors.BRAND,disabled:o.props.disabled,onClick:function(){return o.props.onClick()}},o.props.button)})),d.createElement(e.default))}}]),n}();exports.default=E;
},{"./divider":"../../../moduleWrappers/powercord/components/settings/divider.js"}],"../../../moduleWrappers/powercord/components/settings/category.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./formItem"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return u(e)||c(e)||i(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=h();return function(){var r,o=v(e);if(t){var n=v(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return m(this,r)}}function m(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=goosemodScope.webpackModules.common.React,w=goosemodScope.webpackModules.findByProps("title","dividerDefault"),S=goosemodScope.webpackModules.findByProps("formText","placeholder"),O=goosemodScope.webpackModules.findByDisplayName("FormText"),j=function(t){s(n,g.PureComponent);var r=d(n);function n(){return l(this,n),r.apply(this,arguments)}return p(n,[{key:"render",value:function(){var t=this,r=this.props.opened?this.props.children:[];return g.createElement.apply(g,[e.default,{title:g.createElement("div",{},g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",style:{transform:this.props.opened?"rotate(90deg)":"",marginRight:"10px"}},g.createElement("path",{fill:"var(--header-primary)",d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),g.createElement("label",{class:w.title,style:{textTransform:"none",display:"inline",verticalAlign:"top"}},this.props.name,g.createElement(O,{className:S.description,style:{marginLeft:"34px"}},this.props.description))),onClick:function(){t.props.onChange(!t.props.opened)}}].concat(o(r)))}}]),n}();exports.default=j;
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js"}],"../../../moduleWrappers/powercord/components/settings/switchItem.js":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach(function(t){n(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=s();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var b=goosemodScope.webpackModules.common.React,O=goosemodScope.webpackModules.findByDisplayName("SwitchItem"),d=function(e){i(n,b.Component);var t=a(n);function n(e){var r;o(this,n);var c=e.onChange;return e.onChange=function(e){c(e),r.props.value=e,r.forceUpdate()},r=t.call(this,e)}return u(n,[{key:"render",value:function(){return b.createElement(O,r({},this.props))}}]),n}();exports.default=d;
},{}],"../../../moduleWrappers/powercord/components/settings/index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"FormItem",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"TextInput",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"SliderInput",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"Divider",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"ButtonItem",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"Category",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(exports,"SwitchItem",{enumerable:!0,get:function(){return o.default}});var e=f(require("./formItem")),t=f(require("./textInput")),r=f(require("./sliderInput")),u=f(require("./divider")),n=f(require("./buttonItem")),i=f(require("./category")),o=f(require("./switchItem"));function f(e){return e&&e.__esModule?e:{default:e}}
},{"./formItem":"../../../moduleWrappers/powercord/components/settings/formItem.js","./textInput":"../../../moduleWrappers/powercord/components/settings/textInput.js","./sliderInput":"../../../moduleWrappers/powercord/components/settings/sliderInput.js","./divider":"../../../moduleWrappers/powercord/components/settings/divider.js","./buttonItem":"../../../moduleWrappers/powercord/components/settings/buttonItem.js","./category":"../../../moduleWrappers/powercord/components/settings/category.js","./switchItem":"../../../moduleWrappers/powercord/components/settings/switchItem.js"}],"../../../moduleWrappers/powercord/webpack.js":[function(require,module,exports) {
function e(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function r(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(e){o(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}function o(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var t=function(e){if(Array.isArray(e)){var r=e;e=function(e){return r.every(function(r){return e[r]||e.__proto__&&e.__proto__[r]})}}return e};module.exports=r({getModule:function(e,r,o){e=t(e);var n=goosemodScope.webpackModules.find(e);return r?new Promise(function(e){return e(n)}):n},getAllModules:function(e){return e=t(e),goosemodScope.webpackModules.findAll(e)},getModuleByDisplayName:function(e){return goosemodScope.webpackModules.find(function(r){return r.displayName&&r.displayName.toLowerCase()===e.toLowerCase()})}},goosemodScope.webpackModules.common);
},{}],"index.js":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("_powercord/global"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=l();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}require.cache["powercord/entities"]=require("powercord/entities"),require.cache["powercord/components/settings"]=require("powercord/components/settings"),require.cache["powercord/webpack"]=require("powercord/webpack");var y=require("powercord/entities"),d=y.Plugin,b=require("powercord/webpack"),h=new(function(e){i(r,d);var t=f(r);function r(){return n(this,r),t.apply(this,arguments)}return u(r,[{key:"startPlugin",value:function(){this.start()}},{key:"turnOnStreamerMode",value:function(){b.getModule(["dispatch"],!1).dispatch({type:"STREAMER_MODE_UPDATE",key:"enabled",value:!0})}},{key:"turnOffStreamerMode",value:function(){b.getModule(["dispatch"],!1).dispatch({type:"STREAMER_MODE_UPDATE",key:"enabled",value:!1})}},{key:"start",value:function(){var e=b.getModule(["dispatch"],!1);e.subscribe("STREAM_START",this.turnOnStreamerMode),e.subscribe("STREAM_STOP",this.turnOffStreamerMode)}},{key:"stop",value:function(){var e=b.getModule(["dispatch"],!1);e.unsubscribe("STREAM_START",this.turnOnStreamerMode),e.unsubscribe("STREAM_STOP",this.turnOffStreamerMode)}},{key:"pluginWillUnload",value:function(){this.stop()}}]),r}());exports.default=h;
},{"_powercord/global":"../../../moduleWrappers/powercord/global/index.js","powercord/entities":"../../../moduleWrappers/powercord/entities.js","powercord/components/settings":"../../../moduleWrappers/powercord/components/settings/index.js","powercord/webpack":"../../../moduleWrappers/powercord/webpack.js"}]},{},["index.js"], null);parcelRequire('index.js').default