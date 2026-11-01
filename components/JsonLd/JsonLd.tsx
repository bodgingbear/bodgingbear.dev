import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  projectPath,
} from "utils/site";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    // Escape "<" so the JSON can't close the script tag early.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: absoluteUrl("/favicon.png"),
  email: "team@bodgingbear.dev",
  sameAs: ["https://github.com/bodgingbear"],
};

export const SiteJsonLd = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@graph": [
        organization,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          description: SITE_DESCRIPTION,
          publisher: { "@id": organization["@id"] },
        },
      ],
    }}
  />
);

interface GameJsonLdProps {
  metadata: GamePageMetadata;
}

export const GameJsonLd = ({ metadata }: GameJsonLdProps) => {
  const isBrowserGame = metadata.playNowUrl?.startsWith("/") ?? false;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: metadata.name,
        description: metadata.description,
        url: absoluteUrl(projectPath(metadata.id)),
        image: absoluteUrl(metadata.image),
        gamePlatform: isBrowserGame ? "Web browser" : "PC",
        isAccessibleForFree: true,
        author: organization,
        publisher: organization,
      }}
    />
  );
};
