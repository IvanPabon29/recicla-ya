-- Crear base de datos
CREATE DATABASE IF NOT EXISTS reciclaYaDB;
USE reciclaYaDB;

-- Tabla usuarios
CREATE TABLE usuarios (
    correo VARCHAR(100) NOT NULL UNIQUE PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    rol ENUM('usuario', 'empresa', 'admin') DEFAULT 'usuario',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla recolecciones
CREATE TABLE recolecciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(100) NOT NULL,
    fecha DATETIME NOT NULL,
    hora VARCHAR(100) NOT NULL,
    tipo ENUM('plastico', 'papel', 'vidrio', 'organico', 'peligroso') NOT NULL,
    estado ENUM('pendiente', 'en_proceso', 'completada', 'cancelada') DEFAULT 'pendiente',
    observaciones TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (correo) REFERENCES usuarios(correo) ON DELETE CASCADE
);
