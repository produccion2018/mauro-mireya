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
  return (
    <SectionReveal className="section-rule py-11 text-center" aria-labelledby="musica-title">
      <Disc3 className={`mx-auto size-8 text-gold ${playing ? "animate-spin-slow" : ""}`} strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Nuestra canción</p>
      <h2 id="musica-title" className="mt-3 min-h-7 font-display text-xl text-cream">{weddingConfig.songTitle || "—"}</h2>
      <p className="mt-1 min-h-5 text-xs uppercase tracking-[0.18em] text-cream/50">{weddingConfig.songArtist || "—"}</p>
      <div className="mx-auto mt-6 flex max-w-sm items-center gap-4">
        <Button variant="weddingIcon" size="icon" onClick={onToggle} aria-label={playing ? "Pausar canción" : "Reproducir canción"}>
          {playing ? <Pause /> : <Play />}
        </Button>
        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => onSeek(Number(event.target.value))}
            className="music-range w-full"
            aria-label="Progreso de la canción"
          />
          <div className="mt-1 flex justify-between font-sans text-[0.62rem] text-cream/45">
            <span>{formatTime(currentTime)}</span><span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
