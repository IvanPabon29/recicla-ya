// src/pages/auth/Login.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import '../../styles/pages/login.css';

/**
 * Página de inicio de sesión para el sistema ReciclaYa.
 * Permite al usuario ingresar con su correo y contraseña.
 * 
 * Flujo:
 * 1. El usuario completa el formulario.
 * 2. Se llama al servicio de login (authService.login).
 * 3. Si es exitoso → se guarda el token en localStorage y se redirige al dashboard.
 * 4. Si falla → se muestra un mensaje de error.
 */
function Login() {
  // Estados para manejar los campos del formulario
  const [correo, setcorreo] = useState('');
  const [password, setPassword] = useState('');

  // Estado para manejar mensajes de error
  const [error, setError] = useState('');

  // Hook de navegación para redirigir al usuario
  const navigate = useNavigate();

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * @param {Event} e - Evento de formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpia errores previos

    try {
      // Llamada al servicio de autenticación
      const response = await authService.login({ correo, password });

      // Se asume que el backend devuelve: { token, user }
      const { token, user } = response.data;

      // Guardar token y datos de usuario en localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirigir al dashboard o layout privado
      navigate('/dashboard'); // <- Ajusta la ruta según tu sistema
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || 'Error al iniciar sesión. Verifica tus credenciales.'
      );
    }
  };

  return (
    <main id="login-page">
      <div className="login-overlay">
        <div className="login-container">
          <h1 className="login-empresa-nombre">♻️ ReciclaYa</h1>
          <h2>Iniciar Sesión</h2>

          {/* Formulario de inicio de sesión */}
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={(e) => setcorreo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Mensaje de error */}
            {error && <p className="error-message">{error}</p>}

            <div className="form-options">
              <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
            </div>

            <button type="submit" className="btn-login">
              Ingresar
            </button>
          </form>

          <p className="register-link">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
