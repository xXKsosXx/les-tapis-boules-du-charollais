"use client";

// Gestion du session_id via localStorage
// Permet d'identifier un visiteur pour la réservation 48h

const SESSION_KEY = "tapis_session_id";

function generateId(): string {
  return crypto.randomUUID();
}

export function getSessionId(): string {
  if (typeof window === "undefined") return "";

  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = generateId();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}
