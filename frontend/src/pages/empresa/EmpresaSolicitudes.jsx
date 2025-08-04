// src/pages/empresa/EmpresaSolicitudes.jsx
import '../../styles/empresa/empresaSolicitudes.css';

/**
 * Sección para visualizar solicitudes recibidas por parte de los usuarios.
 * Presenta una tabla profesional con información detallada.
 */
function EmpresaSolicitudes() {
  return (
    <section className="empresa-solicitudes">
      <h2>Solicitudes Recibidas</h2>
      <p className="subtitulo">Consulta y organiza las solicitudes de recolección enviadas por los usuarios.</p>

      <div className="tabla-solicitudes">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Dirección</th>
              <th>Fecha</th>
              <th>Tipo de Residuo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo de solicitudes ficticias */}
            <tr>
              <td>#00123</td>
              <td>Juan Pérez</td>
              <td>Calle 123 #45-67</td>
              <td>2025-08-05</td>
              <td>Reciclables</td>
              <td><span className="estado pendiente">Pendiente</span></td>
              <td>
                <button className="btn-ver"><i className="bi bi-eye"></i></button>
                <button className="btn-confirmar"><i className="bi bi-check-circle"></i></button>
              </td>
            </tr>
            <tr>
              <td>#00124</td>
              <td>Ana López</td>
              <td>Carrera 9 #34-89</td>
              <td>2025-08-06</td>
              <td>Peligrosos</td>
              <td><span className="estado confirmado">Confirmado</span></td>
              <td>
                <button className="btn-ver"><i className="bi bi-eye"></i></button>
                <button className="btn-confirmar" disabled><i className="bi bi-check-circle"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EmpresaSolicitudes;
