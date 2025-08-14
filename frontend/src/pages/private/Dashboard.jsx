import '../../styles/pages/Dashboard.css';

/**
 * Página principal del usuario (dashboard).
 * Muestra resumen de puntos, próximas recolecciones y métricas rápidas.
 */
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Bienvenido a tu Panel</h2>

      <section className="dashboard-cards">
        <div className="card resumen">
          <i className="bi bi-calendar-check"></i>
          <div>
            <h3>Próxima Recolección</h3>
            <p>Martes, 5 de agosto</p>
          </div>
        </div>

        <div className="card resumen">
          <i className="bi bi-coin"></i>
          <div>
            <h3>Puntos Acumulados</h3>
            <p>320</p>
          </div>
        </div>

        <div className="card resumen">
          <i className="bi bi-recycle"></i>
          <div>
            <h3>Material Reciclado</h3>
            <p>18 kg</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
