import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { mockArticles } from "@/lib/mock-articles";
import PortableTextRenderer from "@/components/PortableTextRenderer";
// En production :
// import { getArticleBySlug, getAllArticleSlugs } from "@/lib/sanity/queries";

export const revalidate = 60;

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lestapisboules-du-charollais.fr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  // En production : const article = await getArticleBySlug(slug);
  const article = mockArticles.find(
    (a) => a.slug.current === slug && a.publie
  );
  if (!article) return { title: "Article introuvable" };

  const title = article.metaTitle || article.titre;
  const description = article.metaDescription || article.extrait;

  return {
    title,
    description,
    openGraph: {
      title: `${title} — Les Tapis Boules du Charollais`,
      description,
      type: "article",
      publishedTime: article.datePublication,
      authors: ["Madeleine Benifei"],
    },
  };
}

// En production :
// export async function generateStaticParams() {
//   const slugs = await getAllArticleSlugs();
//   return slugs.map((s) => ({ slug: s.slug }));
// }

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  // En production : const article = await getArticleBySlug(slug);
  const article = mockArticles.find(
    (a) => a.slug.current === slug && a.publie
  );

  if (!article) notFound();

  // Schema.org Article JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titre,
    description: article.extrait,
    datePublished: article.datePublication,
    author: {
      "@type": "Person",
      name: "Madeleine Benifei",
    },
    publisher: {
      "@type": "Organization",
      name: "Les Tapis Boules du Charollais",
      url: baseUrl,
    },
    mainEntityOfPage: `${baseUrl}/blog/${article.slug.current}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-text-muted mb-8">
          <Link href="/" className="hover:text-terre transition-colors">
            Accueil
          </Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-terre transition-colors">
            Blog
          </Link>
          <span>›</span>
          <span className="text-marron font-medium truncate max-w-[200px]">
            {article.titre}
          </span>
        </nav>

        {/* Image hero */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
          <Image
            src="/hero-tapis.jpg"
            alt={article.titre}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Tags */}
        {article.categoriesSEO && article.categoriesSEO.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categoriesSEO.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase tracking-wider text-laine bg-beige-mid px-2 py-0.5 rounded-full border border-beige-dark"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Titre + date */}
        <h1 className="font-display text-marron text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {article.titre}
        </h1>
        <p className="text-sm text-laine mt-3 mb-8">
          {formatDate(article.datePublication)} — par Madeleine Benifei
        </p>

        {/* Contenu Portable Text */}
        <div className="prose-tapis">
          <PortableTextRenderer content={article.contenu} />
        </div>

        {/* CTA collection */}
        <div className="mt-16 p-8 bg-beige-mid rounded-2xl border border-beige-dark text-center">
          <h2 className="font-display text-marron text-xl font-semibold mb-3">
            Découvrir la collection
          </h2>
          <p className="text-sm text-text-muted mb-6 max-w-md mx-auto">
            Chaque tapis est une pièce unique en laine feutrée, fabriquée
            entièrement à la main en Bourgogne.
          </p>
          <Link
            href="/collection/naturelle"
            className="inline-flex items-center px-6 py-3 bg-terre text-white font-medium rounded-lg hover:bg-terre-light transition-colors text-sm"
          >
            Voir les tapis disponibles
          </Link>
        </div>
      </article>
    </>
  );
}
