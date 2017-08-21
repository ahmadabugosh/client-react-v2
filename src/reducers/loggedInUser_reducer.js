import { STORE_LOGGED_IN_USER } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_LOGGED_IN_USER:
      return action.payload;
    default:
      return state;
  }
}
