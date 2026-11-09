import { weddingConfig } from "@/config/wedding";
import { Countdown } from "./Countdown";
import { Flourish } from "./ornaments";
import { SectionReveal } from "./SectionReveal";

function dateParts(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (!date || Number.isNaN(parsed.getTime())) return null;
  const fmt = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("es-CO", options).format(parsed);
  return {
    weekday: fmt({ weekday: "long" }),
    day: fmt({ day: "numeric" }),
    month: fmt({ month: "long" }),
    year: fmt({ year: "numeric" }),
  };
}

export function WeddingDate() {
  const parts = dateParts(weddingConfig.weddingDate);

  return (
    <SectionReveal className="section-rule py-14 text-center" aria-labelledby="fecha-title">
      <p className="section-kicker">Reserva la fecha</p>
      <h2 id="fecha-title" className="sr-only">
        {parts ? `${parts.weekday} ${parts.day} de ${parts.month} de ${parts.year}` : "Fecha por confirmar"}
        {weddingConfig.weddingTime ? `, ${weddingConfig.weddingTime}` : ""}
      </h2>

      {parts ? (
        <div className="mx-auto mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6" aria-hidden="true">
          <div className="border-y border-gold/40 py-3">
            <span className="block text-[0.62rem] uppercase tracking-[0.34em] text-cream/75">{parts.weekday}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[0.62rem] uppercase tracking-[0.4em] text-gold">{parts.month}</span>
            <span className="gold-foil font-display text-7xl leading-none sm:text-8xl">{parts.day}</span>
            <span className="text-[0.62rem] tracking-[0.4em] text-gold">{parts.year}</span>
          </div>
          <div className="border-y border-gold/40 py-3">
            <span className="block text-[0.62rem] uppercase tracking-[0.34em] text-cream/75">
              {weddingConfig.weddingTime || "Hora por confirmar"}
            </span>
          </div>
        </div>
      ) : (
        <p className="mt-6 font-display text-2xl text-cream">Fecha por confirmar</p>
      )}

      <Flourish className="mt-8" />
      <p className="mt-3 font-elegant text-lg italic text-cream/75">
        Una noche buena para unir nuestras vidas
      </p>
      <Countdown date={weddingConfig.weddingDateTime || weddingConfig.weddingDate} />
    </SectionReveal>
  );
}
