import { createContext } from 'react';

const initState = {
  openStatus: 'closed',
};

const navContext = createContext(initState);

export default navContext;
