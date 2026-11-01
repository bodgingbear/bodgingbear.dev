"use client";
import styled from "styled-components";
import { breakpoints, white } from "constants/variables";

interface ShowBearProps {
  $showBear: boolean;
}

export const Container = styled.header<ShowBearProps>`
  width: 100%;
  position: relative;
  height: ${(props) => (props.$showBear ? "25rem" : "16rem")};

  @media (min-width: ${breakpoints.tablet}) {
    height: ${(props) => (props.$showBear ? "35rem" : "23rem")};
  }
`;

export const ImageOverflowContainer = styled.div<ShowBearProps>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.$showBear ? "70rem" : "56rem")};
  overflow: hidden;
  pointer-events: none;
`;

export const ImgNoLogo = styled.img.attrs({ draggable: false })<ShowBearProps>`
  position: absolute;
  height: ${(props) => (props.$showBear ? "50rem" : "40rem")};
  top: 0;
  left: 50%;
  width: auto;
  transform: translateX(-50%);
  image-rendering: pixelated;
  z-index: -1;
  display: unset;
  user-select: none;

  @media (min-width: ${breakpoints.tablet}) {
    height: ${(props) => (props.$showBear ? "70rem" : "56rem")};
  }
`;

export const ImgLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0 2rem;
  box-sizing: border-box;
  margin: 0;
  font-size: inherit;
  font-weight: inherit;

  @media (min-width: ${breakpoints.tablet}) {
    height: 12.5rem;
  }
`;

export const ImgLinkLogo = styled.a`
  width: 100%;
  max-width: 40rem;

  padding: 1em;
  margin: -1em;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0.25em ${white}, 0 -0.25em ${white}, 0.25em 0 ${white},
      -0.25em 0 ${white};
  }
`;

export const ImgLogo = styled.img.attrs({ draggable: false })`
  width: 100%;
  height: auto;
  image-rendering: pixelated;
  user-select: none;
`;
