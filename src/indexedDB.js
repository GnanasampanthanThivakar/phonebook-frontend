// src/indexedDB.js
import { openDB } from 'idb';

const dbPromise = openDB('phonebook', 1, {
  upgrade(db) {
    db.createObjectStore('phoneNumbers', { keyPath: 'id', autoIncrement: true });
  },
});

export const addPhoneOffline = async (name, phone) => {
  const db = await dbPromise;
  await db.add('phoneNumbers', { name, phone });
};

export const getAllPhones = async () => {
  const db = await dbPromise;
  return await db.getAll('phoneNumbers');
};

export const clearPhones = async () => {
  const db = await dbPromise;
  await db.clear('phoneNumbers');
};
