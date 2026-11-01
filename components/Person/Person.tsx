import React from "react";
import { Person as PersonType } from "types/Person";
import { Paragraph } from "components/Typography/Typography";

import { Image, Container, ImageWrapper } from "./Person.styled";

interface PersonProps extends PersonType {}

export const Person = ({ image, name, position, url }: PersonProps) => (
  <Container
    as={url ? "a" : undefined}
    href={url}
    target={url != null ? "_blank" : undefined}
  >
    <ImageWrapper>
      <Image src={image} alt="" loading="lazy" />
    </ImageWrapper>
    <Paragraph $center>{name}</Paragraph>
    <Paragraph $muted $center $noMargin="top">
      {position}
    </Paragraph>
  </Container>
);
