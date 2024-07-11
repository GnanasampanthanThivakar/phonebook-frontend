// src/sync.js
import axios from 'axios';
import { getAllPhones, clearPhones } from './indexedDB';

export const syncOfflineData = async () => {
  const phones = await getAllPhones();
  for (const phone of phones) {
    try {
      await axios.post('http://localhost:8080/api/add-phone', {
        name: phone.name,
        phone: phone.phone,
      });
    } catch (err) {
      console.error('Error syncing phone book entry:', err);
    }
  }
  await clearPhones();
};
