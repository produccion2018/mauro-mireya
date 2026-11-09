import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Remaining = { dias: number; horas: number; min: number; seg: number };

function calculateRemaining(date: string): Remaining | null {
  if (!date) return null;
  const target = new Date(date).getTime();
  if (Number.isNaN(target)) return null;
  const diff = Math.max(0, target - Date.now());
  return {
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor((diff / 3_600_000) % 24),
    min: Math.floor((diff / 60_000) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number | null; label: string }) {
  const text = value === null ? "—" : value.toString().padStart(2, "0");
  return (
    <div className="glass-card flex w-[4.4rem] flex-col items-center rounded-sm px-2 py-3 sm:w-20">
      <div className="relative flex h-10 w-full items-center justify-center overflow-hidden sm:h-12">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="gold-foil font-display text-3xl tabular-nums sm:text-4xl"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-[0.52rem] uppercase tracking-[0.3em] text-cream/55">{label}</span>
    </div>
  );
}

export function Countdown({ date }: { date: string }) {
  // Empieza en null para que el servidor y el navegador rendericen lo mismo.
  const [left, setLeft] = useState<Remaining | null>(null);

  useEffect(() => {
    setLeft(calculateRemaining(date));
    const timer = window.setInterval(() => setLeft(calculateRemaining(date)), 1000);
    return () => window.clearInterval(timer);
  }, [date]);

  return (
    <div className="mt-8">
      <p className="text-[0.58rem] uppercase tracking-[0.4em] text-cream/55">Faltan</p>
      <div className="mt-4 flex justify-center gap-2 sm:gap-3">
        <Unit value={left?.dias ?? null} label="Días" />
        <Unit value={left?.horas ?? null} label="Horas" />
        <Unit value={left?.min ?? null} label="Min" />
        <Unit value={left?.seg ?? null} label="Seg" />
      </div>
    </div>
  );
}
