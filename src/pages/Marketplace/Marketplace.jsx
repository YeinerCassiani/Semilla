import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { useProducts } from "../../context/ProductsContext";
import { categories } from "../../data/categories.mock";
import { users } from "../../data/users.mock";
import Container from "../../components/layout/Container";
import Input from "../../components/common/Input/Input";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";
import "./Marketplace.css";

const Marketplace = () => {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !activeCategory || product.categoria === activeCategory;
      return (
        matchesSearch && matchesCategory && product.estado === "disponible"
      );
    });
  }, [products, searchTerm, activeCategory]);

  if (loading) return <div>Cargando mercado...</div>;

  return (
    <div className="marketplace-page">
      <Container>
        <div className="marketplace-header">
          <h1>Mercado Directo</h1>
          <p>Encuentra productos frescos sin intermediarios</p>
        </div>

        <div className="search-bar animate-fade">
          <div style={{ flex: 1 }}>
            <Input
              icon={Search}
              placeholder="¿Qué buscas hoy?"
              value={searchTerm}
              style={{ fontSize: "1.2rem", padding: "1rem 3rem" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" icon={SlidersHorizontal}>
            Filtros
          </Button>
        </div>

        <div className="filter-scroll animate-slide-up">
          <div
            className={`filter-pill ${!activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </div>
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`filter-pill ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.icono}</span>
              {cat.nombre}
            </div>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="marketplace-grid">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                image={product.foto}
                className="animate-scale"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="product-info">
                  <h3 style={{ marginBottom: "4px" }}>{product.nombre}</h3>
                  <div className="product-price">
                    ${product.precio.toLocaleString()}{" "}
                    <span className="product-unit">/ {product.unidad}</span>
                  </div>
                  <div className="product-location">
                    <MapPin size={14} />
                    <span>{product.ubicacion.municipio}</span>
                    {users.find((u) => u.id === product.vendedorId)?.stats
                      ?.verificado && (
                      <span
                        className="verify-badge"
                        title="Productor Verificado"
                      >
                        ✅
                      </span>
                    )}
                  </div>
                </div>
                <Button fullWidth size="sm" style={{ marginTop: "12px" }}>
                  Hablar con el productor
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <h3>No encontramos lo que buscas</h3>
            <p>Intenta con otra palabra o categoría.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Marketplace;
