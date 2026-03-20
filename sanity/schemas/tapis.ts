import { defineType, defineField } from "sanity";

export default defineType({
  name: "tapis",
  title: "Tapis",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du tapis",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collection",
      title: "Collection",
      type: "string",
      options: {
        list: [
          { title: "Naturelle", value: "naturelle" },
          { title: "Teintée", value: "teintee" },
        ],
        layout: "radio",
      },
      initialValue: "naturelle",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "diametre",
      title: "Diamètre (cm)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "prix",
      title: "Prix (€)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "statut",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "Disponible", value: "disponible" },
          { title: "Réservé", value: "réservé" },
          { title: "Vendu", value: "vendu" },
        ],
      },
      initialValue: "disponible",
      readOnly: true,
      description: "Géré automatiquement par le site — ne pas modifier manuellement.",
    }),
    defineField({
      name: "reservedAt",
      title: "Réservé le",
      type: "datetime",
      readOnly: true,
      description: "Horodatage de la réservation — géré automatiquement.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "statut",
      media: "photos.0",
    },
    prepare({ title, subtitle, media }) {
      const emoji =
        subtitle === "disponible" ? "🟢" : subtitle === "réservé" ? "🟠" : "🔴";
      return {
        title: `${emoji} ${title}`,
        subtitle: `${subtitle}`,
        media,
      };
    },
  },
});
