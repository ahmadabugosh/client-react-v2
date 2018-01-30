import { CURRENT_CATEGORY } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CURRENT_CATEGORY:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
