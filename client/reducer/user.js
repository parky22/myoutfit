import axios from 'axios';
import { browserHistory } from 'react-router';

// CONSTANTS
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultUser = {};

// ACTION CREATORS
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

// THUNK ACTION CREATORS
export const me = () => {
  return dispatch =>
    axios.get('/auth/me')
      .then(res =>
        dispatch(getUser(res.data || defaultUser)));
}

export const auth = (email, password, method) => {
  return dispatch =>
    axios.post(`/auth/${method}`, { email, password })
      .then(res => {
        dispatch(getUser(res.data));
        browserHistory.push('/home');
      })
      .catch(error =>
        dispatch(getUser({ error })));
}

export const logout = () => {
  return dispatch =>
    axios.post('/auth/logout')
      .then(res => {
        dispatch(removeUser());
        browserHistory.push('/');
      })
      .catch(err => console.log(err));
}

// REDUCER
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
