# Everlasting Union

================================================== CONTEXTO

Crear una invitación de boda digital (SPA) tipo "Luxury Wedding Experience", inspirada en invitaciones premium (estilo editorial, cinematográfico, minimalista pero cálido). Referencia de estilo: revistas de bodas de lujo, paletas verde bosque + dorado + crema, tipografía serif elegante combinada con una script/caligráfica para nombres.

================================================== REFERENCIA DE DISEÑO (LAYOUT EXACTO A SEGUIR)

Tomar como referencia visual la siguiente estructura tipo "e-vite" en formato tarjeta vertical (mobile-first), fondo verde bosque oscuro con detalles dorados y florales:

Encabezado: par de anillos entrelazados (ilustración dorada fina), centrados arriba.

Bloque "FECHA": fecha completa de la boda + "CEREMONIA Y RECEPCIÓN EN LA MISMA FECHA" + contador regresivo ("FALTAN XXX" días).

Monograma "M&M" en la parte superior central, con hojas doradas alrededor.

Foto de la pareja dentro de un marco circular dorado rodeado de hojas/flores (blanco y verde).

Debajo de la foto: nombres en mayúscula con tipografía elegante ("MAURO PINTO & MIREYA BECERRA"), subtítulo "NUESTRA BODA" y una frase corta tipo "Dos caminos, un mismo destino".

Bloque "UBICACIÓN": nombre del salón/lugar, dirección, y botón "VER MAPA".

Bloque "GRACIAS": mensaje corto de agradecimiento por acompañarlos en un día tan especial.

Columna lateral derecha con bloques más chicos:

"NUESTRA HISTORIA" (ícono de corazón/reloj de arena)

"CÓDIGO DE VESTIMENTA" (formal elegante)

"GALERÍA" (mini grid de fotos de la pareja)

"NUESTRA CANCIÓN" (reproductor con play/pause y barra de progreso)

"CONFIRMA TU ASISTENCIA" (botón "ENVIAR MENSAJE" o similar, tipo WhatsApp/RSVP)

El diseño final debe respetar esta jerarquía y este tono editorial de "tarjeta de lujo", no una landing con secciones apiladas genéricas. Los íconos deben ser finos, dorados, minimalistas (line icons), no íconos de colores planos genéricos.

================================================== TECNOLOGÍA

Crear el proyecto utilizando exclusivamente:

React

Vite

TypeScript

Tailwind CSS

Framer Motion

NO utilizar Next.js.

La aplicación debe ser una SPA (Single Page Application).

Estructura recomendada:

src/ ├── components/ │ ├── WeddingIntro.tsx │ ├── Hero.tsx │ ├── Monogram.tsx │ ├── OurStory.tsx │ ├── WeddingDate.tsx │ ├── Countdown.tsx │ ├── Location.tsx │ ├── Gallery.tsx │ ├── DressCode.tsx │ ├── MusicPlayer.tsx │ ├── RSVP.tsx │ └── Footer.tsx │ ├── config/ │ └── wedding.ts │ ├── assets/ │ ├── images/ │ └── music/ │ ├── App.tsx ├── main.tsx └── index.css

================================================== CONFIGURACIÓN

Crear:

src/config/wedding.ts

con:

