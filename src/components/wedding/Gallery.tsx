import { Images } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { SectionReveal } from "./SectionReveal";

const photos = [
  { src: weddingConfig.images.mauro, fallback: "https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mauro", alt: "Espacio reservado para una fotografía de Mauro" },
  { src: weddingConfig.images.mireya, fallback: "https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mireya", alt: "Espacio reservado para una fotografía de Mireya" },
  { src: weddingConfig.images.couple02, fallback: "https://placehold.co/1200x800/2C3B2D/D4AF37?text=Couple+02", alt: "Espacio reservado para una fotografía de la pareja" },
];

export function Gallery() {
  return (
    <SectionReveal className="section-rule py-11" aria-labelledby="galeria-title">
      <Images className="mx-auto size-6 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4 text-center">Galería</p>
      <h2 id="galeria-title" className="sr-only">Galería de fotos</h2>
      <div className="mt-7 grid grid-cols-2 gap-2">
        {photos.map((photo, index) => (
          <ImageWithFallback
            key={photo.src}
            {...photo}
            loading="lazy"
            className={index === 2 ? "col-span-2 aspect-[16/8] w-full object-cover grayscale-[15%]" : "aspect-[4/5] w-full object-cover grayscale-[15%]"}
          />
        ))}
      </div>
    </SectionReveal>
  );
}
