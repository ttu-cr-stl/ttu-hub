if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),d={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Banner.png",revision:"632ca1fd5c5fc93e0756a6050499f15a"},{url:"/LogoSTL.png",revision:"a74b78f8f4cf695f51cc9ede0b8ead01"},{url:"/TTULogo.png",revision:"1248ac4fcfc8093e1a60ed6c6c847812"},{url:"/TTULogoBig.png",revision:"15ce90464feb2fae1cb34b0b8618bb56"},{url:"/_next/static/chunks/173-3a92dfafd63c8ca7.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/190-07b0ca9234f8cd59.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/231-d506248032034470.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/286-7c05188fd1ea15d8.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/318.67461aab1aa569d4.js",revision:"67461aab1aa569d4"},{url:"/_next/static/chunks/331-0816b586bdef7282.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/3ab9597f-dcc27125e9f7a01e.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/458-128f44138d9be50a.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/550.78062c8e0f31c7e4.js",revision:"78062c8e0f31c7e4"},{url:"/_next/static/chunks/5ab80550-1343a160ad9b0f18.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/729-d9010d2da7ca7828.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/772-7cb9e929ddec6940.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/804-96725d39a6b0683a.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/866.be1196c0aca7bd0b.js",revision:"be1196c0aca7bd0b"},{url:"/_next/static/chunks/868-e53c9353efc7228d.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/event/%5Bid%5D/page-872150c2cc07333e.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/event/%5Bid%5D/users/page-39c2ffc800b15a0f.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/layout-cac99f8ac42cb2a8.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/org/%5Bid%5D/page-a3381d54f55816cf.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/(subpages)/user/%5Busername%5D/page-3ecc4b1305f963b4.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/explore/page-5a61a4c9e2fbe79d.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/layout-8b54b92374a4f60a.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/leaderboard/page-f2a59e81de45b723.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/loading-4ee8e350b80e8178.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/page-032b047681b0cb09.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/settings/page-1e7da17c6ea2a222.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/settings/profile/page-c7d02d2a7d1878a3.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/(main)/wallet/page-289e4147ee93f5d2.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/layout-d6b906e958c05b0b.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/(protected)/onboarding/page-8d0dcde18a508c90.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/_not-found/page-a0c0cf19153080d5.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/layout-bb11bca59bd41e9c.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/app/login/page-83b213a1b04ee4a0.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/fd9d1056-f2db31f5bc9f916f.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/framework-b9768e636829c6d6.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/main-00f184c2d998de35.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/main-app-6fc548a78259cd5a.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-757bd18e0f4a1454.js",revision:"rqdxgFyKH2Cx33nEJOh-s"},{url:"/_next/static/css/c0db6e62a709a161.css",revision:"c0db6e62a709a161"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/rqdxgFyKH2Cx33nEJOh-s/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/rqdxgFyKH2Cx33nEJOh-s/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/manifest.json",revision:"f636bd280544eb8981f74edb5b3a2ee1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
