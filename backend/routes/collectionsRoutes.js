// routes/collectionsRoutes.js
const express = require("express");
const router = express.Router();
const collectionsController = require("../controllers/collectionsController");
const authMiddleware = require("../middlewares/auth.js");

// Rutas de recolecciones para usuario normal

/**
 * @route   POST /api/collections
 * @desc    Programar una nueva recolección
 * @access  Público (pero normalmente se haría privado con auth)
 */
router.post("/", authMiddleware, collectionsController.createCollection);

/**
 * @route   GET /api/collections/:correo
 * @desc    Obtener todas las recolecciones de un usuario por su correo
 * @access  Público (pero normalmente se haría privado con auth)
 */
router.get("/", authMiddleware, collectionsController.getUserCollections);

module.exports = router;
