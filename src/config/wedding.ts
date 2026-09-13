export const weddingConfig = {
  groomName: "Mauro",
  brideName: "Mireya",
  weddingDate: "2026-12-26",
  weddingTime: "",
  ceremonyLocation: "",
  receptionLocation: "",
  address: "",
  googleMapsUrl: "",
  whatsappNumber: "",
  dressCode: "Formal elegante",
  weddingMessage: "Queremos compartir este día tan especial con vos.",

  musicFile: "/music/coro_desde_1m20s.mp3",
  songTitle: "",
  songArtist: "",

  // TODO: reemplazar estos textos de ejemplo.
  ourStory: [
    { year: "20XX", title: "Cómo nos conocimos", text: "Texto de ejemplo a reemplazar." },
    { year: "20XX", title: "La propuesta", text: "Texto de ejemplo a reemplazar." },
  ],

  images: {
    // TODO: reemplazar por foto real en /public/images/mauro.jpg.
    mauro: "/images/mauro.jpg",
    // TODO: reemplazar por foto real en /public/images/mireya.jpg.
    mireya: "/images/mireya.jpg",
    // TODO: reemplazar por foto real en /public/images/couple-01.jpg.
    couple01: "/images/couple-01.jpg",
    // TODO: reemplazar por foto real en /public/images/couple-02.jpg.
    couple02: "/images/couple-02.jpg",
    // TODO: reemplazar por foto real en /public/images/hero-bg.jpg.
    hero: "/images/hero-bg.jpg",
  },
} as const;