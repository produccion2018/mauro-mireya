import { Heart } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { BotanicalMark } from "./ornaments";

export function Footer({ guestName }: { guestName?: string }) {
  return (
    <footer className="section-rule px-5 py-14 text-center">
      <p className="section-kicker">Gracias{guestName ? `, ${guestName}` : ""}</p>
      <p className="mx-auto mt-5 max-w-md font-display text-xl italic leading-8 text-cream/80">
        {weddingConfig.weddingMessage}
      </p>
      {guestName && (
        <p className="mx-auto mt-4 max-w-md font-display text-base italic leading-7 text-gold">
          "El Señor bendiga a {guestName} y guarde su vida" — que Dios te acompañe siempre en tu camino.
        </p>
      )}
      <BotanicalMark />
      <p className="mt-8 font-script text-5xl text-gold">M&M</p>
      <Heart className="mx-auto mt-5 size-4 text-gold" strokeWidth={1} aria-hidden="true" />
    </footer>
  );
}