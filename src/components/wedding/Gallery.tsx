import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { SectionReveal } from "./SectionReveal";

const photos = [
  { src: weddingConfig.images.mauro, fallback: "https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mauro", alt: "Espacio reservado para una fotografía de Mauro", rotate: -6 },
  { src: weddingConfig.images.mireya, fallback: "https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mireya", alt: "Espacio reservado para una fotografía de Mireya", rotate: 4 },
  { src: weddingConfig.images.couple02, fallback: "https://placehold.co/1200x800/2C3B2D/D4AF37?text=Couple+02", alt: "Espacio reservado para una fotografía de la pareja", rotate: -3 },
];

export function Gallery() {
  return (
    <SectionReveal className="section-rule py-11" aria-labelledby="galeria-title">
      <Images className="mx-auto size-6 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4 text-center">Galería</p>
      <h2 id="galeria-title" className="sr-only">Galería de fotos</h2>

      <div className="relative mt-10 pt-4">
        {/* piolita */}
        <div className="absolute left-0 right-0 top-4 h-px bg-gold/50" aria-hidden="true" />

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 px-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative"
              style={{ transformOrigin: "top center" }}
              initial={{ rotate: photo.rotate }}
              animate={{ rotate: [photo.rotate - 2, photo.rotate + 2, photo.rotate - 2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            >
              {/* pinza */}
              <div
                className="absolute -top-3 left-1/2 h-5 w-2.5 -translate-x-1/2 rounded-sm border border-gold/70 bg-forest"
                aria-hidden="true"
              />
              {/* marco polaroid */}
              <div className="w-36 border border-gold/25 bg-cream p-2 pb-4 shadow-luxury sm:w-40">
                <ImageWithFallback
                  {...photo}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}