import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import usersReducer from './users_reducer';
import isLoadingReducer from './isLoading_reducer';
import myImpactReducer from './myImpact_reducer';
import impactReducer from './impact_reducer';
import loggedInUserReducer from './loggedInUser_reducer';
import allusersreducer from './all_users_reducer';

const rootReducer = combineReducers({
  form,
  isLoading: isLoadingReducer,
  auth: authReducer,
  users: usersReducer,
  myImpact: myImpactReducer,
  impact:impactReducer,
  loggedInUser: loggedInUserReducer,
  allusers:allusersreducer
});

export default rootReducer;
