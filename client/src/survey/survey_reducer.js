import { SET_SURVEY_FORM, SET_SURVEY_EXP_DATE, RESET_SURVEY_FORM, 
      SET_SURVEY_MODAL, RESET_SURVEY_MODAL, TOGGLE_SURVEY_MODAL 
    } from './survey_actions'

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
    case RESET_SURVEY_FORM : 
      return {...state, 
        name: '', description: '', surveyItem1: '', surveyItem2: '', 
        surveyItem3: '', surveyItem4: '', surveyItem5: '', stats: {}, expiration: {}
      }
    default: 
      return state;
  }
}

export const surveyModal = ( state = { 
  isOpen: false, modalTitle: '', modalBody: '', 
    modalButton: '', shouldLinkToDashboard: false
}, action ) => {
  switch(action.type) {
    case SET_SURVEY_MODAL : 
      return action.surveyModalData
    case RESET_SURVEY_MODAL : 
      return { ...state, isOpen: false, modalTitle: '', modalBody: '', 
      modalButton: '', shouldLinkToDashboard: false }
    case TOGGLE_SURVEY_MODAL : 
      return { ...state, isOpen: action.modalFlag}
    default :
      return state;
  }
}