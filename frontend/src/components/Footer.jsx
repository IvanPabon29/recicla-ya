import '../styles/components/Footer.css';
import { Link } from 'react-router-dom';


/**
 * Footer del sitio público. Contiene logo, redes sociales, navegación y contacto.
 * Distribución en 3 columnas iguales y responsive.
 */

function Footer() {
  return (
    <footer className="footer">
      {/* Columna 1: nombre e ícono */}
      <div className="footer__column">
        <div className="footer__brand">
          <span className="footer__logo-text">♻️ <strong>ReciclaYa</strong></span>
          <p className="footer__slogan">Transforma residuos en recompensas.</p>
        </div>

        <div className="footer__social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>

      {/* Columna 2: Menú */}
      <div className="footer__column">
        <h4>Menú</h4>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><a href="#quienes">Quiénes Somos</a></li>
          <li><a href="#funciona">Cómo Funciona</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      {/* Columna 3: Contacto */}
      <div className="footer__column">
        <h4>Contacto</h4>
        <p><i className="bi bi-geo-alt-fill"></i> Bogotá, Colombia</p>
        <p><i className="bi bi-telephone-fill"></i> +57 310 000 0000</p>
        <p><i className="bi bi-envelope-fill"></i> contacto@reciclayapp.com</p>
      </div>

      {/* Línea inferior */}
      <div className="footer__bottom">
        <p>ReciclaYa © 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
