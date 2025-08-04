// src/pages/empresa/EmpresaGestion.jsx
import '../../styles/empresa/empresaGestion.css';

/**
 * Gestión del estado de las recolecciones.
 * Permite a la empresa actualizar el estado de cada solicitud.
 */
function EmpresaGestion() {
  return (
    <section className="empresa-gestion">
      <h2>Gestión de Recolecciones</h2>
      <p className="subtitulo">Actualiza el estado de las solicitudes en curso.</p>

      <div className="tabla-gestion">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Dirección</th>
              <th>Fecha Programada</th>
              <th>Tipo de Residuo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo de solicitudes en gestión */}
            <tr>
              <td>#01001</td>
              <td>Camilo Ruiz</td>
              <td>Calle 77 #10-99</td>
              <td>2025-08-06</td>
              <td>Orgánicos</td>
              <td><span className="estado en-camino">En camino</span></td>
              <td>
                <button className="btn-cambiar">Recolectado</button>
                <button className="btn-cancelar">Cancelar</button>
              </td>
            </tr>
            <tr>
              <td>#01002</td>
              <td>Sara Gómez</td>
              <td>Cra 45 #67-12</td>
              <td>2025-08-07</td>
              <td>Reciclables</td>
              <td><span className="estado pendiente">Pendiente</span></td>
              <td>
                <button className="btn-cambiar">En camino</button>
                <button className="btn-cancelar">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EmpresaGestion;
