import { VFC } from 'react';
import NavigationLink from '../../elements/NavbarLink/NavbarLink';
import NavigationMenu from './NavigationMenu';

export default {
  title: 'Navigation Menu',
  component: NavigationLink,
};

interface MenuProps {
  openStatus: string;
}

export const DefaultMenu: VFC<MenuProps> = () => (
  <NavigationMenu onClick={() => {}} openStatus="open" />
);
