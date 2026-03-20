// Renderer simple pour Portable Text (Sanity)
// En production, utiliser @portabletext/react pour le rendu complet

interface Block {
  _type: string;
  _key: string;
  style?: string;
  children?: { _type: string; _key: string; text: string; marks?: string[] }[];
  markDefs?: { _type: string; _key: string; href?: string }[];
}

interface Props {
  content: Block[];
}

export default function PortableTextRenderer({ content }: Props) {
  if (!content || content.length === 0) return null;

  return (
    <div className="space-y-4">
      {content.map((block) => {
        if (block._type !== "block") return null;

        const text = block.children?.map((child) => child.text).join("") || "";

        switch (block.style) {
          case "h2":
            return (
              <h2
                key={block._key}
                className="font-display text-marron text-xl sm:text-2xl font-semibold mt-8 mb-3"
              >
                {text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={block._key}
                className="font-display text-marron text-lg font-semibold mt-6 mb-2"
              >
                {text}
              </h3>
            );
          case "blockquote":
            return (
              <blockquote
                key={block._key}
                className="border-l-4 border-laine pl-4 italic text-text-muted my-6"
              >
                {text}
              </blockquote>
            );
          default:
            return (
              <p
                key={block._key}
                className="text-text-muted leading-relaxed text-base"
              >
                {text}
              </p>
            );
        }
      })}
    </div>
  );
}
