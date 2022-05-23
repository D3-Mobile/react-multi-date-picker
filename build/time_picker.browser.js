!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).TimePicker=t(e.React)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw a}}return i}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){var t=e.direction,n=e.onClick,a=e.disabled;return r.default.createElement("span",{className:"rmdp-arrow-container ".concat(t," ").concat(a?"disabled":""),onClick:n},r.default.createElement("i",{className:"rmdp-arrow"}))}function s(e){var t=e.name,n=e.value,a=e.onChange,i=e.digits;return r.default.createElement("input",{type:"text",name:t,value:n,onChange:function(e){var r=o(e.target.value);if(isNaN(r))return;a(t,r)},onKeyDown:function(e){var r;if("ArrowUp"===e.key)r=1;else{if("ArrowDown"!==e.key)return;r=-1}a(t,o(n)+r)}});function o(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=c(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}(i);try{for(r.s();!(t=r.n()).done;){var n=t.value;e=e.replace(n,i.indexOf(n))}}catch(e){r.e(e)}finally{r.f()}return Number(e)}}var p=["state","setState","position","registerListener","calendarProps","datePickerProps","handleChange","nodes","Calendar","DatePicker","handlePropsChange","handleFocusedDate"];function m(e){return Array.isArray(e)}function y(t){var n=t.selectedDate,i=t.focused,o=t.handleFocusedDate,l=t.state,d=t.setState,c=t.format;return e.useEffect((function(){m(n)&&0!==n.length&&(i||u(n[0]))}),[i,n,u]),m(n)&&r.default.createElement("div",{style:{display:"flex",padding:"5px 0"}},r.default.createElement("select",{className:"rmdp-input",style:{height:"26px",width:"90%",margin:"auto"},value:(null==i?void 0:i.day)||"",onChange:function(e){return u(n.find((function(t){return t.day.toString()===e.target.value})))}},n.map((function(e){return r.default.createElement("option",{key:e.day,value:e.day},e.format(c))}))));function u(e){d(a(a({},l),{},{focused:e})),o(e)}}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".rmdp-time-picker.left div,.rmdp-time-picker.right div{margin:auto}.rmdp-time-picker{display:flex;padding:3px 0}.rmdp-time-picker.active{display:flex}.rmdp-time-picker div{align-items:center;display:flex;flex:1;flex-direction:column;margin-top:1px}.rmdp-time-picker div input{border:none;flex-grow:1;font-size:14px;padding:5px 2px;text-align:center;width:20px}.rmdp-time-picker div input::-webkit-inner-spin-button,.rmdp-time-picker div input::-webkit-outer-spin-button{-webkit-appearance:none}.rmdp-time-picker div input[type=number]{-moz-appearance:textfield}.rmdp-time-picker .dvdr{display:flex;flex-direction:column;justify-content:center;margin-top:-5px}.rmdp-time-picker div .rmdp-am{color:#000;font-size:13px;line-height:22px;margin-top:2px}.rmdp-only-time-picker{margin-bottom:0;width:220px}.rmdp-up i{margin-top:7px;transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.rmdp-down i{margin-top:3px;transform:rotate(45deg);-webkit-transform:rotate(45deg)}@media (max-height:400px),(max-width:400px){.rmdp-time-picker div input{font-size:12px}.rmdp-time-picker div .rmdp-am{font-size:12px;line-height:22px}}");var h=["state","setState","handleChange","position","calendarProps","nodes","Calendar","hideSeconds","className","style","handleFocusedDate","format","header"];function g(e){var t=e.name,n=d(e.values,2),a=n[0],i=n[1],o=e.update,l=e.digits,c=e.hideDivider;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement(f,{direction:"rmdp-up",onClick:function(){return o(t,a+1)}}),r.default.createElement(s,{value:i,onChange:o,digits:l,name:t}),r.default.createElement(f,{direction:"rmdp-down",onClick:function(){return o(t,a-1)}})),!c&&r.default.createElement("span",{className:"dvdr"},":"))}return function(t){var n=t.state,i=t.setState,c=t.handleChange,u=t.position,s=t.calendarProps.formattingIgnoreList;t.nodes,t.Calendar;var m=t.hideSeconds,v=t.className,b=void 0===v?"":v,x=t.style,w=void 0===x?{}:x,k=t.handleFocusedDate,E=t.format,O=void 0===E?"YYYY/MM/DD":E,C=t.header,j=void 0===C||C,P=l(t,h),S=n.date,D=n.selectedDate,A=n.multiple,N=n.range,F=n.focused,T=S.meridiems,z=(A||N?F:D)||S,I=["left","right"].includes(u),L=e.useMemo((function(){var e=S._format;return"string"==typeof e&&(Array.isArray(s)&&s.forEach((function(t){"string"==typeof t&&(e=e.replace(new RegExp(t,"g"),""))})),e.toLowerCase().includes("a")||e.includes("hh"))}),[S._format,s]),M=L&&z.hour<12;return r.default.createElement("div",{style:{display:"grid"}},I&&j&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{margin:"auto"}},r.default.createElement("div",{style:{margin:"5px 0",fontSize:"14px"}},z.month.name),r.default.createElement("div",{style:{margin:"10px 0",fontSize:"25px"}},z.format("D"))),r.default.createElement(y,{selectedDate:D,focused:F,handleFocusedDate:k,state:n,setState:i,format:O})),r.default.createElement("div",o({className:"rmdp-time-picker ".concat(u," ").concat(b||""),style:a({direction:"ltr",minWidth:I?"120px":"220px"},w)},function(e){return e.state,e.setState,e.position,e.registerListener,e.calendarProps,e.datePickerProps,e.handleChange,e.nodes,e.Calendar,e.DatePicker,e.handlePropsChange,e.handleFocusedDate,l(e,p)}(P)),[["hour",L?"hh":"HH"],["minute","mm"],["second","ss"]].map((function(e,t){var n=d(e,2),a=n[0],i=n[1];return"second"===a&&m?null:r.default.createElement(g,{key:t,name:a,values:H(a,i),update:Y,digits:S.digits,hideDivider:"second"===a||"minute"===a&&m})})),r.default.createElement("div",{style:{display:L?"flex":"none"}},r.default.createElement(f,{direction:"rmdp-up",onClick:U}),r.default.createElement("div",{className:"rmdp-am"},(M?T[0][1]:T[1][1]).toUpperCase()),r.default.createElement(f,{direction:"rmdp-down",onClick:U}))));function Y(e,t){z[e]=t,B()}function U(){z.hour+=z.hour<12?12:-12,B()}function B(){c(D,a(a({},n),{},{selectedDate:D,focused:F}))}function H(e,t){return z[e]||(z[e]=0),[z[e],z.format(t)]}}}));
