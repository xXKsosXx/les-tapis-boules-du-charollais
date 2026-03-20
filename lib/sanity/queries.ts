import { client } from "./client";
import type { Tapis, PageContent, Article } from "@/lib/types";

// ─── TAPIS ────────────────────────────────────────

// Récupérer tous les tapis d'une collection
export async function getTapisByCollection(
  collection: string
): Promise<Tapis[]> {
  return client.fetch(
    `*[_type == "tapis" && collection == $collection] | order(_createdAt desc) {
      _id, name, slug, collection, diametre, prix, photos, description, statut, reservedAt
    }`,
    { collection }
  );
}

// Récupérer tous les tapis disponibles (homepage)
export async function getAllTapis(): Promise<Tapis[]> {
  return client.fetch(
    `*[_type == "tapis"] | order(_createdAt desc) {
      _id, name, slug, collection, diametre, prix, photos, description, statut, reservedAt
    }`
  );
}

// Récupérer un tapis par slug
export async function getTapisBySlug(slug: string): Promise<Tapis | null> {
  return client.fetch(
    `*[_type == "tapis" && slug.current == $slug][0] {
      _id, name, slug, collection, diametre, prix, photos, description, statut, reservedAt
    }`,
    { slug }
  );
}

// Récupérer les tapis "vous aimerez aussi" (même collection, pas le même)
export async function getRelatedTapis(
  currentId: string,
  collection: string
): Promise<Tapis[]> {
  return client.fetch(
    `*[_type == "tapis" && collection == $collection && _id != $currentId && statut != "vendu"][0...4] {
      _id, name, slug, collection, diametre, prix, photos, description, statut, reservedAt
    }`,
    { currentId, collection }
  );
}

// Récupérer le contenu de la homepage
export async function getPageContent(): Promise<PageContent | null> {
  return client.fetch(`*[_type == "pageContent"][0]`);
}

// Récupérer tous les slugs (pour generateStaticParams)
export async function getAllTapisSlugs(): Promise<{ slug: string }[]> {
  const result = await client.fetch(
    `*[_type == "tapis"]{ "slug": slug.current }`
  );
  return result;
}

// ─── ARTICLES / BLOG ──────────────────────────────

// Récupérer tous les articles publiés
export async function getPublishedArticles(): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article" && publie == true] | order(datePublication desc) {
      _id, titre, slug, datePublication, imageHero, extrait, categoriesSEO, publie
    }`
  );
}

// Récupérer les N derniers articles publiés (pour homepage)
export async function getLatestArticles(limit: number = 2): Promise<Article[]> {
  return client.fetch(
    `*[_type == "article" && publie == true] | order(datePublication desc)[0...$limit] {
      _id, titre, slug, datePublication, imageHero, extrait, categoriesSEO, publie
    }`,
    { limit }
  );
}

// Récupérer un article par slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug && publie == true][0] {
      _id, titre, slug, datePublication, imageHero, extrait, contenu,
      categoriesSEO, metaTitle, metaDescription, publie
    }`,
    { slug }
  );
}

// Récupérer tous les slugs d'articles (pour generateStaticParams)
export async function getAllArticleSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    `*[_type == "article" && publie == true]{ "slug": slug.current }`
  );
}
