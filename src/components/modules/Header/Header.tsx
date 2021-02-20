import { FC, useEffect, useState } from 'react';

import { HeaderContainer, HeaderParagraph } from './Header.styles';
import { MainHeading, Overlay, Social } from '../../common';

const Header: FC = () => {
  const [welcomeDisplay, setWelcomeDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => setWelcomeDisplay(false), 3000);
  }, []);
  return (
    <HeaderContainer>
      {welcomeDisplay && <Overlay text="Welcome" />}
      <MainHeading text="Farah Zaqout" />
      <HeaderParagraph>Front-end Web Developer</HeaderParagraph>
      <Social />
    </HeaderContainer>
  );
};

export default Header;
