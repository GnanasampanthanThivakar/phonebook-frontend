import Dexie from 'dexie';

const db = new Dexie('PhoneBookDatabase');
db.version(1).stores({
  phoneBooks: '++id,name,phone'
});

export default db;
