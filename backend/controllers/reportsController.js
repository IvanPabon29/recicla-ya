import pool from '../config/db.js';

export async function userSummary(req, res) {
  try {
    const { from, to } = req.query;

    const where = ['user_id = ?'];
    const params = [req.user.id];

    if (from) { where.push('scheduled_date >= ?'); params.push(from); }
    if (to) { where.push('scheduled_date <= ?'); params.push(to); }

    // Totales generales
    const [totals] = await pool.query(
      `
      SELECT 
        COUNT(*) AS total_solicitudes,
        SUM(CASE WHEN status = 'completada' THEN 1 ELSE 0 END) AS total_completadas,
        COALESCE(SUM(quantity_kg),0) AS total_kg
      FROM collections
      WHERE ${where.join(' AND ')}
      `,
      params
    );

    // Por tipo de residuo
    const [byType] = await pool.query(
      `
      SELECT waste_type, COUNT(*) AS cantidad, COALESCE(SUM(quantity_kg),0) AS kg
      FROM collections
      WHERE ${where.join(' AND ')}
      GROUP BY waste_type
      `,
      params
    );

    // Por estado
    const [byStatus] = await pool.query(
      `
      SELECT status, COUNT(*) AS cantidad
      FROM collections
      WHERE ${where.join(' AND ')}
      GROUP BY status
      `,
      params
    );

    res.json({
      range: { from: from || null, to: to || null },
      totals: totals[0],
      byType,
      byStatus
    });
  } catch (err) {
    console.error('userSummary error:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
}
