import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry/StyledComponentsRegistry";
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";
import { Matomo } from "../components/Matomo/Matomo";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "../utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

const pressStart2P = Press_Start_2P({
  weight: "400",
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--press-start-2p-font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pressStart2P.variable}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
        <Matomo />
      </body>
    </html>
  );
}
