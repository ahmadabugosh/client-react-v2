import axios from 'axios';

const ROOT_URL='https://i7san-api.herokuapp.com';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE, BEGIN_LOADING, END_LOADING} from './types';

export function signinUser ({email, password}, history) 
{
	return function (dispatch) {
		dispatch(authError(''));
//submit email/password to server
axios.post(`${ROOT_URL}/signin`,{email, password})
.then(response => {
	dispatch(endLoading())
localStorage.setItem('token', response.data.token);
dispatch({type: AUTH_USER});
history.push('/feature');

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

export function signupUser ({email, password}, history) {

	return function (dispatch)
	{
axios.post(`${ROOT_URL}/signup`,{email, password})
.then(response => {
localStorage.setItem('token', response.data.token);
dispatch({type: AUTH_USER});
history.push('/feature');

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
export function recordVolunteerActivity({ activity,	description, hours,	mediaUrl }) {
	return function(dispatch) {
		console.log(hours, activity, description,mediaUrl);
		
		// TODO: figure out how to handle the mediaUrl file object and how to submit that to the server

		// submit fields to the server
		axios.post(`${ROOT_URL}/volunteering`, {
			activity,
			hours,
			description,
			mediaUrl
		},{
headers:{authorization:localStorage.getItem('token')}

	})
			.then(response => {
				if (response.data.success) {
				browserHistory.push('/volunteering-success');
					/**
					 * dispatch action to display message to user?
					 * inform user that activity has been successfully recorded
					 * clear or hide form, display button that allows the user enter another activity
					 */

				}
			})
			.catch(() => {
				dispatch(authError("Ooops looks like we can't record your volunteering activity. Try re-entering your fields and try again!"));
			});
	}

}


// action creators to handle state of whether data is currently loading
export function beginLoading() {
	return { type: BEGIN_LOADING }
}

export function endLoading() {
	return { type: END_LOADING }
}