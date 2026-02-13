import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  MessageCircle,
  ChevronLeft,
  Calendar,
  Share2,
} from "lucide-react";
import { useProducts } from "../../context/ProductsContext";
import { useChat } from "../../context/ChatContext";
import { useMetrics } from "../../context/MetricsContext";
import { users } from "../../data/users.mock";
import { categories } from "../../data/categories.mock";
import Container from "../../components/layout/Container";
import Button from "../../components/common/Button/Button";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { startNewConversation } = useChat();
  const { trackAction } = useMetrics();
  const [product, setProduct] = useState(null);
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      const foundSeller = users.find((u) => u.id === foundProduct.vendedorId);
      setSeller(foundSeller || users[0]);
    }
  }, [id, products]);

  const handleContact = async () => {
    if (product) {
      await startNewConversation(product, product.vendedorId);
      trackAction("CONTACT");
      navigate("/chat");
    }
  };

  if (!product)
    return <div style={{ padding: "100px" }}>Producto no encontrado...</div>;

  const categoryInfo = categories.find((c) => c.id === product.categoria);

  return (
    <div className="product-detail-page">
      <Container>
        <div style={{ marginBottom: "20px" }}>
          <Button
            variant="ghost"
            icon={ChevronLeft}
            onClick={() => navigate(-1)}
          >
            Volver al mercado
          </Button>
        </div>

        <div className="product-detail-container animate-fade">
          <div className="product-image-section">
            <img src={product.foto} alt={product.nombre} />
          </div>

          <div className="product-info-section">
            <div className="product-header">
              <span className="product-category-tag">
                {categoryInfo?.icono} {categoryInfo?.nombre}
              </span>
              <h1>{product.nombre}</h1>
              <div
                className="product-location"
                style={{ marginBottom: "20px", fontSize: "18px" }}
              >
                <MapPin size={20} />
                <span>
                  {product.ubicacion.municipio},{" "}
                  {product.departamento || product.ubicacion.departamento}
                </span>
              </div>
            </div>

            <div className="product-detail-price">
              ${product.precio.toLocaleString()}{" "}
              <span>/ {product.unit || product.unidad}</span>
            </div>

            <p className="product-description">
              {product.descripcion ||
                "Este productor aún no ha añadido una descripción detallada, pero garantiza la frescura y calidad de su cosecha."}
            </p>

            <div className="seller-mini-card">
              <div className="seller-avatar">
                <img src={seller?.avatar} alt={seller?.nombre} />
              </div>
              <div className="seller-info">
                <h4>{seller?.nombre}</h4>
                <p>Productor local de {product.ubicacion.municipio}</p>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span className="small text-primary font-bold">⭐ 4.8</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Button
                size="lg"
                fullWidth
                icon={MessageCircle}
                onClick={handleContact}
              >
                Preguntar al productor
              </Button>
              <Button size="lg" variant="outline" style={{ minWidth: "60px" }}>
                <Share2 size={24} />
              </Button>
            </div>

            <div
              className="product-meta"
              style={{
                marginTop: "24px",
                justifyContent: "flex-start",
                gap: "20px",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <Calendar size={16} /> Publicado hace 2 días
              </span>
              <span>👁️ {product.vistas} interesados</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
