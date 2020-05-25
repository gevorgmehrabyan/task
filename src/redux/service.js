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

function login(data) {
  return axios.post(api.LOGIN, data)
}

function loginDemoUser() {
  return axios.post(api.LOGIN_DEMO_USER);
}

function register(data) {
  return axios.post(api.REGISTER, data)
}

function getQuestion(params) {
  return axios.get(api.QUESTIONS_FIND_ONE, {params})
}

function saveTest(data) {
  return axios.post(api.TESTS, data)
}

function getTests() {
  return axios.get(api.TESTS)
}

function getTestsResult(id) {
  return axios.get(api.TESTS_RESULT, {params: {id}})
}

function saveAnswer(data) {
  return axios.post(api.ANSWERS, data)
}

function getTrainings() {
  return axios.get(api.TRAININGS)
}

function getNewRefUsersData() {
  return axios.get(api.NR_USERS_DATA)
}

function getTestsAndReattempts() {
  return axios.get(api.TEST_AND_REATTEMPTS)
}

function getTestsDataByMonth() {
  return axios.get(api.TESTS_BY_MONTH)
}

function getUser() {
  return axios.get(api.GET_USER)
}

function createBadge(data) {
  return axios.post(api.CREATE_BADGES, data)
}

function updateBadge(data) {
  return axios.post(api.UPDATE_BADGES, data)
}

function addFeedback(data) {
  return axios.post(api.USER_FEEDBACK, data)
}

function subscribeToNewsLetters(data) {
  return axios.post(api.SUBSCRIBE_NEWSLETTER, data);
}

function saveUserLandedTime() {
  return axios.post(api.SAVE_USER_LANDED);
}

function saveUserSelectedData() {
  return axios.post(api.SAVE_USER_SELECTED);
}

export default {
  login,
  isLoggedIn,
  setAuthorizationToken
  register,
  getTrainings,
  getQuestion,
  saveTest,
  saveAnswer,
  _getUserFromToken,
  getTests,
  getNewRefUsersData,
  getTestsAndReattempts,
  getTestsDataByMonth,
  getTestsResult,
  getUser,
  createBadge,
  updateBadge,
  addFeedback,
  loginDemoUser,
  subscribeToNewsLetters,
  saveUserLandedTime,
  saveUserSelectedData
}
