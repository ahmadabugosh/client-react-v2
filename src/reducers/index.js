import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import isLoadingReducer from './isLoading_reducer';

const rootReducer = combineReducers({
  form,
  isLoading: isLoadingReducer,
  auth: authReducer
});

export default rootReducer;
