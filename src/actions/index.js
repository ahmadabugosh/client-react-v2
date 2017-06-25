import axios from 'axios';

import {browserHistory} from 'react-router';
const ROOT_URL='http://localhost:3090';

export function signinUser ({email, password}) 
{

	return function (dispatch) {
//submit email/password to server
axios.post(`${ROOT_URL}/signin`,{email, password})
.then(response => {



})
.catch(()=> {





});

//request good , update state, save jwt token, redirect to success page

//request bad, show error to user

	}



}