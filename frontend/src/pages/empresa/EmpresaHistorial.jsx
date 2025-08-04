// src/pages/empresa/EmpresaHistorial.jsx
import '../../styles/empresa/empresaHistorial.css';

/**
 * Historial de recolecciones realizadas o canceladas por la empresa.
 * Muestra la información en una tabla clara y ordenada.
 */
function EmpresaHistorial() {
  return (
    <section className="empresa-historial">
      <h2>Historial de Recolecciones</h2>
      <p className="subtitulo">Consulta el resumen de todas las recolecciones pasadas.</p>

      <div className="tabla-historial">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Dirección</th>
              <th>Fecha</th>
              <th>Tipo de Residuo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Ejemplo de historial */}
            <tr>
              <td>#00123</td>
              <td>Ana Restrepo</td>
              <td>Calle 45 #20-11</td>
              <td>2025-08-02</td>
              <td>Reciclables</td>
              <td><span className="estado recolectado">Recolectado</span></td>
            </tr>
            <tr>
              <td>#00124</td>
              <td>Juan Morales</td>
              <td>Cra 10 #55-70</td>
              <td>2025-08-01</td>
              <td>Peligrosos</td>
              <td><span className="estado cancelado">Cancelado</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default EmpresaHistorial;
