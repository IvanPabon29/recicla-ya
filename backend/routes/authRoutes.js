// routes/authRoutes.js
// Importar las dependencias necesarias
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/** 
 *Definición de la ruta para Registrarse e iniciar sesión 
  * POST /register: Crea un nuevo usuario si el correo no existe
  * POST /login: Maneja la lógica de autenticación de usuarios
*/ 

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

// Exportar el router 
module.exports = router;