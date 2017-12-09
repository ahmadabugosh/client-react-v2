import { STORE_FOLLOW } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_FOLLOW:
      return action.payload;
    default:
      return state;
  }
}

