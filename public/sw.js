// import {vapidKeys} from "../src/pushNotifications";
// const webPush = require('web-push');
// import webPush from 'web-push';
// const VERSION = 'v0';
//
// log = (msg) => console.log(`${VERSION}:${msg}`);
//
//
// self.addEventListener("install", (event) => {
//     log("sw is installed");
// });
//
// self.addEventListener("active", (event) => {
//     log("sw is activated");
// });
//
// log("sw file executed");
//
//
// const vapidKeys = webPush.generateVAPIDKeys();
// console.log(vapidKeys)
//
// self.addEventListener("fetch", (event) => {
//     event.respondWith(caches.match(event.request));
//     // event.respondWith(caches.match("/dino.html"));
// });
//
// const addResourcesToCache = async (resources) => {
//     const cache = await caches.open("v0");
//     await cache.addAll(resources);
// };
//
// self.addEventListener("install", (event) => {
//     event.waitUntil(addResourcesToCache(["/index.html", "/sw.js"]));
// });
