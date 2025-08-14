import pool from '../config/db.js';

export async function createCollection(req, res) {
  try {
    const { scheduled_date, time_window, waste_type, quantity_kg, notes } = req.body;

    const [result] = await pool.query(
      `INSERT INTO collections (user_id, scheduled_date, time_window, waste_type, quantity_kg, notes)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        scheduled_date,
        time_window,
        waste_type,
        quantity_kg ?? 0,
        notes || null
      ]
    );

    const [row] = await pool.query('SELECT * FROM collections WHERE id = ?', [result.insertId]);
    res.status(201).json(row[0]);
  } catch (err) {
    console.error('createCollection error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}

export async function listMyCollections(req, res) {
  try {
    const { from, to, status, waste_type } = req.query;

    const where = ['user_id = ?'];
    const params = [req.user.id];

    if (from) { where.push('scheduled_date >= ?'); params.push(from); }
    if (to) { where.push('scheduled_date <= ?'); params.push(to); }
    if (status) { where.push('status = ?'); params.push(status); }
    if (waste_type) { where.push('waste_type = ?'); params.push(waste_type); }

    const sql = `
      SELECT id, scheduled_date, time_window, waste_type, quantity_kg, status, notes, created_at
      FROM collections
      WHERE ${where.join(' AND ')}
      ORDER BY scheduled_date DESC, id DESC
    `;

    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) {
    console.error('listMyCollections error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
