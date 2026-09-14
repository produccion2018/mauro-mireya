import { Router } from "express";
import { Resend } from "resend";
import db from "../db.js";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

// GET /api/invitados
// Lista completa (para vos, panel de control interno).
router.get("/invitados", async (req, res) => {
  try {
    const result = await db.execute("SELECT * FROM invitados ORDER BY fecha_respuesta DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al listar invitados:", error);
    res.status(500).json({ error: "Error al listar invitados" });
  }
});

// POST /api/rsvp
// Recibe { nombre, confirmado, mensaje } — el invitado escribe su propio
// nombre (no elige de una lista), y se crea un registro nuevo.
router.post("/rsvp", async (req, res) => {
  const { nombre, confirmado, mensaje } = req.body;

  if (
    !nombre ||
    typeof nombre !== "string" ||
    nombre.trim() === "" ||
    typeof confirmado !== "boolean"
  ) {
    return res.status(400).json({ error: "Faltan datos: nombre y confirmado son obligatorios" });
  }

  const nombreLimpio = nombre.trim();

  try {
    await db.execute({
      sql: `INSERT INTO invitados (nombre, confirmado, mensaje, fecha_respuesta)
            VALUES (?, ?, ?, CURRENT_TIMESTAMP)`,
      args: [nombreLimpio, confirmado ? 1 : 0, mensaje || null],
    });

    res.json({ ok: true, message: "Respuesta guardada" });

    // El email se manda DESPUÉS de responder al usuario, para que el
    // formulario no quede esperando si Resend tarda o falla.
    enviarNotificacionRSVP(nombreLimpio, confirmado, mensaje).catch((err) => {
      console.error("Error al enviar email de notificación RSVP:", err);
    });
  } catch (error) {
    console.error("Error al guardar RSVP:", error);
    res.status(500).json({ error: "Error al guardar la respuesta" });
  }
});

// Manda el email de aviso a Mauro con el nombre que escribió el invitado.
async function enviarNotificacionRSVP(nombre, confirmado, mensaje) {
  const estado = confirmado ? "✅ CONFIRMÓ asistencia" : "❌ NO podrá asistir";

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [process.env.NOTIFY_EMAIL_MAURO],
    subject: `RSVP boda: ${nombre} — ${confirmado ? "confirmó" : "no puede ir"}`,
    html: `
      <h2>${estado}</h2>
      <p><strong>Invitado:</strong> ${nombre}</p>
      ${mensaje ? `<p><strong>Mensaje:</strong> ${mensaje}</p>` : ""}
    `,
  });
}

export default router;
