import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { ImageWithFallback } from "./image-with-fallback";
import { BigInterlockedRings, Flourish, FrameCorners } from "./ornaments";

const heroFallback = "https://placehold.co/1200x1500/2C3B2D/D4AF37?text=Hero+Background";

function shortDate(date: string) {
  const [year, month, day] = date.split("-");
  return year && month && day ? `${day} · ${month} · ${year}` : "";
}

export function Hero({ guestName }: { guestName?: string }) {
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: [1.08, 1, 1.08] }}
        transition={{
          opacity: { duration: 1.8, ease: "easeOut" },
          scale: { duration: 22, ease: "easeInOut", repeat: Infinity },
        }}
      >
        <ImageWithFallback
          src={weddingConfig.images.hero}
          fallback={heroFallback}
          alt="Fotografía principal de Mauro y Mireya"
          className="h-full w-full object-cover object-top opacity-75"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />

      <motion.div
        className="gilded-frame relative z-10 w-full max-w-md px-6 py-10 sm:px-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <FrameCorners />
        <p className="text-[0.6rem] uppercase tracking-[0.5em] text-cream/70">Nuestra boda</p>
        <div className="mt-6">
          <BigInterlockedRings />
        </div>

        <h1 className="mt-6 font-display uppercase text-cream">
          <span className="block text-3xl tracking-[0.18em] sm:text-4xl">{weddingConfig.groomName}</span>
          <span className="block py-1 font-script text-4xl normal-case tracking-normal text-gold sm:text-5xl">&amp;</span>
          <span className="block text-3xl tracking-[0.18em] sm:text-4xl">{weddingConfig.brideName}</span>
        </h1>

        <Flourish className="mt-6" />

        <p className="mt-4 font-display text-sm tracking-[0.42em] text-gold">
          {shortDate(weddingConfig.weddingDate)}
        </p>
        {weddingConfig.weddingTime && (
          <p className="mt-2 text-[0.6rem] uppercase tracking-[0.4em] text-cream/65">{weddingConfig.weddingTime}</p>
        )}

        <p className="mt-6 font-elegant text-xl italic text-cream/85">Dos caminos, un mismo destino</p>
        {guestName && (
          <p className="mt-4 font-elegant text-lg italic text-gold-soft">
            Gracias por acompañarnos, {guestName}
          </p>
        )}
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/70"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-[0.5rem] uppercase tracking-[0.4em]">Desliza</span>
        <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
