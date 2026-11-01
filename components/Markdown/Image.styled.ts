"use client";

import styled from "styled-components";
import { black } from "constants/variables";

export const StyledMarkdownImage = styled.img`
  border: 0.25em solid ${black};
  width: 100%;
  height: auto;
  user-select: none;
  box-sizing: border-box;
  image-rendering: pixelated;
`;

export const StyledMarkdownVideo = styled.video`
  display: block;
  border: 0.25em solid ${black};
  width: 100%;
  height: auto;
  box-sizing: border-box;
  image-rendering: pixelated;
`;
