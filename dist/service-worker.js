if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>r(e,o),f={module:{uri:o},exports:l,require:c};s[o]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(n(...e),l)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"profile-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.e8f93552.css",revision:null},{url:"/css/chunk-vendors.27a027ec.css",revision:null},{url:"/curriculo.pdf",revision:"352cdaff28a2aa22cfddb6073f7e75a4"},{url:"/index.html",revision:"aafe05a7f7395e6629ef962f2eb8e7fa"},{url:"/js/app.78f5e67e.js",revision:null},{url:"/js/chunk-vendors.da317d80.js",revision:null},{url:"/manifest.json",revision:"e784631c7882c165336befbd819107bf"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
