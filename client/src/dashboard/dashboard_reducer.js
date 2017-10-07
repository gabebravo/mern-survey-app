import { SET_SURVEYS } from './dashboard_action'

export const surveys = (state = null, action) => {
  switch(action.type) {
    case SET_SURVEYS : 
      return action.surveys;
    default :
      return state;
  }
}