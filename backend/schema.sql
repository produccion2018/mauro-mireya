CREATE TABLE IF NOT EXISTS invitados (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  grupo_familiar TEXT,
  confirmado BOOLEAN DEFAULT NULL,
  cantidad_acompanantes INTEGER DEFAULT 0,
  mensaje TEXT,
  restricciones_alimentarias TEXT,
  fecha_respuesta DATETIME,
  codigo_invitacion TEXT UNIQUE
);