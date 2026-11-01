"use client";
import styled from "styled-components";
import { textColor, mutedGrey, fontFamily } from "constants/variables";
import { CSSProperties } from "react";

export interface TextProps {
  $muted?: boolean;
  $uppercase?: boolean;
  $center?: boolean;
  $noMargin?: boolean | "top" | "bottom";
  $userSelect?: CSSProperties["userSelect"];
}

export const Text = styled.span<TextProps>`
  font-family: ${fontFamily};
  color: ${(props) => (props.$muted ? mutedGrey : textColor)};
  ${(props) => (props.$uppercase ? "text-transform: uppercase;" : "")}
  ${(props) => (props.$center ? "text-align: center;" : "text-align: left;")}
  ${(props) =>
    props.$noMargin === true
      ? `
    margin-top: 0;
    margin-bottom: 0;
  `
      : ""}
  ${(props) => (props.$noMargin === "top" ? "margin-top: 0;" : "")}
  ${(props) => (props.$noMargin === "bottom" ? "margin-bottom: 0;" : "")}
  user-select: ${(props) => props.$userSelect ?? "none"};
  line-height: 1.5;
`;

export const ParagraphStyles = styled(Text)``;

export const H1Styles = styled(Text)`
  font-size: 3rem;
`;

// Looks like an h1 but renders an h2, so a page keeps a single h1.
// Margins are pinned to the h1 defaults because h2 defaults differ.
export const SectionTitleStyles = styled(H1Styles)`
  margin-top: 0.67em;
  margin-bottom: 0.67em;
`;

export const H2Styles = styled(Text)`
  font-size: 2.3rem;
  font-weight: 400;
  letter-spacing: -1.5px;
`;

export const H3Styles = styled(Text)`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const H4Styles = styled(Text)`
  font-size: 1.25rem;
  font-weight: 400;
`;
