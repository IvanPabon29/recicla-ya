/**
 * apiConfig.js
 * 
 * Configuración central de Axios para manejar las peticiones HTTP
 * hacia el backend.
 * 
 * - Usa la variable de entorno VITE_API_URL para definir la URL base.
 * - Si no existe, por defecto usa "http://localhost:4000/api".
 * - Aplica cabeceras JSON por defecto.
 * - Incluye automáticamente el token JWT si existe en localStorage.
 */

import axios from "axios";

// Crear instancia de Axios con configuración base
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar token JWT automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // aquí guardamos el token al iniciar sesión
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
