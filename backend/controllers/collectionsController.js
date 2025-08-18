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
      const { fecha, hora, tipo, comentarios } = req.body;
      const correo = req.user?.correo;  //  tomado del JWT


      if (!fecha || !hora || !tipo) {
        return res.status(400).json({ error: "Todos los campos obligatorios deben completarse." });
      }

      const insertId = await Collection.create({
        correo,
        fecha,
        hora,
        tipo,
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
      const correo = req.user?.correo;  //  también tomado del token
      if (!correo) {
        return res.status(401).json({ error: "No autorizado, falta correo en token." });
      }

      const collections = await Collection.findByCorreo(correo);
      res.json(collections);
    } catch (error) {
      console.error("Error al obtener recolecciones:", error);
      res.status(500).json({ error: "Error en el servidor." });
    }
  }
};

module.exports = collectionsController;