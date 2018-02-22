import { FETCH_STARTED, SIGNIN_SUCCESS, FETCH_FAILURE } from '../actions/actionTypes';
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
    case SIGNIN_SUCCESS:
      return assign({}, state, {
        data: action.result,
        success: true
      });
    case FETCH_FAILURE: {
      return { status: 'FAILURE' };
    }
    default:
      return state;
  }
}
