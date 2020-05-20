// import api from '../utils/api';
// import authTypes from './types/auth';
// import axios from 'axios';
import { TOKEN } from '../utils/constants';

function isLoggedIn () {
  const accessToken =  localStorage.getItem(TOKEN);
  if(!accessToken) {
    return false;
  }
};

export default {
  isLoggedIn,
}
