import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Heart,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Container from "../Container";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-decoration"></div>
      <Container>
        <div className="footer-main-grid">
          {/* Columna de Marca */}
          <div className="footer-brand-section">
            <Link to="/" className="footer-logo">
              <img
                src="/images/icons/icono_texto.png"
                alt="Semilla Logo"
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-tagline">
              Transformando la comercialización del campo colombiano a través de
              tecnología humana y directa.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link-circle">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link-circle">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link-circle">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Plataforma</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/marketplace">Explorar Mercado</Link>
              </li>
              <li>
                <Link to="/login?role=productor">Vender Cosecha</Link>
              </li>
              <li>
                <Link to="/education">Centro de Aprendizaje</Link>
              </li>
              <li>
                <Link to="/dashboard">Mi Panel</Link>
              </li>
            </ul>
          </div>

          {/* Ayuda y Contacto */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Soporte</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/help">Centro de Ayuda</Link>
              </li>
              <li>
                <Link to="/faq">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/security">Seguridad en Pagos</Link>
              </li>
              <li>
                <Link to="/terms">Términos de Uso</Link>
              </li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact-info">
              <li>
                <Mail size={16} /> <span>contacto@semilla.co</span>
              </li>
              <li>
                <Phone size={16} /> <span>+57 (300) 830 2655</span>
              </li>
              <li>
                <MapPin size={16} /> <span>Santa Marta, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Semilla. Todos los derechos reservados.
          </div>
          <div className="made-with-love">
            Hecho con <Heart size={14} className="heart-icon" /> por y para el
            campo colombiano.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
