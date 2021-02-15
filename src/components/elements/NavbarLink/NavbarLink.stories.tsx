import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationLink from './NavbarLink';

export default {
  title: 'Navigation Link',
};

export const DefaultNavLink: FC = () => (
  <Router>
    <NavigationLink text="About" to="/" />
    <NavigationLink fontSize="3rem" text="About" to="/" />
  </Router>
);
