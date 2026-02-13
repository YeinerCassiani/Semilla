import indexedDBService, { STORES } from './indexedDB.service';
import { products as mockProducts } from '../data/products.mock';

const productsService = {
  // Initialize DB with mock data if empty
  initialize: async () => {
    const products = await indexedDBService.getAll(STORES.PRODUCTS);
    if (products.length === 0) {
      await indexedDBService.batchPut(STORES.PRODUCTS, mockProducts);
      return mockProducts;
    }
    return products;
  },

  getAll: async () => {
    return indexedDBService.getAll(STORES.PRODUCTS);
  },

  getById: async (id) => {
    return indexedDBService.getById(STORES.PRODUCTS, id);
  },

  getByUserId: async (userId) => {
    const all = await indexedDBService.getAll(STORES.PRODUCTS);
    return all.filter(p => p.vendedorId === userId);
  },

  create: async (productData) => {
    const newProduct = {
      ...productData,
      id: crypto.randomUUID(),
      fechaPublicacion: new Date().toISOString(),
      vistas: 0,
      contactos: 0,
      estado: 'disponible'
    };
    await indexedDBService.put(STORES.PRODUCTS, newProduct);
    return newProduct;
  },

  update: async (product) => {
    await indexedDBService.put(STORES.PRODUCTS, product);
    return product;
  },

  delete: async (id) => {
    await indexedDBService.delete(STORES.PRODUCTS, id);
    return true;
  }
};

export default productsService;
