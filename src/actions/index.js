import axios from 'axios';

const ROOT_URL = 'https://i7san-api.herokuapp.com';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE,
  BEGIN_LOADING,
  END_LOADING,
  FETCH_USER_INFO
} from './types';

export function signinUser({ email, password }, history) {
  return function(dispatch) {
    dispatch(authError(''));
    //submit email/password to server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch(endLoading());
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
        history.push('/feature');
      })
      .catch(() => {
        //request good , update state, save jwt token, redirect to success page

        //update if user is authenticated

        //save jwt token

        //request bad, show error to user
        dispatch(authError('Bad login info'));
      });
  };
}

export function signupUser({ email, password }, history) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch({ type: AUTH_USER });
        history.push('/feature');
      })
      .catch(error => {
        //request good , update state, save jwt token, redirect to success page

        //update if user is authenticated

        //save jwt token

        //request bad, show error to user
        dispatch(authError(error.response.data.error));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: FETCH_MESSAGE, payload: response.data.message });
      });
  };
}

// action creator to handle post action to /activity route
// adds volunteer instance to redux store?
export function recordVolunteerActivity({ activity, description, hours, file }, points, history) {
  return dispatch => {
    /////////// upload image to S3 ////////////////
    let signedUrlRequest;
    if (file) {
      signedUrlRequest = new Promise((resolve, reject) => {
        axios
          .get(`${ROOT_URL}/get-signed-url`, {
            params: {
              filename: file.name,
              filetype: file.type
            }
          })
          .then(result => {
            var signedUrl = result.data;
            var options = {
              headers: {
                'Content-Type': file.type
              }
            };
            axios.put(signedUrl, file, options).then(() => {
              const mediaUrl = signedUrl.match(/[^?]*/)[0];
              resolve(mediaUrl);
            });
          })
          .catch(err => {
            console.log(err);
          });
      });
    } else {
      signedUrlRequest = Promise.resolve('no image uploaded');
    }

    /////////// upload record to database ////////////////
    signedUrlRequest.then(mediaUrl => {
      axios
        .post(
          `${ROOT_URL}/volunteering`,
          {
            activity,
            hours,
            description,
            points,
            mediaUrl
          },
          {
            headers: { authorization: localStorage.getItem('token') }
          }
        )
        .then(response => {
          if (response.data.success) {
            history.push('/volunteering-success');
            /**
             * dispatch action to display message to user?
             * inform user that activity has been successfully recorded
             * clear or hide form, display button that allows the user enter another activity
             */
          }
        })
        .catch(() => {
          dispatch(
            authError(
              "Ooops looks like we can't record your volunteering activity. Try re-entering your fields and try again!"
            )
          );
        });
    });
  };
}

// action creators to handle state of whether data is currently loading
export function beginLoading() {
  console.log('begin loading');
  return { type: BEGIN_LOADING };
}

export function endLoading() {
  return { type: END_LOADING };
}

// Mocked API call
export function fetchUserInfo(user) {
  return dispatch => {
    dispatch(beginLoading());
    setTimeout(() => {
      dispatch(endLoading());
      dispatch({
        // TODO: replace with axios call
        type: FETCH_USER_INFO,
        // data will be returned as response.data
        payload: {
          // id will be mongo object ID
          id: 'a1230f44',
          name: 'Jay',
          username: 'jayu',
          joinDate: 'March 4, 2017',
          country: 'USA',
          organizations: [],
          badges: [],
          volunteering: {
            hours: 2000,
            rank: 129
          },
          friends: {
            amount: 102,
            rank: 26
          },
          workImpact: {
            amount: 125000,
            currency: 'AED'
          }
        }
      });
    }, 3000);
  };
}
