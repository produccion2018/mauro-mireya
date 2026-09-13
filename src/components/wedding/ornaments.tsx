import { Leaf } from "lucide-react";

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
