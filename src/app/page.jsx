import React from "react";
import { Heart, Calendar, Bell, BarChart3, Users, Droplet } from "lucide-react";
import "./page.css";

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-brand">
            <h2 className="hero-title">Liflow</h2>
          </div>
          <p className="hero-subtitle">
            La plataforma inteligente que conecta donantes con quienes más lo
            necesitan
          </p>
        </div>
      </section>

      <main className="main">
        <div className="container">
          <section className="intro-section">
            <h2 className="section-title">
              Gestión eficiente de donantes de sangre
            </h2>
            <p className="intro-text">
              El Hospital Central transforma el proceso de donación de sangre
              con Liflow, una aplicación que centraliza información, facilita el
              seguimiento de donantes y optimiza cada campaña para salvar más
              vidas.
            </p>
          </section>

          <section className="features">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h3 className="feature-title">Para Donantes</h3>
              <p className="feature-description">
                Regístrate con tu tipo sanguíneo, consulta tu historial de
                donaciones y lleva un control de cuándo puedes volver a donar.
                Mantén un registro digital completo de todas tus contribuciones.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Calendar />
              </div>
              <h3 className="feature-title">Campañas Cercanas</h3>
              <p className="feature-description">
                Encuentra jornadas de donación cerca de ti y agenda tu cita de
                forma sencilla. Recibe toda la información necesaria para
                prepararte antes de tu donación.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Bell />
              </div>
              <h3 className="feature-title">Alertas y Recordatorios</h3>
              <p className="feature-description">
                Recibe notificaciones automáticas cuando tu tipo de sangre sea
                especialmente necesario en una emergencia. No pierdas contacto
                con las campañas que más importan.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 />
              </div>
              <h3 className="feature-title">Panel de Control</h3>
              <p className="feature-description">
                Genera reportes de disponibilidad por tipo de sangre, monitorea
                inscripciones en cada jornada y planifica campañas de manera más
                eficiente con datos en tiempo real.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3 className="feature-title">Comunidad de Donantes</h3>
              <p className="feature-description">
                Mantén a los donantes habituales motivados y conectados.
                Fideliza a quienes están dispuestos a donar con frecuencia
                mediante recordatorios oportunos y reconocimientos.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h3 className="feature-title">Tu Impacto</h3>
              <p className="feature-description">
                Visualiza cuántas vidas has ayudado a salvar con tus donaciones.
                Cada gota cuenta y queremos que conozcas el verdadero alcance de
                tu generosidad.
              </p>
            </div>
          </section>

          <section className="cta-section">
            <h2 className="cta-title">Únete a Liflow hoy</h2>
            <p className="cta-text">
              Gestión organizada y oportuna para salvar más vidas
            </p>
            <button className="btn-primary-large">Comenzar ahora</button>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Droplet className="footer-logo" />
              <span>Liflow</span>
            </div>
            <p className="footer-text">
              Hospital Central - Salvando vidas a través de la donación
              organizada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
