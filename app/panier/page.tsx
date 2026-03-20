"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getTimeRemaining } from "@/lib/utils";
import ReservationCountdown from "@/components/ReservationCountdown";
import { useState } from "react";

export default function PanierPage() {
  const { item, removeItem } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!item) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item._id,
          productName: item.name,
          price: item.prix,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Erreur lors de la redirection vers le paiement.");
    } finally {
      setLoading(false);
    }
  };

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="font-display text-marron text-2xl sm:text-3xl font-bold">
          Votre panier est vide
        </h1>
        <p className="text-text-muted mt-3">
          Parcourez la collection pour trouver votre tapis.
        </p>
        <Link
          href="/collection/naturelle"
          className="inline-flex items-center px-6 py-3 mt-6 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors text-sm"
        >
          Voir la collection
        </Link>
      </div>
    );
  }

  const remaining = getTimeRemaining(item.expiresAt);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-display text-marron text-2xl sm:text-3xl font-bold mb-8">
        Votre panier
      </h1>

      {/* Produit */}
      <div className="bg-white rounded-2xl border border-beige-dark p-4 sm:p-6">
        <div className="flex gap-4 sm:gap-6">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
            <Image
              src={item.photo}
              alt={item.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-marron font-semibold text-base sm:text-lg truncate">
              {item.name}
            </h2>
            <p className="text-sm text-text-muted mt-1">
              Ø {item.diametre} cm
            </p>
            <p className="text-lg font-display text-terre font-bold mt-2">
              {formatPrice(item.prix)}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 text-xs text-orange bg-orange/10 px-2 py-1 rounded-full">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Réservé — expire dans{" "}
                <ReservationCountdown reservedAt={item.reservedAt} />
              </span>
            </div>
          </div>
          <button
            onClick={removeItem}
            className="shrink-0 text-text-muted hover:text-red-500 transition-colors self-start"
            aria-label="Retirer du panier"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Info 48h */}
      <div className="mt-4 p-4 bg-beige-mid rounded-xl border border-beige-dark">
        <p className="text-xs text-text-muted">
          <strong className="text-marron">Réservation 48h :</strong> votre
          tapis est réservé pour vous pendant 48 heures. Passé ce délai sans
          achat, il redevient disponible pour les autres visiteurs.
        </p>
      </div>

      {/* Total + bouton payer */}
      <div className="mt-8 bg-white rounded-2xl border border-beige-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-text-muted">Total</span>
          <span className="text-xl font-display text-marron font-bold">
            {formatPrice(item.prix)}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={loading || remaining.expired}
          className="w-full py-3 px-6 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {loading
            ? "Redirection vers le paiement..."
            : remaining.expired
            ? "Réservation expirée"
            : "Payer par carte bancaire"}
        </button>
        <p className="text-xs text-text-muted text-center mt-3">
          Paiement sécurisé via Stripe
        </p>
      </div>
    </div>
  );
}
