import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Store, Trophy, MessageCircle, BookOpen } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import "./BottomNav.css";

const BottomNav = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <nav className="bottom-nav">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? "active" : ""}`
        }
      >
        <Home size={24} />
        <span className="bottom-nav-text">Inicio</span>
      </NavLink>
      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? "active" : ""}`
        }
      >
        <Store size={24} />
        <span className="bottom-nav-text">Comprar</span>
      </NavLink>
      <NavLink
        to="/ranking"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? "active" : ""}`
        }
      >
        <Trophy size={24} />
        <span className="bottom-nav-text">Ranking</span>
      </NavLink>
      <NavLink
        to="/chat"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? "active" : ""}`
        }
      >
        <MessageCircle size={24} />
        <span className="bottom-nav-text">Chat</span>
      </NavLink>
      <NavLink
        to="/education"
        className={({ isActive }) =>
          `bottom-nav-item ${isActive ? "active" : ""}`
        }
      >
        <BookOpen size={24} />
        <span className="bottom-nav-text">Aprender</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
