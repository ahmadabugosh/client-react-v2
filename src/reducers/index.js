import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import usersReducer from './users_reducer';
import isLoadingReducer from './isLoading_reducer';
import myImpactReducer from './myImpact_reducer';
import impactReducer from './impact_reducer';
import loggedInUserReducer from './loggedInUser_reducer';
import followingusersreducer from './following_reducer';
import followerCountReducer from './followers_reducer';
import followUsersReducer from './follow_reducer';
import followerReducer from './follower_reducer';
import categoriesReducer from './categories_reducer';


const rootReducer = combineReducers({
  form,
  isLoading: isLoadingReducer,
  auth: authReducer,
  users: usersReducer,
  myImpact: myImpactReducer,
  impact:impactReducer,
  loggedInUser: loggedInUserReducer,
  followingusers:followingusersreducer,
  followerCount: followerCountReducer,
  followusers: followUsersReducer,
  followerusers: followerReducer,
  categories:categoriesReducer
});

export default rootReducer;
