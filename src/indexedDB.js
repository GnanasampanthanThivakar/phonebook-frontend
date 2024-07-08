// src/indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'phoneBookDB';
const STORE_NAME = 'phoneNumbers';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: '_id' });
      }
    },
  });
};

export const addPhoneNumber = async (phoneNumber) => {
  const db = await initDB();
  return db.put(STORE_NAME, phoneNumber);
};

export const getPhoneNumbers = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const deletePhoneNumber = async (id) => {
  const db = await initDB();
  return db.delete(STORE_NAME, id);
};
