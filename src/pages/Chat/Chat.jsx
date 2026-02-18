import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  User,
  ChevronLeft,
  Image as ImageIcon,
  Smile,
  MessageCircle,
  Handshake,
  ShieldCheck,
  AlertCircle,
  MapPin,
  UserCheck,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import { useProducts } from "../../context/ProductsContext";
import { useMetrics } from "../../context/MetricsContext";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import "./Chat.css";

const QUICK_REPLIES = [
  "Hola, ¿está disponible?",
  "¿En qué parte se encuentra?",
  "¿Tiene más cantidad?",
  "Muchas gracias",
];

const Chat = () => {
  const { user } = useAuth();
  const {
    conversations,
    activeConversation,
    messages,
    loading,
    selectConversation,
    sendMessage,
    confirmDeal,
  } = useChat();
  const { products } = useProducts();
  const { trackAction } = useMetrics();

  const [inputText, setInputText] = useState("");
  const [showMobileList, setShowMobileList] = useState(true);
  const [showDealModal, setShowDealModal] = useState(false);
  const messagesContainerRef = useRef(null);

  const handleConfirmDeal = async () => {
    const product = products.find(
      (p) => p.id === activeConversation.productoId,
    );
    if (product) {
      await confirmDeal(product);
      setShowDealModal(false);
      trackAction("CONFIRM_DEAL");
    }
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      // Scroll estrictamente dentro del contenedor
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Usamos un pequeño timeout para asegurar que el DOM se haya actualizado con el nuevo mensaje
    const timer = setTimeout(scrollToBottom, 50);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText);
    trackAction("MESSAGE");
    setInputText("");
  };

  const handleQuickReply = (text) => {
    sendMessage(text);
    trackAction("MESSAGE");
  };

  const handleSelectConv = (conv) => {
    selectConversation(conv);
    setShowMobileList(false);
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="chat-page">
      {/* Sidebar: Lista de conversaciones */}
      <aside
        className={`chat-sidebar ${showMobileList ? "mobile-visible" : ""}`}
      >
        <div className="chat-list-header">
          <h2>Mis Mensajes</h2>
        </div>
        <div className="conversations-list">
          {conversations.length > 0 ? (
            conversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation-item ${activeConversation?.id === conv.id ? "active" : ""}`}
                onClick={() => handleSelectConv(conv)}
              >
                <div className="conv-avatar">
                  {conv.productoNombre.charAt(0)}
                </div>
                <div className="conv-info">
                  <div className="conv-top">
                    <span className="conv-name">{conv.productoNombre}</span>
                    <span className="conv-time">
                      {formatTime(conv.ultimoMensaje?.fecha)}
                    </span>
                  </div>
                  <div className="conv-last-msg">
                    {conv.ultimoMensaje?.texto || "Inicia la conversación..."}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-chat" style={{ padding: "20px" }}>
              <p>No tienes mensajes aún.</p>
            </div>
          )}
        </div>
      </aside>

      {/* Main: Ventana de chat activa */}
      <main className={`chat-main ${showMobileList ? "mobile-hidden" : ""}`}>
        {activeConversation ? (
          <div className="chat-window">
            <header className="chat-window-header">
              <button
                className="modal-close"
                style={{ backgroundColor: "transparent", padding: "10px" }}
                onClick={() => setShowMobileList(true)}
              >
                <ChevronLeft />
              </button>
              <div
                className="conv-avatar"
                style={{ width: "40px", height: "40px" }}
              >
                {activeConversation.productoNombre.charAt(0)}
              </div>
              <div>
                <h3 style={{ fontSize: "16px", marginBottom: "0" }}>
                  {activeConversation.productoNombre}
                </h3>
                <span className="small text-muted">En línea</span>
              </div>

              {user.id === activeConversation.vendedorId && (
                <div style={{ marginLeft: "auto" }}>
                  <Button
                    size="sm"
                    variant="secondary"
                    icon={Handshake}
                    onClick={() => setShowDealModal(true)}
                  >
                    Confirmar Trato
                  </Button>
                </div>
              )}
            </header>

            <div className="messages-container" ref={messagesContainerRef}>
              {loading ? (
                <div className="text-center">Cargando mensajes...</div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={msg.id || idx}
                    className={`message-bubble ${msg.tipo === "sistema" ? "system" : msg.remitenteId === user.id ? "sent" : "received"}`}
                  >
                    {msg.texto}
                    {msg.tipo !== "sistema" && (
                      <span className="message-time">
                        {formatTime(msg.fecha)}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="quick-replies">
              {QUICK_REPLIES.map((reply, i) => (
                <button
                  key={i}
                  className="quick-reply-btn"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>

            <form className="chat-input-area" onSubmit={handleSend}>
              <button
                type="button"
                className="btn-ghost"
                style={{ padding: "8px" }}
              >
                <Smile size={24} />
              </button>
              <input
                type="text"
                className="input-field"
                placeholder="Escribe un mensaje..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{ height: "44px" }}
              />
              <button
                type="button"
                className="btn-ghost"
                style={{ padding: "8px" }}
              >
                <ImageIcon size={24} />
              </button>
              <Button
                type="submit"
                icon={Send}
                style={{ minWidth: "auto", padding: "10px" }}
              />
            </form>
          </div>
        ) : (
          <div className="empty-chat">
            <MessageCircle
              size={64}
              style={{ marginBottom: "20px", opacity: 0.3 }}
            />
            <h3>Tus conversaciones aparecerán aquí</h3>
            <p>Selecciona una persona de la lista para empezar a hablar.</p>
          </div>
        )}
      </main>

      {/* Modal de Seguridad para confirmar trato */}
      <Modal
        isOpen={showDealModal}
        onClose={() => setShowDealModal(false)}
        title="Finalizar Trato Seguro"
        footer={
          <div style={{ display: "flex", gap: "10px", width: "100%" }}>
            <Button
              variant="outline"
              fullWidth
              onClick={() => setShowDealModal(false)}
            >
              Cancelar
            </Button>
            <Button fullWidth onClick={handleConfirmDeal}>
              Confirmar Venta
            </Button>
          </div>
        }
      >
        <div className="security-modal-content">
          <p>
            Al confirmar, el producto será marcado como vendido. Por favor,
            sigan estas recomendaciones de seguridad:
          </p>

          <div className="security-guidelines">
            <h4>
              <ShieldCheck size={20} className="text-primary" /> Garantía de
              Seguridad
            </h4>
            <ul className="guidelines-list">
              <li className="guideline-item">
                <MapPin size={20} color="#6b7280" />
                <div>
                  <strong>Lugar de Entrega:</strong>
                  Acuerden siempre un lugar público y concurrido para el
                  intercambio.
                </div>
              </li>
              <li className="guideline-item">
                <UserCheck size={20} color="#6b7280" />
                <div>
                  <strong>Verificación:</strong>
                  Confirmen la identidad de la persona comparando con la foto de
                  perfil antes de entregar/pagar.
                </div>
              </li>
              <li className="guideline-item">
                <AlertCircle size={20} color="#f59e0b" />
                <div>
                  <strong>Pago Seguro:</strong>
                  Recomendamos usar transferencias electrónicas
                  (Nequi/Daviplata) en el momento exacto de la entrega.
                </div>
              </li>
            </ul>
          </div>

          <div className="security-code-box">
            <span>Código de Seguridad para el Intercambio</span>
            <strong>{Math.floor(1000 + Math.random() * 9000)}</strong>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                marginTop: "8px",
              }}
            >
              Muestren este código al encontrarse para validar que ambos son
              usuarios de Semilla.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
