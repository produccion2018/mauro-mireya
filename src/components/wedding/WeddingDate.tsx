import { CalendarDays } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { Countdown } from "./Countdown";
import { FineDivider } from "./ornaments";

function displayDate(date: string) {
  if (!date) return "Fecha por confirmar";
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsed);
}

export function WeddingDate() {
  return (
    <section className="section-rule py-12 text-center" aria-labelledby="fecha-title">
      <CalendarDays className="mx-auto size-7 text-gold" strokeWidth={1} aria-hidden="true" />
      <p className="section-kicker mt-4">Fecha</p>
      <h2 id="fecha-title" className="mt-3 font-display text-2xl capitalize text-cream">
        {displayDate(weddingConfig.weddingDate)}
      </h2>
      {weddingConfig.weddingTime && <p className="mt-2 text-sm text-cream/70">{weddingConfig.weddingTime}</p>}
      <FineDivider />
      <p className="text-[0.58rem] uppercase tracking-[0.28em] text-cream/55">Ceremonia y recepción en la misma fecha</p>
      <Countdown date={weddingConfig.weddingDate} />
    </section>
  );
}
