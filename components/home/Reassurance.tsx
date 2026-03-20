export default function Reassurance() {
  const items = [
    {
      num: "01",
      title: "Pièce unique",
      desc: "Chaque tapis est fabriqué à la main. Aucun n'est reproduit à l'identique.",
    },
    {
      num: "02",
      title: "Réservation 48h",
      desc: "Ajoutez au panier : votre tapis est réservé 48 heures, personne d'autre ne peut l'acheter.",
    },
    {
      num: "03",
      title: "Envoi soigné",
      desc: "Emballage protecteur, expédition depuis la Bourgogne avec suivi.",
    },
    {
      num: "04",
      title: "Retour 14 jours",
      desc: "Pas satisfait ? Retour accepté sous 14 jours, conformément à la loi.",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16"
      style={{ background: '#EDE4D6', borderTop: '2px solid #C4622D' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.num} className="text-center sm:text-left">
              <span
                className="text-xs font-medium"
                style={{ color: '#C4622D' }}
              >
                {item.num}
              </span>
              <h3
                className="font-display text-base font-semibold mt-1"
                style={{ color: '#3D2010' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: '#7A6250' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
