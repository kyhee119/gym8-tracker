const CACHE='gymv142';
const ASSETS=['/gym8-tracker/','/gym8-tracker/index.html','/gym8-tracker/manifest.json','/gym8-tracker/icon.svg','/gym8-tracker/sw.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).catch(()=>caches.match('/index.html'))));});
