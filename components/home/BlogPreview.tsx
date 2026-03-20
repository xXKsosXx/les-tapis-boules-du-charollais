import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/types";

interface BlogPreviewProps {
  articles: Article[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPreview({ articles }: BlogPreviewProps) {
  // Ne rien afficher si pas d'articles
  if (!articles || articles.length === 0) return null;

  return (
    <section className="bg-beige-mid py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-medium text-laine tracking-wide uppercase mb-2">
              Depuis le blog
            </p>
            <h2 className="font-display text-marron text-2xl sm:text-3xl font-bold">
              Coulisses &amp; conseils
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center text-sm text-terre font-medium hover:text-terre-light transition-colors"
          >
            Tous les articles
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.slice(0, 2).map((article) => (
            <Link
              key={article._id}
              href={`/blog/${article.slug.current}`}
              className="group block bg-beige rounded-2xl overflow-hidden border border-beige-dark hover:border-laine transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/hero-tapis.jpg"
                  alt={article.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                {article.categoriesSEO && article.categoriesSEO.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.categoriesSEO.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium uppercase tracking-wider text-laine bg-beige-mid px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="font-display text-marron text-lg font-semibold group-hover:text-terre transition-colors leading-snug">
                  {article.titre}
                </h3>
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

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-terre font-medium hover:text-terre-light transition-colors"
          >
            Tous les articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
