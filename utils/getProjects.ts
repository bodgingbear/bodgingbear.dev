import { cache } from "react";
import { glob } from "glob";

export const getProjects = cache(async (): Promise<GamePageMetadata[]> => {
  const pagePaths = await glob(["app/projects/*/*/page.mdx"]);

  const pageMetadatas = pagePaths
    .sort((a, b) => b.localeCompare(a))
    .map((pagePath): Promise<GamePageMetadata> => {
      const path = pagePath.split("/");
      const order = path.at(-3);
      const dir = path.at(-2);

      return import(`app/projects/${order}/${dir}/page.mdx`).then(
        (x) => x.pageMetadata,
      );
    });

  return Promise.all(pageMetadatas);
});
