/** aciton 类型 */
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';


/** action 创建函数 */
export function loginSubmit(formData) {
  return {
    type: SIGNIN_SUCCESS,
    formData: formData
  }
}