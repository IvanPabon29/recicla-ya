/**
 * reportService.js
 * 
 * Servicio centralizado para manejar todo lo relacionado con reportes
 * de recolecciones del usuario autenticado.
 * 
 * - Utiliza apiConfig.js que ya añade el token JWT automáticamente.
 * - El backend obtiene el correo desde el token
 * 
 * Métodos disponibles:
 * - obtenerReporte(filtros) : Obtener recolecciones filtradas.
 * - descargarPDF(filtros) : Descargar el reporte filtrado en formato PDF.
 */

import api from "./apiConfig";

const reportService = {
  /**
   * Obtener recolecciones filtradas según criterios dados.
   * @param {Object} filtros - Filtros opcionales (fechaInicio, fechaFin, estado, tipo).
   * @returns {Promise<Object[]>} Lista de recolecciones filtradas.
   */
  obtenerReporte: (filtros = {}) =>
    api.get("/reports", { params: filtros }),

  /**
   * Descargar el reporte filtrado en PDF.
   * @param {Object} filtros - Filtros aplicados.
   * @returns {Promise<void>} Genera descarga automática del PDF.
   */
  descargarPDF: async (filtros = {}) => {
    try {
      const response = await api.get("/reports/pdf", {
        params: filtros,
        responseType: "blob",
      });

      // Crear enlace de descarga temporal
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "reporte_recolecciones.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
      throw error;
    }
  },
};

export default reportService;
