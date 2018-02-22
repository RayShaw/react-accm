import { combineReducers } from 'redux';
import { login } from './login';
import { tips } from './tips';

const rootReducer = combineReducers({
  login,
  tips,
});


export default rootReducer;