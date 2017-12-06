import { FETCH_FOLLOWERS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
}
