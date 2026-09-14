import { useState } from "react";
import { MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SectionReveal } from "./SectionReveal";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

export function RSVP() {
  const [nombre, setNombre] = useState("");
  const [confirmado, setConfirmado] = useState<"si" | "no" | "">("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado" | "error">("idle");

  const puedeEnviar = nombre.trim() !== "" && confirmado !== "" && estado !== "enviando";

  async function handleEnviar() {
    if (!puedeEnviar) return;
    setEstado("enviando");
    try {
      const res = await fetch(`${API_URL}/rsvp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          confirmado: confirmado === "si",
          mensaje,
        }),
      });
      if (!res.ok) throw new Error("fallo");
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  if (estado === "enviado") {
    return (
      <SectionReveal className="section-rule py-12 text-center" aria-labelledby="rsvp-title">
        <MessageCircleHeart className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
        <p className="section-kicker mt-4">Confirma tu asistencia</p>
        <h2 id="rsvp-title" className="mt-3 font-display text-2xl text-cream">
          {confirmado === "si" ? "¡Gracias, te esperamos!" : "Gracias por avisarnos"}
        </h2>
      </SectionReveal>
    );
  }

  return (
    <SectionReveal className="section-rule py-12 text-center" aria-labelledby="rsvp-title">
      <MessageCircleHeart className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Confirma tu asistencia</p>
      <h2 id="rsvp-title" className="mt-3 font-display text-2xl text-cream">
        Nos encantará contar con vos
      </h2>

      <div className="mx-auto mt-7 flex max-w-xs flex-col gap-4">
        <Input
          placeholder="Escribí tu nombre y apellido"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border-gold/40 text-cream placeholder:text-cream/50"
        />

        <ToggleGroup
          type="single"
          value={confirmado}
          onValueChange={(v) => v && setConfirmado(v as "si" | "no")}
          className="justify-center gap-2"
        >
          <ToggleGroupItem
            type="button"
            value="si"
            className="border border-gold/40 px-4 text-cream data-[state=on]:bg-gold/20 data-[state=on]:border-gold"
          >
            Sí, voy
          </ToggleGroupItem>
          <ToggleGroupItem
            type="button"
            value="no"
            className="border border-gold/40 px-4 text-cream data-[state=on]:bg-gold/20 data-[state=on]:border-gold"
          >
            No puedo ir
          </ToggleGroupItem>
        </ToggleGroup>

        <Textarea
          placeholder="Dejá un mensaje (opcional)"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="border-gold/40 text-cream placeholder:text-cream/50"
          rows={2}
        />

        <Button
          type="button"
          variant="wedding"
          size="wedding"
          disabled={!puedeEnviar}
          onClick={handleEnviar}
        >
          {estado === "enviando" ? "Enviando..." : "Enviar"}
        </Button>

        {estado === "error" && (
          <p className="text-sm text-red-300">Algo falló. Probá de nuevo en un momento.</p>
        )}
      </div>
    </SectionReveal>
  );
}