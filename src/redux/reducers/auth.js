import {authTypes} from '../types/auth';

const initialState = {
  loggedIn: false,
  token: null,
  role: null
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.LOGIN_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.LOGIN_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.LOGIN_ADMIN_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.LOGIN_ADMIN_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.LOGIN_ADMIN_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.REGISTER_CANDIDATE_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.REGISTER_CANDIDATE_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.REGISTER_CANDIDATE_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.REGISTER_EMPLOYER_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.REGISTER_EMPLOYER_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.REGISTER_EMPLOYER_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.RESET_PASSWORD_EMAIL_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.RESET_PASSWORD_EMAIL_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.RESET_PASSWORD_EMAIL_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.RESET_PASSWORD_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.RESET_PASSWORD_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.RESET_PASSWORD_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.CHANGE_PASSWORD_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.CHANGE_PASSWORD_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.CHANGE_PASSWORD_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.ACTIVATION_REQUEST: {
      return {...state, isFetching: true};
    }

    case authTypes.ACTIVATION_REQUEST_SUCCESS: {
      return {...state, isFetching: false, data: action.payload.data}
    }

    case authTypes.ACTIVATION_REQUEST_FAIL: {
      return {...state, isFetching: false, error: action.payload.data};
    }

    case authTypes.LOGOUT: {
      return {...state};
    }

    default:
      return state;
  }
};

export default Auth;