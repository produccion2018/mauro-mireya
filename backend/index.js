import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import invitadosRoutes from "./routes/invitados.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/ping-db", async (req, res) => {
  try {
    const result = await db.execute("SELECT 1");
    res.json({ db: "conectado", result: result.rows });
  } catch (err) {
    res.status(500).json({ db: "error", message: err.message });
  }
});

app.use("/api", invitadosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
