// src/pages/Home.jsx
import '../styles/home.css';
import { Link } from 'react-router-dom';

/**
 * Página principal del sistema ReciclaYa.
 * Contiene todas las secciones accesibles desde el menú público.
 */
function Home() {
  return (
    <div className="home">

      {/* Hero con imagen de fondo */}
      <section className="hero" id="inicio">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Transforma residuos en recompensas</h1>
            <p>Únete al sistema de recolección de reciclaje más eficiente y responsable.</p>
            <Link to="/registro" className="btn-primary-hero">Inscribirse ahora</Link>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="section quienes" id="quienes">
        <div className="container">
          <h2>¿Quiénes Somos?</h2>
          <p>
            ReciclaYa es una iniciativa tecnológica que busca promover la separación y recolección de residuos
            de manera organizada, premiando a los usuarios por su compromiso ambiental.
          </p>
          <i className="bi bi-globe2 section-icon"></i>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="section bg-white" id="funciona">
        <div className="container">
          <h2>¿Cómo Funciona?</h2>
          <div className="funciona-steps">
            <div className="step">
              <i className="bi bi-person-plus-fill"></i>
              <h3>1. Regístrate</h3>
              <p>Crea tu cuenta y selecciona tus preferencias de recolección.</p>
            </div>
            <div className="step">
              <i className="bi bi-calendar-check-fill"></i>
              <h3>2. Programa</h3>
              <p>Solicita recolecciones semanales o mensuales desde tu panel.</p>
            </div>
            <div className="step">
              <i className="bi bi-gift-fill"></i>
              <h3>3. Recibe puntos</h3>
              <p>Canjea puntos acumulados por descuentos y beneficios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section servicios" id="servicios">
        <div className="container">
          <h2>Servicios</h2>
          <ul className="servicios-lista">
            <li><i className="bi bi-recycle"></i> Recolección de residuos reciclables</li>
            <li><i className="bi bi-exclamation-triangle-fill"></i> Recolección de residuos peligrosos</li>
            <li><i className="bi bi-graph-up"></i> Reportes personalizados por usuario</li>
            <li><i className="bi bi-whatsapp"></i> Notificaciones automáticas por WhatsApp</li>
          </ul>
        </div>
      </section>

      {/* Contacto */}
      <section className="section contacto" id="contacto">
        <div className="container">
          <h2>Contacto</h2>
          <p>¿Tienes preguntas o deseas sumarte como empresa aliada?</p>
          <p><i className="bi bi-geo-alt"></i> Bogotá, Colombia</p>
          <p><i className="bi bi-envelope"></i> contacto@reciclayapp.com</p>
          <p><i className="bi bi-telephone"></i> +57 310 000 0000</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
