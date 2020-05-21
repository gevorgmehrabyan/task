import {combineReducers} from 'redux';
import Auth from '../reducers/auth'

const rootReducer = combineReducers({
  Auth,
});

export default rootReducer;