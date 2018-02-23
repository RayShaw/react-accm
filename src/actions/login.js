import { FETCH_STARTED, LOGIN_SUCCESS, FETCH_FAILURE, LOGOUT } from '../actions/actionTypes';
import { showTips } from './tips'

/** action 创建函数 */

export function fetchLoginStarted() {
  return {
    type: FETCH_STARTED
  }
}

export function fetchLoginSuccess(result) {
  return {
    type: LOGIN_SUCCESS,
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
  //   type: LOGIN_SUCCESS,
  //   formData: formData
  // }
  return (dispatch) => {
    console.log(formData);

    dispatch(fetchLoginStarted());


    // for text
    // const cityCode = 101010100;
    // const apiUrl = `/data/cityinfo/${cityCode}.html`;

    /*  return fetch(apiUrl).then((response) => {
       if (response.status !== 200) {
         throw new Error('Fail to get response with status ' + response.status);
       }
 
       response.json().then((responseJson) => {
         dispatch(fetchLoginSuccess(responseJson.weatherinfo));
         dispatch(showTips('Error Message'));
       }).catch((error) => {
         dispatch(fetchLoginFailure(error));
         dispatch(showTips('Error Message'));
       });
     }).catch((error) => {
       dispatch(fetchLoginFailure(error));
     }); */

    if (formData && formData.userName === 'superAdmin' && formData.password === '123456') {

      dispatch(fetchLoginSuccess({
        success: true,
        userName: formData.userName,
        token: '123456789'
      }));
    } else {
      dispatch(fetchLoginFailure({
        success: false,
      }));
      dispatch(showTips('Error Login Name or Password!'));
    }
  }
}


export function logout() {
  return {
    type: LOGOUT,
  }
}