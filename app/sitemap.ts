import type { MetadataRoute } from "next";
import { getProjects } from "utils/getProjects";
import { absoluteUrl, projectPath } from "utils/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return [
    { url: absoluteUrl("/"), priority: 1 },
    ...projects.map((project) => ({
      url: absoluteUrl(projectPath(project.id)),
      priority: 0.8,
    })),
  ];
}
