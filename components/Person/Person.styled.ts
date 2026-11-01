"use client";
import styled from "styled-components";
import { white } from "constants/variables";

export const Image = styled.img.attrs({ draggable: false })`
  width: 100%;
  aspect-ratio: 1 / 1;
  image-rendering: pixelated;
  user-select: none;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 0.25em;
  margin: -0.25em;
`;

export const Container = styled.div`
  margin: 0 1rem 2rem;
  width: 15rem;
  text-decoration: none;
  outline: none;
  position: relative;

  &:is(a) {
    cursor: pointer;

    &:hover ${ImageWrapper}, &:focus-visible ${ImageWrapper} {
      box-shadow: 0 0.25em 0 ${white}, 0 -0.25em 0 ${white}, 0.25em 0 0 ${white},
        -0.25em 0 0 ${white};
    }
  }
`;
