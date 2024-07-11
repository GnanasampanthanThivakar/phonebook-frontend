// src/service-worker.js
/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { syncOfflineData } from './sync';

precacheAndRoute(self.__WB_MANIFEST || []);

self.addEventListener('install', (event) => {
  console.log('Service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/add-phone')) {
    event.respondWith(fetch(event.request).catch(() => {
      return new Response(null, { status: 503 });
    }));
  }
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-phonebook') {
    event.waitUntil(syncOfflineData());
  }
});

registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
);
