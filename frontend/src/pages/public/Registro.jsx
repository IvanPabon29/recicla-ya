import '../../styles/pages/registro.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authService from '../../services/authService'; // Aquí centralizamos las peticiones HTTP

/**
 * Página de registro para nuevos usuarios del sistema ReciclaYa.
 * Permite ingresar datos personales básicos para crear una cuenta.
 */
function Registro() {

  // Hook para navegación
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    password: '',
    confirmar: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Maneja cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Maneja envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (formData.password !== formData.confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);

      // Llamada al backend 
      await authService.register({
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.correo,
        telefono: formData.telefono,
        direccion: formData.direccion,
        password: formData.password
      });

      // Redirige a login si todo sale bien
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="registro">
      <div className="registro-overlay">
        <div className="registro-container">
          <h2>Crear Cuenta</h2>
          <p>Ingresa tus datos para unirte a ReciclaYa ♻️</p>

          {error && <div className="error-message">{error}</div>}

          <form className="registro-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder='Nombre' value={formData.nombre} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" placeholder='Apellido' value={formData.apellido} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>
              <input type="email" id="correo" placeholder='ejemplo@correo.com' value={formData.correo} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input type="tel" id="telefono" placeholder='Telefono' value={formData.telefono} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" placeholder='Calle Falsa 123' value={formData.direccion} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder='Contraseña' value={formData.password} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmar">Confirmar Contraseña</label>
              <input type="password" id="confirmar" placeholder='Confirmar Contraseña' value={formData.confirmar} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn-primary-registro" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarme'}
            </button>

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
