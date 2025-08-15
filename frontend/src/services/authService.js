/**
 * authService.js
 * 
 * Servicio centralizado para manejar la autenticación de usuarios.
 * Utiliza la configuración base de Axios desde apiConfig.js.
 * 
 * Métodos disponibles:
 * - register(data) : Registra un nuevo usuario.
 * - login(data)    : Inicia sesión.
 * - logout()       : Cierra la sesión.
 */

import api from './apiConfig';

const authService = {
  /**
   * Registra un nuevo usuario en el sistema
   * @param {Object} data - Datos del usuario (nombre, email, contraseña, etc.)
   * @returns {Promise} Respuesta del servidor
   */
  register: (data) => api.post('/auth/register', data),

  /**
   * Inicia sesión en el sistema
   * @param {Object} data - Datos de login (email, contraseña)
   * @returns {Promise} Respuesta del servidor con token y datos del usuario
   */
  login: (data) => api.post('/auth/login', data),

  /**
   * Cierra la sesión del usuario
   * @returns {Promise} Respuesta del servidor
   */
  logout: () => api.post('/auth/logout'),
};

export default authService;
