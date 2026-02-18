import React, { createContext, useState, useEffect, useContext } from "react";
import chatService from "../services/chat.service";
import productsService from "../services/products.service";
import { useAuth } from "./AuthContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const { user, updateProfile } = useAuth();
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      refreshConversations();
    } else {
      setConversations([]);
      setActiveConversation(null);
    }
  }, [user]);

  const refreshConversations = async () => {
    if (!user) return;
    const data = await chatService.getConversations(user.id);
    setConversations(data);
  };

  const selectConversation = async (conv) => {
    setLoading(true);
    setActiveConversation(conv);
    const msgs = await chatService.getMessages(conv.id);
    setMessages(msgs);
    setLoading(false);
  };

  const sendMessage = async (text) => {
    if (!activeConversation || !user) return;

    const msgData = {
      conversacionId: activeConversation.id,
      remitenteId: user.id,
      texto: text,
      tipo: "texto",
    };

    const newMsg = await chatService.sendMessage(msgData);
    setMessages((prev) => [...prev, newMsg]);
    refreshConversations();

    // Simular respuesta automática si es la primera vez
    if (messages.length === 0) {
      setTimeout(async () => {
        const reply = {
          conversacionId: activeConversation.id,
          remitenteId:
            activeConversation.vendedorId === user.id
              ? activeConversation.compradorId
              : activeConversation.vendedorId,
          texto:
            "¡Hola! Gracias por tu mensaje. El productor te responderá pronto.",
          tipo: "texto",
        };
        const botMsg = await chatService.sendMessage(reply);
        if (activeConversation.id === botMsg.conversacionId) {
          setMessages((prev) => [...prev, botMsg]);
        }
        refreshConversations();
      }, 2000);
    }
  };

  const startNewConversation = async (product, vendorId) => {
    if (!user) return;
    const convData = {
      productoId: product.id,
      productoNombre: product.nombre,
      vendedorId: vendorId,
      compradorId: user.id,
    };
    const conv = await chatService.createConversation(convData);
    await selectConversation(conv);
    return conv;
  };

  const confirmDeal = async (productData) => {
    if (!activeConversation || !user) return;

    // 1. Marcar producto como vendido
    const updatedProduct = { ...productData, estado: "vendido" };
    await productsService.update(updatedProduct);

    // 2. Actualizar estadísticas del vendedor (si es el usuario actual)
    if (user.id === activeConversation.vendedorId) {
      const currentStats = user.stats || {
        ventas: 0,
        rating: 5.0,
        nivel: "Semilla",
      };
      updateProfile({
        stats: {
          ...currentStats,
          ventas: (currentStats.ventas || 0) + 1,
        },
      });
    }

    // 3. Enviar mensaje de sistema en el chat
    const systemMsg = {
      conversacionId: activeConversation.id,
      remitenteId: "system",
      texto: `🤝 ¡TRATO CERRADO! El producto "${productData.nombre}" ha sido marcado como vendido. Gracias por confiar en Semilla.`,
      tipo: "sistema",
    };
    const newMsg = await chatService.sendMessage(systemMsg);
    setMessages((prev) => [...prev, newMsg]);
    refreshConversations();

    return true;
  };

  const value = {
    conversations,
    activeConversation,
    messages,
    loading,
    refreshConversations,
    selectConversation,
    sendMessage,
    startNewConversation,
    confirmDeal,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
