import React from "react";
import {
  Trophy,
  Award,
  CheckCircle2,
  Zap,
  TrendingUp,
  Star,
} from "lucide-react";
import { users } from "../../data/users.mock";
import Container from "../../components/layout/Container";
import "./Ranking.css";

const Ranking = () => {
  // Filtrar solo productores y ordenar por ventas
  const rankings = [...users]
    .filter((u) => u.rol === "productor")
    .sort((a, b) => (b.stats?.ventas || 0) - (a.stats?.ventas || 0));

  const topThree = rankings.slice(0, 3);
  const rest = rankings.slice(3);

  const getNivelClass = (nivel) => {
    switch (nivel) {
      case "Semilla":
        return "nivel-semilla";
      case "Brote":
        return "nivel-brote";
      case "Cosecha":
        return "nivel-cosecha";
      case "Oro":
        return "nivel-oro";
      default:
        return "nivel-semilla";
    }
  };

  return (
    <div className="ranking-page">
      <Container>
        <header className="ranking-header">
          <h1>Muro de Excelencia 🏆</h1>
          <p>Los productores con mayor impacto en la soberanía alimentaria</p>
        </header>

        {/* Podio */}
        <div className="top-podium animate-slide-up">
          {topThree[1] && (
            <div className="podium-item rank-2">
              <span className="podium-medal">🥈</span>
              <img
                src={topThree[1].avatar}
                alt={topThree[1].nombre}
                className="podium-avatar"
              />
              <div className="podium-name">{topThree[1].nombre}</div>
              <div className="podium-score">
                {topThree[1].stats.ventas} ventas
              </div>
            </div>
          )}

          {topThree[0] && (
            <div className="podium-item rank-1">
              <span className="podium-medal">🥇</span>
              <img
                src={topThree[0].avatar}
                alt={topThree[0].nombre}
                className="podium-avatar"
              />
              <div className="podium-name">{topThree[0].nombre}</div>
              <div className="podium-score">
                {topThree[0].stats.ventas} ventas
              </div>
            </div>
          )}

          {topThree[2] && (
            <div className="podium-item rank-3">
              <span className="podium-medal">🥉</span>
              <img
                src={topThree[2].avatar}
                alt={topThree[2].nombre}
                className="podium-avatar"
              />
              <div className="podium-name">{topThree[2].nombre}</div>
              <div className="podium-score">
                {topThree[2].stats.ventas} ventas
              </div>
            </div>
          )}
        </div>

        {/* Lista completa */}
        <div className="ranking-list">
          {rankings.map((user, index) => (
            <div
              key={user.id}
              className="ranking-row animate-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="row-rank">{index + 1}</div>
              <img src={user.avatar} alt={user.nombre} className="row-avatar" />
              <div className="row-info">
                <div className="row-name">
                  {user.nombre}
                  {user.stats?.verificado && (
                    <CheckCircle2 size={14} className="text-primary" />
                  )}
                </div>
                <div className="row-meta">
                  <span
                    className={`badge-pill badge-nivel ${getNivelClass(user.stats?.nivel)}`}
                  >
                    {user.stats?.nivel || "Semilla"}
                  </span>
                  {user.stats?.respuestasRapidas && (
                    <span className="badge-pill badge-fast">
                      <Zap size={10} /> Rayo
                    </span>
                  )}
                </div>
              </div>
              <div className="row-stats">
                <span className="row-value">{user.stats?.ventas || 0}</span>
                <span className="row-label">Ventas</span>
              </div>
              <div className="row-stats" style={{ marginLeft: "15px" }}>
                <span className="row-value">
                  ⭐ {user.stats?.rating || "N/A"}
                </span>
                <span className="row-label">Rating</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Ranking;
