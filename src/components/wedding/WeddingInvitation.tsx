import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { DressCode } from "./DressCode";
import { Footer } from "./Footer";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { Location } from "./Location";
import { MusicPlayer } from "./MusicPlayer";
import { OurStory } from "./OurStory";
import { RSVP } from "./RSVP";
import { WeddingDate } from "./WeddingDate";
import { WeddingIntro } from "./WeddingIntro";

export function WeddingInvitation() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void play();
    else {
      audio.pause();
      setPlaying(false);
    }
  };

  const openInvitation = () => {
    setOpened(true);
    window.setTimeout(() => void play(), 80);
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
    <main className="min-h-svh bg-forest">
      <audio
        ref={audioRef}
        src={weddingConfig.musicFile}
        preload="metadata"
        muted={muted}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => setPlaying(false)}
      />
      <AnimatePresence mode="wait">
        {!opened ? (
          <WeddingIntro key="intro" onOpen={openInvitation} />
        ) : (
          <motion.div key="invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
            <div className="wedding-shell">
              <div className="wedding-main">
                <Hero />
                <div className="px-5 sm:px-10">
                  <WeddingDate />
                  <Location />
                  <footer className="section-rule py-12 text-center lg:block hidden">
                    <p className="section-kicker">Gracias</p>
                    <p className="mx-auto mt-4 max-w-md font-display text-xl italic leading-8 text-cream/75">{weddingConfig.weddingMessage}</p>
                  </footer>
                </div>
              </div>
              <aside className="wedding-aside px-5 sm:px-10 lg:px-8">
                <OurStory />
                <DressCode />
                <Gallery />
                <MusicPlayer playing={playing} currentTime={currentTime} duration={duration} onToggle={toggle} onSeek={seek} />
                <RSVP />
              </aside>
              <div className="lg:col-span-2 lg:hidden"><Footer /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <motion.div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 border border-gold/40 bg-forest/95 p-1 shadow-luxury backdrop-blur" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <Button variant="weddingIcon" size="icon" onClick={toggle} aria-label={playing ? "Pausar canción" : "Reproducir canción"}>
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button
            variant="weddingIcon"
            size="icon"
            onClick={() => setMuted((value) => !value)}
            aria-label={muted ? "Activar sonido" : "Silenciar canción"}
          >
            {muted ? <VolumeX /> : <Volume2 />}
          </Button>
        </motion.div>
      )}
    </main>
  );
}
