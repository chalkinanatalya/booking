if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>t(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"c6f3f891a1ed1e64238eff734c8a9133"},{url:"main.js",revision:"0fee14116dc6914a9592fe04d4b8653b"},{url:"main.js.LICENSE.txt",revision:"e6bcc1393292b581b3b975bc14e9a16f"}],{})}));
