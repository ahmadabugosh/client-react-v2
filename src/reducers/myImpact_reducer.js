import { STORE_MY_IMPACT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_MY_IMPACT:
      return action.payload;
    default:
      return state;
  }
}
