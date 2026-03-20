import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-6xl font-display text-beige-dark font-bold mb-4">
        404
      </p>
      <h1 className="font-display text-marron text-2xl sm:text-3xl font-bold">
        Page introuvable
      </h1>
      <p className="text-text-muted mt-3 max-w-md mx-auto">
        Cette page n&apos;existe pas ou a été déplacée. Peut-être cherchez-vous
        un tapis en particulier ?
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors text-sm"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/collection/naturelle"
          className="inline-flex items-center justify-center px-6 py-3 border border-beige-dark text-terre font-medium rounded-lg hover:bg-beige-mid transition-colors text-sm"
        >
          Voir la collection
        </Link>
      </div>
    </div>
  );
}
