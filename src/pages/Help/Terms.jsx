import React from "react";
import { FileText, Scale, Handshake, ShieldAlert } from "lucide-react";
import Container from "../../components/layout/Container";
import "./Help.css";

const Terms = () => {
  return (
    <div className="help-page">
      <Container>
        <div className="help-header">
          <h1>Términos de Uso</h1>
          <p>Reglas claras para un mercado justo y honesto</p>
        </div>

        <div className="terms-content animate-fade">
          <section className="terms-intro">
            <div className="terms-icon-box">
              <FileText size={32} />
            </div>
            <p>
              ¡Bienvenido a Semilla! Al usar nuestra plataforma, te unes a una
              comunidad que valora el trabajo del campo. Estas reglas nos ayudan
              a que todos ganemos de forma transparente.
            </p>
          </section>

          <div className="terms-grid">
            <div className="terms-section-card">
              <Scale size={24} className="text-secondary" />
              <h3>1. Tu Compromiso</h3>
              <p>
                Te comprometes a proporcionar información real sobre tus
                productos o tu identidad. La honestidad es la base de nuestra
                semilla.
              </p>
            </div>

            <div className="terms-section-card">
              <Handshake size={24} className="text-secondary" />
              <h3>2. Buen Comportamiento</h3>
              <p>
                El respeto es fundamental. No permitimos mensajes ofensivos,
                acoso o cualquier forma de discriminación en nuestro chat.
              </p>
            </div>

            <div className="terms-section-card">
              <ShieldAlert size={24} className="text-secondary" />
              <h3>3. Productos Permitidos</h3>
              <p>
                Solo se pueden publicar productos derivados del campo y la
                agricultura legal. Nos reservamos el derecho de eliminar
                cualquier publicación prohibida.
              </p>
            </div>
          </div>

          <div className="terms-footer-info">
            <p>
              <strong>Nota:</strong> Semilla es un facilitador de conexión. No
              somos responsables por la calidad final de los productos o los
              acuerdos de pago privados fuera de la plataforma.
            </p>
            <p style={{ marginTop: "10px", fontSize: "13px" }}>
              Última actualización: 18 de Febrero, 2026
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
