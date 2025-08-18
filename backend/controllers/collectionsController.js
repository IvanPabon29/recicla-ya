// controllers/collectionsController.js
const Collection = require('../models/collectionModel.js');

/**
 * Controlador para las recolecciones de usuarios
 */
const collectionsController = {
  /**
   * Programar una nueva recolección
   * POST /api/collections
   */
  createCollection: async (req, res) => {
    try {
      const { correo, fecha, hora, tipoResiduo, comentarios } = req.body;

      if (!correo || !fecha || !hora || !tipoResiduo) {
        return res.status(400).json({ error: "Todos los campos obligatorios deben completarse." });
      }

      const insertId = await Collection.create({
        correo,
        fecha,
        hora,
        tipoResiduo,
        comentarios
      });

      res.status(201).json({ message: "Recolección programada exitosamente.", id: insertId });
    } catch (error) {
      console.error("Error al programar recolección:", error);
      res.status(500).json({ error: "Error en el servidor." });
    }
  },

  /**
   * Obtener todas las recolecciones de un usuario por correo
   * GET /api/collections/:correo
   */
  getUserCollections: async (req, res) => {
    try {
      const { correo } = req.params;

      const collections = await Collection.findByCorreo(correo);

      res.json(collections);
    } catch (error) {
      console.error("Error al obtener recolecciones:", error);
      res.status(500).json({ error: "Error en el servidor." });
    }
  }
};

module.exports = collectionsController;