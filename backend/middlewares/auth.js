// middlewares/auth.js
// Propósito: Middleware para validar el token de autenticación y permitir acceso solo si es válido.

/**
 * Qué hace este código:
 * Extrae el token correctamente del header Authorization.
 * Lo verifica con jwt.verify().
 * Si es válido, permite el acceso a la ruta protegida
 */

const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verificar si el header Authorization está presente y tiene el formato correcto
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado o formato incorrecto' });
  }

  // Extraer el token del header
  const token = authHeader.split(' ')[1];

  // Verificar el token usando la clave secreta
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    req.user = decoded; // Guardar información del usuario decodificada en la solicitud
    next(); // Continuar al siguiente middleware o ruta
  });
};

module.exports = authMiddleware;
