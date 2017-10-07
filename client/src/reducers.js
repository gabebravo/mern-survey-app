// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { registerForm } from './register/register_reducer'
import { loginForm, userData } from './login/login_reducer'
import { surveys } from './dashboard/dashboard_reducer'

 export default combineReducers({ registerForm, loginForm, userData, 
    surveys });

