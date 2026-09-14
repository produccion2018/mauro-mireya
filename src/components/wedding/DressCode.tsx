import { motion } from "framer-motion";
import { InterlockedRings } from "./ornaments";
import { SectionReveal } from "./SectionReveal";

export function DressCode() {
  return (
    <SectionReveal className="section-rule py-11 text-center" aria-labelledby="vestimenta-title">
      <motion.div
        className="mx-auto w-fit scale-125"
        animate={{ rotate: [0, 6, -6, 0], scale: [1.25, 1.34, 1.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <InterlockedRings />
      </motion.div>
      <h2 id="vestimenta-title" className="sr-only">Unión matrimonial</h2>
      <motion.p
        className="mx-auto mt-8 max-w-xs font-display text-base italic leading-7 text-cream/75"
        animate={{ opacity: [0.35, 1, 1, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.75, 1] }}
      >
        "Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne."
      </motion.p>
      <p className="section-kicker mt-2">Génesis 2:24</p>
    </SectionReveal>
  );
}