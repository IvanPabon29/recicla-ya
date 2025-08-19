/**
 * Reporte.jsx
 * 
 * Página que muestra al usuario un reporte de todas sus recolecciones
 * con filtros de fecha, tipo y estado. También permite exportar el
 * reporte en PDF.
 * 
 * Utiliza reportService para obtener los datos desde el backend.
 */

import React, { useState, useEffect } from "react";
import reportService from "../../services/reportService";
import "../../styles/pages/Reporte.css";

const Reporte = () => {
  // Estado para almacenar las recolecciones y filtros
  const [recolecciones, setRecolecciones] = useState([]);
  const [filtros, setFiltros] = useState({
    fechaInicio: "",
    fechaFin: "",
    tipo: "",
    estado: "",
  });

  // Cargar el reporte al montar el componente
  useEffect(() => {
    cargarReporte();
  }, []);

  const cargarReporte = async () => {
    try {
      const { data } = await reportService.obtenerReporte(filtros);
      setRecolecciones(data);
    } catch (error) {
      console.error("Error al cargar reporte:", error);
    }
  };

  // Manejadores de eventos para los filtros y descarga
  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleBuscar = () => {
    cargarReporte();
  };

  const handleDescargarPDF = () => {
    reportService.descargarPDF(filtros);
  };

  return (
    <div className="reporte-container">
      <h2 className="reporte-title">📊 Reporte de Recolecciones</h2>

      <div className="filtros-container">
        <input
          type="date"
          name="fechaInicio"
          value={filtros.fechaInicio}
          onChange={handleChange}
        />
        <input
          type="date"
          name="fechaFin"
          value={filtros.fechaFin}
          onChange={handleChange}
        />
        <select name="tipo" value={filtros.tipo} onChange={handleChange}>
          <option value="">Todos los tipos</option>
          <option value="papel">Papel</option>
          <option value="plastico">Plástico</option>
          <option value="vidrio">Vidrio</option>
          <option value="metal">Metal</option>
          <option value="organico">Orgánico</option>
          <option value="peligroso">Peligroso</option>
        </select>
        <select name="estado" value={filtros.estado} onChange={handleChange}>
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
          <option value="cancelado">Cancelado</option>
        </select>

        <button className="btn-buscar" onClick={handleBuscar}>
          Buscar
        </button>
        <button className="btn-pdf" onClick={handleDescargarPDF}>
          Descargar PDF
        </button>
      </div>

      <table className="reporte-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {recolecciones.length > 0 ? (
            recolecciones.map((r, i) => (
              <tr key={i}>
                <td>{r.fecha.slice(0, 10)}</td>
                <td>{r.hora}</td>
                <td>{r.tipo}</td>
                <td>{r.estado}</td>
                <td>{r.observaciones || "—"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data">
                No se encontraron resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reporte;
