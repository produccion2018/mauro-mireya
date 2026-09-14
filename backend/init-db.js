import db from "./db.js";
import fs from "fs";

const schema = fs.readFileSync("./schema.sql", "utf-8");

async function init() {
  try {
    await db.execute(schema);
    console.log('Tabla "invitados" creada correctamente ✅');
  } catch (err) {
    console.error("Error creando la tabla:", err.message);
  }
}

init();
