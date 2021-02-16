import { SET_NAV_STATE } from './types';

type Payload = 'open' | 'closed';

type Action = {
  type: string;
  payload: Payload;
};

const setNavState = (payload: Payload): Action => {
  return {
    type: SET_NAV_STATE,
    payload,
  };
};

export default setNavState;
