import Hero from "@/components/home/Hero";
import BandeauOrigines from "@/components/home/BandeauOrigines";
import CollectionSection from "@/components/home/CollectionSection";
import CommentCommander from "@/components/home/CommentCommander";
import SavoirFaire from "@/components/home/SavoirFaire";
import APropos from "@/components/home/APropos";
import BlogPreview from "@/components/home/BlogPreview";
import Reassurance from "@/components/home/Reassurance";
import { mockTapis } from "@/lib/mock-data";
import { mockArticles } from "@/lib/mock-articles";

// En production, remplacer par :
// import { getAllTapis } from "@/lib/sanity/queries";
// import { getLatestArticles } from "@/lib/sanity/queries";

export const revalidate = 60; // ISR 60 secondes

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lestapisboules-du-charollais.fr";

// Schema.org LocalBusiness JSON-LD
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Les Tapis Boules du Charollais",
  description:
    "Tapis artisanaux en laine feutrée, faits main en Bourgogne",
  url: baseUrl,
  telephone: "+33623016722",
  email: "madeleinebenifei@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rigny-sur-Arroux",
    postalCode: "71160",
    addressRegion: "Bourgogne-Franche-Comté",
    addressCountry: "FR",
  },
  founder: {
    "@type": "Person",
    name: "Madeleine Benifei",
  },
  priceRange: "85€–250€",
  image: `${baseUrl}/hero-tapis.jpg`,
};

export default async function HomePage() {
  // En production :
  // const tapis = await getAllTapis();
  // const articles = await getLatestArticles(2);
  const tapis = mockTapis;
  const articles = mockArticles.filter((a) => a.publie).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Hero />
      <BandeauOrigines />
      <CollectionSection tapis={tapis} />
      <CommentCommander />
      <SavoirFaire />
      <APropos />
      <BlogPreview articles={articles} />
      <Reassurance />
    </>
  );
}
