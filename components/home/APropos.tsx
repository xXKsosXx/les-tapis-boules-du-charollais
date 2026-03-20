import Image from "next/image";
import Link from "next/link";

export default function APropos() {
  return (
    <section className="bg-beige-mid py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="/tapis-en-cours.jpg"
              alt="Tapis en cours d'assemblage dans l'atelier de Madeleine"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texte */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium text-laine tracking-wide uppercase mb-3">
              L&apos;artisane
            </p>
            <h2 className="font-display text-marron text-2xl sm:text-3xl font-bold mb-6">
              Madeleine Benifei
            </h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                Je suis Madeleine, j&apos;habite à Rigny-sur-Arroux en
                Bourgogne. Je fabrique mes tapis entièrement à la main — du
                cardage de la laine à l&apos;assemblage final.
              </p>
              <p>
                Chaque boule est feutrée une par une. C&apos;est un travail
                long, minutieux, mais c&apos;est ce qui rend chaque pièce
                unique.
              </p>
              <p>
                Jusqu&apos;ici je vendais uniquement par bouche à oreille.
                Aujourd&apos;hui j&apos;ouvre ma première boutique en ligne.
              </p>
            </div>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-terre hover:text-terre-light transition-colors"
            >
              En savoir plus
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
