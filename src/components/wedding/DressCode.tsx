import { weddingConfig } from "@/config/wedding";
import { InterlockedRings } from "./ornaments";
import { SectionReveal } from "./SectionReveal";

export function DressCode() {
  return (
    <SectionReveal className="section-rule py-11 text-center" aria-labelledby="vestimenta-title">
      <InterlockedRings />
      <h2 id="vestimenta-title" className="sr-only">Dos anillos</h2>
      <p className="mx-auto mt-5 max-w-xs font-display text-base italic leading-7 text-cream/75">
        "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios unió, no lo separe el hombre."
      </p>
      <p className="section-kicker mt-2">Mateo 19:6</p>
    </SectionReveal>
  );
}