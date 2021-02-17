import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BurgerButton, NavbarLink } from '../../common';
import {
  ListItem,
  MenuContainer,
  UnorderedList,
} from './NavigationMenu.styles';

interface MenuProps {
  openStatus: 'closed' | 'open';
  onClick: () => void;
}

const NavigationMenu: FC<MenuProps> = ({ onClick, openStatus }) => {
  return (
    <MenuContainer openStatus={openStatus || 'closed'}>
      <BurgerButton navMenuButton onClick={onClick}>
        &#10005;
      </BurgerButton>
      <Router>
        <UnorderedList>
          <ListItem>
            <NavbarLink
              ariaLable="about"
              onClick={onClick}
              fontSize="4rem"
              text="About"
              to="#"
            />
          </ListItem>
          <ListItem>
            <NavbarLink
              ariaLable="Portfolio"
              onClick={onClick}
              fontSize="4rem"
              text="Portfolio"
              to="#"
            />
          </ListItem>
          <ListItem>
            <NavbarLink
              ariaLable="Experiments"
              onClick={onClick}
              fontSize="4rem"
              text="Experiments"
              to="#"
            />
          </ListItem>
          <ListItem>
            <NavbarLink
              ariaLable="Contact"
              onClick={onClick}
              fontSize="4rem"
              text="Contact"
              to="#"
            />
          </ListItem>
        </UnorderedList>
      </Router>
    </MenuContainer>
  );
};

export default NavigationMenu;
