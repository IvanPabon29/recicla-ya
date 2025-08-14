import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

export async function register(req, res) {
  try {
    const { first_name, last_name, email, password, phone, address } = req.body;

    const [exists] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (exists.length) return res.status(409).json({ error: 'El correo ya está registrado' });

    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users (first_name, last_name, email, phone, address, password_hash) VALUES (?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone || null, address || null, hash]
    );

    const token = jwt.sign({ id: result.insertId, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || '7d'
    });

    res.status(201).json({
      user: { id: result.insertId, first_name, last_name, email, phone, address },
      token
    });
  } catch (err) {
    console.error('register error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(401).json({ error: 'Credenciales inválidas' });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES || '7d'
    });

    res.json({
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        address: user.address
      },
      token
    });
  } catch (err) {
    console.error('login error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
