// controllers/authController.js
const UserModel = require('../models/userModel.js');
const bcrypt = require('bcryptjs'); // Librería para hashear contraseñas
const jwt = require('jsonwebtoken'); // Librería para manejar JWT


/**
 * Controlador de autenticación y registro
 * Crea un usuario nuevo si el correo no existe. Hashea la contraseña.
 * Inicia sesión si el correo y la contraseña son correctos.
 * Espera: { nombre, apellido, correo, telefono, direccion, password }
 */


const authController = {
  // Registra un nuevo usuario
  register: async (req, res) => {
    try {
      const { nombre, apellido, correo, telefono, direccion, password } = req.body;

      // Validación mínima
      if (!nombre || !apellido || !correo || !telefono || !direccion || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
      }

      // usar modelo en lugar de SQL directo
      const exists = await UserModel.findByCorreo(correo);
      if (exists) {
        return res.status(400).json({ message: 'El correo ya está registrado' });
      }

      // Hashear la contraseña
      const hashed = await bcrypt.hash(password, 10);

      // Crear el usuario usando el modelo
      await UserModel.create({ nombre, apellido, correo, telefono, direccion, password: hashed });

      return res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
      console.error('Error en register:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },

  // Inicia sesión un usuario existente
  login: async (req, res) => {
    try {
      const { correo, password } = req.body;

      // Validación mínima
      const user = await UserModel.findByCorreo(correo);
      if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Verificar contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      // Generar token JWT
      const token = jwt.sign({ correo: user.correo }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return res.status(200).json({
        message: 'Inicio de sesión exitoso',
        token,
        userId: user.correo
      });
    } catch (error) {
      console.error('Error en login:', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};

module.exports = authController;

