import type { Metadata } from "next";
import { HeroHeader } from "components/HeroHeader/HeroHeader";
import { Layout } from "components/Layout/Layout";
import { H2, SectionTitle } from "components/Typography/Typography";
import { Grid } from "components/Grid/Grid";
import { Game } from "components/Game/Game";
import { SpaceEvenly } from "components/SpaceEvenly/SpaceEvenly";
import { Person } from "components/Person/Person";
import { ContactMeans } from "components/ContactMeans/ContactMeans";
import { Copyright } from "components/Copyright/Copyright";
import { SiteJsonLd } from "components/JsonLd/JsonLd";

import { team } from "constants/team";
import { getProjects } from "utils/getProjects";

import ghIconUrl from "assets/gh.png";
import emailIconUrl from "assets/email.svg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const pagesData = await getProjects();
  const projects = pagesData.map((page) => ({
    id: page.id,
    name: page.name,
    description: page.description,
    image: page.image,
    playNowUrl: page.playNowUrl || null,
  }));

  return (
    <>
      <SiteJsonLd />
      <HeroHeader showBear />
      <Layout>
        <SectionTitle $uppercase $center>
          Our games
        </SectionTitle>
        <Grid $gap="3rem" $colsTemplate="repeat(auto-fit, minmax(18rem, 1fr))">
          {projects.map((project) => (
            <Game
              key={project.id}
              id={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              playNowUrl={project.playNowUrl}
            />
          ))}
        </Grid>
        <SectionTitle $uppercase $center>
          Our team
        </SectionTitle>
        <SpaceEvenly>
          {team.core.map((teamMember) => (
            <Person key={teamMember.name} {...teamMember} />
          ))}
        </SpaceEvenly>
        <H2 $uppercase $center $muted $noMargin="top" asChild>
          {/* Keep the h2's default bottom margin so the switch to h3 doesn't shift layout. */}
          <h3 style={{ marginBottom: "0.83em" }}>Friends</h3>
        </H2>
        <SpaceEvenly>
          {team.friends.map((teamMember) => (
            <Person
              key={teamMember.name}
              name={teamMember.name}
              position={teamMember.position}
              image={teamMember.image}
            />
          ))}
        </SpaceEvenly>
        <SectionTitle $uppercase $center>
          Contact us
        </SectionTitle>
        <Grid $colsTemplate="repeat(auto-fill, minmax(22rem, 1fr))">
          <ContactMeans
            text="team@bodgingbear.dev"
            image={emailIconUrl.src}
            link="mailto:team@bodgingbear.dev"
          />
          <ContactMeans
            text="/bodgingbear"
            image={ghIconUrl.src}
            link="https://github.com/bodgingbear"
          />
        </Grid>
        <Copyright />
      </Layout>
    </>
  );
}
