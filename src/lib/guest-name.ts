export function isGroupGuest(name: string): boolean {
  const normalized = name.trim().toLowerCase();
  if (!normalized) return false;
  if (/(^|\s)(familia|esposos|sres\.?|señores|hnos\.?|hermanos)(\s|$)/.test(normalized)) return true;
  if (/ y | & /.test(normalized)) return true;
  return false;
}

export function guestPreposition(name: string): "contigo" | "con ustedes" {
  return isGroupGuest(name) ? "con ustedes" : "contigo";
}

export function shareMessage(name?: string): string {
  if (!name) return "Queremos compartir este día tan especial contigo.";
  return `Queremos compartir este día tan especial ${guestPreposition(name)}.`;
}