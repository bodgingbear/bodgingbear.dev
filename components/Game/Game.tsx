import React from "react";

import { Paragraph } from "components/Typography/Typography";
import { Center } from "components/Center/Center";
import { HomePageProject } from "types/HomePageProject";

import { A, Description, Image, ImageWrapper, Wrapper } from "./Game.styled";
import { Button } from "../Button/Button";

interface GameProps extends HomePageProject {}

export const Game = ({
  id,
  name,
  description,
  image,
  playNowUrl,
}: GameProps) => (
  <Wrapper>
    <A href={`/projects/${id}`}>
      {image && (
        <ImageWrapper>
          <Image src={image} alt="" loading="lazy" />
        </ImageWrapper>
      )}
      <Paragraph $center>{name}</Paragraph>
      <Description $muted $center $noMargin="top" as="p">
        {description}
      </Description>
    </A>
    {playNowUrl && (
      <Center>
        <Button asChild>
          <a href={playNowUrl} target="_blank">
            Play now!
          </a>
        </Button>
      </Center>
    )}
  </Wrapper>
);
