import { Link } from 'react-router-dom';
import '../styles/login.css';

/**
 * Página de inicio de sesión para el sistema ReciclaYa.
 */
function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" placeholder="********" required />
          </div>

          <div className="form-options">
            <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
          </div>

          <button type="submit" className="btn-login">Ingresar</button>
        </form>

        <p className="register-link">
          ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
