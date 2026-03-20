"use client";

import { useState, useEffect } from "react";
import { getTimeRemaining } from "@/lib/utils";

interface ReservationCountdownProps {
  reservedAt: string;
  onExpired?: () => void;
}

export default function ReservationCountdown({
  reservedAt,
  onExpired,
}: ReservationCountdownProps) {
  const expiresAt = new Date(
    new Date(reservedAt).getTime() + 48 * 60 * 60 * 1000
  ).toISOString();

  const [remaining, setRemaining] = useState(() => getTimeRemaining(expiresAt));

  useEffect(() => {
    const timer = setInterval(() => {
      const r = getTimeRemaining(expiresAt);
      setRemaining(r);
      if (r.expired) {
        clearInterval(timer);
        onExpired?.();
      }
    }, 60_000); // update toutes les minutes

    return () => clearInterval(timer);
  }, [expiresAt, onExpired]);

  if (remaining.expired) {
    return null;
  }

  return (
    <span className="text-orange font-medium">
      {remaining.text}
    </span>
  );
}
