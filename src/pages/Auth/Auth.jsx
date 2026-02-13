import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { User, Phone, Wheat, ShoppingBag } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import "./Auth.css";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialRole = searchParams.get("role") || "productor";
  const [role, setRole] = useState(initialRole);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      login({
        ...formData,
        rol: role,
      });
      setLoading(false);
      navigate(role === "productor" ? "/dashboard" : "/marketplace");
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-header">
          <h1>¡Hola! 👋</h1>
          <p>Únete a la red que transforma el campo</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="role-selector">
            <div
              className={`role-option ${role === "productor" ? "active" : ""}`}
              onClick={() => setRole("productor")}
            >
              <div className="role-icon">🧑‍🌾</div>
              <div className="role-name">Soy Productor</div>
            </div>
            <div
              className={`role-option ${role === "comprador" ? "active" : ""}`}
              onClick={() => setRole("comprador")}
            >
              <div className="role-icon">🛒</div>
              <div className="role-name">Soy Comprador</div>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Input
              label="¿Cómo te llamas?"
              name="nombre"
              placeholder="Ej: Marta González"
              icon={User}
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <Input
              label="Tu número de teléfono"
              name="telefono"
              type="tel"
              placeholder="Ej: 300 123 4567"
              icon={Phone}
              value={formData.telefono}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              fullWidth
              size="lg"
              isLoading={loading}
              style={{ marginTop: "10px" }}
            >
              {role === "productor" ? "Empezar a vender" : "Empezar a comprar"}
            </Button>
          </div>
        </form>

        <div className="auth-footer">
          <p>
            Al entrar, aceptas que usemos tus datos para conectarte con otros
            usuarios de forma segura siguiendo nuestras políticas de privacidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
