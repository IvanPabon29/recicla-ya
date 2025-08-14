import '../../styles/pages/Puntos.css';

/**
 * Página de puntos del usuario.
 * Muestra el total acumulado, beneficios y movimientos recientes.
 */
function Puntos() {
  // Datos simulados
  const totalPuntos = 260;
  const movimientos = [
    { id: 1, fecha: '2025-07-15', descripcion: 'Recolección de reciclables', puntos: 80 },
    { id: 2, fecha: '2025-06-20', descripcion: 'Recolección de reciclables', puntos: 100 },
    { id: 3, fecha: '2025-05-10', descripcion: 'Recolección de peligrosos', puntos: 80 },
  ];

  return (
    <section className="puntos">
      <h2>Mis Puntos</h2>
      <p>Aquí puedes ver el total acumulado y los movimientos de tus puntos.</p>

      <div className="puntos-total">
        <i className="bi bi-coin"></i>
        <span>{totalPuntos} pts</span>
      </div>

      <div className="puntos-beneficios">
        <h3>Beneficios Disponibles</h3>
        <ul>
          <li>🎁 Descuento del 10% en productos ecológicos (200 pts)</li>
          <li>🚴 Sorteo mensual de bicicleta (250 pts)</li>
          <li>🌳 Apadrina un árbol (150 pts)</li>
        </ul>
      </div>

      <div className="puntos-historial">
        <h3>Historial de Movimientos</h3>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map(({ id, fecha, descripcion, puntos }) => (
              <tr key={id}>
                <td>{fecha}</td>
                <td>{descripcion}</td>
                <td>{puntos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Puntos;
