import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Users,
  Sprout,
  ShieldCheck,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({
    producers: 0,
    products: 0,
    savings: 0,
  });

  // Simple visual counter effect for on-mount animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ producers: 1200, products: 5000, savings: 30 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-content animate-slide-up">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                Plataforma #1 en Colombia
              </div>
              <h1>
                Vende tu cosecha <br />
                <span>sin intermediarios</span>
              </h1>
              <p>
                La primera red digital que conecta al campesino directamente con
                quien compra. Gana lo justo, vende rápido y segura.
              </p>
              <div className="hero-actions">
                <Button
                  size="lg"
                  onClick={() => navigate("/login?role=productor")}
                  style={{ minWidth: "180px" }}
                >
                  Soy Campesino 🌱
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/marketplace")}
                >
                  Ver Mercado 🍎
                </Button>
              </div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  color: "var(--color-text-muted)",
                }}
              >
                <div style={{ display: "flex" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#FACC15" color="#FACC15" />
                  ))}
                </div>
                <span>Confiado por +1,000 familias campesinas.</span>
              </div>
            </div>

            <div className="hero-image-container animate-fade">
              <img
                src="/images/illustrations/hero-people.png"
                alt="Campesino y comerciante negociando frutas"
                className="main-hero-img"
              />

              <div className="floating-card float-top-right">
                <div
                  style={{
                    background: "#dcfce7",
                    padding: "8px",
                    borderRadius: "50%",
                  }}
                >
                  <TrendingUp color="#166534" size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    Venta Exitosa
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    Hace 2 min • $450.000
                  </div>
                </div>
              </div>

              <div className="floating-card float-bottom-left">
                <div
                  style={{
                    background: "#e0f2fe",
                    padding: "8px",
                    borderRadius: "50%",
                  }}
                >
                  <Users color="#0369a1" size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    Nuevo Comprador
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>
                    Bogotá, DC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container>
          <div className="stats-container">
            <div
              className="stat-item animate-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="stat-number">+{counts.producers}</span>
              <span className="stat-label">Productores Registrados</span>
            </div>
            <div
              className="stat-item animate-scale"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="stat-number">+{counts.products}</span>
              <span className="stat-label">Toneladas Vendidas</span>
            </div>
            <div
              className="stat-item animate-scale"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="stat-number">{counts.savings}%</span>
              <span className="stat-label">Más de Ganancia</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <Container>
          <div className="section-title">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
              ¿Por qué elegir Semilla?
            </h2>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Tecnología pensada para el campo, no para la ciudad.
            </p>
          </div>
          <div className="benefits-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Users />
              </div>
              <h3>Trato 100% Directo</h3>
              <p>
                Eliminamos toda la cadena de intermediarios. Tú hablas, negocias
                y acuerdas directamente con quien va a consumir tu producto.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <ShieldCheck />
              </div>
              <h3>Precio Justo Garantizado</h3>
              <p>
                Tú pones el precio. Nosotros te damos herramientas para saber
                cuánto vale tu cosecha en el mercado real hoy.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Zap />
              </div>
              <h3>Sin Comisiones Ocultas</h3>
              <p>
                No cobramos por publicar. La plataforma es gratuita para que
                puedas maximizar tus ganancias desde el primer día.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works Section - Visual Redesign */}
      <section className="how-it-works">
        <Container>
          <div className="how-it-works-grid">
            <div className="how-it-works-content">
              <div
                className="section-title"
                style={{ textAlign: "left", marginBottom: "40px" }}
              >
                <span className="section-badge">Paso a Paso</span>
                <h2 style={{ fontSize: "2.5rem" }}>Es muy fácil empezar</h2>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    marginTop: "10px",
                  }}
                >
                  Diseñamos Semilla para que sea tan simple como enviar un
                  mensaje por WhatsApp.
                </p>
              </div>

              <div className="steps-list">
                <div className="step-item active">
                  <div className="step-number">1</div>
                  <div className="step-info">
                    <h3>Crea tu perfil gratis</h3>
                    <p>
                      Solo necesitas tu celular. Sin papeleos ni contratos
                      complicados.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-info">
                    <h3>Sube una foto de tu cosecha</h3>
                    <p>
                      Muestra lo que tienes. Entre mejor se vea la foto, más
                      rápido vendes.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-info">
                    <h3>Recibe ofertas al instante</h3>
                    <p>
                      Los compradores te contactan por WhatsApp o el chat de la
                      app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how-it-works-visual animate-fade">
              <div className="illustration-wrapper">
                <img
                  src="/images/illustrations/how-it-works.png"
                  alt="Ilustración de cómo funciona Semilla"
                  className="step-illustration"
                />
                <div className="blob-decoration"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Únete a la revolución del campo</h2>
            <p>
              Miles de productores ya están ganando más. No te quedes atrás.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/login")}
            >
              Empezar Ahora{" "}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Landing;
