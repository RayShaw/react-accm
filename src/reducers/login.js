import { FETCH_STARTED, LOGIN_SUCCESS, FETCH_FAILURE, LOGOUT } from '../actions/actionTypes';
import { assign } from 'lodash';

const initialState = {
  data: {},
  success: false
}

export function login(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED: {
      return { status: 'LOADING' };
    }
    case LOGIN_SUCCESS:
      return assign({}, state, {
        // data: action.result,
        success: action.result.success,
        userName: action.result.userName,
        token: action.result.token,
      });
    case FETCH_FAILURE: {
      return { status: 'FAILURE' };
    }
    case LOGOUT:
      return assign({}, state, {
        success: false
      })
    default:
      return state;
  }
}
