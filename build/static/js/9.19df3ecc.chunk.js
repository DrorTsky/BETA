(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{1146:function(e,r,t){"use strict";t.r(r);var n=t(20),c=t(628),o=t(1),a=t(622),s=t.n(a),i=t(623),l=t(690),d=t(625),u=function(){var e=Object(o.useState)("rgb(255, 255, 255)"),r=Object(c.a)(e,2),t=r[0],a=r[1],s=Object(o.createRef)();return Object(o.useEffect)((function(){var e=s.current.parentNode.firstChild,r=window.getComputedStyle(e).getPropertyValue("background-color");a(r)}),[s]),Object(n.jsx)("table",{className:"table w-100",ref:s,children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-muted",children:"HEX:"}),Object(n.jsx)("td",{className:"font-weight-bold",children:Object(l.rgbToHex)(t)})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-muted",children:"RGB:"}),Object(n.jsx)("td",{className:"font-weight-bold",children:t})]})]})})},b=function(e){var r=e.className,t=e.children,c=s()(r,"theme-color w-75 rounded mb-3");return Object(n.jsxs)(i.u,{xl:"2",md:"4",sm:"6",xs:"12",className:"mb-4",children:[Object(n.jsx)("div",{className:c,style:{paddingTop:"75%"}}),t,Object(n.jsx)(u,{})]})};r.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(i.j,{children:[Object(n.jsxs)(i.n,{children:["Theme colors",Object(n.jsx)(d.a,{href:"https://coreui.io/docs/utilities/colors/"})]}),Object(n.jsx)(i.k,{children:Object(n.jsxs)(i.wb,{children:[Object(n.jsx)(b,{className:"bg-primary",children:Object(n.jsx)("h6",{children:"Brand Primary Color"})}),Object(n.jsx)(b,{className:"bg-secondary",children:Object(n.jsx)("h6",{children:"Brand Secondary Color"})}),Object(n.jsx)(b,{className:"bg-success",children:Object(n.jsx)("h6",{children:"Brand Success Color"})}),Object(n.jsx)(b,{className:"bg-danger",children:Object(n.jsx)("h6",{children:"Brand Danger Color"})}),Object(n.jsx)(b,{className:"bg-warning",children:Object(n.jsx)("h6",{children:"Brand Warning Color"})}),Object(n.jsx)(b,{className:"bg-info",children:Object(n.jsx)("h6",{children:"Brand Info Color"})}),Object(n.jsx)(b,{className:"bg-light",children:Object(n.jsx)("h6",{children:"Brand Light Color"})}),Object(n.jsx)(b,{className:"bg-dark",children:Object(n.jsx)("h6",{children:"Brand Dark Color"})})]})})]}),Object(n.jsxs)(i.j,{children:[Object(n.jsx)(i.n,{children:"Grays"}),Object(n.jsx)(i.k,{children:Object(n.jsxs)(i.wb,{className:"mb-3",children:[Object(n.jsx)(b,{className:"bg-gray-100",children:Object(n.jsx)("h6",{children:"Gray 100 Color"})}),Object(n.jsx)(b,{className:"bg-gray-200",children:Object(n.jsx)("h6",{children:"Gray 200 Color"})}),Object(n.jsx)(b,{className:"bg-gray-300",children:Object(n.jsx)("h6",{children:"Gray 300 Color"})}),Object(n.jsx)(b,{className:"bg-gray-400",children:Object(n.jsx)("h6",{children:"Gray 400 Color"})}),Object(n.jsx)(b,{className:"bg-gray-500",children:Object(n.jsx)("h6",{children:"Gray 500 Color"})}),Object(n.jsx)(b,{className:"bg-gray-600",children:Object(n.jsx)("h6",{children:"Gray 600 Color"})}),Object(n.jsx)(b,{className:"bg-gray-700",children:Object(n.jsx)("h6",{children:"Gray 700 Color"})}),Object(n.jsx)(b,{className:"bg-gray-800",children:Object(n.jsx)("h6",{children:"Gray 800 Color"})}),Object(n.jsx)(b,{className:"bg-gray-900",children:Object(n.jsx)("h6",{children:"Gray 900 Color"})})]})})]})]})}},625:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t(44),c=t(20),o=t(160),a=t(1),s=t.n(a),i=t(623),l=function(e){var r=e.name,t=e.text,a=Object(o.a)(e,["name","text"]),s=r?"https://coreui.io/react/docs/components/".concat(r):e.href;return Object(c.jsx)("div",{className:"card-header-actions",children:Object(c.jsx)(i.db,Object(n.a)(Object(n.a)({},a),{},{href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(c.jsx)("small",{className:"text-muted",children:t||"docs"})}))})},d=s.a.memo(l)},628:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(630);function c(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,c=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(i){c=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(c)throw o}}return t}}(e,r)||Object(n.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},629:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,"a",(function(){return n}))},630:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t(629);function c(e,r){if(e){if("string"===typeof e)return Object(n.a)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(n.a)(e,r):void 0}}},690:function(e,r){!function(e,r){for(var t in r)e[t]=r[t]}(r,function(e){var r={};function t(n){if(r[n])return r[n].exports;var c=r[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(n,c,function(r){return e[r]}.bind(null,c));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r),t.d(r,"deepObjectsMerge",(function(){return n})),t.d(r,"getColor",(function(){return i})),t.d(r,"getStyle",(function(){return s})),t.d(r,"hexToRgb",(function(){return l})),t.d(r,"hexToRgba",(function(){return d})),t.d(r,"makeUid",(function(){return u})),t.d(r,"omitByKeys",(function(){return b})),t.d(r,"pickByKeys",(function(){return j})),t.d(r,"rgbToHex",(function(){return h}));var n=function e(r,t){for(var n=0,c=Object.keys(t);n<c.length;n++){var o=c[n];t[o]instanceof Object&&Object.assign(t[o],e(r[o],t[o]))}return Object.assign(r||{},t),r},c=function(){for(var e={},r=document.styleSheets,t="",n=r.length-1;n>-1;n--){for(var c=r[n].cssRules,o=c.length-1;o>-1;o--)if(".ie-custom-properties"===c[o].selectorText){t=c[o].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(r){if(r){var t=r.split(": ")[0],n=r.split(": ")[1];t&&n&&(e["--".concat(t.trim())]=n.trim())}})),e},o=function(){return Boolean(document.documentMode)&&document.documentMode>=10},a=function(e){return e.match(/^--.*/i)},s=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(a(e)&&o()){var n=c();r=n[e]}else r=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return r},i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),n=s(t,r);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var r,t,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(t,", ").concat(n,")")},d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,c,o=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!o)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),c=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),c=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(c,", ").concat(r/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,r){for(var t={},n=Object.keys(e),c=0;c<n.length;c++)!r.includes(n[c])&&(t[n[c]]=e[n[c]]);return t},j=function(e,r){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t},h=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var r=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!r)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(r[1],10).toString(16)),n="0".concat(parseInt(r[2],10).toString(16)),c="0".concat(parseInt(r[3],10).toString(16));return"#".concat(t.slice(-2)).concat(n.slice(-2)).concat(c.slice(-2))},f={deepObjectsMerge:n,getColor:i,getStyle:s,hexToRgb:l,hexToRgba:d,makeUid:u,omitByKeys:b,pickByKeys:j,rgbToHex:h};r.default=f}]))}}]);
//# sourceMappingURL=9.19df3ecc.chunk.js.map