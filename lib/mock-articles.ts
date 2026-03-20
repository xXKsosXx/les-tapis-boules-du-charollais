import type { Article } from "@/lib/types";

// Articles de démonstration — brouillons par défaut
// Ces articles sont des exemples à réécrire avec vos propres mots avant publication.
export const mockArticles: Article[] = [
  {
    _id: "article-001",
    titre: "Comment je fabrique chaque boule de laine — le feutrage à la main",
    slug: { current: "feutrage-a-la-main" },
    datePublication: "2025-03-10",
    extrait:
      "Du cardage à la boule finie, découvrez les gestes précis qui donnent naissance à chaque élément de mes tapis.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Le feutrage est un procédé ancestral qui consiste à agglomérer les fibres de laine par friction, eau chaude et savon. Chaque boule est façonnée individuellement — un geste répété des centaines de fois pour un seul tapis.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "La laine que j'utilise est cardée à la main, ce qui lui donne cette texture irrégulière et vivante qui fait le charme de chaque pièce. Un tapis de 80 cm de diamètre nécessite environ 200 boules feutrées.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["fabrication", "feutrage", "savoir-faire"],
    publie: true,
  },
  {
    _id: "article-002",
    titre: "Pourquoi choisir un tapis en laine naturelle non teintée ?",
    slug: { current: "laine-naturelle-non-teintee" },
    datePublication: "2025-03-05",
    extrait:
      "La laine brute charollaise garde ses tons naturels — ivoire, beige, brun. Une beauté sobre qui s'intègre partout.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "La laine naturelle non teintée conserve toutes ses qualités originelles : douceur, résistance, et cette palette de tons qui va du blanc cassé au brun foncé en passant par le caramel et le gris.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "En choisissant la laine brute, vous optez pour un matériau sans traitement chimique, respectueux de l'environnement et de votre intérieur. Les tons naturels s'harmonisent avec tous les styles de décoration.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["laine naturelle", "décoration intérieure", "matières"],
    publie: true,
  },
  {
    _id: "article-003",
    titre:
      "Tapis rond ou rectangulaire : lequel choisir pour votre intérieur ?",
    slug: { current: "tapis-rond-ou-rectangulaire" },
    datePublication: "2025-02-28",
    extrait:
      "Le tapis rond crée une dynamique différente dans une pièce. Quelques conseils pour bien le placer et l'associer.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Le tapis rond casse les lignes droites d'une pièce et crée un point focal naturel. Placé sous une table ronde, au pied d'un fauteuil ou au centre d'un salon, il apporte douceur et caractère.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Pour choisir le bon diamètre, mesurez l'espace disponible et prévoyez une marge de 30 à 50 cm autour du tapis. Un tapis de 80 cm convient à un coin lecture, tandis qu'un 120 cm s'impose dans un salon.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["décoration", "conseil", "tapis rond"],
    publie: true,
  },
  {
    _id: "article-004",
    titre: "Entretenir un tapis en laine feutrée — les bons gestes",
    slug: { current: "entretenir-tapis-laine-feutree" },
    datePublication: "2025-02-20",
    extrait:
      "La laine feutrée est robuste mais demande quelques précautions. Voici comment garder votre tapis beau des années.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "La laine feutrée a l'avantage d'être naturellement résistante aux taches et à la saleté. Pour l'entretien courant, aspirez délicatement votre tapis une fois par semaine en réglant l'aspirateur sur puissance douce.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "En cas de tache, tamponnez immédiatement avec un chiffon humide sans frotter. La laine feutrée ne doit pas être lavée en machine. Pour un nettoyage en profondeur, confiez votre tapis à un pressing spécialisé.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["entretien", "laine feutrée", "conseils"],
    publie: false,
  },
  {
    _id: "article-005",
    titre:
      "Le Charollais, terre d'élevage et de laine : une tradition textile",
    slug: { current: "charollais-tradition-textile" },
    datePublication: "2025-02-15",
    extrait:
      "La race charollaise est connue pour sa viande, mais aussi pour sa laine. Un ancrage local fort au cœur de mes créations.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Le Charollais est une terre d'élevage depuis des siècles. Si la race bovine charollaise est mondialement connue, la tradition ovine de la région est tout aussi riche. Les moutons locaux produisent une laine dense et résistante.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "En utilisant cette laine locale, je m'inscris dans une tradition textile qui remonte à plusieurs générations. Chaque tapis porte en lui un morceau de ce terroir bourguignon.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["Bourgogne", "Charollais", "laine locale", "terroir"],
    publie: false,
  },
  {
    _id: "article-006",
    titre: "Idées cadeaux : offrir un tapis artisanal fait main",
    slug: { current: "idees-cadeaux-tapis-artisanal" },
    datePublication: "2025-02-10",
    extrait:
      "Un tapis unique, fabriqué à la main en Bourgogne — le cadeau qui dure et qui raconte une histoire.",
    contenu: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Offrir un tapis artisanal, c'est offrir un objet qui a une histoire. Chaque pièce est unique, fabriquée à la main dans mon atelier de Rigny-sur-Arroux. C'est un cadeau qui se transmet et qui s'embellit avec le temps.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Pour les fêtes, un anniversaire ou une pendaison de crémaillère, un tapis en laine feutrée est une idée originale et chaleureuse. La réservation 48h vous permet de sécuriser votre choix sereinement.",
          },
        ],
        markDefs: [],
      },
    ],
    categoriesSEO: ["cadeau", "artisanat", "idée cadeau", "fait main"],
    publie: false,
  },
];
