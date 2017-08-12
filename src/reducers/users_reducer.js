import { FETCH_USER_INFO } from '../actions/types';

export default function(state = {}, action) {
  console.log('action called', action.type);
  switch (action.type) {
    case FETCH_USER_INFO:
      console.log('new obj: ', { ...state, [action.payload.id]: action.payload });
      return { ...state, [action.payload.id]: action.payload };
    default:
      console.log('default');
      return state;
  }
}
