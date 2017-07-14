import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute,browserHistory} from 'react-router';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import UserProfile from './components/user_profile';
import App from './components/app';
import VolunteerForm from './components/volunteer_form';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import RequireAuth from './components/auth/require_auth';

import Feature from './components/feature';
import Welcome from './components/welcome';


import VolunteerRecord from './components/volunteer_record';

import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store= createStoreWithMiddleware(reducers);

const token =localStorage.getItem('token');
if(token)
{
	store.dispatch({type:AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
  <Router history= {browserHistory}>
  <Route path="/" component={App}>
  <IndexRoute component={Welcome}/ >
  <Route path="signin" component ={Signin} />
  <Route path="feature" component ={RequireAuth(Feature)} />
   <Route path="signout" component ={Signout} />
   <Route path="signup" component ={Signup} />
	<Route path="volunteer" component={RequireAuth(VolunteerForm)} />
  <Route path='my-impact' component={UserProfile} />
    <Route path='volunteering-success' component={VolunteerRecord} />
  </Route>

  
  </Router>

  </Provider>
  , document.querySelector('.container'));
