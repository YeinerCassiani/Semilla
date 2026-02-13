import React, { createContext, useState, useEffect, useContext } from "react";
import storageService from "../services/storage.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = storageService.get("user");
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userToSave = {
      ...userData,
      id: userData.id || crypto.randomUUID(),
      fechaRegistro: new Date().toISOString(),
      ultimoAcceso: new Date().toISOString(),
    };
    setUser(userToSave);
    storageService.set("user", userToSave);
    storageService.set("session", { token: "mock-token-" + Date.now() });
    return userToSave;
  };

  const logout = () => {
    setUser(null);
    storageService.remove("user");
    storageService.remove("session");
  };

  const updateProfile = (newData) => {
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    storageService.set("user", updatedUser);
  };

  const value = {
    user,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
