/* eslint-disable no-restricted-globals */

// Ensure that Workbox is available
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Precache and route all assets based on the manifest
precacheAndRoute(self.__WB_MANIFEST || []);

// Install event listener
self.addEventListener('install', (event) => {
  console.log('Service worker installed');
  self.skipWaiting(); // Activate the new service worker immediately
});

// Activate event listener
self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
  self.clients.claim(); // Take control of all pages under this service worker's scope
});

// Fetch event listener
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
);
