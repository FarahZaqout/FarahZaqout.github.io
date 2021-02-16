import { FC, useReducer } from 'react';
import { LandingSection } from './Landing.styles';
import { NavigationMenu, Navbar, Header } from '../../modules';
import { navContext, setNavState, navReducer } from '../../../context';

const LandingPage: FC = () => {
  const [state, dispatch] = useReducer(navReducer, { openStatus: 'open' });
  const { openStatus } = state;

  const handleBurgerClick = () => {
    console.log('kurwa');
    if (openStatus === 'open') return dispatch(setNavState('closed'));
    return dispatch(setNavState('open'));
  };
  return (
    <LandingSection>
      <Navbar onClick={handleBurgerClick} />
      <NavigationMenu onClick={handleBurgerClick} openStatus={openStatus} />
      <Header />
    </LandingSection>
  );
};

export default LandingPage;
