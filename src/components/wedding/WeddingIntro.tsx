import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { isGroupGuest } from "@/lib/guest-name";
import { BotanicalMark, InterlockedRings } from "./ornaments";

export function WeddingIntro({ onOpen }: { onOpen: (name: string) => void }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isGroup = isGroupGuest(name);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  return (
    <motion.section
      className="relative flex min-h-svh items-center justify-center overflow-y-auto overflow-x-hidden bg-forest px-6 py-12 text-center text-cream"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="botanical-corner botanical-corner-left" aria-hidden="true" />
      <div className="botanical-corner botanical-corner-right" aria-hidden="true" />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <InterlockedRings />
        <p className="mt-7 text-[0.62rem] uppercase tracking-[0.46em] text-cream/65">Tenemos el honor de invitarle</p>
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

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-xs flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <label htmlFor="guest-name" className="text-[0.6rem] uppercase tracking-[0.3em] text-cream/65">
                Ingrese su nombre
              </label>
              <input
                id="guest-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Su nombre"
                required
                className="w-full border-b border-gold/50 bg-transparent px-2 py-2 text-center font-display text-lg text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <Button type="submit" variant="wedding" size="wedding" className="mt-3">
                Continuar
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10"
            >
              <p className="font-display text-xl italic text-cream/90">¡Gracias, {name}!</p>
              <p className="mx-auto mt-4 max-w-sm font-display text-sm italic leading-7 text-cream/70">
                {isGroup
                  ? "Contar con ustedes en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."
                  : "Contar con usted en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."}
              </p>
              <Button variant="wedding" size="wedding" onClick={() => onOpen(name)} className="mt-8">
                <Sparkles aria-hidden="true" /> Abrir invitación
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}