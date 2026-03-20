"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import ReservationCountdown from "./ReservationCountdown";
import { formatPrice, getTimeRemaining, getExpiresAt } from "@/lib/utils";
import type { Tapis } from "@/lib/types";

interface ProductCardProps {
  tapis: Tapis;
}

export default function ProductCard({ tapis }: ProductCardProps) {
  const countdown =
    tapis.statut === "réservé" && tapis.reservedAt
      ? getTimeRemaining(getExpiresAt(tapis.reservedAt)).text
      : undefined;

  const isAvailable = tapis.statut === "disponible";

  return (
    <Link
      href={`/tapis/${tapis.slug.current}`}
      className="group block transition-transform duration-300 ease-out hover:scale-[1.04]"
      style={{
        filter: 'drop-shadow(0 2px 8px rgba(61, 32, 16, 0.06))',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'drop-shadow(0 8px 32px rgba(61, 32, 16, 0.12))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = 'drop-shadow(0 2px 8px rgba(61, 32, 16, 0.06))';
      }}
    >
      <div className="relative">
        {/* Fond circulaire avec relief */}
        <div
          className="mx-auto rounded-full p-2"
          style={{
            width: 280,
            height: 280,
            background: '#D9CCBB',
          }}
        >
          {/* Photo ronde */}
          <div className="w-full h-full rounded-full overflow-hidden">
            {tapis.photos && tapis.photos.length > 0 ? (
              <Image
                src={`/hero-tapis.jpg`}
                alt={tapis.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <Image
                src="/hero-tapis.jpg"
                alt={tapis.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </div>

        {/* Badge statut */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <Badge statut={tapis.statut} countdown={countdown} />
        </div>
      </div>

      {/* Infos */}
      <div className="mt-4 text-center">
        <h3 className="font-display text-marron text-base font-medium group-hover:text-terre transition-colors">
          {tapis.name}
        </h3>
        <p className="text-sm text-text-muted mt-1">
          Ø {tapis.diametre} cm
        </p>
        <p className="text-lg font-display text-terre font-semibold mt-1">
          {formatPrice(tapis.prix)}
        </p>
        {tapis.statut === "réservé" && tapis.reservedAt && (
          <div className="mt-1 text-xs text-orange">
            Expire dans <ReservationCountdown reservedAt={tapis.reservedAt} />
          </div>
        )}
      </div>
    </Link>
  );
}
