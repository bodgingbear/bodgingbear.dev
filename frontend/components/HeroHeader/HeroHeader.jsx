import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { breakpoints } from '../../styles/variables';

import BannerBearNoLogoUrl from '../../static/banner_bear_no_logo.png';
import BannerLogoUrl from '../../static/bb_name.png';

import BannerNoBearNoLogoUrl from '../../static/banner_no_bear_no_logo.png';

const Container = styled.header`
  width: 100%;
  position: relative;
  height: ${props => (props.showBear ? '25rem' : '16rem')};

  @media (min-width: ${breakpoints.tablet}) {
    height: ${props => (props.showBear ? '35rem' : '23rem')};
  }
`;

const ImageOverflowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => (props.showBear ? '70rem' : '56rem')};
  overflow: hidden;
  pointer-events: none;
`;

const ImgNoLogo = styled.img`
  position: absolute;
  height: ${props => (props.showBear ? '50rem' : '40rem')};
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  image-rendering: pixelated;
  z-index: -1;
  display: unset;

  @media (min-width: ${breakpoints.tablet}) {
    height: ${props => (props.showBear ? '70rem' : '56rem')};
  }
`;

const ImgLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 9rem;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 0 2rem;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    height: 12.5rem;
  }
`;

const ImgLinkLogo = styled.a`
  width: 100%;
  max-width: 40rem;
`;

const ImgLogo = styled.img`
  width: 100%;
  image-rendering: pixelated;
`;

const HeroHeader = ({ showBear }) => {
  const urlNoLogo = showBear ? BannerBearNoLogoUrl : BannerNoBearNoLogoUrl;
  const urlLogo = BannerLogoUrl;

  return (
    <Container showBear={showBear}>
      <ImgLogoContainer showBear={showBear}>
        <Link href="/" passHref>
          <ImgLinkLogo>
            <ImgLogo src={urlLogo} showBear={showBear} />
          </ImgLinkLogo>
        </Link>
      </ImgLogoContainer>
      <ImageOverflowContainer showBear={showBear}>
        <ImgNoLogo src={urlNoLogo} showBear={showBear} />
      </ImageOverflowContainer>
    </Container>
  );
};

export default HeroHeader;
