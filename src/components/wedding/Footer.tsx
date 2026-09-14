import { Heart } from "lucide-react";
import { shareMessage } from "@/lib/guest-name";
import { BotanicalMark } from "./ornaments";

export function Footer({ guestName }: { guestName?: string }) {
  return (
    <footer className="section-rule px-5 py-14 text-center overflow-hidden">
      <p className="section-kicker">
        Gracias{guestName ? `, ${guestName}` : ""}
      </p>

      <p className="mx-auto mt-5 max-w-md font-display text-xl italic leading-8 text-cream/80">
        {shareMessage(guestName)}
      </p>

      {guestName && (
        <p className="mx-auto mt-4 max-w-md font-display text-base italic leading-7 text-gold">
          Que la bendición de Dios acompañe siempre a {guestName}.
        </p>
      )}

      <BotanicalMark />

      {/* M&M */}
      <div className="relative mt-7 flex justify-center">
        <p className="flex items-center gap-1 font-display text-4xl font-bold leading-none tracking-tight">
          <span className="text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">M</span>
          <span className="text-gold [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">&amp;</span>
          <span className="text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">M</span>
        </p>
      </div>

      {/* ESCENA ANIMADA DE LOS NOVIOS */}
      <div
        className="relative mx-auto mt-5 w-full max-w-md"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 520 150"
          className="mx-auto h-auto w-full overflow-visible"
          role="presentation"
        >
          <defs>
            <filter id="footerGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Camino dorado */}
          <path
            d="M65 125 C170 113 350 113 455 125"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gold/40"
          />

          {/* Destellos */}
          <g className="text-gold" filter="url(#footerGlow)">
            <circle cx="115" cy="108" r="1.7">
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="390" cy="102" r="1.5">
              <animate
                attributeName="opacity"
                values="0.1;1;0.1"
                dur="2.8s"
                begin=".7s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="260" cy="88" r="1.8">
              <animate
                attributeName="opacity"
                values="0.1;1;0.1"
                dur="2.5s"
                begin="1.2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* ========================= */}
          {/* NOVIA */}
          {/* ========================= */}
          <g
            className="text-gold"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Movimiento completo de ella */}
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 28 -1; 55 0; 28 -1; 0 0"
                dur="8s"
                repeatCount="indefinite"
              />

              {/* Cabeza */}
              <circle cx="155" cy="48" r="9" />

              {/* Cabello */}
              <path d="M146 47 Q155 34 165 47" />

              {/* Cuerpo / vestido */}
              <path d="M155 58 L155 73" />
              <path d="M155 68 L138 112 Q155 119 172 112 L155 68" />

              {/* Brazo */}
              <path d="M154 65 Q166 72 176 80" />

              {/* Pierna izquierda */}
              <path d="M151 111 L145 128">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 151 111; 10 151 111; 0 151 111; -10 151 111; 0 151 111"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Pierna derecha */}
              <path d="M159 111 L166 128">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 159 111; -10 159 111; 0 159 111; 10 159 111; 0 159 111"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Velo */}
              <path
                d="M146 43 Q132 55 128 76"
                opacity=".7"
              />
            </g>
          </g>

          {/* ========================= */}
          {/* NOVIO */}
          {/* ========================= */}
          <g
            className="text-gold"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g>
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0;-28 -1;-55 0;-28 -1;0 0"
                dur="8s"
                repeatCount="indefinite"
              />

              {/* Cabeza */}
              <circle cx="365" cy="48" r="9" />

              {/* Cabello */}
              <path d="M356 44 Q365 36 374 44" />

              {/* Cuerpo / traje */}
              <path d="M365 58 L365 91" />
              <path d="M365 65 L348 84" />
              <path d="M365 65 L377 80" />

              {/* Pierna izquierda */}
              <path d="M360 91 L353 128">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 360 91; 10 360 91; 0 360 91; -10 360 91; 0 360 91"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Pierna derecha */}
              <path d="M370 91 L378 128">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 370 91; -10 370 91; 0 370 91; 10 370 91; 0 370 91"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Corbata */}
              <path d="M365 61 L361 69 L365 75 L369 69 Z" />
            </g>
          </g>

          {/* Manos acercándose */}
          <g className="text-cream" fill="currentColor">
            <circle cx="176" cy="80" r="2">
              <animate
                attributeName="cx"
                values="176;220;245;220;176"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="377" cy="80" r="2">
              <animate
                attributeName="cx"
                values="377;333;275;333;377"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Corazón cuando llegan al centro */}
          <g
            className="text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M260 58 C250 48 238 60 260 76 C282 60 270 48 260 58">
              <animate
                attributeName="opacity"
                values="0;0;1;1;0;0"
                keyTimes="0;.35;.43;.58;.67;1"
                dur="8s"
                repeatCount="indefinite"
              />

              <animateTransform
                attributeName="transform"
                type="scale"
                values=".7;.7;1;1;.7;.7"
                keyTimes="0;.35;.43;.58;.67;1"
                dur="8s"
                repeatCount="indefinite"
                additive="sum"
                origin="260 62"
              />
            </path>
          </g>

          {/* Pequeños destellos finales */}
          <g className="text-cream" fill="currentColor">
            <circle cx="250" cy="45" r="1.4">
              <animate
                attributeName="opacity"
                values="0;0;1;0;0"
                keyTimes="0;.4;.5;.65;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="272" cy="45" r="1.4">
              <animate
                attributeName="opacity"
                values="0;0;1;0;0"
                keyTimes="0;.42;.52;.67;1"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Corazón original — se mantiene */}
      <Heart
        className="mx-auto mt-3 size-4 text-gold"
        strokeWidth={1}
        aria-hidden="true"
      />
    </footer>
  );
}