"use client";

export default function BandeauOrigines() {
  const text =
    "Cardée · Feutrée · Assemblée à la main · Rigny-sur-Arroux · Bourgogne · 71160 · Laine 100% naturelle · Pièce unique · ";

  return (
    <section className="bg-marron py-4 sm:py-5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 20s linear infinite',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {/* Dupliquer 4 fois pour un défilement continu sans trou */}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-beige-mid text-sm sm:text-base font-display tracking-wide"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
