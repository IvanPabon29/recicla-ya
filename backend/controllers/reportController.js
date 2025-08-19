const Report = require("../models/reportModel");
const PDFDocument = require("pdfkit");

// Función para formatear fecha al estilo DD/MM/YYYY
function formatFecha(fechaISO) {
  if (!fechaISO) return "—";
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

// Controlador de reportes
const reportController = {
  // Obtener recolecciones filtradas
  getFilteredReport: async (req, res) => {
    try {
      const correo = req.user?.correo;
      if (!correo) return res.status(401).json({ error: "No autorizado" });

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

  // Descargar reporte filtrado en PDF
  downloadReportPDF: async (req, res) => {
    try {
      const correo = req.user?.correo;
      if (!correo) return res.status(401).json({ error: "No autorizado" });

      const filtros = {
        correo,
        fechaInicio: req.query.fechaInicio || null,
        fechaFin: req.query.fechaFin || null,
        tipo: req.query.tipo || null,
        estado: req.query.estado || null,
      };

      const recolecciones = await Report.findFiltered(filtros);

      // Configurar headers
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=reporte_recolecciones.pdf"
      );

      // Crear documento PDF
      const doc = new PDFDocument({ margin: 40 });
      doc.pipe(res);

      // === ENCABEZADO ===
      doc.fontSize(22).fillColor("#2E7D32").text(" Reporte de Recolecciones", { align: "center" });
      doc.moveDown(1);

      // Filtros aplicados
      doc.fontSize(12).fillColor("#333").text(` Usuario: ${correo}`);
      if (filtros.fechaInicio) doc.text(` Desde: ${formatFecha(filtros.fechaInicio)}`);
      if (filtros.fechaFin) doc.text(` Hasta: ${formatFecha(filtros.fechaFin)}`);
      if (filtros.tipo) doc.text(` Tipo: ${filtros.tipo}`);
      if (filtros.estado) doc.text(` Estado: ${filtros.estado}`);
      doc.moveDown(1.5);

      // === TABLA DE RECOLECCIONES ===
      const tableTop = doc.y;
      const colWidths = [90, 70, 100, 80, 160]; // Fecha, Hora, Tipo, Estado, Comentario
      const rowHeight = 30;

      // Dibujar encabezados con iconos
      const headers = [" Fecha", " Hora", " Tipo", " Estado", " Comentario"];
      doc.fontSize(12).fillColor("white").rect(40, tableTop, 500, rowHeight).fill("#2E7D32");
      headers.forEach((header, i) => {
        doc
          .fillColor("white")
          .text(header, 45 + colWidths.slice(0, i).reduce((a, b) => a + b, 0), tableTop + 8, {
            width: colWidths[i],
            align: "center",
          });
      });

      let y = tableTop + rowHeight;

      // Dibujar filas
      recolecciones.forEach((r, idx) => {
        // Alternar color de fondo
        if (idx % 2 === 0) {
          doc.fillColor("#f5f5f5").rect(40, y, 500, rowHeight).fill();
        }

        // Formatear fecha y hora
        const fecha = formatFecha(r.fecha);
        const hora = r.hora ? r.hora.slice(0, 5) : "—";
        const comentario = r.observaciones || "—";

        const values = [fecha, hora, r.tipo, r.estado, comentario];

        doc.fillColor("#333");
        values.forEach((val, i) => {
          doc.text(val, 45 + colWidths.slice(0, i).reduce((a, b) => a + b, 0), y + 8, {
            width: colWidths[i],
            align: "center",
          });
        });

        y += rowHeight;
      });

      // === PIE DE PÁGINA ===
      doc.moveDown(2);
      doc
        .fontSize(10)
        .fillColor("gray")
        .text("Generado automáticamente por ReciclaYa ", {
          align: "center",
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
