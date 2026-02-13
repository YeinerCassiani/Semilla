import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ShoppingBasket, MessageSquare, TrendingUp } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import Card from "../../components/common/Card/Card";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const { getUserProducts, loading } = useProducts();
  const navigate = useNavigate();

  const userProducts = user.rol === "productor" ? getUserProducts(user.id) : [];

  if (loading) return <div>Cargando dashboard...</div>;

  return (
    <div className="dashboard-page">
      <Container>
        <header className="dashboard-header animate-slide-up">
          <h1>Hola, {user.nombre.split(" ")[0]} 👋</h1>
          <p>
            {user.rol === "productor"
              ? "Tus cosechas en un solo lugar"
              : "Bienvenido a tu mercado directo"}
          </p>
        </header>

        {user.rol === "productor" ? (
          <div className="producer-layout">
            <div className="stats-grid">
              <div
                className="stat-card animate-fade"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="stat-value">{userProducts.length}</span>
                <span className="stat-label">Productos</span>
              </div>
              <div
                className="stat-card animate-fade"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="stat-value">0</span>
                <span className="stat-label">Mensajes</span>
              </div>
              <div
                className="stat-card animate-fade"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="stat-value">0</span>
                <span className="stat-label">Ventas</span>
              </div>
            </div>

            <div className="section-header">
              <h2>Mis Productos</h2>
              <Button
                size="sm"
                icon={Plus}
                onClick={() => navigate("/publish")}
              >
                Nuevo
              </Button>
            </div>

            {userProducts.length > 0 ? (
              <div className="products-grid">
                {userProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    image={product.foto}
                    badge={
                      product.estado === "disponible" ? "Activo" : "Vendido"
                    }
                    className="animate-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="product-info">
                      <h3 style={{ marginBottom: "4px" }}>{product.nombre}</h3>
                      <div className="product-price">
                        ${product.precio.toLocaleString()}{" "}
                        <span className="product-unit">/ {product.unidad}</span>
                      </div>
                      <div className="product-meta">
                        <span>👁️ {product.vistas} vistas</span>
                        <span>💬 {product.contactos} contactos</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" fullWidth>
                      Editar cosecha
                    </Button>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">🌽</span>
                <h3>Aún no tienes cosechas publicadas</h3>
                <p>
                  Publica tu primer producto para empezar a recibir ofertas.
                </p>
                <div style={{ marginTop: "20px" }}>
                  <Button icon={Plus} onClick={() => navigate("/publish")}>
                    Publicar Producto
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="buyer-layout">
            <div className="stats-grid">
              <div className="stat-card animate-fade">
                <span className="stat-value">0</span>
                <span className="stat-label">Compras Realizadas</span>
              </div>
              <div className="stat-card animate-fade">
                <span className="stat-value">0</span>
                <span className="stat-label">Mensajes Enviados</span>
              </div>
            </div>

            <div className="empty-state">
              <span className="empty-icon">🛒</span>
              <h3>Explora productos frescos</h3>
              <p>
                Ve al marketplace para encontrar productos directos del campo.
              </p>
              <div style={{ marginTop: "20px" }}>
                <Button onClick={() => navigate("/marketplace")}>
                  Ir al Marketplace
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
