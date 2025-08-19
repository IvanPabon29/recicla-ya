// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

/**
 * Header público del sistema. 
 * - Fijo en la parte superior.
 * - Con menú hamburguesa en móviles.
 * - Estilo ecológico y profesional.
 */
function Header() {
  // Estado para controlar el menú hamburguesa
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={cerrarMenu}>
          ♻️ <span>ReciclaYa</span>
        </Link>
      </div>

      {/* Botón Hamburguesa */}
      <button className="hamburguesa" onClick={toggleMenu} aria-label="Menú">
        <i className="bi bi-list"></i>
      </button>

      {/* Navegación */}
      <nav className={`nav ${menuAbierto ? 'activo' : ''}`}>
        <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
        <a href="#quienes" onClick={cerrarMenu}>Quienes Somos</a>
        <a href="#funciona" onClick={cerrarMenu}>Cómo Funciona</a>
        <a href="#servicios" onClick={cerrarMenu}>Servicios</a>
        <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
      </nav>

      {/* Botones de acción */}
      <div className={`header-actions ${menuAbierto ? 'activo' : ''}`}>
        <Link to="/login" className="btn-secondary" onClick={cerrarMenu}>Iniciar Sesión</Link>
        <Link to="/registro" className="btn-primary" onClick={cerrarMenu}>Inscribirse</Link>
      </div>
    </header>
  );
}

export default Header;
