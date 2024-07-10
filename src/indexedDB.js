import axios from 'axios';

export const syncData = async () => {
  const phoneNumbers = await getPhoneNumbers();

  if (phoneNumbers.length > 0) {
    try {
      await axios.post('http://localhost:8080/api/sync', phoneNumbers);
      await clearPhoneNumbers();
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }
};

// Detect when the app is online
window.addEventListener('online', syncData);

// Detect when the app is offline
window.addEventListener('offline', () => {
  console.log('App is offline. Data will be stored locally.');
});
