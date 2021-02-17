import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationLink from './NavbarLink';

export default {
  title: 'Navigation Link',
};

export const DefaultNavLink: FC = () => (
  <Router>
    <NavigationLink ariaLable="about" text="About" to="/" />
    <NavigationLink ariaLable="about" fontSize="3rem" text="About" to="/" />
  </Router>
);
