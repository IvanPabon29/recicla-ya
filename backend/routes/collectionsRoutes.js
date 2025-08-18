// routes/collectionsRoutes.js
const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collectionsController");

// Rutas de recolecciones para usuario normal

/**
 * @route   POST /api/collections
 * @desc    Programar una nueva recolección
 * @access  Público (pero normalmente se haría privado con auth)
 */
router.post("/", collectionsController.createCollection);

/**
 * @route   GET /api/collections/:correo
 * @desc    Obtener todas las recolecciones de un usuario por su correo
 * @access  Público (pero normalmente se haría privado con auth)
 */
router.get("/:correo", collectionsController.getUserCollections);

module.exports = router;
