// src/pages/empresa/EmpresaInicio.jsx
import '../../styles/empresa/empresaInicio.css';

/**
 * Panel principal de la empresa recolectora.
 * Muestra información general y acceso rápido a funciones clave.
 */
function EmpresaInicio() {
  return (
    <section className="empresa-inicio">
      <h2>Bienvenido al Panel de Empresa</h2>
      <p className="subtitulo">
        Administra las solicitudes y gestiona tus rutas de recolección de forma eficiente. ♻️
      </p>

      <div className="empresa-panel-cajas">
        <div className="caja">
          <i className="bi bi-calendar-check"></i>
          <h3>Solicitudes Activas</h3>
          <p>Revisa y organiza las solicitudes pendientes.</p>
        </div>

        <div className="caja">
          <i className="bi bi-truck-front"></i>
          <h3>Gestión de Rutas</h3>
          <p>Monitorea y actualiza el estado de las recolecciones.</p>
        </div>

        <div className="caja">
          <i className="bi bi-clock-history"></i>
          <h3>Historial</h3>
          <p>Consulta el historial de recolecciones realizadas.</p>
        </div>
      </div>
    </section>
  );
}

export default EmpresaInicio;
