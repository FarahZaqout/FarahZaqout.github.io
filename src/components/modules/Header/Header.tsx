import { FC } from 'react';

import { HeaderContainer, HeaderParagraph } from './Header.styles';
import { MainHeading, Overlay, Social } from '../../common';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <Overlay text="Welcome" />
      <MainHeading text="Farah Zaqout" />
      <HeaderParagraph>Front-end Web Developer</HeaderParagraph>
      <Social />
    </HeaderContainer>
  );
};

export default Header;
