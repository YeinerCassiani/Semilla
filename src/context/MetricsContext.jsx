import React, { createContext, useState, useEffect, useContext } from "react";
import storageService from "../services/storage.service";
import { useAuth } from "./AuthContext";

const MetricsContext = createContext();

export const MetricsProvider = ({ children }) => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState({
    tiempoRegistro: 0,
    productosPublicados: 0,
    contactosRealizados: 0,
    mensajesEnviados: 0,
    sesionesTotales: 0,
    tiempoPromedioSesion: 0,
  });

  useEffect(() => {
    if (user) {
      const savedMetrics = storageService.get(`metrics_${user.id}`);
      if (savedMetrics) {
        setMetrics(savedMetrics);
      } else {
        // Initial metrics for new user
        const initial = { ...metrics, sesionesTotales: 1 };
        setMetrics(initial);
        storageService.set(`metrics_${user.id}`, initial);
      }
    }
  }, [user]);

  const trackAction = (actionType) => {
    if (!user) return;

    setMetrics((prev) => {
      const updated = { ...prev };
      if (actionType === "PUBLISH") updated.productosPublicados += 1;
      if (actionType === "CONTACT") updated.contactosRealizados += 1;
      if (actionType === "MESSAGE") updated.mensajesEnviados += 1;

      storageService.set(`metrics_${user.id}`, updated);
      return updated;
    });
  };

  const value = {
    metrics,
    trackAction,
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};

export const useMetrics = () => {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error("useMetrics must be used within a MetricsProvider");
  }
  return context;
};
