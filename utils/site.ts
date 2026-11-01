export const SITE_URL = "https://bodgingbear.dev";
export const SITE_NAME = "Bodging Bear";
export const SITE_DESCRIPTION =
  "Bodging Bear is a small Warsaw indie team making pixel-art game jam games. Play our browser games online for free.";
export const SITE_OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Bodging Bear logo with a pixel-art bear at a keyboard",
};

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export const projectPath = (id: string) => `/projects/${id}/`;
