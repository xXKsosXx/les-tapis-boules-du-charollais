import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { mockArticles } from "@/lib/mock-articles";
// En production :
// import { getPublishedArticles } from "@/lib/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils, inspirations et coulisses de fabrication des tapis en laine feutrée artisanaux de Bourgogne.",
  openGraph: {
    title: "Blog — Les Tapis Boules du Charollais",
    description:
      "Conseils, inspirations et coulisses de fabrication des tapis en laine feutrée artisanaux de Bourgogne.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  // En production :
  // const articles = await getPublishedArticles();
  const articles = mockArticles.filter((a) => a.publie);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <p className="text-sm font-medium text-laine tracking-wide uppercase mb-3">
        Blog
      </p>
      <h1 className="font-display text-marron text-3xl sm:text-4xl font-bold mb-4">
        Depuis l&apos;atelier
      </h1>
      <p className="text-text-muted max-w-2xl mb-10 leading-relaxed">
        Conseils, inspirations et coulisses de fabrication des tapis en laine
        feutrée artisanaux de Bourgogne.
      </p>

      {articles.length === 0 ? (
        <p className="text-text-muted">Aucun article publié pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/blog/${article.slug.current}`}
              className="group block bg-beige-mid rounded-2xl overflow-hidden border border-beige-dark hover:border-laine transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/hero-tapis.jpg"
                  alt={article.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Contenu */}
              <div className="p-6">
                {article.categoriesSEO && article.categoriesSEO.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.categoriesSEO.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wider text-laine bg-beige px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="font-display text-marron text-lg font-semibold group-hover:text-terre transition-colors leading-snug">
                  {article.titre}
                </h2>
                <p className="text-sm text-text-muted mt-2 leading-relaxed line-clamp-2">
                  {article.extrait}
                </p>
                <p className="text-xs text-laine mt-3">
                  {formatDate(article.datePublication)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
