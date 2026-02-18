import React from "react";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  UserCheck,
  AlertTriangle,
} from "lucide-react";
import Container from "../../components/layout/Container";
import "./Help.css";

const Security = () => {
  return (
    <div className="help-page">
      <Container>
        <div className="help-header">
          <h1>Seguridad en tus Pagos</h1>
          <p>Tu tranquilidad es el motor de nuestro campo</p>
        </div>

        <div className="security-content animate-fade">
          <section className="security-section">
            <div className="security-icon-box">
              <ShieldCheck size={32} />
            </div>
            <h2>¿Cómo protegemos tus transacciones?</h2>
            <p>
              En Semilla, conectamos directamente a productores con compradores.
              Actualmente,
              <strong>
                {" "}
                no procesamos pagos directamente en la aplicación
              </strong>{" "}
              para evitar comisiones innecesarias al campesino, pero te
              brindamos las mejores recomendaciones para que tu intercambio sea
              seguro.
            </p>
          </section>

          <div className="security-grid">
            <div className="security-card">
              <Lock size={24} className="text-primary" />
              <h3>Acuerdos Claros</h3>
              <p>
                Utiliza nuestro chat para dejar registro de los precios,
                cantidades y puntos de entrega acordados.
              </p>
            </div>
            <div className="security-card">
              <UserCheck size={24} className="text-primary" />
              <h3>Perfiles Verificados</h3>
              <p>
                Busca siempre el sello verde ✅ de productor verificado para
                mayor seguridad en tu compra.
              </p>
            </div>
            <div className="security-card">
              <CreditCard size={24} className="text-primary" />
              <h3>Métodos Recomendados</h3>
              <p>
                Sugerimos usar Nequi, Daviplata o Pago contra entrega para
                asegurar que el producto llegue a tus manos.
              </p>
            </div>
          </div>

          <div className="security-alert animate-slide-up">
            <AlertTriangle size={24} color="#f59e0b" />
            <div>
              <h4>Consejo de Oro</h4>
              <p>
                Nunca compartas tus claves bancarias o códigos de seguridad por
                el chat. Semilla nunca te pedirá esta información.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Security;
