import '../../styles/pages/Historial.css';

/**
 * Página de historial del usuario.
 * Muestra las recolecciones pasadas con detalles de fecha, tipo y puntos obtenidos.
 */
function Historial() {
  // Datos simulados por ahora
  const historial = [
    { id: 1, fecha: '2025-07-15', tipo: 'Reciclables', estado: 'Completado', puntos: 80 },
    { id: 2, fecha: '2025-07-02', tipo: 'Peligrosos', estado: 'Pendiente', puntos: 0 },
    { id: 3, fecha: '2025-06-20', tipo: 'Reciclables', estado: 'Completado', puntos: 100 },
  ];

  return (
    <section className="historial">
      <h2>Historial de Recolecciones</h2>
      <p>Consulta tus solicitudes anteriores y los puntos obtenidos.</p>

      <div className="historial-tabla">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo de Residuo</th>
              <th>Estado</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {historial.map(({ id, fecha, tipo, estado, puntos }) => (
              <tr key={id}>
                <td>{fecha}</td>
                <td>{tipo}</td>
                <td className={`estado ${estado.toLowerCase()}`}>{estado}</td>
                <td>{puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Historial;
