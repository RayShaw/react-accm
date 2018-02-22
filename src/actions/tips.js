import { SHOW_TIPS, DISMISS_TIPS } from './actionTypes'

export function showTips(message) {
  return {
    type: SHOW_TIPS,
    tips: {
      show: true,
      message
    }
  }
}

export function dismissTips() {
  return {
    type: DISMISS_TIPS,
    tips: {
      show: false
    }
  }
}