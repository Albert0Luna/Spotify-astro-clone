import{u as P,j as a,P as p,a as h}from"./PlayerIcons.DIGvdAlF.js";import{g as d}from"./ApiService.MFN35oF4.js";import"./index.BYCwpWnT.js";function j({id:s,size:i="small"}){const{currentMusic:l,isPlaying:n,setIsPlaying:e,setCurrentMusic:c}=P(t=>t),u=n&&l?.playlist?.id===s,y=l?.playlist?.id===s,m=()=>{if(y){e(!n);return}d(Number(s)).then(t=>{const{songs:o,playlist:g}=t;c({songs:o,playlist:g,song:o[0]})}).then(()=>{e(!0)})},r=i==="small"?"w-4 h-4":"w-5 h-5";return a.jsx("button",{onClick:m,className:"card-play-button rounded-full text-black bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400",children:u?a.jsx(p,{className:r}):a.jsx(h,{className:r})})}export{j as CardPlayButton};