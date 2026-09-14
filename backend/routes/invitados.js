import { Router } from "express";
import { Resend } from "resend";
import db from "../db.js";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// GET /api/invitados/nombres
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

    enviarNotificacionRSVP(id, confirmado, mensaje).catch((err) => {
      console.error("Error al enviar email de notificación RSVP:", err);
    });
  } catch (error) {
    console.error("Error al guardar RSVP:", error);
    res.status(500).json({ error: "Error al guardar la respuesta" });
  }
});

async function enviarNotificacionRSVP(id, confirmado, mensaje) {
  const invitado = await db.execute({
    sql: "SELECT nombre, grupo_familiar FROM invitados WHERE id = ?",
    args: [id],
  });

  const nombre = invitado.rows[0]?.nombre || `Invitado #${id}`;
  const estado = confirmado ? "✅ CONFIRMÓ asistencia" : "❌ NO podrá asistir";

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [process.env.NOTIFY_EMAIL_MAURO, process.env.NOTIFY_EMAIL_MIREYA],
    subject: `RSVP boda: ${nombre} — ${confirmado ? "confirmó" : "no puede ir"}`,
    html: `
      <h2>${estado}</h2>
      <p><strong>Invitado:</strong> ${nombre}</p>
      ${mensaje ? `<p><strong>Mensaje:</strong> ${mensaje}</p>` : ""}
    `,
  });
}

export default router;
