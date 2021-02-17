import { VFC } from 'react';
import NavigationMenu from './NavigationMenu';

export default {
  title: 'Navigation Menu',
  component: NavigationMenu,
};

interface MenuProps {
  openStatus: string;
}

export const DefaultMenu: VFC<MenuProps> = () => (
  <NavigationMenu onClick={() => {}} openStatus="open" />
);
