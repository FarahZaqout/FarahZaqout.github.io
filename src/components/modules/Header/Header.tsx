import { FC } from 'react';

import {
  HeaderContainer,
  HeaderParagraph,
  ArrowDownContainer,
} from './Header.styles';
import { MainHeading } from '../../elements';

const Header: FC = () => {
  return (
    <HeaderContainer>
      <MainHeading text="Farah Zaqout" />
      <HeaderParagraph>Front-end Web Developer</HeaderParagraph>
      <ArrowDownContainer>
        <span role="button" tabIndex={0}>
          &#8595;
        </span>
      </ArrowDownContainer>
    </HeaderContainer>
  );
};

export default Header;
