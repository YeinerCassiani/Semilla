import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, ShoppingBag, BookOpen, HelpCircle } from "lucide-react";
import Container from "../Container";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../common/Button/Button";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <div className="header-content">
          <Link to="/" className="header-logo">
            <img
              src="/images/icons/icono_texto.png"
              alt="Semilla Logo"
              className="logo-img"
            />
          </Link>

          {isAuthenticated && (
            <nav className="header-nav-pill">
              <Link
                to="/marketplace"
                className={`nav-pill-item ${isActive("/marketplace") ? "active" : ""}`}
              >
                <ShoppingBag size={16} />
                <span>Mercado</span>
              </Link>
              <Link
                to="/education"
                className={`nav-pill-item ${isActive("/education") ? "active" : ""}`}
              >
                <BookOpen size={16} />
                <span>Aprende</span>
              </Link>
              <Link
                to="/help"
                className={`nav-pill-item ${isActive("/help") ? "active" : ""}`}
              >
                <HelpCircle size={16} />
                <span>Ayuda</span>
              </Link>
            </nav>
          )}

          <div className="header-actions">
            {isAuthenticated ? (
              <Link to="/dashboard" className="user-profile-btn">
                <div className="avatar-wrapper">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.nombre} />
                  ) : (
                    <User size={18} />
                  )}
                </div>
                <span className="user-name-label">
                  {user.nombre.split(" ")[0]}
                </span>
              </Link>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="login-link">
                  Iniciar Sesión
                </Link>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() =>
                    (window.location.href = "/login?role=productor")
                  }
                >
                  Únete Gratis
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
