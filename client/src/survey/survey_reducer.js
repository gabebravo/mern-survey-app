import { SET_SURVEY_FORM, SET_SURVEY_EXP_DATE } from './survey_action'

export const surveyForm = ( state = {
  name: '', description: '', surveyItem1: '', surveyItem2: '', 
  surveyItem3: '', surveyItem4: '', surveyItem5: '', stats: {}, expiration: {} 
}, action ) => {
  switch(action.type) {
    case SET_SURVEY_FORM : 
    const { key, dataObj } = action;
      return {...state, [`${key}`]: dataObj[`${key}`]}
    case SET_SURVEY_EXP_DATE : 
    return {...state, expiration: action.date}
    default: 
      return state;
  }
}