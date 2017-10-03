import { SET_LOGIN_FORM, RESET_LOGIN_FORM, } from './login_actions'

export const loginForm = (state = {
    email: '', password: ''
  }, action) => {
  switch(action.type){
    case SET_LOGIN_FORM :
      return {...state, [`${action.key}`]: action.formObj[`${action.key}`]}
    case RESET_LOGIN_FORM :
      return Object.assign({}, {}, { email: '', password: '' });
    default : return state;
  }
}