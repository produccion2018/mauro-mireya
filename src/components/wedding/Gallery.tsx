import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { SectionReveal } from "./SectionReveal";

const photos = [
  { src: weddingConfig.images.mauro, alt: "Fotografía de Mauro", rotate: -6, wide: false },
  { src: weddingConfig.images.mireya, alt: "Fotografía de Mireya", rotate: 4, wide: false },
  { src: weddingConfig.images.couple02, alt: "Fotografía de la pareja", rotate: -3, wide: true },
];

function LeafSprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path d="M30 4 C22 16 22 28 30 40" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.8" />
      <path d="M30 12 C22 14 16 12 12 6 C18 8 24 12 30 12Z" fill="var(--gold)" opacity="0.55" />
      <path d="M30 22 C38 22 44 18 48 12 C44 20 38 24 30 24Z" fill="var(--gold)" opacity="0.7" />
      <path d="M30 32 C22 32 16 28 12 22 C18 26 24 30 30 30Z" fill="var(--gold)" opacity="0.55" />
      <path d="M30 40 C36 42 40 46 42 52 C36 50 32 46 30 40Z" fill="var(--gold-soft)" opacity="0.8" />
      <circle cx="43" cy="10" r="2" fill="var(--gold-soft)" opacity="0.9" />
      <circle cx="49" cy="15" r="1.4" fill="var(--gold-soft)" opacity="0.7" />
    </svg>
  );
}

export function Gallery() {
  return (
    <SectionReveal className="section-rule py-11" aria-labelledby="galeria-title">
      <Images className="mx-auto size-6 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4 text-center">Galería</p>
      <h2 id="galeria-title" className="sr-only">Galería de fotos</h2>

      <div className="relative mt-10 overflow-hidden pb-2 pt-4">
        <motion.div
          className="pointer-events-none absolute -left-4 -top-2 size-16 sm:size-20"
          animate={{ rotate: [0, 4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <LeafSprig className="h-full w-full -scale-x-100" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -right-4 bottom-0 size-16 sm:size-20"
          animate={{ rotate: [0, -4, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <LeafSprig className="h-full w-full" />
        </motion.div>

        {/* piolita */}
        <div className="absolute left-0 right-0 top-4 h-px bg-gold/50" aria-hidden="true" />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 px-2">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative"
              style={{ transformOrigin: "top center" }}
              initial={{ rotate: photo.rotate, opacity: 0, y: 14 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [photo.rotate - 2, photo.rotate + 2, photo.rotate - 2],
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.15 },
                y: { duration: 0.5, delay: index * 0.15 },
                rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 },
              }}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 2 }}
            >
              {/* pinza */}
              <div
                className="absolute -top-3 left-1/2 h-5 w-2.5 -translate-x-1/2 rounded-sm border border-gold/70 bg-forest"
                aria-hidden="true"
              />
              {/* marco polaroid */}
              <div
                className={`border border-gold/25 bg-cream p-2 pb-4 shadow-luxury ${
                  photo.wide ? "w-52 sm:w-56" : "w-40 sm:w-44"
                }`}
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100 ${
                    photo.wide ? "aspect-[6/5]" : "aspect-[4/5]"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}