import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Check, Info, Camera } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";
import { useMetrics } from "../../context/MetricsContext";
import { categories } from "../../data/categories.mock";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import "./Publish.css";

const STEPS = 5;

const Publish = () => {
  const { user } = useAuth();
  const { addProduct } = useProducts();
  const { trackAction } = useMetrics();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    unidad: "kg",
    foto: "https://agroinsumossa.com/wp-content/uploads/2018/07/situacion-cultivo-maiz-colombia-1030x655.jpg",
    ubicacion: user?.ubicacion || {
      departamento: "Cundinamarca",
      municipio: "Fusagasugá",
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < STEPS) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate(-1);
  };

  const handleFinish = async () => {
    await addProduct({
      ...formData,
      vendedorId: user.id,
      precio: Number(formData.precio),
    });
    trackAction("PUBLISH");
    setStep(STEPS + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="wizard-step">
            <h2 className="step-title">¿Qué vas a vender?</h2>
            <p className="step-description">
              Dalle un nombre claro a tu cosecha para que los compradores la
              encuentren.
            </p>
            <Input
              label="Nombre del producto"
              name="nombre"
              placeholder="Ej: Mango Tommy Maduro"
              value={formData.nombre}
              onChange={handleChange}
              style={{ fontSize: "1rem", padding: "0rem 1rem" }}
              required
            />
            <Input
              label="Cuéntanos un poco más"
              name="descripcion"
              type="textarea"
              placeholder="Ej: Recién cosechado, muy dulce..."
              value={formData.descripcion}
              onChange={handleChange}
              style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
            />
          </div>
        );
      case 2:
        return (
          <div className="wizard-step">
            <h2 className="step-title">Sube una foto</h2>
            <p className="step-description">
              Una buena foto ayuda a vender más rápido.
            </p>
            <div className="empty-state" style={{ padding: "60px" }}>
              <div className="benefit-icon" style={{ margin: "0 auto 20px" }}>
                <Camera size={40} />
              </div>
              <p className="font-bold">Haz clic para tomar foto</p>
              <span className="small text-muted">(Simulación de cámara)</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="wizard-step">
            <h2 className="step-title">Categoría</h2>
            <p className="step-description">¿De qué tipo es tu producto?</p>
            <div className="category-grid">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`category-item ${formData.categoria === cat.id ? "active" : ""}`}
                  onClick={() =>
                    setFormData({ ...formData, categoria: cat.id })
                  }
                >
                  <span style={{ fontSize: "32px", display: "block" }}>
                    {cat.icono}
                  </span>
                  <span className="font-bold">{cat.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="wizard-step">
            <h2 className="step-title">Precio</h2>
            <p className="step-description">
              ¿A cuánto vas a vender tu cosecha?
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <Input
                  label="Precio (COP)"
                  name="precio"
                  type="number"
                  placeholder="Ej: 3500"
                  style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
                  value={formData.precio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ width: "120px" }}>
                <Input
                  label="Unidad"
                  name="unidad"
                  placeholder="Ej: kg"
                  style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
                  value={formData.unidad}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="price-suggested">
              <Info size={24} />
              <span>
                Precio sugerido: <strong>$4,200</strong> / kg
              </span>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="wizard-step">
            <h2 className="step-title">¡Casi listo!</h2>
            <p className="step-description">
              Confirma los detalles de tu publicación.
            </p>
            <div
              className="stat-card"
              style={{
                textAlign: "left",
                borderLeft: "4px solid var(--color-primary-800)",
              }}
            >
              <p>
                <strong>Producto:</strong> {formData.nombre}
              </p>
              <p>
                <strong>Precio:</strong> $
                {Number(formData.precio).toLocaleString()} / {formData.unidad}
              </p>
              <p>
                <strong>De:</strong> {formData.ubicacion.municipio},{" "}
                {formData.ubicacion.departamento}
              </p>
            </div>
            <p className="text-muted small" style={{ marginTop: "20px" }}>
              Al publicar, tu producto será visible para todos los compradores
              en el marketplace.
            </p>
          </div>
        );
      case 6:
        return (
          <div className="wizard-step success-screen">
            <span className="success-icon">✅</span>
            <h2 className="step-title">¡Publicado con éxito!</h2>
            <p className="step-description">
              Tu cosecha ya está disponible en Semilla.
            </p>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Button size="lg" onClick={() => navigate("/dashboard")}>
                Ir a mis productos
              </Button>
              <Button variant="outline" onClick={() => setStep(1)}>
                Publicar otro
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="publish-page">
      <Container>
        <div className="publish-container animate-fade">
          {step <= STEPS && (
            <div className="wizard-header">
              <span className="text-primary font-bold">
                PASO {step} DE {STEPS}
              </span>
              <div className="wizard-progress">
                {[...Array(STEPS)].map((_, i) => (
                  <div
                    key={i}
                    className={`progress-dot ${step === i + 1 ? "active" : ""}`}
                  ></div>
                ))}
              </div>
            </div>
          )}

          {renderStep()}

          {step <= STEPS && (
            <div className="wizard-footer">
              <Button variant="ghost" icon={ChevronLeft} onClick={handleBack}>
                Atrás
              </Button>
              {step < STEPS ? (
                <Button
                  icon={ChevronRight}
                  iconPosition="right"
                  onClick={handleNext}
                  disabled={step === 1 && !formData.nombre}
                >
                  Siguiente
                </Button>
              ) : (
                <Button icon={Check} onClick={handleFinish}>
                  Publicar Ahora
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Publish;
