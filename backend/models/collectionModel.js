// models/Collection.js
const pool = require('../configs/db.js');
/**
 * Modelo Collection (Recolección de material)
 * Representa una recolección solicitada por un usuario.
 *
 * Campos:
 * - id: identificador único (auto_increment en recolecciones)
 * - correo: correo del usuario que programa la recolección
 * - fecha: fecha de la recolección
 * - hora: hora de la recolección
 * - tipoResiduo: tipo de residuo/material a recolectar
 * - comentarios: información adicional opcional
 * - estado: estado de la recolección (pendiente, completada, cancelada)
 * - created_at: fecha de creación del registro
 */
const Collection = {
  // Crear una nueva recolección
  create: async (collectionData) => {
    const { correo, fecha, hora, tipo, comentarios } = collectionData;
    const [result] = await pool.query(
      `INSERT INTO recolecciones (correo, fecha, hora, tipo, observaciones, estado)
       VALUES (?, ?, ?, ?, ?, 'pendiente')`,
      [correo, fecha, hora, tipo, comentarios]
    );
    return result.insertId;
  },

  // Obtener todas las recolecciones de un usuario por correo
  findByCorreo: async (correo) => {
    const [rows] = await pool.query(
      `SELECT * FROM recolecciones WHERE correo = ? ORDER BY fecha DESC, hora DESC`,
      [correo]
    );
    return rows;
  }
};

module.exports = Collection;