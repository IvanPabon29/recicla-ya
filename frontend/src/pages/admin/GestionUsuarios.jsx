// src/pages/admin/GestionUsuarios.jsx
import '../../styles/GestionUsuarios.css';

/**
 * Página para gestionar usuarios del sistema.
 * Visible solo para administradores.
 */
function UsuariosAdmin() {
  return (
    <section className="admin-usuarios">
      <h2>Gestión de Usuarios</h2>
      <p>Consulta, edita o elimina usuarios registrados en la plataforma.</p>

      {/* Tabla de usuarios */}
      <div className="tabla-container">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se renderizaría dinámicamente con datos reales */}
            <tr>
              <td>001</td>
              <td>María López</td>
              <td>maria@example.com</td>
              <td>Usuario</td>
              <td>Activo</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>Carlos Gómez</td>
              <td>carlos@example.com</td>
              <td>Recolector</td>
              <td>Inactivo</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
            {/* Agrega más filas de ejemplo si deseas */}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UsuariosAdmin;
