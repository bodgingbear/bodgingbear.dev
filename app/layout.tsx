import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry/StyledComponentsRegistry";
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";
import { Matomo } from "../components/Matomo/Matomo";

export const metadata: Metadata = {
  title: "Bodging Bear",
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
