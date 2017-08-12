import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import usersReducer from './users_reducer';
import isLoadingReducer from './isLoading_reducer';

const rootReducer = combineReducers({
  form,
  isLoading: isLoadingReducer,
  auth: authReducer,
  users: usersReducer
});

export default rootReducer;
