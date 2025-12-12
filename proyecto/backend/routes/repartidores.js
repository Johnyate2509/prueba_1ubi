import express from "express";
import { db } from "../db.js";

const router = express.Router();

/**
 * Obtener todos los repartidores
 */
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM repartidores");
  res.json(rows);
});

/**
 * Actualizar ubicación (solo si está activo)
 */
router.post("/ubicacion/:id", async (req, res) => {
  const { id } = req.params;
  const { lat, lng } = req.body;

  const [rows] = await db.query("SELECT activo FROM repartidores WHERE id = ?", [id]);

  if (!rows.length || rows[0].activo === 0) {
    return res.json({ ok: false, message: "Rastreo desactivado." });
  }

  await db.query(
    "UPDATE repartidores SET lat = ?, lng = ? WHERE id = ?",
    [lat, lng, id]
  );

  res.json({ ok: true });
});

/**
 * Activar o desactivar rastreo
 */
router.post("/activar/:id", async (req, res) => {
  const { id } = req.params;
  const { activo } = req.body;

  await db.query("UPDATE repartidores SET activo = ? WHERE id = ?", [activo, id]);

  res.json({ ok: true });
});

export default router;
