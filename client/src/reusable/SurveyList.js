import React from 'react'
import Spinner from '../reusable/Spinner'
import SurveyItem from '../reusable/SurveyItem'

const styles = {
  root: { 
    width: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center' 
  }
}

const printSurveys = arr => {
  return arr.map( (survey, index) => {
    return (
      <SurveyItem key={index} survey={survey} />
    )
  })
}

const SurveyList = ({ surveys, isAdmin }) => {
  const surveyData = Array.isArray(surveys) ? printSurveys(surveys, isAdmin): <Spinner />;
  return (
    <div style={styles.root}>{surveyData}</div>
  )
}

export default SurveyList
