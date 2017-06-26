import axios from 'axios';

import {browserHistory} from 'react-router';
const ROOT_URL='http://localhost:3090';
import {AUTH_USER, AUTH_ERROR} from './types';

export function signinUser ({email, password}) 
{

	return function (dispatch) {
//submit email/password to server
axios.post(`${ROOT_URL}/signin`,{email, password})
.then(response => {


localStorage.setItem('token', response.data.token);
console.log(response.data.token);
browserHistory.push('/feature');

dispatch({type: AUTH_USER});

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


export function authError(error) {


	return {

		type: AUTH_ERROR,
		payload:error
	};
}