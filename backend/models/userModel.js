// models/usuariosModel.js
const pool = require('../configs/db.js');

const UserModel  = {
  // Buscar usuario por correo
  findByCorreo: async (correo) => {
    const [rows] = await pool.query('SELECT correo, password FROM usuarios WHERE correo = ?', [correo]);
    return rows[0];
  },

  // Crear nuevo usuario
  create: async (usuario) => {
    const { nombre, apellido, correo, telefono, direccion, password } = usuario;
    await pool.query(
      `INSERT INTO usuarios (nombre, apellido, correo, telefono, direccion, password)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [nombre, apellido, correo, telefono, direccion, password]
    );
  }
};

module.exports = UserModel;
