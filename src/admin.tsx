import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

type Invitado = {
  id: number;
  nombre: string;
  confirmado: number | null;
  mensaje: string | null;
  fecha_respuesta: string | null;
};

export const Route = createFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  const [invitados, setInvitados] = useState<Invitado[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/invitados`)
      .then((res) => res.json())
      .then((data) => setInvitados(data))
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, []);

  const confirmados = invitados.filter((inv) => inv.confirmado === 1).length;
  const noVienen = invitados.filter((inv) => inv.confirmado === 0).length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Confirmaciones de asistencia</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {invitados.length} respuestas — {confirmados} confirmaron, {noVienen} no pueden ir
      </p>

      {cargando && <p className="mt-6">Cargando...</p>}
      {error && <p className="mt-6 text-red-600">No se pudo cargar la lista.</p>}

      {!cargando && !error && (
        <Table className="mt-6">
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>¿Va?</TableHead>
              <TableHead>Mensaje</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invitados.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.nombre}</TableCell>
                <TableCell>
                  {inv.confirmado === 1 ? "✅ Sí" : inv.confirmado === 0 ? "❌ No" : "—"}
                </TableCell>
                <TableCell>{inv.mensaje || "—"}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {inv.fecha_respuesta
                    ? new Date(inv.fecha_respuesta).toLocaleString("es-AR")
                    : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}