import { STORE_USERS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_USERS:
      return action.payload;
    default:
      return state;
  }
}
