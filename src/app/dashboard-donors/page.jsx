"use client";

import "./dashboard-donors.css";

export default function DonorDashboard() {
  return (
    <div className="donor-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">LiFlow</h2>
        <ul className="sidebar-menu">
          <li className="menu-item active">Resumen</li>
          <li className="menu-item">Historial</li>
          <li className="menu-item">Campañas</li>
          <li className="menu-item">Perfil</li>
        </ul>

        <button className="logout-button">Cerrar sesión</button>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1 className="welcome-title">
            ¡Bienvenido, <span className="highlight">Donante</span>!
          </h1>
          <p className="welcome-subtitle">
            Gracias por ayudar a salvar vidas. Aquí tienes un resumen de tu
            actividad.
          </p>
        </header>

        <section className="dashboard-grid">
          <div className="card next-donation-card">
            <h3>Próxima fecha para donar</h3>
            <p className="big-number">15 Marzo 2025</p>
            <p className="sub-info">Puedes donar cada 56 días</p>
          </div>

          <div className="card blood-type-card">
            <h3>Tipo de sangre</h3>
            <p className="blood-type">O+</p>
            <p className="sub-info">Compatible con 85% de los pacientes</p>
          </div>

          <div className="card stats-card">
            <h3>Donaciones realizadas</h3>
            <p className="big-number">7</p>
            <p className="sub-info">¡Gracias por tu compromiso!</p>
          </div>

          <div className="card alert-card">
            <h3>Recordatorios</h3>
            <ul>
              <li>Tu próxima cita está pendiente por confirmar.</li>
              <li>Hay una campaña cercana esta semana.</li>
            </ul>
          </div>

          <div className="card history-card">
            <h3>Historial de donaciones</h3>

            <ul className="history-list">
              <li>
                <span>10 Ene 2025</span>
                <span>Hospital General</span>
              </li>
              <li>
                <span>01 Nov 2024</span>
                <span>Cruz Roja</span>
              </li>
              <li>
                <span>20 Ago 2024</span>
                <span>Hospital Central</span>
              </li>
            </ul>
          </div>

          <div className="card campaigns-card">
            <h3>Campañas cercanas</h3>
            <p className="sub-info">
              Encuentra campañas activas según tu ciudad.
            </p>
            <button className="cta-campaigns">Ver campañas</button>
          </div>
        </section>
      </main>
    </div>
  );
}
