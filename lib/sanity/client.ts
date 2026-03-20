import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImage } from "@/lib/types";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};

// Client public (lecture)
export const client = createClient(sanityConfig);

// Client avec token (écriture — côté serveur uniquement)
export const writeClient = createClient({
  ...sanityConfig,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper pour générer les URLs d'images
const builder = createImageUrlBuilder(sanityConfig);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
