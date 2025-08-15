/**
 * apiConfig.js
 * 
 * Configuración central de Axios para manejar las peticiones HTTP
 * hacia el backend.
 * 
 * - Usa la variable de entorno VITE_API_URL para definir la URL base.
 * - Si no existe, por defecto usa "http://localhost:4000/api".
 * - Aplica cabeceras JSON por defecto.
 */

import axios from "axios";

// Crear instancia de Axios con configuración base
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Se Puede agregar interceptores aquí si más adelante necesitas manejar tokens o errores globales
// api.interceptors.request.use(config => { ... });

export default api;
