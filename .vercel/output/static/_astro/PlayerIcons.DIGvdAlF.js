import{r as y,g as I}from"./index.BYCwpWnT.js";var E={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=y,N=Symbol.for("react.element"),P=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,F=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)R.call(t,r)&&!M.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:N,type:e,key:s,ref:i,props:o,_owner:F.current}}g.Fragment=P;g.jsx=w;g.jsxs=w;E.exports=g;var l=E.exports;const j=e=>{let t;const n=new Set,r=(u,m)=>{const a=typeof u=="function"?u(t):u;if(!Object.is(a,t)){const f=t;t=m??typeof a!="object"?a:Object.assign({},t,a),n.forEach(S=>S(t,f))}},o=()=>t,d={setState:r,getState:o,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{n.clear()}};return t=e(r,o,d),d},B=e=>e?j(e):j;var k={exports:{}},O={},C={exports:{}},V={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=y;function D(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T=typeof Object.is=="function"?Object.is:D,z=v.useState,A=v.useEffect,W=v.useLayoutEffect,q=v.useDebugValue;function Y(e,t){var n=t(),r=z({inst:{value:n,getSnapshot:t}}),o=r[0].inst,s=r[1];return W(function(){o.value=n,o.getSnapshot=t,_(o)&&s({inst:o})},[e,n,t]),A(function(){return _(o)&&s({inst:o}),e(function(){_(o)&&s({inst:o})})},[e]),q(n),n}function _(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!T(e,n)}catch{return!0}}function H(e,t){return t()}var U=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?H:Y;V.useSyncExternalStore=v.useSyncExternalStore!==void 0?v.useSyncExternalStore:U;C.exports=V;var G=C.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=y,J=G;function K(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q=typeof Object.is=="function"?Object.is:K,X=J.useSyncExternalStore,Z=x.useRef,ee=x.useEffect,te=x.useMemo,re=x.useDebugValue;O.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var s=Z(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=te(function(){function u(c){if(!m){if(m=!0,a=c,c=r(c),o!==void 0&&i.hasValue){var p=i.value;if(o(p,c))return f=p}return f=c}if(p=f,Q(a,c))return p;var b=r(c);return o!==void 0&&o(p,b)?p:(a=c,f=b)}var m=!1,a,f,S=n===void 0?null:n;return[function(){return u(t())},S===null?void 0:function(){return u(S())}]},[t,n,r,o]);var d=X(e,s[0],s[1]);return ee(function(){i.hasValue=!0,i.value=d},[d]),re(d),d};k.exports=O;var ne=k.exports;const oe=I(ne),{useSyncExternalStoreWithSelector:se}=oe;function ie(e,t=e.getState,n){const r=se(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return y.useDebugValue(r),r}const ue=e=>{const t=typeof e=="function"?B(e):e,n=(r,o)=>ie(t,r,o);return Object.assign(n,t),n},ae=e=>ue(e),h={red:{accent:"#da2735",dark:"#7f1d1d"},orange:{accent:"#cc5400",dark:"#7c2d12"},yellow:{accent:"#ffae00",dark:"#78350f"},green:{accent:"#21c872",dark:"#14532d"},teal:{accent:"#2ee9d7",dark:"#134e4a"},blue:{accent:"#1e3a8a",dark:"#1e3a8a"},indigo:{accent:"#394bd5",dark:"#312e81"},purple:{accent:"#df24ff",dark:"#581c87"},pink:{accent:"#f33b73",dark:"#831843"},emerald:{accent:"#0c6e54",dark:"#064e3b"},rose:{accent:"#ed2377",dark:"#871b48"},gray:{accent:"#555555",dark:"#27272a"}},$=[{id:"1",albumId:1,title:"Chill Lo-Fi Music",color:h.yellow,cover:"https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",artists:["NoSpirit","Casiio"]},{id:"2",albumId:2,title:"Lo-Fi Chill Session",color:h.green,cover:"https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",artists:["Kupla","Blue Fox"]},{id:"3",albumId:3,title:"Study Session",color:h.rose,cover:"https://f4.bcbits.com/img/a1435058381_65.jpg",artists:["Tenno","xander","Team Astro"]},{id:"4",albumId:4,title:"Blue Note Study Time",color:h.blue,cover:"https://f4.bcbits.com/img/a1962013209_16.jpg",artists:["Raimu","Yasumu"]},{id:"5",albumId:5,title:"Chau Saura Session",color:h.purple,cover:"https://f4.bcbits.com/img/a2793859494_16.jpg",artists:["Chau Saura","amies","kyu"]},{id:"6",albumId:6,title:"Like a Necessity",color:h.orange,cover:"https://f4.bcbits.com/img/a0363730459_16.jpg",artists:["WFS","Nadav Cohen"]}];$.map(e=>({...e,id:e.id+"_more"}));$.map(e=>({...e,id:e.id+"_side"}));const le=ae(e=>({isPlaying:!1,currentMusic:{playlist:null,song:null,songs:[]},volume:.1,setVolume:t=>e({volume:t}),setIsPlaying:t=>e({isPlaying:t}),setCurrentMusic:t=>{e({currentMusic:t})}})),de=({className:e})=>l.jsx("svg",{className:e,role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",fill:"currentColor",children:l.jsx("path",{d:"M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"})}),fe=({className:e})=>l.jsx("svg",{className:e,role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",fill:"currentColor",children:l.jsx("path",{d:"M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"})}),pe=()=>l.jsx("svg",{fill:"currentColor",role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"})}),he=()=>l.jsx("svg",{fill:"currentColor",role:"img",height:"16",width:"16","aria-hidden":"true",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"})});export{he as N,de as P,fe as a,pe as b,l as j,le as u};
