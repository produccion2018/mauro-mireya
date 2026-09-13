# Invitación digital de Mauro y Mireya

## Objetivo
Crear una invitación de boda SPA, mobile-first, con estética editorial cinematográfica en verde bosque, dorado y crema, respetando la jerarquía exacta solicitada y sin inventar datos.

## Experiencia
- Pantalla de apertura con monograma M&M, nombres, “Nuestra boda” y botón “Abrir invitación”.
- Transición suave hacia una tarjeta vertical premium con composición principal y columna editorial lateral en pantallas amplias.
- Foto principal circular con marco botánico dorado y placeholders abstractos hasta recibir las fotos reales.
- Fecha y cuenta regresiva, historia, ubicación, galería, código de vestimenta, agradecimiento y confirmación.
- Reproductor de “Nuestra canción” con play/pausa, progreso, tiempo y control flotante play/pausa/silencio después de abrir.
- Animaciones discretas de entrada y revelado, respetando reducción de movimiento.

## Contenido editable
- Centralizar todos los nombres, textos, fecha, hora, lugares, dirección, mapa, WhatsApp, canción e historia en `src/config/wedding.ts`.
- Mantener vacíos y textos de ejemplo exactamente como se solicitaron, mostrando estados editoriales neutros cuando falten datos.
- Referenciar las rutas finales `/images/...` y `/music/nuestra-cancion.mp3`, con fallback visual automático si aún no existen.

## Implementación técnica
- Mantener la base React + TypeScript + Vite + Tailwind y usar Framer Motion para transiciones.
- Construir componentes enfocados para intro, portada, monograma, historia, fecha, contador, ubicación, galería, vestimenta, música, RSVP y cierre.
- Definir toda la paleta, tipografías, sombras y motivos ornamentales como tokens globales; cargar tipografías desde el documento.
- Añadir metadatos propios de la invitación y accesibilidad en botones, audio e imágenes.

## Validación
- Verificar carga y composición en móvil y escritorio.
- Comprobar apertura, cuenta regresiva con fecha vacía, fallbacks de imágenes, mapa/WhatsApp deshabilitados cuando faltan datos y controles de audio sin reproducción automática.
- Confirmar que la página compile sin errores y que no haya solapamientos ni desplazamiento horizontal.
