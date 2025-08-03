// src/components/Header.jsx
import { Link } from 'react-router-dom';
import '../styles/Header.css';

/**
 * Header del sitio público. Incluye logo, navegación y botones de sesión.
 * Estilo responsivo y adaptado a la paleta ecológica.
 */
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          ♻️ <span>ReciclaYa</span>
        </Link>
      </div>

      <nav className="nav">
        <Link to="/">Inicio</Link>
        <a href="#quienes">Quienes Somos</a>
        <a href="#funciona">Cómo Funciona</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div className="header-actions">
        <Link to="/login" className="btn-secondary">Iniciar Sesión</Link>
        <Link to="/registro" className="btn-primary">Inscribirse</Link>
      </div>
    </header>
  );
}

export default Header;
