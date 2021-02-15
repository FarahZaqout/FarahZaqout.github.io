import { FC, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MenuContainer,
  CloseButton,
  UnorderedList,
  ListItem,
} from './NavigationMenu.styles';
import { NavbarLink, BurgerButton } from '../../elements';

interface MenuProps {
  openStatus: string;
}

const NavigationMenu: FC<MenuProps> = ({ openStatus }) => {
  const [menuStatus, setMenuStatus] = useState(openStatus || 'closed');

  const handleCloseButton = () => {
    setMenuStatus('closed');
  };

  return (
    <MenuContainer openStatus={menuStatus || 'closed'}>
      <BurgerButton onClick={handleCloseButton}>&#10005;</BurgerButton>
      <Router>
        <UnorderedList>
          <ListItem>
            <NavbarLink fontSize="4rem" text="About" to="#" />
          </ListItem>
          <ListItem>
            <NavbarLink fontSize="4rem" text="Portfolio" to="#" />
          </ListItem>
          <ListItem>
            <NavbarLink fontSize="4rem" text="Experiments" to="#" />
          </ListItem>
          <ListItem>
            <NavbarLink fontSize="4rem" text="Contact" to="#" />
          </ListItem>
        </UnorderedList>
      </Router>
    </MenuContainer>
  );
};

export default NavigationMenu;
