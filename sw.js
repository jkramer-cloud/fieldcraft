'use strict';
const PREFIX='fieldcraft-';
const CACHE='fieldcraft-1.0-beta-1-'+self.registration.scope;
const ROOT=new URL(self.registration.scope);
const FILES=['index.html','manifest.webmanifest','icon-192.png','icon-512.png','Fieldcraft-field-cards.html','Fieldcraft-reference-library.html'].map(x=>new URL(x,ROOT).href);
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith(PREFIX)&&name.endsWith(self.registration.scope)&&name!==CACHE)await caches.delete(name);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const r=event.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==ROOT.origin||!u.pathname.startsWith(ROOT.pathname))return;const clean=new URL(u);clean.search='';clean.hash='';if(r.mode==='navigate'&&(clean.href===ROOT.href||clean.href===FILES[0])){event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(r);if(response.ok)return response}catch(e){}return (await cache.match(FILES[0]))||Response.error()})());return}if(FILES.includes(clean.href))event.respondWith((async()=>{const cache=await caches.open(CACHE);return (await cache.match(clean.href))||fetch(r)})())});
