const CACHE='emsile-v2.2.0';
const FILES=['./','./index.html','./style.css','./app.js','./core.js','./data.js','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./curriculum.js','./learning.js','./learning-ui.js','./learning.css','./root-data.js'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES.map(x=>new Request(x,{cache:'reload'})));await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const old=(await caches.keys()).filter(k=>k.startsWith('emsile-')&&k!==CACHE);for(const k of old)await caches.delete(k);await self.clients.claim();if(old.length){for(const client of await self.clients.matchAll({type:'window'}))await client.navigate(client.url);}})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){
  event.respondWith((async()=>{try{const r=await fetch(req);if(r.ok&&!r.redirected&&(await r.clone().text()).includes('data-emsile-app')){const c=await caches.open(CACHE);await c.put('./index.html',r.clone());}return r;}catch{const cached=await caches.match('./index.html');if(cached)return cached;return new Response('Çevrimdışı içerik hazır değil. Bir kez internete bağlıyken aç.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});}})());return;
 }
 if(FILES.some(f=>new URL(f,self.location.href).pathname===url.pathname))event.respondWith(caches.match(req).then(r=>r||fetch(req)));
});
