import '../../styles/pages/Recolecciones.css';

/**
 * Página para que el usuario solicite la recolección de materiales reciclables.
 * Contiene un formulario claro, profesional y responsive.
 */
function Recolecciones() {
  return (
    <div className="recolecciones">
      <h2>Solicitar Recolección</h2>
      <p>Llena el siguiente formulario para programar la próxima recolección en tu domicilio.</p>

      <form className="recoleccion-form">
        <div className="form-group">
          <label htmlFor="fecha">Fecha de recolección</label>
          <input type="date" id="fecha" required />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Horario preferido</label>
          <select id="hora" required>
            <option value="">Selecciona un horario</option>
            <option value="mañana">Mañana (8:00am - 12:00pm)</option>
            <option value="tarde">Tarde (1:00pm - 5:00pm)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de material</label>
          <select id="tipo" required>
            <option value="">Selecciona el material</option>
            <option value="papel">Papel y Cartón</option>
            <option value="plastico">Plástico</option>
            <option value="vidrio">Vidrio</option>
            <option value="metal">Metal</option>
            <option value="organico">Orgánico</option>
            <option value="peligroso">Peligrosos</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comentarios">Comentarios adicionales</label>
          <textarea id="comentarios" rows="4" placeholder="Ej: bolsas al lado del garaje, llamar antes de llegar..." />
        </div>

        <button type="submit" className="btn-primary-recoleccion">Solicitar Recolección</button>
      </form>
    </div>
  );
}

export default Recolecciones;
