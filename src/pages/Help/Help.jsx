import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  HelpCircle,
} from "lucide-react";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import "./Help.css";

const FAQS = [
  {
    pregunta: "¿Cómo publico mi primer producto?",
    respuesta:
      "Es muy fácil. Una vez hayas entrado a tu cuenta, haz clic en el botón verde con el signo '+' que aparece en la parte de abajo de tu celular. Sigue los 5 pasos: dale un nombre, sube una foto, elige la categoría, pon el precio y confirma tu ubicación.",
  },
  {
    pregunta: "¿Tiene algún costo usar Semilla?",
    respuesta:
      "No, Semilla es completamente gratis para los productores y compradores. Nuestro objetivo es ayudar al campo colombiano a vender directo y ganar lo justo.",
  },
  {
    pregunta: "¿Cómo me pagan mis ventas?",
    respuesta:
      "Los pagos los acuerdas directamente con el comprador a través del chat. Puedes pedir que te paguen por Nequi, Daviplata o en efectivo cuando entregues el producto.",
  },
  {
    pregunta: "¿Es seguro hablar con los compradores?",
    respuesta:
      "En Semilla nos esforzamos por verificar que los usuarios sean reales. Sin embargo, siempre te recomendamos no dar información muy personal y acordar las entregas en lugares conocidos o concurridos.",
  },
  {
    pregunta: "¿Qué hago si no sé usar la aplicación?",
    respuesta:
      "¡No te preocupes! Tenemos una sección de 'Aprende' con videos muy cortitos que te enseñan paso a paso. También puedes escribirnos por WhatsApp si necesitas que alguien te ayude personalmente.",
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-page">
      <Container>
        <div className="help-header">
          <h1>¿En qué podemos ayudarte?</h1>
          <p>Estamos aquí para que tu experiencia en Semilla sea la mejor</p>
        </div>

        <div className="faq-container">
          <div className="section-header">
            <h2>Preguntas Frecuentes</h2>
          </div>

          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="faq-item animate-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.pregunta}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="faq-answer">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>

        <div className="help-contact-section animate-slide-up">
          <HelpCircle
            size={48}
            style={{ color: "var(--color-primary-800)", marginBottom: "16px" }}
          />
          <h3>¿Todavía tienes dudas?</h3>
          <p>
            Tranquilo, podemos hablar por WhatsApp y te ayudamos con lo que
            necesites.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=573008302655&text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20soporte"
            className="whatsapp-button"
          >
            <MessageCircle size={24} />
            Escribir a Soporte Semilla
          </a>
          <div
            style={{
              marginTop: "20px",
              color: "var(--color-text-muted)",
              fontSize: "14px",
            }}
          >
            Atención de Lunes a Sábado, 8am - 6pm
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Help;
