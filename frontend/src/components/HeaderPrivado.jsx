// src/components/HeaderPrivado.jsx
import '../styles/HeaderPrivado.css';

/**
 * Header del layout privado del sistema ReciclaYa.
 * - Muestra el logo con nombre de empresa.
 * - Nombre del usuario autenticado (simulado).
 * - Botón de cerrar sesión.
 * - Botón hamburguesa para abrir el sidebar en móviles.
 */
function HeaderPrivado({ abrirSidebar }) {
  return (
    <header className="header-privado">
      {/* Botón menú hamburguesa (solo en móviles) */}
      <button className="btn-hamburguesa" onClick={abrirSidebar} aria-label="Abrir menú">
        <i className="bi bi-list"></i>
      </button>

      {/* Nombre de la empresa */}
      <div className="empresa-logo">
        <i className="bi bi-recycle"></i>
        <span>ReciclaYa</span>
      </div>

      {/* Usuario + Cerrar sesión */}
      <div className="usuario-info">
        <span className="usuario-nombre">Juan Pérez</span>
        <button className="btn-salir" title="Cerrar sesión">
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderPrivado;
