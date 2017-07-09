import axios from 'axios';

import {browserHistory} from 'react-router';
const ROOT_URL='https://i7san-api.herokuapp.com';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';

export function signinUser ({email, password}) 
{

	return function (dispatch) {
//submit email/password to server
axios.post(`${ROOT_URL}/signin`,{email, password})
.then(response => {


localStorage.setItem('token', response.data.token);
console.log(response.data.token);
dispatch({type: AUTH_USER});
browserHistory.push('/feature');

})
.catch(()=> {

//request good , update state, save jwt token, redirect to success page

//update if user is authenticated


//save jwt token



//request bad, show error to user
dispatch(authError('Bad login info'));



});


	}
}

export function signupUser ({email, password}) {

	return function (dispatch)
	{
axios.post(`${ROOT_URL}/signup`,{email, password})
.then(response => {
localStorage.setItem('token', response.data.token);
dispatch({type: AUTH_USER});
browserHistory.push('/feature');

})
.catch((error)=> {

//request good , update state, save jwt token, redirect to success page

//update if user is authenticated


//save jwt token

//request bad, show error to user
dispatch(authError(error.response.data.error));



});


	}
}


export function authError(error) {


	return {

		type: AUTH_ERROR,
		payload:error
	};
}


export function signoutUser() {

	localStorage.removeItem('token');
	return {type: UNAUTH_USER};

}

export function fetchMessage(){
return function(dispatch){

	axios.get(ROOT_URL, {
headers:{authorization:localStorage.getItem('token')}

	})
	.then(response=> {

		dispatch({type: FETCH_MESSAGE, payload: response.data.message});
	});
}

}

// action creator to handle post action to /activity route
// adds volunteer instance to redux store?
export function recordVolunteerActivity({ name,	description, hours,	mediaUrl }) {
	return function(dispatch) {
		console.log(hours, name, description, mediaUrl);
		
		// TODO: figure out how to handle the mediaUrl file object and how to submit that to the server

		// submit fields to the server
		axios.post(`${ROOT_URL}/activity`, {
			name,
			hours,
			description,
			mediaUrl
		})
			.then(response => {
				if (response.data.success) {
				
					/**
					 * dispatch action to display message to user?
					 * inform user that activity has been successfully recorded
					 * clear or hide form, display button that allows the user enter another activity
					 */

				}
			})
			.catch(() => {
				// Bad request: display error to user
			});
	}

}