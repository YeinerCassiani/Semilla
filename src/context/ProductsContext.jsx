import React, { createContext, useState, useEffect, useContext } from "react";
import productsService from "../services/products.service";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initProducts = async () => {
      try {
        const data = await productsService.initialize();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

  const refreshProducts = async () => {
    setLoading(true);
    const data = await productsService.getAll();
    setProducts(data);
    setLoading(false);
  };

  const addProduct = async (productData) => {
    const newProduct = await productsService.create(productData);
    setProducts((prev) => [newProduct, ...prev]);
    return newProduct;
  };

  const updateProduct = async (product) => {
    const updated = await productsService.update(product);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    return updated;
  };

  const deleteProduct = async (id) => {
    await productsService.delete(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getUserProducts = (userId) => {
    return products.filter((p) => p.vendedorId === userId);
  };

  const value = {
    products,
    loading,
    refreshProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getUserProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
