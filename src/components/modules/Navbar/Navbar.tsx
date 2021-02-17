import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledNavbar, NavbarLinkContainer } from './Navbar.styles';
import { NavbarLink, BurgerButton } from '../../common';

interface NavbarProps {
  onClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ onClick }) => {
  return (
    <StyledNavbar>
      <BurgerButton onClick={onClick} desktopDisplay="none">
        {/* html code for burger menu */}
        &#9776;
      </BurgerButton>
      <Router>
        <NavbarLinkContainer>
          <li>
            <NavbarLink ariaLable="About" text="About" to="#" />
          </li>
          <li>
            <NavbarLink ariaLable="Portfolio" text="Portfolio" to="#" />
          </li>
          <li>
            <NavbarLink ariaLable="Experiments" text="Experiments" to="#" />
          </li>
          <li>
            <NavbarLink ariaLable="Contact" text="Contact" to="#" />
          </li>
        </NavbarLinkContainer>
      </Router>
    </StyledNavbar>
  );
};

export default Navbar;
