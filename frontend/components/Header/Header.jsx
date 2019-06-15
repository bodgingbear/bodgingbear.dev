import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledLogo, StyledBanner } from './styles';
import headerText from '../../static/bb_name.png';
import bannerBear from '../../static/banner_bear_no_logo.png';
import bannerNoBear from '../../static/banner_no_bear_no_logo.png';

const Header = ({ hasBear }) => (
  <StyledHeader>
    <StyledLogo src={headerText} />
    <StyledBanner src={hasBear ? `${bannerBear}` : `${bannerNoBear}`} />
  </StyledHeader>
);

Header.propTypes = {
  hasBear: PropTypes.bool,
};

Header.defaultProps = {
  hasBear: false,
};

export default Header;