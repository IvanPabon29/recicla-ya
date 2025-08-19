import { useState } from "react";
import collectionsService from "../../services/collectionsService"; 
import "../../styles/pages/Recolecciones.css";

/**
 * Página para que el usuario solicite la recolección de materiales reciclables.
 * Contiene un formulario claro, profesional y responsive.
 */
function Recolecciones() {
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    tipo: "",
    comentarios: "",
  });

  const [mensaje, setMensaje] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje(null);

    try {
      const correo = localStorage.getItem("correo"); // obtenemos el correo del localStorage
      
      const response = await collectionsService.programar({
        ...formData,
        correo, //  aseguramos que lo enviamos
      });

      setMensaje({
        tipo: "success",
        texto: response.message || "Recolección solicitada con éxito",
      });

      setFormData({ fecha: "", hora: "", tipo: "", comentarios: "" });
    } catch (error) {
      setMensaje({
        tipo: "error",
        texto: error.message || "Ocurrió un error al solicitar la recolección",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="recolecciones">
      <h2>Solicitar Recolección</h2>
      <p>
        Llena el siguiente formulario para programar la próxima recolección en tu
        domicilio.
      </p>

      <form className="recoleccion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha">Fecha de recolección</label>
          <input
            type="date"
            id="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Horario preferido</label>
          <select
            id="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un horario</option>
            <option value="mañana 8:00am - 12:00pm">Mañana (8:00am - 12:00pm)</option>
            <option value="tarde 1:00pm - 5:00pm">Tarde (1:00pm - 5:00pm)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de material</label>
          <select
            id="tipo"
            value={formData.tipo}
            onChange={handleChange}
            required
          >
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
          <textarea
            id="comentarios"
            rows="4"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Ej: bolsas al lado del garaje, llamar antes de llegar..."
          />
        </div>

        <button
          type="submit"
          className="btn-primary-recoleccion"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Solicitar Recolección"}
        </button>
      </form>

      {mensaje && (
        <p className={`mensaje-${mensaje.tipo}`}>{mensaje.texto}</p>
      )}
    </div>
  );
}

export default Recolecciones;
