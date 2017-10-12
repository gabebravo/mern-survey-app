import { SET_SURVEYS, DELETE_SURVEY } from './dashboard_action'

export const surveys = (state = null, action) => {
  switch(action.type) {
    case SET_SURVEYS : 
      return action.surveys;
    case DELETE_SURVEY :
      return [...state].filter( survey => survey.id !== action.id )
    default :
      return state;
  }
}