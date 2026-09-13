import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { BotanicalMark, InterlockedRings } from "./ornaments";

const heroFallback = "https://placehold.co/1200x1500/2C3B2D/D4AF37?text=Hero+Background";

export function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      <ImageWithFallback
        src={weddingConfig.images.hero}
        fallback={heroFallback}
        alt="Espacio reservado para la fotografía principal de Mauro y Mireya"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
      <motion.div
        className="relative z-10 max-w-xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <InterlockedRings />
        <div className="portrait-frame mx-auto my-8 size-56 rounded-full p-2 sm:size-64">
          <div className="h-full w-full overflow-hidden rounded-full border border-gold/50 bg-forest-soft">
            <ImageWithFallback
              src={weddingConfig.images.couple01}
              fallback="https://placehold.co/1200x800/2C3B2D/D4AF37?text=Couple+01"
              alt="Espacio reservado para una fotografía de Mauro y Mireya"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <BotanicalMark />
        <p className="mt-7 font-script text-6xl leading-none text-gold">M&M</p>
        <h1 className="mt-5 font-display text-3xl font-semibold uppercase leading-relaxed tracking-[0.1em] text-cream sm:text-4xl">
          {weddingConfig.groomName} <span className="text-gold">&</span> {weddingConfig.brideName}
        </h1>
        <p className="mt-5 text-[0.62rem] uppercase tracking-[0.48em] text-cream/65">Nuestra boda</p>
        <p className="mt-5 font-display text-lg italic text-cream/80">Dos caminos, un mismo destino</p>
      </motion.div>
    </section>
  );
}