import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { BotanicalMark, InterlockedRings } from "./ornaments";

const heroFallback = "https://placehold.co/1200x1500/2C3B2D/D4AF37?text=Hero+Background";

export function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: [1, 1.12, 1] }}
        transition={{
          opacity: { duration: 1.5, ease: "easeOut" },
          scale: { duration: 14, ease: "easeInOut", repeat: Infinity },
        }}
      >
        <ImageWithFallback
          src={weddingConfig.images.hero}
          fallback={heroFallback}
          alt="Fotografía principal de Mauro y Mireya"
          className="h-full w-full rounded-lg object-cover opacity-40"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
      <motion.div
        className="relative z-10 max-w-xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <InterlockedRings />
        <BotanicalMark />
        <p className="mt-7 font-script text-6xl leading-none text-gold">M&M</p>
        <h1 className="mt-5 font-display text-2xl uppercase leading-relaxed tracking-[0.14em] text-cream sm:text-3xl">
          {weddingConfig.groomName} <span className="text-gold">&</span> {weddingConfig.brideName}
        </h1>
        <p className="mt-5 text-[0.62rem] uppercase tracking-[0.48em] text-cream/65">Nuestra boda</p>
        <p className="mt-5 font-display text-lg italic text-cream/80">Dos caminos, un mismo destino</p>
      </motion.div>
    </section>
  );
}