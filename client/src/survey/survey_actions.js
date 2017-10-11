export const SET_SURVEY_FORM = 'SET_SURVEY_FORM';
export const setSurveyForm = (key, dataObj) => ({
  type: SET_SURVEY_FORM, key, dataObj
})

export const SET_SURVEY_EXP_DATE = 'SET_SURVEY_EXP_DATE';
export const setSurveyExpDate = date => ({
  type: SET_SURVEY_EXP_DATE, date
})

export const RESET_SURVEY_FORM = 'RESET_SURVEY_FORM';
export const resetSurveyForm = () => ({
  type: RESET_SURVEY_FORM, 
})

export const SET_SURVEY_MODAL = 'SET_SURVEY_MODAL';
export const setSurveyModal = surveyModalData => {
  return {
    type: SET_SURVEY_MODAL, surveyModalData
  }
}

export const RESET_SURVEY_MODAL = 'RESET_SURVEY_MODAL';
export const resetSurveyModal = () => {
  return {
    type: RESET_SURVEY_MODAL,
  }
}

export const TOGGLE_SURVEY_MODAL = 'TOGGLE_SURVEY_MODAL';
export const toggleSurveyModal = modalFlag => {
  return {
    type: TOGGLE_SURVEY_MODAL, modalFlag
  }
}