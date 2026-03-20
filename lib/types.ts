// Types principaux du site

export type CollectionType = "naturelle" | "teintee";
export type StatutProduit = "disponible" | "réservé" | "vendu";
export type ReservationStatus = "pending" | "completed" | "expired";

export interface Tapis {
  _id: string;
  name: string;
  slug: { current: string };
  collection: CollectionType;
  diametre: number;
  prix: number;
  photos: SanityImage[];
  description: string;
  statut: StatutProduit;
  reservedAt: string | null;
}

export interface SanityImage {
  _key?: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  aboutText: string;
  savoirFaireText: string;
}

export interface Reservation {
  id: string;
  product_id: string;
  session_id: string;
  reserved_at: string;
  status: ReservationStatus;
  expires_at: string;
}

export interface Article {
  _id: string;
  titre: string;
  slug: { current: string };
  datePublication: string;
  imageHero?: SanityImage & { alt?: string };
  extrait: string;
  contenu: any[]; // Portable Text blocks
  categoriesSEO?: string[];
  metaTitle?: string;
  metaDescription?: string;
  publie: boolean;
}

export interface CartItem {
  _id: string;
  name: string;
  slug: string;
  prix: number;
  diametre: number;
  photo: string;
  reservedAt: string;
  expiresAt: string;
}
