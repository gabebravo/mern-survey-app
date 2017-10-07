import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from './register_actions'
import axios from 'axios'
import SurveyForm from './SurveyForm'
import SurveyModal from './SurveyModal'

export class Survey extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
        <SurveyModal />
      </div>
    )
  }
}

export default Survey