export const weddingConfig = { groomName: "Mauro Pinto", brideName: "Mireya Becerra",

weddingDate: "", weddingTime: "",

ceremonyLocation: "", receptionLocation: "", address: "",

googleMapsUrl: "",

whatsappNumber: "",

dressCode: "Formal elegante",

weddingMessage: "Queremos compartir este día tan especial con vos.",

// Reemplazar por el archivo de SU canción real (ver sección MÚSICA) musicFile: "/music/nuestra-cancion.mp3", songTitle: "", // ej: "Nombre de la canción" songArtist: "", // ej: "Nombre del artista"

// Textos editables de "Nuestra historia" (placeholder, reemplazar luego) ourStory: [ { year: "20XX", title: "Cómo nos conocimos", text: "Texto de ejemplo a reemplazar." }, { year: "20XX", title: "La propuesta", text: "Texto de ejemplo a reemplazar." }, ], };

Todos los datos de la boda deben salir de este archivo.

NO colocar información inventada en el texto final (los valores vacíos o de ejemplo quedan así hasta que yo los complete).

================================================== MÚSICA ("NUESTRA CANCIÓN")

Utilizar el archivo:

/public/music/nuestra-cancion.mp3

// TODO: reemplazar este archivo por la canción real elegida por la // pareja (mismo nombre de archivo, o actualizar musicFile en // wedding.ts si el nombre cambia).

Mostrar un bloque "NUESTRA CANCIÓN" (no solo un botón flotante genérico) con:

Nombre de la canción y artista (desde songTitle / songArtist)

Botón PLAY / PAUSE

Barra de progreso (aunque sea simple, con el tiempo transcurrido)

Ícono de nota musical/vinilo, estilo fino y dorado

La música NO debe comenzar automáticamente al cargar la página.

Debe comenzar únicamente después de que el usuario presione:

"ABRIR INVITACIÓN"

Además del reproductor en el bloque "NUESTRA CANCIÓN", agregar un botón flotante discreto (esquina inferior) para PLAY / PAUSE / MUTE, visible en toda la experiencia una vez abierta la invitación.

================================================== FOTOGRAFÍAS (PLACEHOLDERS DE EJEMPLO)

Mientras no tenga las fotos reales, usar imágenes de placeholder con proporciones ya definidas, para que al reemplazarlas después no se rompa el diseño. Usar servicios de placeholder tipo:

https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mauro https://placehold.co/800x1000/2C3B2D/D4AF37?text=Mireya https://placehold.co/1200x800/2C3B2D/D4AF37?text=Couple+01 https://placehold.co/1200x800/2C3B2D/D4AF37?text=Couple+02 https://placehold.co/1200x1500/2C3B2D/D4AF37?text=Hero+Background

Rutas finales (cuando yo suba las fotos reales) en:

/public/images/ ├── mauro.jpg ├── mireya.jpg ├── couple-01.jpg ├── couple-02.jpg ├── hero-bg.jpg └── gallery/ (couple-03.jpg, couple-04.jpg, ...)

El código debe referenciar estas rutas finales, pero mientras tanto usar los placeholders de arriba como fallback visual, dejando un comentario claro tipo:

// TODO: reemplazar por foto real en /public/images/mauro.jpg

NO generar fotografías nuevas con IA. NO modificar rostros. NO usar bancos de imágenes con personas reales de stock (para evitar que quede una cara que no sea la nuestra); si hace falta una imagen decorativa de fondo (flores, texturas, ramas doradas), usar solo elementos gráficos/abstractos, nunca rostros.

================================================== DEPLOY

El proyecto debe quedar preparado para:

npm install npm run dev npm run build npm run preview

Debe funcionar correctamente con:

Vercel Render

No utilizar funcionalidades específicas de Next.js.

Configurar correctamente Vite para producción.

================================================== RENDIMIENTO

Priorizar velocidad de carga.

Optimizar las fotografías (formatos modernos, tamaños responsivos).

Utilizar lazy loading para imágenes de galería.

Evitar librerías innecesarias.

Las animaciones deben ser suaves pero no afectar el rendimiento (usar transform/opacity en Framer Motion, evitar animar propiedades costosas como width/height directamente).

================================================== DISEÑO

Mantener toda la dirección artística descrita anteriormente:

Luxury Wedding Verde bosque (#2C3B2D aprox.) Dorado (#D4AF37 aprox.) Crema (#F5F0E6 aprox.) Cinematográfico Romántico Elegante Premium

Tipografías sugeridas (placeholder, cambiar si se desea):

Serif elegante para textos (ej. Playfair Display / Cormorant)

Script/caligráfica para nombres y monograma (ej. Great Vibes / Parisienne)

La experiencia debe comenzar con:

MONOGRAMA M&M

↓

MAURO PINTO & MIREYA BECERRA

↓

"Nuestra boda"

↓

"ABRIR INVITACIÓN"

↓

Experiencia completa de la boda (Hero → Nuestra historia → Fecha/Countdown → Ubicación → Galería → Código de vestimenta → RSVP → Footer).

Micro-interacciones sugeridas:

Fade/scale suave al pasar de una sección a otra (scroll reveal)

El monograma inicial con un efecto de "sello" o brillo dorado sutil

Transición elegante (no abrupta) entre la intro y el contenido principal

================================================== IMPORTANTE

NO crear una landing corporativa.

NO crear una plantilla genérica.

NO usar navbar empresarial.

NO llenar la pantalla de tarjetas.

La página debe sentirse como una invitación de matrimonio de lujo.

Mobile-first.

La primera impresión debe ser espectacular.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/131b1ae6-e16e-441c-9e1e-58038f0ff07f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
