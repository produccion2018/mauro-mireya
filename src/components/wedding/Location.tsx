import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

export function Location() {
  const location = weddingConfig.receptionLocation || weddingConfig.ceremonyLocation;
  return (
    <SectionReveal className="section-rule py-12 text-center" aria-labelledby="ubicacion-title">
      <MapPin className="mx-auto size-7 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Ubicación</p>
      <h2 id="ubicacion-title" className="mt-3 font-display text-2xl text-cream">
        {location || "Lugar por confirmar"}
      </h2>
      {weddingConfig.address && <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-cream/60">{weddingConfig.address}</p>}
      <Button variant="weddingOutline" size="wedding" asChild={Boolean(weddingConfig.googleMapsUrl)} disabled={!weddingConfig.googleMapsUrl} className="mt-7">
        {weddingConfig.googleMapsUrl ? (
          <a href={weddingConfig.googleMapsUrl} target="_blank" rel="noreferrer">Ver mapa</a>
        ) : (
          <span>Ver mapa</span>
        )}
      </Button>
    </SectionReveal>
  );
}
