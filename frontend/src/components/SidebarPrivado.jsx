// src/components/SidebarPrivado.jsx
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/SidebarPrivado.css';

/**
 * Sidebar de navegación para layouts privados del sistema ReciclaYa.
 * - Reutilizable para cualquier tipo de usuario (normal, admin, empresa).
 * - Soporta menú hamburguesa y diseño responsive.
 * 
 * @param {boolean} abierto - Si el menú está visible (en móvil).
 * @param {function} cerrar - Función para cerrar el menú.
 * @param {Array} rutas - Rutas del menú (path, nombre, icono).
 */
function SidebarPrivado({ abierto, cerrar, rutas }) {
  const location = useLocation();

  // Rutas por defecto (usuario normal)
  const rutasPorDefecto = [
    { path: '/dashboard', nombre: 'Inicio', icono: 'bi bi-house-door-fill' },
    { path: '/recolecciones', nombre: 'Solicitar Recolección', icono: 'bi bi-truck' },
    { path: '/historial', nombre: 'Historial', icono: 'bi bi-clock-history' },
    { path: '/reporte', nombre: 'Reportes', icono: 'bi bi-clipboard-data' },
    { path: '/puntos', nombre: 'Mis Puntos', icono: 'bi bi-coin' },
    { path: '/perfil', nombre: 'Perfil', icono: 'bi bi-person-circle' }
  ];

  const links = rutas || rutasPorDefecto;

  return (
    <aside className={`sidebar-privado ${abierto ? 'activo' : ''}`}>
      {/* Encabezado con logo y botón cerrar en móvil */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="bi bi-recycle"></i>
          <span>ReciclaYa</span>
        </div>
        <button className="cerrar-sidebar" onClick={cerrar} aria-label="Cerrar menú">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      {/* Navegación */}
      <nav className="sidebar-nav">
        <ul>
          {links.map(({ path, nombre, icono }) => (
            <li key={path} className={location.pathname === path ? 'activo' : ''}>
              <Link to={path} onClick={cerrar}>
                <i className={icono}></i>
                <span>{nombre}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarPrivado;
