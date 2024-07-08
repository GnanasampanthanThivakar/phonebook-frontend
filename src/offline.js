import db from './db';

export const addPhoneBookEntry = async (entry) => {
  await db.phoneBooks.add(entry);
};

export const getPhoneBookEntries = async () => {
  return await db.phoneBooks.toArray();
};

export const syncData = async () => {
  const phoneBookEntries = await getPhoneBookEntries();

  if (phoneBookEntries.length > 0) {
    try {
      await fetch('/api/sync', {
        method: 'POST',
        body: JSON.stringify(phoneBookEntries),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await db.phoneBooks.clear(); // Clear local data after successful sync
    } catch (error) {
      console.error('Error syncing data:', error);
    }
  }
};

window.addEventListener('online', syncData);
window.addEventListener('offline', () => {
  console.log('App is offline. Data will be stored locally.');
});
