import { defineType, defineField } from "sanity";

export default defineType({
  name: "pageContent",
  title: "Contenu des pages",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Titre Hero",
      type: "string",
      initialValue: "Des tapis en laine,\nfaits de mille boules.",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Sous-titre Hero",
      type: "text",
      rows: 2,
      initialValue:
        "Chaque pièce est unique — jamais reproduite à l'identique.",
    }),
    defineField({
      name: "heroCTA",
      title: "Texte du bouton Hero",
      type: "string",
      initialValue: "Découvrir la collection",
    }),
    defineField({
      name: "aboutText",
      title: "Texte À propos (Madeleine)",
      type: "text",
      rows: 6,
      initialValue:
        "Je suis Madeleine, j'habite à Rigny-sur-Arroux en Bourgogne. Je fabrique mes tapis entièrement à la main — du cardage de la laine à l'assemblage final. Chaque boule est feutrée une par une. Jusqu'ici je vendais uniquement par bouche à oreille. Aujourd'hui j'ouvre ma première boutique en ligne.",
    }),
    defineField({
      name: "savoirFaireText",
      title: "Texte Savoir-faire",
      type: "text",
      rows: 4,
      initialValue:
        "Du cardage à l'assemblage, chaque étape est réalisée à la main dans mon atelier en Bourgogne.",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contenu des pages" };
    },
  },
});
