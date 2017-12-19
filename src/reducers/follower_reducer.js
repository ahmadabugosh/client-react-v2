import { STORE_FOLLOWERS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}

