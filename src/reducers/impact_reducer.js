import { STORE_IMPACT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_IMPACT:
      return action.payload;
    default:
      return state;
  }
}
