import { assign } from 'lodash';
import { SHOW_TIPS, DISMISS_TIPS } from '../actions/actionTypes';

const initialState = {
  message: 'Login error.',
  show: false
}

export function tips(tips = initialState, action) {
  switch (action.type) {
    case SHOW_TIPS:
      return assign({}, tips, action.tips);
    case DISMISS_TIPS:
      return assign({}, tips, action.tips);
    default:
      return tips;
  }
}