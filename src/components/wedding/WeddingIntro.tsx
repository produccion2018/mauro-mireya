import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { weddingConfig } from "@/config/wedding";
import { isGroupGuest } from "@/lib/guest-name";
import { BigInterlockedRings, Flourish, FrameCorners } from "./ornaments";

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function blurActiveElement() {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
}

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
      className="premium-surface relative flex min-h-svh items-center justify-center overflow-y-auto overflow-x-hidden px-6 py-10 text-center text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: reduceMotion ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="botanical-corner botanical-corner-left" aria-hidden="true" />
      <div className="botanical-corner botanical-corner-right" aria-hidden="true" />

      <motion.div
        className="gilded-frame relative z-10 mx-auto w-full max-w-md px-6 py-10 sm:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <FrameCorners />
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="text-[0.6rem] uppercase tracking-[0.44em] text-cream/70"
        >
          Tenemos el honor de invitarte
        </motion.p>

        <motion.div variants={itemVariants} transition={{ duration: 0.7 }} className="mt-6">
          <BigInterlockedRings />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-3xl uppercase leading-tight tracking-[0.16em] sm:text-4xl"
        >
          {weddingConfig.groomName}{" "}
          <span className="block py-1 font-script text-4xl normal-case tracking-normal text-gold">
            &
          </span>{" "}
          {weddingConfig.brideName}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-2"
        >
          <Flourish />
          <span className="mt-3 block font-display text-sm tracking-[0.42em] text-gold">
            {weddingConfig.weddingDate.split("-").reverse().join(" · ")}
          </span>
          <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.4em] text-cream/60">
            {weddingConfig.weddingTime}
          </span>
        </motion.div>

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
              <label htmlFor="guest-name" className="text-[0.6rem] uppercase tracking-[0.3em] text-cream/70">
                Ingresa tu nombre
              </label>
              <input
                id="guest-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                required
                className="w-full border-b border-gold/50 bg-transparent px-2 py-2 text-center font-elegant text-xl italic text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none"
              />
              <Button
                type="submit"
                variant="wedding"
                size="wedding"
                className="shine mt-3"
                onPointerDown={blurActiveElement}
              >
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
              <p className="font-elegant text-2xl italic text-gold-soft">¡Gracias, {name}!</p>
              <p className="mx-auto mt-3 max-w-sm font-elegant text-base italic leading-7 text-cream/80">
                {isGroup
                  ? "Contar con ustedes en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."
                  : "Contar contigo en este día tan especial es un regalo que llevaremos siempre en el corazón. Gracias por ser parte de nuestra historia y por acompañarnos a celebrar el comienzo de esta nueva etapa."}
              </p>
              <Button
                type="button"
                variant="wedding"
                size="wedding"
                onPointerDown={blurActiveElement}
                onClick={() => onOpen(name)}
                className="shine mt-6"
              >
                <Sparkles aria-hidden="true" /> Abrir invitación
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}