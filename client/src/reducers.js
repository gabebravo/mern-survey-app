// IMPORT COMBINEREDUCERS FROM REDUX 
import { combineReducers } from 'redux';
import { registerForm } from './register/register_reducer'
import { loginForm } from './login/login_reducer'

 export default combineReducers({ registerForm, loginForm });

