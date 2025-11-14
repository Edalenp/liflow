"use client";

import "./dashboard-medical.css";

export default function MedicalDashboard() {
  return (
    <div className="medical-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">LiFlow</h2>

        <ul className="sidebar-menu">
          <li className="menu-item active">Resumen</li>
          <li className="menu-item">Disponibilidad</li>
          <li className="menu-item">Donantes</li>
          <li className="menu-item">Campañas</li>
          <li className="menu-item">Reportes</li>
        </ul>

        <button className="logout-button">Cerrar sesión</button>
      </aside>

      <main className="main-panel">
        <header className="dashboard-header">
          <h1 className="dashboard-title">
            Panel del <span className="highlight">Personal Médico</span>
          </h1>
          <p className="dashboard-subtitle">
            Administra campañas, disponibilidad y donantes en tiempo real.
          </p>
        </header>

        <section className="panel-grid">
          <div className="card urgent-card">
            <h3>Solicitudes Urgentes</h3>
            <p className="big-number">3</p>
            <p className="sub-info">Pacientes esperando transfusión</p>
          </div>

          <div className="card availability-card">
            <h3>Disponibilidad Total</h3>
            <ul className="blood-stock">
              <li>O+ — 21 unidades</li>
              <li>O- — 14 unidades</li>
              <li>A+ — 18 unidades</li>
              <li>B+ — 9 unidades</li>
            </ul>
          </div>

          <div className="card campaigns-card">
            <h3>Campañas Activas</h3>
            <p className="big-number">4</p>
            <button className="action-button">Ver campañas</button>
          </div>

          <div className="card donors-card">
            <h3>Últimos Donantes</h3>
            <ul className="donors-list">
              <li>Juan Pérez — O+</li>
              <li>Camila Arango — A-</li>
              <li>Santiago López — B+</li>
            </ul>
          </div>

          <div className="card reports-card">
            <h3>Generar Reportes</h3>
            <p className="sub-info">Donaciones, campañas y disponibilidad</p>
            <button className="action-button">Generar reporte</button>
          </div>
        </section>
      </main>
    </div>
  );
}
