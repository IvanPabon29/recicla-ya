import '../../styles/adminSolicitudes.css';

function Solicitudes() {
  return (
    <div className="solicitudes-admin">
      <h2>📬 Solicitudes Recibidas</h2>
      <p>Consulta y gestiona las solicitudes enviadas por usuarios o empresas.</p>

      <div className="tabla-solicitudes">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Usuario/Empresa</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#00125</td>
              <td>Soporte</td>
              <td>usuario@mail.com</td>
              <td>2025-08-02</td>
              <td><span className="estado pendiente">Pendiente</span></td>
              <td>
                <button className="btn-ver">Ver</button>
                <button className="btn-responder">Responder</button>
              </td>
            </tr>

            <tr>
              <td>#00118</td>
              <td>Actualización</td>
              <td>reciclaglobal@sas.com</td>
              <td>2025-08-01</td>
              <td><span className="estado atendido">Atendido</span></td>
              <td>
                <button className="btn-ver">Ver</button>
                <button className="btn-responder">Responder</button>
              </td>
            </tr>

            {/* Puedes agregar más filas simuladas o dinámicas */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Solicitudes;
