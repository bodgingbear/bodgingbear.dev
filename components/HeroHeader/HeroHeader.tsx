import React from "react";
import Link from "next/link";
import bannerBearNoLogo from "assets/banner_bear_no_logo.png";
import bannerLogo from "assets/bb_name.png";
import bannerNoBearNoLogo from "assets/banner_no_bear_no_logo.png";

import {
  Container,
  ImageOverflowContainer,
  ImgNoLogo,
  ImgLogoContainer,
  ImgLinkLogo,
  ImgLogo,
} from "./HeroHeader.styled";

interface HeroHeaderProps {
  showBear?: boolean;
}

export const HeroHeader = ({ showBear = false }: HeroHeaderProps) => {
  const banner = showBear ? bannerBearNoLogo : bannerNoBearNoLogo;

  return (
    <Container $showBear={showBear}>
      {/* The logo is the page's h1 on the home page; project pages have their own. */}
      <ImgLogoContainer as={showBear ? "h1" : "div"}>
        <Link href="/" passHref legacyBehavior>
          <ImgLinkLogo>
            <ImgLogo
              src={bannerLogo.src}
              width={bannerLogo.width}
              height={bannerLogo.height}
              alt="Bodging Bear"
            />
          </ImgLinkLogo>
        </Link>
      </ImgLogoContainer>
      <ImageOverflowContainer $showBear={showBear}>
        <ImgNoLogo
          src={banner.src}
          width={banner.width}
          height={banner.height}
          alt=""
          $showBear={showBear}
        />
      </ImageOverflowContainer>
    </Container>
  );
};
