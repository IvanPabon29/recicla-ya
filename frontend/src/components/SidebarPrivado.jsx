// src/components/SidebarPrivado.jsx
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebarPrivado.css';

/**
 * Sidebar de navegación para el layout privado del sistema ReciclaYa.
 * - En pantallas grandes se muestra como un sidebar lateral.
 * - En móviles se convierte en un menú hamburguesa que puede abrirse/cerrarse.
 */
function SidebarPrivado({ abierto, cerrar }) {
  const location = useLocation();

  const rutas = [
    { path: '/dashboard', nombre: 'Inicio', icono: 'bi bi-house-door-fill' },
    { path: '/recolecciones', nombre: 'Solicitar Recolección', icono: 'bi bi-truck' },
    { path: '/historial', nombre: 'Historial', icono: 'bi bi-clock-history' },
    { path: '/puntos', nombre: 'Mis Puntos', icono: 'bi bi-coin' },
    { path: '/perfil', nombre: 'Perfil', icono: 'bi bi-person-circle' }
  ];

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
          {rutas.map(({ path, nombre, icono }) => (
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
