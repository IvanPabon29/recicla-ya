const Report = require("../models/reportModel");
const PDFDocument = require("pdfkit");

// Controlador de reportes
const reportController = {
  /**
   * Obtener recolecciones filtradas según criterios
   * GET /api/reports
   */
  getFilteredReport: async (req, res) => {
    try {
      const correo = req.user?.correo; // tomado del JWT
      if (!correo) {
        return res.status(401).json({ error: "No autorizado" });
      }

      const filtros = {
        correo,
        fechaInicio: req.query.fechaInicio || null,
        fechaFin: req.query.fechaFin || null,
        tipo: req.query.tipo || null,
        estado: req.query.estado || null,
      };

      const recolecciones = await Report.findFiltered(filtros);

      res.json(recolecciones);
    } catch (error) {
      console.error("Error al obtener reporte:", error);
      res.status(500).json({ error: "Error en el servidor." });
    }
  },

  /**
   * Descargar reporte filtrado en PDF
   * GET /api/reports/pdf
   */
  downloadReportPDF: async (req, res) => {
    try {
      const correo = req.user?.correo;
      if (!correo) {
        return res.status(401).json({ error: "No autorizado" });
      }

      const filtros = {
        correo,
        fechaInicio: req.query.fechaInicio || null,
        fechaFin: req.query.fechaFin || null,
        tipo: req.query.tipo || null,
        estado: req.query.estado || null,
      };

      const recolecciones = await Report.findFiltered(filtros);

      // Configurar headers para descarga
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=reporte_recolecciones.pdf"
      );

      // Crear documento PDF
      const doc = new PDFDocument();
      doc.pipe(res);

      // Título
      doc.fontSize(18).text("Reporte de Recolecciones", { align: "center" });
      doc.moveDown();

      // Filtros aplicados
      doc.fontSize(12).text(`Usuario: ${correo}`);
      if (filtros.fechaInicio) doc.text(`Desde: ${filtros.fechaInicio}`);
      if (filtros.fechaFin) doc.text(`Hasta: ${filtros.fechaFin}`);
      if (filtros.tipo) doc.text(`Tipo: ${filtros.tipo}`);
      if (filtros.estado) doc.text(`Estado: ${filtros.estado}`);
      doc.moveDown();

      // Tabla básica
      recolecciones.forEach((r) => {
        doc
          .fontSize(10)
          .text(
            `📅 ${r.fecha} ⏰ ${r.hora} | Tipo: ${r.tipo} | Estado: ${r.estado} | Comentarios: ${
              r.observaciones || "—"
            }`
          );
        doc.moveDown(0.5);
      });

      // Finalizar documento
      doc.end();
    } catch (error) {
      console.error("Error al generar PDF:", error);
      res.status(500).json({ error: "Error al generar el PDF." });
    }
  },
};

module.exports = reportController;
