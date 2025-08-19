// src/components/HeaderPrivado.jsx
import '../styles/components/HeaderPrivado.css';

/**
 * Header del layout privado del sistema ReciclaYa.
 *
 * Props:
 * - abrirSidebar (función): abre el menú lateral en versión móvil.
 * - nombreUsuario (string): nombre del usuario autenticado.
 * - onLogout (función): ejecuta la acción de cerrar sesión.
 *
 * Funcionalidad:
 * - Muestra el logo con nombre de empresa.
 * - Muestra un saludo al usuario autenticado.
 * - Botón de cerrar sesión.
 * - Botón hamburguesa para abrir el sidebar en móviles.
 */
function HeaderPrivado({ abrirSidebar, nombreUsuario = "Usuario", onLogout }) {
  return (
    <header className="header-privado">
      {/* Botón menú hamburguesa (solo en móviles) */}
      <button
        className="btn-hamburguesa"
        onClick={abrirSidebar}
        aria-label="Abrir menú"
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Logo con nombre de empresa */}
      <div className="empresa-logo">
        <i className="bi bi-recycle"></i>
        <span>ReciclaYa</span>
      </div>

      {/* Usuario + Cerrar sesión */}
      <div className="usuario-info">
        <span className="usuario-nombre">
          Hola, <strong>{nombreUsuario}</strong> 👋
        </span>
        <button
          className="btn-salir"
          title="Cerrar sesión"
          onClick={onLogout}
        >
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>
    </header>
  );
}

export default HeaderPrivado;
