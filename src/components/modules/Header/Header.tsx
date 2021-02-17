import { FC } from 'react';

import { HeaderContainer, HeaderParagraph } from './Header.styles';
import { MainHeading } from '../../common';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <MainHeading text="Farah Zaqout" />
      <HeaderParagraph>Front-end Web Developer</HeaderParagraph>
    </HeaderContainer>
  );
};

export default Header;
