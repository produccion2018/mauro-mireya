import { createFileRoute } from "@tanstack/react-router";
import { WeddingInvitation } from "@/components/wedding/WeddingInvitation";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mauro & Mireya — Nuestra boda" },
      { name: "description", content: "Invitación a la boda de Mauro Pinto y Mireya Becerra." },
      { property: "og:title", content: "Mauro & Mireya — Nuestra boda" },
      { property: "og:description", content: "Invitación a la boda de Mauro Pinto y Mireya Becerra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <WeddingInvitation />;
}