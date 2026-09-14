import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { isGroupGuest } from "@/lib/guest-name";
import { BotanicalMark } from "./ornaments";

export function WeddingIntro({ onOpen }: { onOpen: (name: string) => void }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isGroup = isGroupGuest(name);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  return (
    <motion.section
      className="relative flex min-h-svh items-center justify-center overflow-y-auto overflow-x-hidden bg-forest px-6 py-8 text-center text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="botanical-corner botanical-corner-left" aria-hidden="true" />
      <div className="botanical-corner botanical-corner-right" aria-hidden="true" />
      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.25 }}
      >
        <p className="text-[0.6rem] uppercase tracking-[0.44em] text-cream/65">
          Tenemos el honor de invitarte
        </p>

        <motion.div
          className="mx-auto my-5 flex h-32 items-center justify-center"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-display text-8xl font-medium leading-none text-cream sm:text-9xl">M&amp;M</span>
        </motion.div>

        <div className="relative mx-auto h-24 w-40 text-gold" aria-label="Dos anillos entrelazados">
          <motion.span
            className="absolute left-3 top-2 size-20 rounded-full border-2 border-current"
            initial={{ opacity: 0, x: reduceMotion ? 0 : -96 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.5, delay: reduceMotion ? 0 : 1.85, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="absolute right-3 top-2 size-20 rounded-full border-2 border-current"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 96 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.5, delay: reduceMotion ? 0 : 1.85, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <BotanicalMark />

        <h1 className="mt-5 font-display text-2xl uppercase leading-tight tracking-[0.12em] sm:text-3xl">
          {weddingConfig.groomName}{" "}
          <span className="block py-1 font-script text-2xl normal-case tracking-normal text-gold">
            &
          </span>{" "}
          {weddingConfig.brideName}
        </h1>
        <p className="mt-3 font-display text-xs uppercase tracking-[0.44em] text-cream/75">
          Nuestra boda
        </p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex max-w-xs flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <label htmlFor="guest-name" className="text-[0.6rem] uppercase tracking-[0.3em] text-cream/65">
                Ingresa tu nombre
              </label>
              <input
                id="guest-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full border-b border-gold/50 bg-transparent px-2 py-2 text-center font-display text-lg text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
              />
              <Button type="submit" variant="wedding" size="wedding" className="mt-2">
                Continuar
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <p className="font-display text-xl italic text-cream/90">¡Gracias, {name}!</p>
              <p className="mx-auto mt-3 max-w-sm font-display text-sm italic leading-7 text-cream/70">
                {isGroup
                  ? "Contar con ustedes en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."
                  : "Contar contigo en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."}
              </p>
              <Button type="button" variant="wedding" size="wedding" onClick={() => onOpen(name)} className="mt-6">
                <Sparkles aria-hidden="true" /> Abrir invitación
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}