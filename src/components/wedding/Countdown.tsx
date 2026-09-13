import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function calculateDays(date: string) {
  if (!date) return null;
  const target = new Date(date).getTime();
  if (Number.isNaN(target)) return null;
  return Math.max(0, Math.ceil((target - Date.now()) / 86_400_000));
}

export function Countdown({ date }: { date: string }) {
  const initial = useMemo(() => calculateDays(date), [date]);
  const [days, setDays] = useState(initial);

  useEffect(() => {
    setDays(calculateDays(date));
    const timer = window.setInterval(() => setDays(calculateDays(date)), 60_000);
    return () => window.clearInterval(timer);
  }, [date]);

  return (
    <div className="mt-6 inline-flex min-w-32 flex-col border-y border-gold/45 px-8 py-4">
      <span className="text-[0.58rem] uppercase tracking-[0.35em] text-cream/60">Faltan</span>
      <div className="relative flex h-14 items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.strong
            key={days ?? "dash"}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-5xl font-normal text-gold"
          >
            {days ?? "—"}
          </motion.strong>
        </AnimatePresence>
      </div>
      <span className="text-[0.58rem] uppercase tracking-[0.35em] text-cream/60">días</span>
    </div>
  );
}