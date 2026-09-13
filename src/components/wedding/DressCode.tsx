import { Shirt } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

export function DressCode() {
  return (
    <SectionReveal className="section-rule py-11 text-center" aria-labelledby="vestimenta-title">
      <Shirt className="mx-auto size-7 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Código de vestimenta</p>
      <h2 id="vestimenta-title" className="mt-3 font-display text-2xl text-cream">{weddingConfig.dressCode}</h2>
    </SectionReveal>
  );
}
