// ACTIONS & CREATORS FOR LOGIN FORM
export const SET_LOGIN_FORM = 'SET_LOGIN_FORM';
export const setLoginForm = (key, formObj) => ({
  type: SET_LOGIN_FORM, key, formObj
});

export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM';
export const resetLoginForm = () => ({
  type: RESET_LOGIN_FORM,
})