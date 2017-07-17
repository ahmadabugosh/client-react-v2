// the reducer will determine wether the current user is currently loading data
import {
  BEGIN_LOADING,
  END_LOADING
} from '../actions/types';

export default function (state = false, action) {

  switch (action.type) {
    case BEGIN_LOADING:
      return true;

    case END_LOADING:
    return false;;
  }

  return state;
}
