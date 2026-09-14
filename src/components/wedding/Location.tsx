import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

export function Location() {
  const location = weddingConfig.receptionLocation || weddingConfig.ceremonyLocation;
  const mapQuery = weddingConfig.address || location;
  const embedSrc = mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
    : null;

  return (
    <SectionReveal className="section-rule py-12 text-center" aria-labelledby="ubicacion-title">
      <motion.span
        className="mx-auto flex w-fit"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="size-7 text-gold" strokeWidth={1} aria-hidden="true" />
      </motion.span>
      <p className="section-kicker mt-4">Ubicación</p>
      <h2 id="ubicacion-title" className="mt-3 font-display text-2xl text-cream">
        {location || "Lugar por confirmar"}
      </h2>
      {weddingConfig.address && <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-cream/60">{weddingConfig.address}</p>}

      {embedSrc && (
        <motion.div
          className="portrait-frame relative mx-auto mt-7 max-w-md overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] w-full">
            <iframe
              title="Mapa de la ubicación"
              src={embedSrc}
              className="h-full w-full grayscale-[0.3] sepia-[0.15]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" aria-hidden="true" />
        </motion.div>
      )}

      <Button variant="weddingOutline" size="wedding" asChild={Boolean(weddingConfig.googleMapsUrl)} disabled={!weddingConfig.googleMapsUrl} className="mt-7">
        {weddingConfig.googleMapsUrl ? (
          <a href={weddingConfig.googleMapsUrl} target="_blank" rel="noreferrer">
            <Navigation className="mr-1 size-4" aria-hidden="true" /> Cómo llegar
          </a>
        ) : (
          <span>Ver mapa</span>
        )}
      </Button>
    </SectionReveal>
  );
}