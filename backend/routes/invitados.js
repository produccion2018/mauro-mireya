import { Router } from "express";
import db from "../db.js";

const router = Router();

// GET /api/invitados/nombres
// Devuelve solo id + nombre, para armar el desplegable del formulario de RSVP.
// Liviano: no manda datos sensibles ni de confirmación.
router.get("/invitados/nombres", async (req, res) => {
  try {
    const result = await db.execute(
      "SELECT id, nombre, grupo_familiar FROM invitados ORDER BY nombre ASC",
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error al traer nombres:", error);
    res.status(500).json({ error: "Error al traer la lista de invitados" });
  }
});

// GET /api/invitados
// Lista completa (para vos, panel de control interno).
router.get("/invitados", async (req, res) => {
  try {
    const result = await db.execute("SELECT * FROM invitados ORDER BY nombre ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al listar invitados:", error);
    res.status(500).json({ error: "Error al listar invitados" });
  }
});

// POST /api/rsvp
// Recibe { id, confirmado, mensaje } — el id viene del desplegable (no un código a mano).
router.post("/rsvp", async (req, res) => {
  const { id, confirmado, mensaje } = req.body;

  if (id === undefined || id === null || typeof confirmado !== "boolean") {
    return res.status(400).json({ error: "Faltan datos: id y confirmado son obligatorios" });
  }

  try {
    const result = await db.execute({
      sql: `UPDATE invitados
            SET confirmado = ?, mensaje = ?, fecha_respuesta = CURRENT_TIMESTAMP
            WHERE id = ?`,
      args: [confirmado ? 1 : 0, mensaje || null, id],
    });

    if (result.rowsAffected === 0) {
      return res.status(404).json({ error: "Invitado no encontrado" });
    }

    res.json({ ok: true, message: "Respuesta guardada" });
  } catch (error) {
    console.error("Error al guardar RSVP:", error);
    res.status(500).json({ error: "Error al guardar la respuesta" });
  }
});

export default router;
