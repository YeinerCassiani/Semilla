import indexedDBService, { STORES } from './indexedDB.service';

const chatService = {
  getConversations: async (userId) => {
    const all = await indexedDBService.getAll(STORES.CONVERSATIONS);
    return all.filter(c => c.compradorId === userId || c.vendedorId === userId);
  },

  getMessages: async (conversationId) => {
    const all = await indexedDBService.getAll(STORES.MESSAGES);
    return all.filter(m => m.conversacionId === conversationId)
              .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  },

  sendMessage: async (msgData) => {
    const newMessage = {
      ...msgData,
      id: crypto.randomUUID(),
      fecha: new Date().toISOString(),
      leido: false
    };
    await indexedDBService.put(STORES.MESSAGES, newMessage);
    
    // Update conversation last message
    const conv = await indexedDBService.getById(STORES.CONVERSATIONS, msgData.conversacionId);
    if (conv) {
      conv.ultimoMensaje = {
        texto: msgData.texto,
        fecha: newMessage.fecha,
        remitenteId: msgData.remitenteId
      };
      await indexedDBService.put(STORES.CONVERSATIONS, conv);
    }
    
    return newMessage;
  },

  createConversation: async (convData) => {
    const id = `${convData.productoId}-${convData.compradorId}`;
    const existing = await indexedDBService.getById(STORES.CONVERSATIONS, id);
    if (existing) return existing;

    const newConv = {
      id,
      ...convData,
      estado: 'activa',
      fechaInicio: new Date().toISOString(),
      ultimoMensaje: null,
      mensajesNoLeidos: { comprador: 0, vendedor: 1 }
    };
    await indexedDBService.put(STORES.CONVERSATIONS, newConv);
    return newConv;
  }
};

export default chatService;
