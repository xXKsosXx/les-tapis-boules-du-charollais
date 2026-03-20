import { defineType, defineField } from "sanity";

export default defineType({
  name: "article",
  title: "Article de blog",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "titre", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "datePublication",
      title: "Date de publication",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "imageHero",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
          description: "Décrivez l'image pour l'accessibilité et le SEO.",
        }),
      ],
    }),
    defineField({
      name: "extrait",
      title: "Extrait",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
      description:
        "Résumé court (max 200 caractères). Utilisé comme meta description SEO.",
    }),
    defineField({
      name: "contenu",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Titre H2", value: "h2" },
            { title: "Titre H3", value: "h3" },
            { title: "Citation", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Gras", value: "strong" },
              { title: "Italique", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Lien",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texte alternatif",
            },
            {
              name: "caption",
              type: "string",
              title: "Légende",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "categoriesSEO",
      title: "Tags SEO",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Mots-clés pour le référencement.",
    }),
    defineField({
      name: "metaTitle",
      title: "Meta Title (optionnel)",
      type: "string",
      description:
        "Si vide, le titre de l'article sera utilisé comme meta title.",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description (optionnel)",
      type: "string",
      description:
        "Si vide, l'extrait sera utilisé comme meta description.",
    }),
    defineField({
      name: "publie",
      title: "Publié",
      type: "boolean",
      initialValue: false,
      description:
        "Cochez pour publier l'article sur le site. Les brouillons ne sont pas visibles.",
    }),
  ],
  preview: {
    select: {
      title: "titre",
      subtitle: "datePublication",
      media: "imageHero",
      publie: "publie",
    },
    prepare({ title, subtitle, media, publie }) {
      return {
        title: `${publie ? "✅" : "📝"} ${title}`,
        subtitle: publie
          ? `Publié — ${subtitle || "sans date"}`
          : `Brouillon — ${subtitle || "sans date"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date (récent)",
      name: "dateDesc",
      by: [{ field: "datePublication", direction: "desc" }],
    },
  ],
});
