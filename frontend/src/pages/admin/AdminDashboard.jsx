import '../../styles/adminDashboard.css';

/**
 * Vista principal del panel de control del administrador.
 * Muestra resumen general del sistema con estadísticas y accesos rápidos.
 */
function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Panel de Control</h1>
      <p className="bienvenida">Bienvenido al panel administrativo de ReciclaYa</p>

      <div className="estadisticas-grid">
        <div className="card-estadistica">
          <i className="bi bi-people-fill icono"></i>
          <h3>Usuarios Registrados</h3>
          <p>1,248</p>
        </div>

        <div className="card-estadistica">
          <i className="bi bi-truck icono"></i>
          <h3>Empresas Recolectoras</h3>
          <p>37</p>
        </div>

        <div className="card-estadistica">
          <i className="bi bi-envelope-paper icono"></i>
          <h3>Solicitudes Activas</h3>
          <p>92</p>
        </div>

        <div className="card-estadistica">
          <i className="bi bi-bar-chart icono"></i>
          <h3>Puntos Otorgados</h3>
          <p>15,324</p>
        </div>
      </div>

      <div className="seccion-accesos">
        <h2>Accesos rápidos</h2>
        <div className="accesos-grid">
          <a href="/admin/usuarios" className="acceso-btn">
            <i className="bi bi-person-lines-fill"></i> Gestión de Usuarios
          </a>
          <a href="/admin/recolectores" className="acceso-btn">
            <i className="bi bi-building"></i> Recolectores
          </a>
          <a href="/admin/solicitudes" className="acceso-btn">
            <i className="bi bi-inbox-fill"></i> Solicitudes
          </a>
          <a href="/admin/reportes" className="acceso-btn">
            <i className="bi bi-file-earmark-bar-graph"></i> Reportes
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
