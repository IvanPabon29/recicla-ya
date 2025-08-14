import '../../styles/pages/Home.css';
import { Link } from 'react-router-dom';
import ImgQuienes from '../../assets/img/quienes-somos.jpg';

/**
 * Página principal del sistema ReciclaYa.
 * Contiene secciones informativas, visuales y responsivas. 
 */
function Home() {
  return (
    <div className="home">
      {/* Hero */}
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
        <div className="quienes-container">
          <div className="quienes-img">
            <img src={ImgQuienes} alt="Equipo ReciclaYa" />
          </div>
          <div className="quienes-content">
            <h2>¿Quiénes Somos?</h2>
            <p>
              Somos una plataforma ambiental que incentiva el reciclaje responsable mediante un sistema de recompensas.
              Trabajamos con empresas recolectoras, usuarios y comunidades para reducir el impacto ambiental.
            </p>
            <div className="quienes-icons">
              <div>
                <i className="bi bi-tree-fill"></i>
                <p>Compromiso Ambiental</p>
              </div>
              <div>
                <i className="bi bi-people-fill"></i>
                <p>Comunidad Participativa</p>
              </div>
              <div>
                <i className="bi bi-award-fill"></i>
                <p>Recompensas Justas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="section funciona" id="funciona">
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
          <div className="servicios-lista">
            <div className="servicio"><i className="bi bi-recycle"></i><p>Residuos reciclables</p></div>
            <div className="servicio"><i className="bi bi-exclamation-triangle-fill"></i><p>Residuos peligrosos</p></div>
            <div className="servicio"><i className="bi bi-graph-up"></i><p>Reportes por usuario</p></div>
            <div className="servicio"><i className="bi bi-whatsapp"></i><p>Alertas por WhatsApp</p></div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="section contacto" id="contacto">
        <div className="contacto-container">
          {/* Mapa */}
          <div className="mapa">
            <iframe
              title="Ubicación ReciclaYa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8537830127275!2d-74.08175368467599!3d4.609710243484249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a09e2632a7%3A0x67a3c7161a88d08!2sBogotá!5e0!3m2!1ses!2sco!4v1691000000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
          </div>

          {/* Info + formulario */}
          <div className="contacto-info">
            <h2>Contacto</h2>
            <p><i className="bi bi-geo-alt"></i> Bogotá, Colombia</p>
            <p><i className="bi bi-envelope"></i> contacto@reciclayapp.com</p>
            <p><i className="bi bi-telephone"></i> +57 310 000 0000</p>

            <form className="form-contacto">
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo" required />
              <textarea rows="4" placeholder="Tu mensaje" required></textarea>
              <button type="submit">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
