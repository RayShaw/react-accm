import { SIGNIN_SUCCESS } from '../actions/login';
import { assign } from 'lodash';

const initialState = {
  data: {},
  success: false
}

export function login(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return assign({}, state, {
        data: action.payload,
        success: true
      });
    default:
      return state;
  }
}