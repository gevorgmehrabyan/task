import {authTypes} from '../types/auth';
import Service from '../service';
import { ROLE, TOKEN } from '../../utils/constants';

const setAccessKey = (accessToken, accessRole) => {
  localStorage.setItem(TOKEN, accessToken);
  localStorage.setItem(ROLE, accessRole);
  Service.setAuthorizationToken(null, accessToken, accessRole);
};

const login = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: authTypes.LOGIN_REQUEST});
    Service.login({email, password}).then((res) => {
      setAccessKey(res.data.accessToken);
      dispatch({type: authTypes.LOGIN_REQUEST_SUCCESS, payload: res})
      dispatch({type: authTypes.SET_LOGIN_STATE, loggedIn: true})
    }).catch((error) => {
      dispatch({type: authTypes.LOGIN_REQUEST_FAIL, payload: error.response})
    })
  };
};

const loginDemoUser = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch({type: authTypes.LOGIN_REQUEST});
      Service.loginDemoUser().then((res) => {
        setAccessKey(res.data.accessToken);
        dispatch({type: authTypes.LOGIN_REQUEST_SUCCESS, payload: res})
        dispatch({type: authTypes.SET_LOGIN_STATE, loggedIn: true})
        resolve(true);
      }).catch((error) => {
        dispatch({type: authTypes.LOGIN_REQUEST_FAIL, payload: error.response})
        reject(error.response);
      })
    });
  }
}

// const register = (data) => {
//   return (dispatch) => {
//     dispatch({type: authTypes.REGISTER_REQUEST});
//     Service.register(data).then((res) => {
//       setAccessKey(res.data.accessToken);
//       dispatch({type: authTypes.REGISTER_REQUEST_SUCCESS, payload: res})
//       dispatch({type: authTypes.SET_LOGIN_STATE, loggedIn: true, user: Service._getUserFromToken(res.data.accessToken)})
//     }).catch((error) => {
//       dispatch({type: authTypes.REGISTER_REQUEST_FAIL, payload: error.response})
//     })
//   };
// };

const logOut = () => {
  return (dispatch) => {
    dispatch({type: authTypes.LOGOUT});
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(ROLE);
  };
};

export default {login, register, logOut, loginDemoUser}