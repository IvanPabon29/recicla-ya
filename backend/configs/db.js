/**
 * db.js
 * -------------------------------------------
 * Configuración y conexión a la base de datos MySQL
 * usando el paquete mysql2/promise para soporte async/await.
 * -------------------------------------------
 */

const mysql = require('mysql2/promise');

// Cargar variables de entorno desde .env
require('dotenv').config();

/**
 * Creamos un pool de conexiones para mejorar el rendimiento
 * y evitar abrir/cerrar conexiones en cada consulta.
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST,        // Ej: 'localhost'
  user: process.env.DB_USER,        // Usuario MySQL
  password: process.env.DB_PASSWORD,// Contraseña MySQL
  database: process.env.DB_NAME,    // Nombre BD: reciclaYaDB
  waitForConnections: true,         // Esperar si no hay conexiones libres
  connectionLimit: 10,               // Máximo de conexiones simultáneas
  queueLimit: 0                      // Sin límite de peticiones en cola
});

/**
 * Función para probar la conexión a la base de datos.
 */
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado a la base de datos MySQL');
    connection.release();
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error.message);
  }
};

// Ejecutar la prueba de conexión
testConnection();

module.exports = pool;
