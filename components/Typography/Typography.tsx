"use client";
import { Slot } from "@radix-ui/react-slot";
import {
  Text,
  TextProps,
  H1Styles,
  H2Styles,
  H3Styles,
  H4Styles,
  SectionTitleStyles,
} from "./Typography.styled";
import React, { ReactNode } from "react";

type ParagraphProps = TextProps & { asChild?: boolean; children?: ReactNode };
export const Paragraph = ({ asChild, ...props }: ParagraphProps) => (
  <Text {...props} as={asChild ? Slot : "p"} />
);

type H1Props = React.ComponentProps<typeof H1Styles> & { asChild?: boolean };
export const H1 = ({ asChild, ...props }: H1Props) => (
  <H1Styles {...props} as={asChild ? Slot : "h1"} />
);
type SectionTitleProps = React.ComponentProps<typeof SectionTitleStyles>;
export const SectionTitle = (props: SectionTitleProps) => (
  <SectionTitleStyles {...props} as="h2" />
);
type H2Props = React.ComponentProps<typeof H1Styles> & { asChild?: boolean };
export const H2 = ({ asChild, ...props }: H2Props) => (
  <H2Styles {...props} as={asChild ? Slot : "h2"} />
);
type H3Props = React.ComponentProps<typeof H1Styles> & { asChild?: boolean };
export const H3 = ({ asChild, ...props }: H3Props) => (
  <H3Styles {...props} as={asChild ? Slot : "h3"} />
);
type H4Props = React.ComponentProps<typeof H1Styles> & { asChild?: boolean };
export const H4 = ({ asChild, ...props }: H4Props) => (
  <H4Styles {...props} as={asChild ? Slot : "h4"} />
);
