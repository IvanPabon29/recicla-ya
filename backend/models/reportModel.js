const pool = require("../configs/db.js");

/**
 * Modelo Report (para consultas de reportes filtrados)
 */
const Report = {
  findFiltered: async (filtros) => {
    let query = "SELECT fecha, hora, tipo, estado, observaciones FROM recolecciones WHERE correo = ?";
    const params = [filtros.correo];

    if (filtros.fechaInicio) {
      query += " AND fecha >= ?";
      params.push(filtros.fechaInicio);
    }
    if (filtros.fechaFin) {
      query += " AND fecha <= ?";
      params.push(filtros.fechaFin);
    }
    if (filtros.tipo) {
      query += " AND tipo = ?";
      params.push(filtros.tipo);
    }
    if (filtros.estado) {
      query += " AND estado = ?";
      params.push(filtros.estado);
    }

    query += " ORDER BY fecha DESC, hora DESC";

    const [rows] = await pool.query(query, params);
    return rows;
  },
};

module.exports = Report;
