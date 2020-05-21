import { API_URL } from '../utils/api';
// import authTypes from './types/auth';
import axios from 'axios';
import { ROLE, TOKEN } from '../utils/constants';
import { authTypes } from './types/auth';

function isLoggedIn() {
  const accessToken = localStorage.getItem(TOKEN);
  if (!accessToken) {
    return false;
  }
};

function setAuthorizationToken(store, accessToken, accessRole) {
  axios.defaults.baseURL = API_URL;
  const token = accessToken ? accessToken : localStorage.getItem(TOKEN);
  const role = accessRole ? accessRole : localStorage.getItem(ROLE);

  if (token && role) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }
}

export default {
  isLoggedIn,
  setAuthorizationToken
}
