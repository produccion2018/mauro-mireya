import { MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

export function RSVP() {
  const message = encodeURIComponent(`Hola, queremos confirmar nuestra asistencia a la boda de ${weddingConfig.groomName} y ${weddingConfig.brideName}.`);
  const whatsappNumber: string = weddingConfig.whatsappNumber;
  const url = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${message}` : "";
  return (
    <SectionReveal className="section-rule py-12 text-center" aria-labelledby="rsvp-title">
      <MessageCircleHeart className="mx-auto size-8 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Confirma tu asistencia</p>
      <h2 id="rsvp-title" className="mt-3 font-display text-2xl text-cream">Nos encantará contar con vos</h2>
      <Button variant="wedding" size="wedding" asChild={Boolean(url)} disabled={!url} className="mt-7">
        {url ? <a href={url} target="_blank" rel="noreferrer">Enviar mensaje</a> : <span>Enviar mensaje</span>}
      </Button>
    </SectionReveal>
  );
}
