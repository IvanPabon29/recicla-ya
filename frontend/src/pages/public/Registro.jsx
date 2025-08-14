import '../../styles/pages/registro.css';
import { Link } from 'react-router-dom';

/**
 * Página de registro para nuevos usuarios del sistema ReciclaYa.
 * Permite ingresar datos personales básicos para crear una cuenta.
 */
function Registro() {
  return (
    <main id="registro">
      <div className="registro-overlay">

        <div className="registro-container">
          <h2>Crear Cuenta</h2>
          <p>Ingresa tus datos para unirte a ReciclaYa ♻️</p>

          <form className="registro-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Ej: Juan" required />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" placeholder="Ej: Pérez" required />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input type="email" id="correo" placeholder="Ej: juan@mail.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" placeholder="Ej: +57 300 000 0000" required />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" placeholder="Ej: Calle 123 #45-67" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="********" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmar">Confirmar Contraseña</label>
              <input type="password" id="confirmar" placeholder="********" required />
            </div>

            <button type="submit" className="btn-primary-registro">Registrarme</button>

            <p className="login-link">
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Registro;
