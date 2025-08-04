// src/pages/empresa/EmpresaConfiguraciones.jsx
import '../../styles/empresa/empresaConfiguraciones.css';

/**
 * Página de configuración del perfil de la empresa recolectora.
 * Permite modificar datos como nombre, contacto, horario, etc.
 */
function EmpresaConfiguraciones() {
  return (
    <section className="empresa-config">
      <h2>Configuraciones</h2>
      <p className="subtitulo">Modifica los datos y preferencias de tu empresa recolectora.</p>

      <form className="form-config">
        <div className="form-group">
          <label htmlFor="nombre">Nombre de la empresa</label>
          <input type="text" id="nombre" placeholder="Ej: Reciclaje Verde S.A.S" />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo de contacto</label>
          <input type="email" id="correo" placeholder="empresa@mail.com" />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" placeholder="Ej: +57 310 000 0000" />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección base de operaciones</label>
          <input type="text" id="direccion" placeholder="Ej: Calle 123 #45-67" />
        </div>

        <div className="form-group">
          <label htmlFor="horario">Horario de atención</label>
          <input type="text" id="horario" placeholder="Ej: Lunes a viernes 8am - 5pm" />
        </div>

        <button type="submit" className="btn-guardar-config">
          Guardar cambios
        </button>
      </form>
    </section>
  );
}

export default EmpresaConfiguraciones;
