import pool from '../config/db.js';

export async function me(req, res) {
  try {
    const [rows] = await pool.query(
      'SELECT id, first_name, last_name, email, phone, address, created_at FROM users WHERE id = ?',
      [req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error('me error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
