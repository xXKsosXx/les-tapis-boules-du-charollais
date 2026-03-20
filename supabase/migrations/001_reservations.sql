-- Migration : Table des réservations 48h
-- À exécuter dans le SQL Editor de Supabase

CREATE TABLE IF NOT EXISTS reservations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id text NOT NULL,
  session_id text NOT NULL,
  reserved_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'expired')),
  expires_at timestamptz GENERATED ALWAYS AS (reserved_at + interval '48 hours') STORED
);

-- Index pour les requêtes fréquentes
CREATE INDEX idx_reservations_product_id ON reservations(product_id);
CREATE INDEX idx_reservations_status ON reservations(status);
CREATE INDEX idx_reservations_expires_at ON reservations(expires_at) WHERE status = 'pending';

-- RLS (Row Level Security)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Politique : lecture publique (pour afficher le statut)
CREATE POLICY "Lecture publique des réservations"
  ON reservations FOR SELECT
  USING (true);

-- Politique : insertion publique (via anon key)
CREATE POLICY "Création de réservation"
  ON reservations FOR INSERT
  WITH CHECK (true);

-- Politique : modification via service role uniquement
-- (les updates sont faits côté serveur via SUPABASE_SERVICE_ROLE_KEY)
