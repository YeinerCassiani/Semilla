import React from "react";
import "./Card.css";

const Card = ({
  children,
  image,
  badge,
  onClick,
  footer,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`card ${onClick ? "card-clickable" : ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {image && (
        <div className="card-image-wrapper">
          {badge && <span className="card-badge">{badge}</span>}
          <img src={image} alt="Imagen de card" className="card-image" />
        </div>
      )}
      <div className="card-content">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
