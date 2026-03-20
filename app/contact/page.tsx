import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Madeleine Benifei pour toute question sur les tapis en laine feutrée. Rigny-sur-Arroux, Bourgogne.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <p className="text-sm font-medium text-laine tracking-wide uppercase mb-3">
          Contact
        </p>
        <h1 className="font-display text-marron text-3xl sm:text-4xl font-bold">
          Une question ?
        </h1>
        <p className="text-text-muted mt-3 leading-relaxed">
          N&apos;hésitez pas à me contacter pour toute question sur mes tapis,
          une commande en cours, ou une demande sur mesure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div className="bg-white rounded-2xl border border-beige-dark p-6">
          <form
            action={`mailto:madeleinebenifei@gmail.com`}
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-marron mb-1"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-beige-dark bg-beige text-marron text-sm placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-terre/20 focus:border-terre"
                placeholder="Marie Dupont"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-marron mb-1"
              >
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-beige-dark bg-beige text-marron text-sm placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-terre/20 focus:border-terre"
                placeholder="marie@exemple.fr"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-marron mb-1"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-beige-dark bg-beige text-marron text-sm placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-terre/20 focus:border-terre resize-none"
                placeholder="Bonjour Madeleine..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors text-sm"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="space-y-6">
          <div className="bg-beige-mid rounded-2xl border border-beige-dark p-6">
            <h2 className="font-display text-marron font-semibold mb-4">
              Coordonnées
            </h2>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <span className="block text-xs text-laine font-medium mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:madeleinebenifei@gmail.com"
                  className="text-terre hover:text-terre-light"
                >
                  madeleinebenifei@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-xs text-laine font-medium mb-0.5">
                  Téléphone
                </span>
                <a
                  href="tel:+33623016722"
                  className="text-terre hover:text-terre-light"
                >
                  06 23 01 67 22
                </a>
              </li>
              <li>
                <span className="block text-xs text-laine font-medium mb-0.5">
                  Adresse
                </span>
                Rigny-sur-Arroux, 71160
                <br />
                Bourgogne, France
              </li>
            </ul>
          </div>

          <div className="bg-beige-mid rounded-2xl border border-beige-dark p-6">
            <h2 className="font-display text-marron font-semibold mb-3">
              Délai de réponse
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Je réponds généralement sous 24 à 48 heures. Pour les
              commandes urgentes, n&apos;hésitez pas à m&apos;appeler
              directement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
