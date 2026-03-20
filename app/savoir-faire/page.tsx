import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Savoir-faire",
  description:
    "Découvrez le processus de fabrication des tapis en boules de laine feutrée : cardage, feutrage, assemblage et finition. 100% fait main en Bourgogne.",
};

const etapes = [
  {
    num: "01",
    title: "Cardage de la laine",
    desc: "La laine brute est d'abord cardée pour séparer les fibres et les aligner. Cette préparation est essentielle pour obtenir une matière souple et homogène, prête à être travaillée.",
    image: "/tapis-en-cours.jpg",
  },
  {
    num: "02",
    title: "Feutrage des boules",
    desc: "Chaque boule est formée individuellement par feutrage à l'eau chaude et au savon. Les mains roulent la laine encore et encore jusqu'à obtenir une boule dense et régulière. Ce geste est répété des centaines de fois pour un seul tapis.",
    image: "/boules-fleur.jpg",
  },
  {
    num: "03",
    title: "Assemblage",
    desc: "Les boules feutrées sont assemblées une par une pour créer la forme ronde du tapis. La disposition est choisie au fur et à mesure — chaque pièce est donc unique dans sa composition et ses nuances.",
    image: "/hero-tapis.jpg",
  },
  {
    num: "04",
    title: "Finition",
    desc: "Le tapis terminé est soigneusement vérifié, ajusté si nécessaire, et préparé pour la vente. Chaque pièce reçoit une attention particulière avant d'être photographiée et mise en ligne.",
    image: "/tapis-en-cours.jpg",
  },
];

export default function SavoirFairePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* En-tête */}
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-laine tracking-wide uppercase mb-3">
          Savoir-faire
        </p>
        <h1 className="font-display text-marron text-3xl sm:text-4xl font-bold">
          Du cardage à l&apos;assemblage
        </h1>
        <p className="text-text-muted mt-4 leading-relaxed">
          Chaque tapis est entièrement fabriqué à la main dans mon atelier à
          Rigny-sur-Arroux, en Bourgogne. De la laine brute au tapis fini, voici
          les étapes de création.
        </p>
      </div>

      {/* Étapes */}
      <div className="space-y-20">
        {etapes.map((etape, i) => (
          <div
            key={etape.num}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-beige-mid border border-beige-dark text-xs font-bold text-terre">
                  {etape.num}
                </span>
                <h2 className="font-display text-marron text-xl sm:text-2xl font-bold">
                  {etape.title}
                </h2>
              </div>
              <p className="text-text-muted leading-relaxed">{etape.desc}</p>
            </div>
            <div
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={etape.image}
                alt={etape.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
