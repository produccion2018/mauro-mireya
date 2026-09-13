import { Heart, Hourglass } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionReveal } from "./SectionReveal";

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
        {weddingConfig.ourStory.map((item) => (
          <article key={item.title} className="grid grid-cols-[3.4rem_1fr] gap-4">
            <span className="font-display text-sm text-gold">{item.year}</span>
            <div className="border-l border-gold/30 pl-4">
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream/60">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
