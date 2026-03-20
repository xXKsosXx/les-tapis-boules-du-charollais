import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commande confirmée",
};

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CommandeConfirmationPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* Icône succès */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h1 className="font-display text-marron text-2xl sm:text-3xl font-bold">
        Merci pour votre commande !
      </h1>

      <p className="text-text-muted mt-4 leading-relaxed max-w-md mx-auto">
        Votre tapis est en cours de préparation. Madeleine le prépare avec soin
        avant de vous l&apos;expédier depuis son atelier en Bourgogne.
      </p>

      <div className="mt-6 p-4 bg-beige-mid rounded-xl border border-beige-dark inline-block">
        <p className="text-sm text-text-muted">
          Numéro de commande :{" "}
          <span className="font-medium text-marron">{id}</span>
        </p>
      </div>

      <p className="text-sm text-text-muted mt-6">
        Un email de confirmation a été envoyé à votre adresse. Pour toute
        question, contactez Madeleine à{" "}
        <a
          href="mailto:madeleinebenifei@gmail.com"
          className="text-terre hover:text-terre-light underline"
        >
          madeleinebenifei@gmail.com
        </a>
      </p>

      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 mt-8 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors text-sm"
      >
        Retour à la boutique
      </Link>
    </div>
  );
}
