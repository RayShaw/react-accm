import { FETCH_STARTED, SIGNIN_SUCCESS, FETCH_FAILURE } from '../actions/actionTypes'

/** action 创建函数 */

export function fetchLoginStarted() {
  return {
    type: FETCH_STARTED
  }
}

export function fetchLoginSuccess(result) {
  return {
    type: SIGNIN_SUCCESS,
    result
  }
}

export function fetchLoginFailure(error) {
  return {
    type: FETCH_FAILURE,
    error
  }
}

export function loginSubmit(formData) {
  // return {
  //   type: SIGNIN_SUCCESS,
  //   formData: formData
  // }
  return (dispatch) => {
    console.log(formData);
    const cityCode = 101010100;
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    dispatch(fetchLoginStarted());

    return fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }

      response.json().then((responseJson) => {
        dispatch(fetchLoginSuccess(responseJson.weatherinfo));
      }).catch((error) => {
        dispatch(fetchLoginFailure(error));
      });
    }).catch((error) => {
      dispatch(fetchLoginFailure(error));
    });
  }
}