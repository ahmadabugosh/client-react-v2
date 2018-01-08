import { STORE_CATEGORIES } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case STORE_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}
