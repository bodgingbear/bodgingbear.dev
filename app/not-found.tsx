import type { Metadata } from "next";
import { HeroHeader } from "components/HeroHeader/HeroHeader";
import { Layout } from "components/Layout/Layout";
import { H1, Paragraph } from "components/Typography/Typography";
import { Center } from "components/Center/Center";
import { Button } from "components/Button/Button";
import { Copyright } from "components/Copyright/Copyright";

export const metadata: Metadata = {
  title: "Page not found | Bodging Bear",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <HeroHeader />
      <Layout>
        <H1 $uppercase $center>
          404
        </H1>
        <Paragraph $muted $center>
          This page got bodged a little too hard.
        </Paragraph>
        <Center>
          <Button asChild>
            <a href="/">See our games</a>
          </Button>
        </Center>
        <Copyright />
      </Layout>
    </>
  );
}
