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
        <Heart className="size-5" strokeWidth={1} aria-hidden="true" />
        <Hourglass className="size-5" strokeWidth={1} aria-hidden="true" />
      </div>
      <p className="section-kicker mt-4 text-center">Nuestra historia</p>
      <h2 id="historia-title" className="sr-only">Nuestra historia</h2>
      <div className="mt-7 space-y-7">
        {verses.map((verse) => (
          <article key={verse.reference} className="grid grid-cols-[3.4rem_1fr] gap-4">
            <Leaf className="size-6 text-gold/70" strokeWidth={1} aria-hidden="true" />
            <div className="border-l border-gold/30 pl-4">
              <p className="font-display text-lg italic leading-7 text-cream">"{verse.text}"</p>
              <p className="section-kicker mt-3">{verse.reference}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}