// Formater un prix en euros
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Calculer le temps restant avant expiration
export function getTimeRemaining(expiresAt: string): {
  hours: number;
  minutes: number;
  expired: boolean;
  text: string;
} {
  const now = new Date().getTime();
  const expiry = new Date(expiresAt).getTime();
  const diff = expiry - now;

  if (diff <= 0) {
    return { hours: 0, minutes: 0, expired: true, text: "Expiré" };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return {
    hours,
    minutes,
    expired: false,
    text: `${hours}h ${minutes.toString().padStart(2, "0")}min`,
  };
}

// Calculer la date d'expiration (48h après réservation)
export function getExpiresAt(reservedAt: string): string {
  const date = new Date(reservedAt);
  date.setHours(date.getHours() + 48);
  return date.toISOString();
}
