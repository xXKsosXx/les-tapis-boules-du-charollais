import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Madeleine Benifei, artisane à Rigny-sur-Arroux (71160), fabrique des tapis ronds en boules de laine feutrée 100% Bourgogne.",
};

export default function AProposPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Photo */}
        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
          <Image
            src="/tapis-en-cours.jpg"
            alt="Madeleine dans son atelier à Rigny-sur-Arroux"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Texte */}
        <div>
          <p className="text-sm font-medium text-laine tracking-wide uppercase mb-3">
            À propos
          </p>
          <h1 className="font-display text-marron text-3xl sm:text-4xl font-bold mb-6">
            Madeleine Benifei
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Je suis Madeleine, artisane à Rigny-sur-Arroux en Bourgogne.
              Je fabrique mes tapis entièrement à la main — du cardage de la laine
              jusqu&apos;à l&apos;assemblage final.
            </p>
            <p>
              Chaque boule est feutrée une par une. Chaque tapis est unique.
            </p>
            <p className="italic text-xs" style={{ color: '#7A6250' }}>
              Ce texte est modifiable directement depuis votre espace Sanity —
              n&apos;hésitez pas à le réécrire avec vos propres mots.
            </p>
          </div>

          {/* Infos pratiques */}
          <div className="mt-8 p-6 bg-beige-mid rounded-2xl border border-beige-dark">
            <h2 className="font-display text-marron font-semibold mb-4">
              L&apos;atelier
            </h2>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-terre">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Rigny-sur-Arroux, 71160 — Bourgogne
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-terre">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:madeleinebenifei@gmail.com" className="text-terre hover:text-terre-light">
                  madeleinebenifei@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0 text-terre">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+33623016722" className="text-terre hover:text-terre-light">
                  06 23 01 67 22
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
