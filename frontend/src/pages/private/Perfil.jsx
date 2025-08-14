import '../../styles/pages/Perfil.css';

/**
 * Página de perfil del usuario.
 * Muestra información básica con opción de editar datos personales.
 */
function Perfil() {
  // Datos simulados
  const usuario = {
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan@mailapp.com',
    telefono: '+57 310 123 4567',
    direccion: 'Calle 123 #45-67',
  };

  return (
    <section className="perfil">
      <h2>Mi Perfil</h2>
      <p>Consulta y edita tu información personal.</p>

      <div className="perfil-card">
        <div className="perfil-datos">
          <div>
            <label>Nombre:</label>
            <span>{usuario.nombre}</span>
          </div>
          <div>
            <label>Apellido:</label>
            <span>{usuario.apellido}</span>
          </div>
          <div>
            <label>Correo:</label>
            <span>{usuario.correo}</span>
          </div>
          <div>
            <label>Teléfono:</label>
            <span>{usuario.telefono}</span>
          </div>
          <div>
            <label>Dirección:</label>
            <span>{usuario.direccion}</span>
          </div>
        </div>

        <div className="perfil-opciones">
          <button className="btn-editar">
            <i className="bi bi-pencil-square"></i> Editar Perfil
          </button>
          <button className="btn-password">
            <i className="bi bi-shield-lock-fill"></i> Cambiar Contraseña
          </button>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
