const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const authMiddleware = require("../middlewares/auth");

// Rutas de reportes (todas protegidas con JWT)

// GET /api/reports
router.get("/", authMiddleware, reportController.getFilteredReport);

// GET /api/reports/pdf
router.get("/pdf", authMiddleware, reportController.downloadReportPDF);

module.exports = router;
