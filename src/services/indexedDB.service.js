import { openDB } from 'idb';

const DB_NAME = 'semilla_db';
const DB_VERSION = 1;

const STORES = {
  PRODUCTS: 'products',
  CONVERSATIONS: 'conversations',
  MESSAGES: 'messages',
  CATEGORIES: 'categories',
  EDUCATION: 'education'
};

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    // Create stores if they don't exist
    if (!db.objectStoreNames.contains(STORES.PRODUCTS)) {
      db.createObjectStore(STORES.PRODUCTS, { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains(STORES.CONVERSATIONS)) {
      db.createObjectStore(STORES.CONVERSATIONS, { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains(STORES.MESSAGES)) {
      db.createObjectStore(STORES.MESSAGES, { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains(STORES.CATEGORIES)) {
      db.createObjectStore(STORES.CATEGORIES, { keyPath: 'id' });
    }
    if (!db.objectStoreNames.contains(STORES.EDUCATION)) {
      db.createObjectStore(STORES.EDUCATION, { keyPath: 'id' });
    }
  },
});

const indexedDBService = {
  getAll: async (storeName) => {
    const db = await dbPromise;
    return db.getAll(storeName);
  },

  getById: async (storeName, id) => {
    const db = await dbPromise;
    return db.get(storeName, id);
  },

  put: async (storeName, val) => {
    const db = await dbPromise;
    return db.put(storeName, val);
  },

  delete: async (storeName, id) => {
    const db = await dbPromise;
    return db.delete(storeName, id);
  },

  clear: async (storeName) => {
    const db = await dbPromise;
    return db.clear(storeName);
  },

  // Batch insert
  batchPut: async (storeName, items) => {
    const db = await dbPromise;
    const tx = db.transaction(storeName, 'readwrite');
    await Promise.all([
      ...items.map(item => tx.store.put(item)),
      tx.done
    ]);
  }
};

export { STORES };
export default indexedDBService;
