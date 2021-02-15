import { FC } from 'react';
import { NavbarLink, NavbarLinkProps } from './NavbarLink.styles';

const NavigationLink: FC<NavbarLinkProps> = ({ text, to, fontSize }) => {
  return <NavbarLink fontSize={fontSize} text={text} to={to} />;
};

export default NavigationLink;
