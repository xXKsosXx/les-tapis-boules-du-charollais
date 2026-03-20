import type { StatutProduit } from "@/lib/types";

interface BadgeProps {
  statut: StatutProduit;
  countdown?: string;
  size?: "sm" | "md";
}

export default function Badge({ statut, countdown, size = "sm" }: BadgeProps) {
  const baseClasses =
    size === "sm"
      ? "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full"
      : "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full";

  if (statut === "disponible") {
    return (
      <span className={`${baseClasses} bg-green-50 text-green-700 border border-green-200`}>
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        Disponible
      </span>
    );
  }

  if (statut === "réservé") {
    return (
      <span className={`${baseClasses} bg-orange/10 text-orange border border-orange/20`}>
        <svg
          width={size === "sm" ? 12 : 14}
          height={size === "sm" ? 12 : 14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        Réservé{countdown ? ` — ${countdown}` : " 48h"}
      </span>
    );
  }

  // vendu
  return (
    <span className={`${baseClasses} bg-marron/10 text-marron border border-marron/20`}>
      Vendu
    </span>
  );
}
