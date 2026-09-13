import { Disc3, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  return `${mins}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}

type MusicPlayerProps = {
  playing: boolean;
  currentTime: number;
  duration: number;
  onToggle: () => void;
  onSeek: (value: number) => void;
};

export function MusicPlayer({ playing, currentTime, duration, onToggle, onSeek }: MusicPlayerProps) {
  const progress = duration ? Math.min(currentTime / duration, 1) * 100 : 0;

  return (
    <SectionReveal className="section-rule py-11 text-center" aria-labelledby="musica-title">
      <div className="relative mx-auto flex size-14 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-gold/30" aria-hidden="true" />
        <div className="absolute inset-2 rounded-full border border-dotted border-gold/40" aria-hidden="true" />
        <Disc3
          className={`size-7 text-gold ${playing ? "animate-spin-slow" : ""}`}
          strokeWidth={1}
          aria-hidden="true"
        />
      </div>
      <p className="section-kicker mt-4">Nuestra canción</p>
      <h2 id="musica-title" className="mt-3 min-h-7 font-display text-xl text-cream">{weddingConfig.songTitle || "—"}</h2>
      <p className="mt-1 min-h-5 text-xs uppercase tracking-[0.18em] text-cream/50">{weddingConfig.songArtist || "—"}</p>
      <div className="mx-auto mt-7 flex max-w-sm items-center gap-4">
        <Button
          variant="weddingIcon"
          size="icon"
          onClick={onToggle}
          aria-label={playing ? "Pausar canción" : "Reproducir canción"}
          className="size-11 shrink-0 rounded-full border border-gold/50 bg-gold/10 hover:bg-gold/20"
        >
          {playing ? <Pause className="fill-gold" /> : <Play className="fill-gold" />}
        </Button>
        <div className="flex-1">
          <div
            className="relative h-1 w-full rounded-full bg-cream/15"
            style={{ background: `linear-gradient(to right, var(--gold) ${progress}%, color-mix(in oklab, var(--cream) 15%, transparent) ${progress}%)` }}
          >
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => onSeek(Number(event.target.value))}
              className="music-range absolute inset-0 h-1 w-full opacity-0"
              aria-label="Progreso de la canción"
            />
            <div
              className="pointer-events-none absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_6px_var(--gold)]"
              style={{ left: `calc(${progress}% - 6px)` }}
              aria-hidden="true"
            />
          </div>
          <div className="mt-2 flex justify-between font-sans text-[0.62rem] text-cream/45">
            <span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}