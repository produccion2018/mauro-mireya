export function isGroupGuest(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  if (!normalized) return false;
  if (/(^|\s)(familia|esposos|sres\.?|señores|hnos\.?|hermanos)(\s|$)/.test(normalized)) return true;
  if (/ y | & /.test(normalized)) return true;
  return false;
}

export function guestPronoun(name: string): "usted" | "ustedes" {
  return isGroupGuest(name) ? "ustedes" : "usted";
}

export function shareMessage(name?: string): string {
  if (!name) return "Queremos compartir este día tan especial con usted.";
  return `Queremos compartir este día tan especial con ${guestPronoun(name)}.`;
}