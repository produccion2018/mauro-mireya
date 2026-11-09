import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function FineDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-gold" aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-45" />
      <span className="block size-1 rotate-45 border border-current" />
      <span className="h-px w-12 bg-current opacity-45" />
    </div>
  );
}

export function BotanicalMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-center text-gold" aria-hidden="true">
      <Leaf className={compact ? "size-4 -rotate-45" : "size-6 -rotate-45"} strokeWidth={1} />
      <span className={compact ? "w-5 border-t border-gold/60" : "w-9 border-t border-gold/60"} />
      <span className={compact ? "mx-1 size-1 rotate-45 bg-gold" : "mx-2 size-1.5 rotate-45 bg-gold"} />
      <span className={compact ? "w-5 border-t border-gold/60" : "w-9 border-t border-gold/60"} />
      <Leaf className={compact ? "size-4 rotate-45" : "size-6 rotate-45"} strokeWidth={1} />
    </div>
  );
}

export function InterlockedRings() {
  return (
    <div className="relative mx-auto h-10 w-16 text-gold" aria-label="Anillos entrelazados">
      <span className="absolute left-2 top-1 size-8 rounded-full border border-current" />
      <span className="absolute right-2 top-1 size-8 rounded-full border border-current" />
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border border-current bg-forest" />
    </div>
  );
}

export function BigInterlockedRings() {
  return (
    <div className="relative mx-auto flex flex-col items-center" aria-label="M&M con anillos dorados">
      <div className="flex items-center justify-center gap-1 leading-none">
        <motion.span
          className="gold-foil font-display text-6xl font-semibold leading-none tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          M
        </motion.span>
        <motion.span
          className="font-script text-5xl leading-none text-gold-soft drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        >
          &amp;
        </motion.span>
        <motion.span
          className="gold-foil font-display text-6xl font-semibold leading-none tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          M
        </motion.span>
      </div>

      <svg viewBox="10 15 110 75" className="-mt-1 h-12 w-20" aria-hidden="true">
        <defs>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E7B8" />
            <stop offset="45%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6A1A" />
          </linearGradient>
          <radialGradient id="gem" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#D9ECFF" />
            <stop offset="100%" stopColor="#8FB8E0" />
          </radialGradient>
        </defs>

        {/* Anillo trasero, entra desde la izquierda */}
        <motion.circle
          cx="52"
          cy="55"
          r="30"
          fill="none"
          stroke="url(#goldRing)"
          strokeWidth="7"
          initial={{ x: -110, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: [0, -5, 0],
          }}
          transition={{
            x: { duration: 1.8, ease: "easeOut", delay: 0.5 },
            opacity: { duration: 1.8, ease: "easeOut", delay: 0.5 },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.6 },
          }}
          style={{ transformOrigin: "52px 55px" }}
        />

        {/* Anillo delantero con piedra, entra desde la derecha */}
        <motion.g
          initial={{ x: 110, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: [0, 5, 0],
          }}
          transition={{
            x: { duration: 1.8, ease: "easeOut", delay: 0.35 },
            opacity: { duration: 1.8, ease: "easeOut", delay: 0.35 },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.4 },
          }}
          style={{ transformOrigin: "78px 55px" }}
        >
          <circle cx="78" cy="55" r="30" fill="none" stroke="url(#goldRing)" strokeWidth="7" />
          <polygon points="78,20 86,29 78,38 70,29" fill="url(#gem)" stroke="#D4AF37" strokeWidth="1" />
          <ellipse cx="75" cy="25" rx="2.2" ry="1.4" fill="#FFFFFF" opacity="0.9" />
        </motion.g>
      </svg>
    </div>
  );
}
/** Filigrana dorada simétrica para separar secciones. */
export function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={`mx-auto h-5 w-48 text-gold ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 12 H86" opacity="0.45" />
      <path d="M236 12 H154" opacity="0.45" />
      <path d="M86 12 C96 12 100 4 108 6 C114 8 112 15 106 14 C101 13 103 8 108 9" />
      <path d="M154 12 C144 12 140 4 132 6 C126 8 128 15 134 14 C139 13 137 8 132 9" />
      <path d="M86 12 C96 12 100 20 108 18" opacity="0.7" />
      <path d="M154 12 C144 12 140 20 132 18" opacity="0.7" />
      <path d="M120 4 L126 12 L120 20 L114 12 Z" fill="currentColor" fillOpacity="0.25" />
      <circle cx="120" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

/** Esquinas doradas para usar dentro de un contenedor con clase `gilded-frame`. */
export function FrameCorners() {
  return (
    <>
      <span className="frame-corner tl" aria-hidden="true" />
      <span className="frame-corner tr" aria-hidden="true" />
      <span className="frame-corner bl" aria-hidden="true" />
      <span className="frame-corner br" aria-hidden="true" />
    </>
  );
}
