import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { BotanicalMark, InterlockedRings } from "./ornaments";

export function WeddingIntro({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-forest px-6 py-12 text-center text-cream"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="botanical-corner botanical-corner-left" aria-hidden="true" />
      <div className="botanical-corner botanical-corner-right" aria-hidden="true" />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <InterlockedRings />
        <p className="mt-7 text-[0.62rem] uppercase tracking-[0.46em] text-cream/65">Tenemos el honor de invitarte</p>
        <motion.div
          className="monogram-seal mx-auto my-8 flex size-40 items-center justify-center rounded-full"
          animate={{ boxShadow: ["0 0 0 0 transparent", "0 0 45px 2px var(--gold-glow)", "0 0 0 0 transparent"] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-script text-7xl text-gold">M&M</span>
        </motion.div>
        <BotanicalMark />
        <h1 className="mt-8 font-display text-3xl uppercase leading-tight tracking-[0.12em] sm:text-4xl">
          {weddingConfig.groomName} <span className="block py-2 font-script text-3xl normal-case tracking-normal text-gold">&</span>{" "}
          {weddingConfig.brideName}
        </h1>
        <p className="mt-5 font-display text-sm uppercase tracking-[0.5em] text-cream/75">Nuestra boda</p>
        <Button variant="wedding" size="wedding" onClick={onOpen} className="mt-10">
          <Sparkles aria-hidden="true" /> Abrir invitación
        </Button>
      </motion.div>
    </motion.section>
  );
}
