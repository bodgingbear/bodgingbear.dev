import type { Metadata, ResolvingMetadata } from "next";
import { SITE_NAME, projectPath } from "./site";

export async function generateGameMetadata(
  pageMetadata: GamePageMetadata,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { title } = await parent;
  const fullTitle = !title
    ? pageMetadata.name
    : `${pageMetadata.name} | ${title.template ?? title.absolute}`;
  const url = projectPath(pageMetadata.id);
  const images = [{ url: pageMetadata.image, alt: pageMetadata.name }];

  return {
    title: fullTitle,
    description: pageMetadata.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url,
      title: fullTitle,
      description: pageMetadata.description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageMetadata.description,
      images,
    },
  };
}
