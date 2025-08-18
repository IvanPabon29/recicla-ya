/**
 * collectionsService.js
 * 
 * Servicio centralizado para manejar todas las peticiones relacionadas con
 * las recolecciones de materiales reciclables.
 * 
 * - Se apoya en apiConfig.js, que ya añade automáticamente el token JWT
 *   en cada petición (si existe en localStorage).
 * - De esta forma, no es necesario pasar el correo manualmente: 
 *   el backend lo obtiene del token.
 * 
 * Métodos disponibles:
 * - programar(data) : Programar una nueva recolección.
 * - obtenerHistorial() : Obtener todas las recolecciones del usuario autenticado.
 */

import api from "./apiConfig";

const collectionsService = {
  /**
   * Programar una nueva recolección.
   * @param {Object} data - Datos de la recolección.
   * @param {string} data.fecha - Fecha programada (YYYY-MM-DD).
   * @param {string} data.hora - Hora preferida ("mañana" | "tarde").
   * @param {string} data.tipo - Tipo de material (papel, plástico, vidrio, etc.).
   * @param {string} [data.comentarios] - Comentarios adicionales.
   * @returns {Promise} Respuesta del servidor con la recolección creada.
   */
  programar: (data) => api.post("/collections", data),

  /**
   * Obtener todas las recolecciones del usuario autenticado.
   * @returns {Promise} Lista de recolecciones del usuario.
   */
  obtenerHistorial: () => api.get("/collections"),
};

export default collectionsService;
