import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { isGroupGuest } from "@/lib/guest-name";
import { BigInterlockedRings, BotanicalMark } from "./ornaments";

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export function WeddingIntro({ onOpen }: { onOpen: (name: string) => void }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isGroup = isGroupGuest(name);
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.22, delayChildren: 0.1 },
    },
  };

  return (
    <motion.section
      className="relative flex min-h-svh items-center justify-center overflow-y-auto overflow-x-hidden bg-forest px-6 py-8 text-center text-cream"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="botanical-corner botanical-corner-left" aria-hidden="true" />
      <div className="botanical-corner botanical-corner-right" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl py-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="text-[0.6rem] uppercase tracking-[0.44em] text-cream/65"
        >
          Tenemos el honor de invitarte
        </motion.p>

        <motion.div variants={itemVariants} transition={{ duration: 0.7 }}>
          <BigInterlockedRings />
        </motion.div>

        <motion.div variants={itemVariants} transition={{ duration: 0.7 }}>
          <BotanicalMark />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 font-display text-2xl uppercase leading-tight tracking-[0.12em] sm:text-3xl"
        >
          {weddingConfig.groomName}{" "}
          <span className="block py-1 font-script text-2xl normal-case tracking-normal text-gold">
            &
          </span>{" "}
          {weddingConfig.brideName}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-3 font-display text-xs uppercase tracking-[0.44em] text-cream/75"
        >
          Nuestra boda
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 1.6 }}
              className="mx-auto mt-6 flex max-w-xs flex-col items-center gap-3"
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