import { FC, useReducer } from 'react';
import { LandingSection } from './LandingPage.styles';
import { NavigationMenu, Navbar, Header, Portfolio } from '../../modules';
import { navContext, setNavState, navReducer } from '../../../context';

const LandingPage: FC = () => {
  const [state, dispatch] = useReducer(navReducer, { openStatus: 'open' });
  const { openStatus } = state;

  const handleBurgerClick = () => {
    if (openStatus === 'open') return dispatch(setNavState('closed'));
    return dispatch(setNavState('open'));
  };
  return (
    <LandingSection>
      <Navbar onClick={handleBurgerClick} />
      <NavigationMenu onClick={handleBurgerClick} openStatus={openStatus} />
      <Header />
      <Portfolio />
    </LandingSection>
  );
};

export default LandingPage;
