/**
 * server.js
 * -------------------------------------------------------
 * Punto de entrada del backend de ReciclaYa
 * Configura Express, middlewares globales y arranca el servidor.
 * -------------------------------------------------------
 */

// Dependencias principales
const express = require('express');
const cors = require('cors');         // Permite solicitudes desde otros dominios
const helmet = require('helmet');     // Aumenta la seguridad HTTP
const morgan = require('morgan');     // Logger de peticiones HTTP
require('dotenv').config();           // Carga variables de entorno desde .env

// Conexión a la base de datos
require('./configs/db');

// * Importar rutas 
// Rutas de autenticación y registro
const authRoutes = require('./routes/authRoutes.js');
// Rutas de recolecciones
const collectionsRoutes = require('./routes/collectionsRoutes.js');
// Rutas de reportes
const reportRoutes = require('./routes/reportRoutes.js');

// Inicializar la app
const app = express();

// Middlewares globales
app.use(helmet()); // Seguridad HTTP
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // Permitir todo si no se define en .env
  credentials: true
}));
app.use(express.json()); // Para manejar JSON en las peticiones
app.use(morgan('dev'));  // Logs de peticiones

// Ruta de autenticación y registro
app.use('/api/auth', authRoutes);

// Rutas de recolecciones
app.use('/api/collections', collectionsRoutes); 

// Rutas de reportes
app.use('/api/reports', reportRoutes);


// Arrancar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
