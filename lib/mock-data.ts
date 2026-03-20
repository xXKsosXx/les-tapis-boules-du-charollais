import type { Tapis } from "@/lib/types";

// Données de démonstration pour le développement sans Sanity
export const mockTapis: Tapis[] = [
  {
    _id: "tapis-001",
    name: "Rond Ivoire Charollais",
    slug: { current: "rond-ivoire-charollais" },
    collection: "naturelle",
    diametre: 80,
    prix: 120,
    photos: [],
    description:
      "Tapis rond en boules de laine feutrée, tons blanc cassé et beige. Chaque boule est façonnée à la main. Pièce unique.",
    statut: "disponible",
    reservedAt: null,
  },
  {
    _id: "tapis-002",
    name: "Rond Bruyère",
    slug: { current: "rond-bruyere" },
    collection: "naturelle",
    diametre: 100,
    prix: 180,
    photos: [],
    description:
      "Grand tapis rond aux tons caramel et ivoire. Laine cardée feutrée 100% Bourgogne. Diamètre généreux pour un salon chaleureux.",
    statut: "disponible",
    reservedAt: null,
  },
  {
    _id: "tapis-003",
    name: "Rond Caramel des Prés",
    slug: { current: "rond-caramel-des-pres" },
    collection: "naturelle",
    diametre: 60,
    prix: 85,
    photos: [],
    description:
      "Petit tapis rond en boules grises et blanches. Idéal pour un coin lecture ou une entrée.",
    statut: "réservé",
    reservedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    _id: "tapis-004",
    name: "Rond Brun Profond",
    slug: { current: "rond-brun-profond" },
    collection: "naturelle",
    diametre: 120,
    prix: 250,
    photos: [],
    description:
      "Très grand tapis aux tons brun foncé et marron. Assemblage minutieux de plus de 500 boules feutrées.",
    statut: "vendu",
    reservedAt: null,
  },
  {
    _id: "tapis-005",
    name: "Rond Miel et Terre",
    slug: { current: "rond-miel-et-terre" },
    collection: "naturelle",
    diametre: 90,
    prix: 150,
    photos: [],
    description:
      "Tapis rond tons mixtes : ivoire, beige et gris laine. Harmonieux et doux sous les pieds.",
    statut: "disponible",
    reservedAt: null,
  },
  {
    _id: "tapis-006",
    name: "Rond Toison Grise",
    slug: { current: "rond-toison-grise" },
    collection: "naturelle",
    diametre: 70,
    prix: 95,
    photos: [],
    description:
      "Tapis compact en boules blanc cassé. Parfait comme tapis de chevet ou sous une table basse.",
    statut: "disponible",
    reservedAt: null,
  },
];
