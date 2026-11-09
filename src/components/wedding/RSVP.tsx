import { useState } from "react";
import { MessageCircleHeart, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SectionReveal } from "./SectionReveal";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

function blurActiveElement() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}

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
        {confirmado === "si" ? (
          <PartyPopper className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
        ) : (
          <MessageCircleHeart className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
        )}
        <p className="section-kicker mt-4">Confirma tu asistencia</p>
        <h2 id="rsvp-title" className="mt-3 font-display text-2xl text-cream">
          {confirmado === "si" ? "¡Gracias, te esperamos!" : "Gracias por avisarnos"}
        </h2>
        <p className="mx-auto mt-3 max-w-sm font-elegant text-lg italic leading-7 text-cream/80">
          {confirmado === "si"
            ? "Nos hace muy felices saber que vas a estar con nosotros en este día tan especial. ¡Nos vemos pronto!"
            : "Lamentamos que no puedas acompañarnos, pero entendemos y te lo agradecemos de corazón por avisarnos. Vas a estar presente en nuestros pensamientos."}
        </p>
      </SectionReveal>
    );
  }

  return (
    <SectionReveal className="section-rule py-12 text-center" aria-labelledby="rsvp-title">
      <MessageCircleHeart className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Confirma tu asistencia</p>
      <h2 id="rsvp-title" className="mt-4 font-display text-2xl text-cream">
        Nos encantará contar con vos
      </h2>

      <div className="glass-card mx-auto mt-8 flex max-w-sm flex-col gap-4 rounded-sm p-6">
        <Input
          placeholder="Escribí tu nombre y apellido"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="premium-field h-11 text-center font-elegant text-lg placeholder:text-cream/45"
        />

        <ToggleGroup
          type="single"
          value={confirmado}
          onValueChange={(v) => v && setConfirmado(v as "si" | "no")}
          className="w-full justify-center gap-2"
        >
          <ToggleGroupItem
            type="button"
            value="si"
            className="h-10 flex-1 rounded-sm border border-gold/40 px-4 text-[0.66rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold/10 hover:text-cream data-[state=on]:border-gold data-[state=on]:bg-gold data-[state=on]:text-forest"
          >
            Sí, voy
          </ToggleGroupItem>
          <ToggleGroupItem
            type="button"
            value="no"
            className="h-10 flex-1 rounded-sm border border-gold/40 px-4 text-[0.66rem] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold/10 hover:text-cream data-[state=on]:border-gold data-[state=on]:bg-gold data-[state=on]:text-forest"
          >
            No puedo ir
          </ToggleGroupItem>
        </ToggleGroup>

        <Textarea
          placeholder="Dejá un mensaje (opcional)"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="premium-field text-center font-elegant text-lg italic placeholder:text-cream/45"
          rows={3}
        />

        <Button
          type="button"
          variant="wedding"
          size="wedding"
          disabled={!puedeEnviar}
          className="shine mt-1 w-full"
          onPointerDown={blurActiveElement}
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