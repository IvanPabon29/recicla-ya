// src/components/FooterPrivate.jsx
import '../styles/components/FooterPrivado.css';

/**
 * Footer del layout privado de ReciclaYa.
 * Contiene:
 * - Nombre de la empresa.
 * - Ícono de reciclaje.
 * - Año actual dinámico.
 * Minimalista y profesional.
 */
function FooterPrivate() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-private">
      <div className="footer-content">
        <i className="bi bi-recycle"></i>
        <span>ReciclaYa © {year}</span>
      </div>
    </footer>
  );
}

export default FooterPrivate;
