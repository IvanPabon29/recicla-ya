import '../../styles/Configuraciones.css';

function Configuraciones() {
  return (
    <div className="config-admin">
      <h2>⚙️ Configuraciones del Sistema</h2>

      {/* Configuración general */}
      <section className="config-card">
        <h3>Datos del sistema</h3>
        <form>
          <label>Nombre de la plataforma</label>
          <input type="text" defaultValue="ReciclaYa" />

          <label>Correo de contacto</label>
          <input type="email" defaultValue="contacto@reciclayapp.com" />

          <label>Zona horaria</label>
          <select>
            <option value="america/bogota">América/Bogotá</option>
          </select>
        </form>
      </section>

      {/* Parámetros */}
      <section className="config-card">
        <h3>Parámetros de operación</h3>
        <form>
          <label>Horario de atención</label>
          <input type="text" defaultValue="8:00 am - 6:00 pm" />

          <label>Zonas de cobertura</label>
          <input type="text" defaultValue="Bogotá, Soacha, Cundinamarca" />
        </form>
      </section>

      {/* Contraseña */}
      <section className="config-card">
        <h3>Cambiar Contraseña</h3>
        <form>
          <label>Contraseña actual</label>
          <input type="password" />

          <label>Nueva contraseña</label>
          <input type="password" />

          <label>Confirmar nueva contraseña</label>
          <input type="password" />
        </form>
      </section>
    </div>
  );
}

export default Configuraciones;
