import React from "react";
import { Play, BookOpen, Lightbulb, Shield } from "lucide-react";
import Container from "../../components/layout/Container";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";
import "./Education.css";

const CONTENT = [
  {
    id: 1,
    titulo: "Cómo tomar mejores fotos a tu cosecha",
    tipo: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&w=400&q=80",
    duracion: "3 min",
    icon: <Play size={24} />,
  },
  {
    id: 2,
    titulo: "Consejos para negociar el precio justo",
    tipo: "articulo",
    thumbnail:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    duracion: "5 min lectura",
    icon: <BookOpen size={24} />,
  },
  {
    id: 3,
    titulo: "Seguridad digital: protege tu dinero",
    tipo: "tip",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
    duracion: "2 min",
    icon: <Shield size={24} />,
  },
  {
    id: 4,
    titulo: "Mejores épocas para sembrar mango",
    tipo: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1591073113125-e467139829fd?auto=format&fit=crop&w=400&q=80",
    duracion: "4 min",
    icon: <Lightbulb size={24} />,
  },
];

const Education = () => {
  return (
    <div className="education-page">
      <Container>
        <div className="education-header">
          <h1>Aprende con Semilla 🌱</h1>
          <p>Consejos prácticos para mejorar tus ventas y cuidar tu finca</p>
        </div>

        <div className="section-header">
          <h2>Contenido Recomendado</h2>
        </div>

        <div className="edu-grid">
          {CONTENT.map((item, index) => (
            <Card
              key={item.id}
              className="edu-card animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="edu-thumb">
                <img src={item.thumbnail} alt={item.titulo} />
                <div className="edu-type-badge">{item.tipo.toUpperCase()}</div>
              </div>
              <div className="edu-content">
                <h3>{item.titulo}</h3>
                <div className="edu-meta">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {item.icon}{" "}
                    {item.tipo === "video" ? "Ver ahora" : "Leer ahora"}
                  </span>
                  <span>{item.duracion}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Education;
