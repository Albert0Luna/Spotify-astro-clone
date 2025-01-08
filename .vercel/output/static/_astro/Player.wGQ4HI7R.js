import{u as I,j as l,b as xe,P as ge,a as ve,N as Se}from"./PlayerIcons.DIGvdAlF.js";import{r as a,$ as R}from"./index.BYCwpWnT.js";import"./index.CtzEHZnQ.js";function J(e){const n=()=>e.songs.length===0||e.song===null?-1:e.songs.findIndex(r=>r.id===e.song.id)??-1;return{getPreviousSong:()=>{const r=n();return r<=0?null:e.songs[r-1]},getNextSong:()=>{const{songs:r}=e,s=r.length;if(s===0)return null;const i=n();return i+1>=s?null:r[i+1]}}}function be(){const{currentMusic:e,isPlaying:n,setIsPlaying:t,setCurrentMusic:o}=I(f=>f),{getNextSong:r,getPreviousSong:s}=J(e),i=()=>{e.song!==null&&t(!n)},c=()=>{const f=r();f&&o({...e,song:f})},u=()=>{const f=s();f&&o({...e,song:f})};return l.jsxs("div",{className:"flex justify-center flex-row flex-nowrap items-center gap-4",children:[l.jsx("button",{className:"hover:scale-110",onClick:u,title:"Previous song",children:l.jsx(xe,{})}),l.jsx("button",{className:"bg-white text-black rounded-full p-2 hover:scale-110",onClick:i,children:n?l.jsx(ge,{}):l.jsx(ve,{})}),l.jsx("button",{className:"hover:scale-110",onClick:c,title:"Next song",children:l.jsx(Se,{})})]})}const we=({image:e,title:n,artists:t})=>l.jsxs("div",{className:`
        flex items-center gap-5 relative
        overflow-hidden
      `,children:[e&&l.jsx("picture",{className:"w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden",children:l.jsx("img",{src:e,alt:n})}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("h3",{className:"font-semibold text-sm block",children:n}),l.jsx("span",{className:"text-xs opacity-80",children:t?.join(", ")})]})]});function C(){return C=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},C.apply(this,arguments)}function Q(e,[n,t]){return Math.min(t,Math.max(n,e))}function _(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),t===!1||!r.defaultPrevented)return n?.(r)}}function ye(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function ee(...e){return n=>e.forEach(t=>ye(t,n))}function j(...e){return a.useCallback(ee(...e),e)}function ne(e,n=[]){let t=[];function o(s,i){const c=a.createContext(i),u=t.length;t=[...t,i];function f(d){const{scope:m,children:x,...p}=d,$=m?.[e][u]||c,h=a.useMemo(()=>p,Object.values(p));return a.createElement($.Provider,{value:h},x)}function v(d,m){const x=m?.[e][u]||c,p=a.useContext(x);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${s}\``)}return f.displayName=s+"Provider",[f,v]}const r=()=>{const s=t.map(i=>a.createContext(i));return function(c){const u=c?.[e]||s;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return r.scopeName=e,[o,Ce(r,...n)]}function Ce(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((c,{useScope:u,scopeName:f})=>{const d=u(s)[`__scope${f}`];return{...c,...d}},{});return a.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}function te(e){const n=a.useRef(e);return a.useEffect(()=>{n.current=e}),a.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function Ee({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,r]=Pe({defaultProp:n,onChange:t}),s=e!==void 0,i=s?e:o,c=te(t),u=a.useCallback(f=>{if(s){const d=typeof f=="function"?f(e):f;d!==e&&c(d)}else r(f)},[s,e,r,c]);return[i,u]}function Pe({defaultProp:e,onChange:n}){const t=a.useState(e),[o]=t,r=a.useRef(o),s=te(n);return a.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),t}const Re=a.createContext(void 0);function je(e){const n=a.useContext(Re);return e||n||"ltr"}function Me(e){const n=a.useRef({value:e,previous:e});return a.useMemo(()=>(n.current.value!==e&&(n.current.previous=n.current.value,n.current.value=e),n.current.previous),[e])}const Ve=globalThis?.document?a.useLayoutEffect:()=>{};function Ne(e){const[n,t]=a.useState(void 0);return Ve(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let i,c;if("borderBoxSize"in s){const u=s.borderBoxSize,f=Array.isArray(u)?u[0]:u;i=f.inlineSize,c=f.blockSize}else i=e.offsetWidth,c=e.offsetHeight;t({width:i,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else t(void 0)},[e]),n}const B=a.forwardRef((e,n)=>{const{children:t,...o}=e,r=a.Children.toArray(t),s=r.find(De);if(s){const i=s.props.children,c=r.map(u=>u===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:u);return a.createElement(L,C({},o,{ref:n}),a.isValidElement(i)?a.cloneElement(i,void 0,c):null)}return a.createElement(L,C({},o,{ref:n}),t)});B.displayName="Slot";const L=a.forwardRef((e,n)=>{const{children:t,...o}=e;return a.isValidElement(t)?a.cloneElement(t,{...Ae(o,t.props),ref:n?ee(n,t.ref):t.ref}):a.Children.count(t)>1?a.Children.only(null):null});L.displayName="SlotClone";const _e=({children:e})=>a.createElement(a.Fragment,null,e);function De(e){return a.isValidElement(e)&&e.type===_e}function Ae(e,n){const t={...n};for(const o in n){const r=e[o],s=n[o];/^on[A-Z]/.test(o)?r&&s?t[o]=(...c)=>{s(...c),r(...c)}:r&&(t[o]=r):o==="style"?t[o]={...r,...s}:o==="className"&&(t[o]=[r,s].filter(Boolean).join(" "))}return{...e,...t}}const Ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],k=Ie.reduce((e,n)=>{const t=a.forwardRef((o,r)=>{const{asChild:s,...i}=o,c=s?B:n;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(c,C({},i,{ref:r}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function Te(e){const n=e+"CollectionProvider",[t,o]=ne(n),[r,s]=t(n,{collectionRef:{current:null},itemMap:new Map}),i=x=>{const{scope:p,children:$}=x,h=R.useRef(null),S=R.useRef(new Map).current;return R.createElement(r,{scope:p,itemMap:S,collectionRef:h},$)},c=e+"CollectionSlot",u=R.forwardRef((x,p)=>{const{scope:$,children:h}=x,S=s(c,$),y=j(p,S.collectionRef);return R.createElement(B,{ref:y},h)}),f=e+"CollectionItemSlot",v="data-radix-collection-item",d=R.forwardRef((x,p)=>{const{scope:$,children:h,...S}=x,y=R.useRef(null),g=j(p,y),w=s(f,$);return R.useEffect(()=>(w.itemMap.set(y,{ref:y,...S}),()=>void w.itemMap.delete(y))),R.createElement(B,{[v]:"",ref:g},h)});function m(x){const p=s(e+"CollectionConsumer",x);return R.useCallback(()=>{const h=p.collectionRef.current;if(!h)return[];const S=Array.from(h.querySelectorAll(`[${v}]`));return Array.from(p.itemMap.values()).sort((w,M)=>S.indexOf(w.ref.current)-S.indexOf(M.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:i,Slot:u,ItemSlot:d},m,o]}const oe=["PageUp","PageDown"],re=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],se={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},T="Slider",[H,ze,Be]=Te(T),[ae,yn]=ne(T,[Be]),[ke,K]=ae(T),Ke=a.forwardRef((e,n)=>{const{name:t,min:o=0,max:r=100,step:s=1,orientation:i="horizontal",disabled:c=!1,minStepsBetweenThumbs:u=0,defaultValue:f=[o],value:v,onValueChange:d=()=>{},onValueCommit:m=()=>{},inverted:x=!1,...p}=e,[$,h]=a.useState(null),S=j(n,b=>h(b)),y=a.useRef(new Set),g=a.useRef(0),w=i==="horizontal",M=$?!!$.closest("form"):!0,Y=w?Oe:Le,[E=[],me]=Ee({prop:v,defaultProp:f,onChange:b=>{var P;(P=[...y.current][g.current])===null||P===void 0||P.focus(),d(b)}}),W=a.useRef(E);function pe(b){const P=Ze(E,b);D(b,P)}function he(b){D(b,g.current)}function $e(){const b=W.current[g.current];E[g.current]!==b&&m(E)}function D(b,P,{commit:z}={commit:!1}){const X=nn(s),O=tn(Math.round((b-o)/s)*s+o,X),A=Q(O,[o,r]);me((N=[])=>{const V=Ge(N,A,P);if(en(V,u*s)){g.current=V.indexOf(A);const G=String(V)!==String(N);return G&&z&&m(V),G?V:N}else return N})}return a.createElement(ke,{scope:e.__scopeSlider,disabled:c,min:o,max:r,valueIndexToChangeRef:g,thumbs:y.current,values:E,orientation:i},a.createElement(H.Provider,{scope:e.__scopeSlider},a.createElement(H.Slot,{scope:e.__scopeSlider},a.createElement(Y,C({"aria-disabled":c,"data-disabled":c?"":void 0},p,{ref:S,onPointerDown:_(p.onPointerDown,()=>{c||(W.current=E)}),min:o,max:r,inverted:x,onSlideStart:c?void 0:pe,onSlideMove:c?void 0:he,onSlideEnd:c?void 0:$e,onHomeKeyDown:()=>!c&&D(o,0,{commit:!0}),onEndKeyDown:()=>!c&&D(r,E.length-1,{commit:!0}),onStepKeyDown:({event:b,direction:P})=>{if(!c){const O=oe.includes(b.key)||b.shiftKey&&re.includes(b.key)?10:1,A=g.current,N=E[A],V=s*O*P;D(N+V,A,{commit:!0})}}})))),M&&E.map((b,P)=>a.createElement(Xe,{key:P,name:t?t+(E.length>1?"[]":""):void 0,value:b})))}),[ce,ie]=ae(T,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Oe=a.forwardRef((e,n)=>{const{min:t,max:o,dir:r,inverted:s,onSlideStart:i,onSlideMove:c,onSlideEnd:u,onStepKeyDown:f,...v}=e,[d,m]=a.useState(null),x=j(n,g=>m(g)),p=a.useRef(),$=je(r),h=$==="ltr",S=h&&!s||!h&&s;function y(g){const w=p.current||d.getBoundingClientRect(),M=[0,w.width],E=F(M,S?[t,o]:[o,t]);return p.current=w,E(g-w.left)}return a.createElement(ce,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width"},a.createElement(le,C({dir:$,"data-orientation":"horizontal"},v,{ref:x,style:{...v.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:g=>{const w=y(g.clientX);i?.(w)},onSlideMove:g=>{const w=y(g.clientX);c?.(w)},onSlideEnd:()=>{p.current=void 0,u?.()},onStepKeyDown:g=>{const M=se[S?"from-left":"from-right"].includes(g.key);f?.({event:g,direction:M?-1:1})}})))}),Le=a.forwardRef((e,n)=>{const{min:t,max:o,inverted:r,onSlideStart:s,onSlideMove:i,onSlideEnd:c,onStepKeyDown:u,...f}=e,v=a.useRef(null),d=j(n,v),m=a.useRef(),x=!r;function p($){const h=m.current||v.current.getBoundingClientRect(),S=[0,h.height],g=F(S,x?[o,t]:[t,o]);return m.current=h,g($-h.top)}return a.createElement(ce,{scope:e.__scopeSlider,startEdge:x?"bottom":"top",endEdge:x?"top":"bottom",size:"height",direction:x?1:-1},a.createElement(le,C({"data-orientation":"vertical"},f,{ref:d,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:$=>{const h=p($.clientY);s?.(h)},onSlideMove:$=>{const h=p($.clientY);i?.(h)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:$=>{const S=se[x?"from-bottom":"from-top"].includes($.key);u?.({event:$,direction:S?-1:1})}})))}),le=a.forwardRef((e,n)=>{const{__scopeSlider:t,onSlideStart:o,onSlideMove:r,onSlideEnd:s,onHomeKeyDown:i,onEndKeyDown:c,onStepKeyDown:u,...f}=e,v=K(T,t);return a.createElement(k.span,C({},f,{ref:n,onKeyDown:_(e.onKeyDown,d=>{d.key==="Home"?(i(d),d.preventDefault()):d.key==="End"?(c(d),d.preventDefault()):oe.concat(re).includes(d.key)&&(u(d),d.preventDefault())}),onPointerDown:_(e.onPointerDown,d=>{const m=d.target;m.setPointerCapture(d.pointerId),d.preventDefault(),v.thumbs.has(m)?m.focus():o(d)}),onPointerMove:_(e.onPointerMove,d=>{d.target.hasPointerCapture(d.pointerId)&&r(d)}),onPointerUp:_(e.onPointerUp,d=>{const m=d.target;m.hasPointerCapture(d.pointerId)&&(m.releasePointerCapture(d.pointerId),s(d))})}))}),He="SliderTrack",Fe=a.forwardRef((e,n)=>{const{__scopeSlider:t,...o}=e,r=K(He,t);return a.createElement(k.span,C({"data-disabled":r.disabled?"":void 0,"data-orientation":r.orientation},o,{ref:n}))}),q="SliderRange",Ue=a.forwardRef((e,n)=>{const{__scopeSlider:t,...o}=e,r=K(q,t),s=ie(q,t),i=a.useRef(null),c=j(n,i),u=r.values.length,f=r.values.map(m=>ue(m,r.min,r.max)),v=u>1?Math.min(...f):0,d=100-Math.max(...f);return a.createElement(k.span,C({"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0},o,{ref:c,style:{...e.style,[s.startEdge]:v+"%",[s.endEdge]:d+"%"}}))}),Z="SliderThumb",Ye=a.forwardRef((e,n)=>{const t=ze(e.__scopeSlider),[o,r]=a.useState(null),s=j(n,c=>r(c)),i=a.useMemo(()=>o?t().findIndex(c=>c.ref.current===o):-1,[t,o]);return a.createElement(We,C({},e,{ref:s,index:i}))}),We=a.forwardRef((e,n)=>{const{__scopeSlider:t,index:o,...r}=e,s=K(Z,t),i=ie(Z,t),[c,u]=a.useState(null),f=j(n,h=>u(h)),v=Ne(c),d=s.values[o],m=d===void 0?0:ue(d,s.min,s.max),x=qe(o,s.values.length),p=v?.[i.size],$=p?Je(p,m,i.direction):0;return a.useEffect(()=>{if(c)return s.thumbs.add(c),()=>{s.thumbs.delete(c)}},[c,s.thumbs]),a.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[i.startEdge]:`calc(${m}% + ${$}px)`}},a.createElement(H.ItemSlot,{scope:e.__scopeSlider},a.createElement(k.span,C({role:"slider","aria-label":e["aria-label"]||x,"aria-valuemin":s.min,"aria-valuenow":d,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0},r,{ref:f,style:d===void 0?{display:"none"}:e.style,onFocus:_(e.onFocus,()=>{s.valueIndexToChangeRef.current=o})}))))}),Xe=e=>{const{value:n,...t}=e,o=a.useRef(null),r=Me(n);return a.useEffect(()=>{const s=o.current,i=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(i,"value").set;if(r!==n&&u){const f=new Event("input",{bubbles:!0});u.call(s,n),s.dispatchEvent(f)}},[r,n]),a.createElement("input",C({style:{display:"none"}},t,{ref:o,defaultValue:n}))};function Ge(e=[],n,t){const o=[...e];return o[t]=n,o.sort((r,s)=>r-s)}function ue(e,n,t){const s=100/(t-n)*(e-n);return Q(s,[0,100])}function qe(e,n){return n>2?`Value ${e+1} of ${n}`:n===2?["Minimum","Maximum"][e]:void 0}function Ze(e,n){if(e.length===1)return 0;const t=e.map(r=>Math.abs(r-n)),o=Math.min(...t);return t.indexOf(o)}function Je(e,n,t){const o=e/2,s=F([0,50],[0,o]);return(o-s(n)*t)*t}function Qe(e){return e.slice(0,-1).map((n,t)=>e[t+1]-n)}function en(e,n){if(n>0){const t=Qe(e);return Math.min(...t)>=n}return!0}function F(e,n){return t=>{if(e[0]===e[1]||n[0]===n[1])return n[0];const o=(n[1]-n[0])/(e[1]-e[0]);return n[0]+o*(t-e[0])}}function nn(e){return(String(e).split(".")[1]||"").length}function tn(e,n){const t=Math.pow(10,n);return Math.round(e*t)/t}const de=Ke,on=Fe,rn=Ue,sn=Ye;function fe(e){var n,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=fe(e[n]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function an(){for(var e,n,t=0,o="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=fe(e))&&(o&&(o+=" "),o+=n);return o}const U=a.forwardRef(({className:e,...n},t)=>l.jsxs(de,{ref:t,className:an("relative flex touch-none select-none items-center group",e),...n,children:[l.jsx(on,{className:"relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800",children:l.jsx(rn,{className:"absolute h-full bg-white group-hover:bg-green-500"})}),l.jsx(sn,{className:"hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));U.displayName=de.displayName;const cn=({audio:e})=>{const[n,t]=a.useState(0);a.useEffect(()=>(e.current.addEventListener("timeupdate",o),()=>{e.current.removeEventListener("timeupdate",o)}),[]);const o=()=>{t(e.current.currentTime)},r=i=>{if(i==null)return"0:00";const c=Math.floor(i%60);return`${Math.floor(i/60)}:${c.toString().padStart(2,"0")}`},s=e?.current?.duration??0;return l.jsxs("div",{className:"flex gap-x-3 text-xs pt-2",children:[l.jsx("span",{className:"opacity-50 w-12 text-right",children:r(n)}),l.jsx(U,{value:[n],max:e?.current?.duration??0,min:0,className:"w-[400px]",onValueChange:i=>{const[c]=i;e.current.currentTime=c}}),l.jsx("span",{className:"opacity-50 w-12",children:s?r(s):"0:00"})]})},ln=()=>l.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen apagado",viewBox:"0 0 16 16",children:[l.jsx("path",{d:"M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"}),l.jsx("path",{d:"M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"})]}),un=()=>l.jsx("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-label":"Volumen bajo","aria-hidden":"true",id:"volume-icon",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"})}),dn=()=>l.jsx("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-label":"Volumen medio","aria-hidden":"true",id:"volume-icon",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"})}),fn=()=>l.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen alto",id:"volume-icon",viewBox:"0 0 16 16",children:[l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"}),l.jsx("path",{d:"M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"})]}),mn=e=>e<.1,pn=e=>e>=.1&&e<.5,hn=e=>e>=.5&&e<.9,$n=e=>e>=.9,xn=e=>l.jsxs(l.Fragment,{children:[mn(e)&&l.jsx(ln,{}),pn(e)&&l.jsx(un,{}),hn(e)&&l.jsx(dn,{}),$n(e)&&l.jsx(fn,{})]}),gn=()=>{const e=I(n=>n.volume);return xn(e)},vn=()=>{const e=I(s=>s.volume),n=I(s=>s.setVolume),t=a.useRef(e),o=e<.1,r=()=>{o?n(t.current):(t.current=e,n(0))};return l.jsxs("div",{className:"flex justify-center gap-x-2 text-white",children:[l.jsx("button",{className:"opacity-70 hover:opacity-100 transition",onClick:r,children:l.jsx(gn,{})}),l.jsx(U,{defaultValue:[100],max:100,min:0,value:[e*100],className:"w-[95px]",onValueChange:s=>{const[i]=s,c=i/100;n(c)}})]})};function Cn(){const{currentMusic:e,isPlaying:n,volume:t,setCurrentMusic:o}=I(u=>u),r=a.useRef(),{getNextSong:s}=J(e);a.useEffect(()=>{e.song&&(n?i():r.current.pause())},[n]),a.useEffect(()=>{r.current.volume=t},[t]),a.useEffect(()=>{const{song:u,playlist:f}=e;u&&(r.current.src=`/music/${f?.id}/0${u.id}.mp3`,i())},[e]);const i=()=>{r.current.play().catch(u=>console.log("error playing: ",u))};function c(){const u=s();u&&o({...e,song:u})}return l.jsxs("div",{className:"flex flex-row justify-between w-full px-1 z-50",children:[l.jsx("div",{className:"w-[200px]",children:l.jsx(we,{...e.song})}),l.jsx("div",{className:"grid place-content-center gap-4 flex-1",children:l.jsxs("div",{className:"flex justify-center flex-col items-center",children:[l.jsx(be,{}),l.jsx(cn,{audio:r}),l.jsx("audio",{ref:r,onEnded:c})]})}),l.jsx("div",{className:"grid place-content-center",children:l.jsx(vn,{})})]})}export{Cn as Player};