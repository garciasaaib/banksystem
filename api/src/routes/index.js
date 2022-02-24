import { Router } from "express";
import { pool } from '../database'
const router = Router()

router.get('/', async (req, res) => {
  const result = await pool.query("SELECT * FROM people")
  res.send(result.rows);
});

export default router