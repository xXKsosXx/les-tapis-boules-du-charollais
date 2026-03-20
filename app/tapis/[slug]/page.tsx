import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductActions from "./ProductActions";
import ProductCard from "@/components/ProductCard";
import Badge from "@/components/Badge";
import { formatPrice, getTimeRemaining, getExpiresAt } from "@/lib/utils";
import { mockTapis } from "@/lib/mock-data";

// En production :
// import { getTapisBySlug, getRelatedTapis, getAllTapisSlugs } from "@/lib/sanity/queries";
// import { urlFor } from "@/lib/sanity/client";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tapis = mockTapis.find((t) => t.slug.current === slug);
  if (!tapis) return {};
  return {
    title: tapis.name,
    description: tapis.description || `Tapis rond en boules de laine feutrée, Ø${tapis.diametre}cm. ${formatPrice(tapis.prix)}`,
  };
}

export default async function TapisPage({ params }: Props) {
  const { slug } = await params;

  // En production :
  // const tapis = await getTapisBySlug(slug);
  const tapis = mockTapis.find((t) => t.slug.current === slug);

  if (!tapis) {
    notFound();
  }

  // En production :
  // const related = await getRelatedTapis(tapis._id, tapis.collection);
  const related = mockTapis.filter(
    (t) => t._id !== tapis._id && t.collection === tapis.collection && t.statut !== "vendu"
  ).slice(0, 3);

  const countdown =
    tapis.statut === "réservé" && tapis.reservedAt
      ? getTimeRemaining(getExpiresAt(tapis.reservedAt)).text
      : undefined;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Galerie photos */}
        <div>
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-beige-mid">
            <Image
              src="/hero-tapis.jpg"
              alt={tapis.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Miniatures */}
          <div className="flex gap-3 mt-4">
            {["/hero-tapis.jpg", "/boules-fleur.jpg", "/tapis-en-cours.jpg"].map(
              (src, i) => (
                <button
                  key={i}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 ${
                    i === 0 ? "border-terre" : "border-beige-dark"
                  } hover:border-terre transition-colors`}
                >
                  <Image
                    src={src}
                    alt={`${tapis.name} - vue ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Infos produit */}
        <div>
          <p className="text-sm text-laine font-medium mb-2">
            Collection {tapis.collection}
          </p>
          <h1 className="font-display text-marron text-2xl sm:text-3xl font-bold">
            {tapis.name}
          </h1>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-display text-terre font-bold">
              {formatPrice(tapis.prix)}
            </span>
            <Badge statut={tapis.statut} countdown={countdown} size="md" />
          </div>

          <div className="mt-4 text-sm text-text-muted">
            Diamètre : <span className="font-medium text-marron">{tapis.diametre} cm</span>
          </div>

          {tapis.description && (
            <p className="mt-6 text-sm text-text-muted leading-relaxed">
              {tapis.description}
            </p>
          )}

          <div className="mt-4 text-sm text-text-muted">
            Matière : Laine cardée feutrée 100% Bourgogne
          </div>

          {/* Actions (bouton réserver — client component) */}
          <div className="mt-8">
            <ProductActions tapis={tapis} />
          </div>

          {/* Info réservation 48h */}
          <div className="mt-6 p-4 bg-beige-mid rounded-xl border border-beige-dark">
            <div className="flex items-start gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-orange shrink-0 mt-0.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <p className="text-sm font-medium text-marron">
                  Réservation 48h
                </p>
                <p className="text-xs text-text-muted mt-1">
                  En ajoutant ce tapis au panier, il sera réservé 48 heures
                  rien que pour vous. Passé ce délai, il redevient disponible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vous aimerez aussi */}
      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-marron text-xl sm:text-2xl font-bold mb-8">
            Vous aimerez aussi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((t) => (
              <ProductCard key={t._id} tapis={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
