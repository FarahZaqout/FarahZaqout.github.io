import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledNavbar, NavbarLinkContainer } from './Navbar.styles';
import { NavbarLink, BurgerButton } from '../../elements';

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <BurgerButton>&#9776;</BurgerButton>
      <Router>
        <NavbarLinkContainer>
          <li>
            <NavbarLink text="About" to="#" />
          </li>
          <li>
            <NavbarLink text="Portfolio" to="#" />
          </li>
          <li>
            <NavbarLink text="Experiments" to="#" />
          </li>
          <li>
            <NavbarLink text="Contact" to="#" />
          </li>
        </NavbarLinkContainer>
      </Router>
    </StyledNavbar>
  );
};

export default Navbar;
