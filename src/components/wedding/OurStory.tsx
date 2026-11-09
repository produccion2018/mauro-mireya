import { motion } from "framer-motion";
import { Heart, Hourglass, Leaf } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const verses = [
  {
    text: "Y sobre todo esto, el amor, que es el vínculo perfecto de la unidad.",
    reference: "Colosenses 3:14",
  },
  {
    text: "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios unió, no lo separe el hombre.",
    reference: "Mateo 19:6",
  },
];

export function OurStory() {
  return (
    <SectionReveal className="section-rule py-11" aria-labelledby="historia-title">
      <div className="flex items-center justify-center gap-3 text-gold">
        <motion.span
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="size-5" strokeWidth={1} aria-hidden="true" />
        </motion.span>
        <motion.span
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Hourglass className="size-5" strokeWidth={1} aria-hidden="true" />
        </motion.span>
      </div>
      <p className="mt-4 text-center"><span className="section-kicker">Nuestra historia</span></p>
      <h2 id="historia-title" className="sr-only">Nuestra historia</h2>
      <div className="mt-8 space-y-5">
        {verses.map((verse, index) => (
          <article key={verse.reference} className="glass-card grid grid-cols-[2.4rem_1fr] gap-3 rounded-sm p-5">
            <motion.span
              animate={{ rotate: [-6, 6, -6], y: [0, -3, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.6 }}
            >
              <Leaf className="size-6 text-gold/70" strokeWidth={1} aria-hidden="true" />
            </motion.span>
            <div className="border-l border-gold/30 pl-4">
              <motion.p
                className="font-elegant text-xl italic leading-8 text-cream"
                animate={{ opacity: [0.35, 1, 1, 0.35] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.75, 1],
                  delay: index * 1.2,
                }}
              >
                "{verse.text}"
              </motion.p>
              <p className="mt-3 text-[0.6rem] uppercase tracking-[0.34em] text-gold">{verse.reference}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}