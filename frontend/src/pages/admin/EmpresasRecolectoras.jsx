// src/pages/admin/EmpresasRecolectoras.jsx
import '../../styles/EmpresasRecolectoras.css';

/**
 * Página de administración para gestionar empresas recolectoras.
 * Visible solo para el administrador.
 */
function EmpresasRecolectoras() {
  return (
    <section className="admin-recolectoras">
      <h2>Empresas Recolectoras</h2>
      <p>Administra las empresas encargadas de recolectar los residuos.</p>

      <div className="tabla-container">
        <table className="tabla-recolectoras">
          <thead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Zona</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo estático, luego puedes conectarlo a datos reales */}
            <tr>
              <td>R001</td>
              <td>EcoRecolectores S.A.</td>
              <td>eco@recolectores.com</td>
              <td>+57 320 111 2233</td>
              <td>Bogotá Sur</td>
              <td>Activo</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>R002</td>
              <td>Verde Limpio Ltda</td>
              <td>contacto@verdelimpio.com</td>
              <td>+57 310 000 4455</td>
              <td>Bogotá Norte</td>
              <td>Inactivo</td>
              <td>
                <button className="btn-editar">Editar</button>
                <button className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EmpresasRecolectoras;
