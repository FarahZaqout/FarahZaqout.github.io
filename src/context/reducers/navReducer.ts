import { SET_NAV_STATE } from '../actions';

type State = {
  openStatus: 'open' | 'closed';
};

type NavAction = {
  type: string;
  payload: 'open' | 'closed';
};

const navReducer = (state: State, action: NavAction): State => {
  if (action.type === SET_NAV_STATE) {
    return { ...state, openStatus: action.payload };
  }
  return { ...state };
};

export default navReducer;
