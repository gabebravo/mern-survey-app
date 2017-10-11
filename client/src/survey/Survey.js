import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './survey_actions'
import axios from 'axios'
import SurveyForm from './SurveyForm'
import SurveyModal from './SurveyModal'

export class Survey extends Component {

  toggleModal = flag => {
    this.props.toggleSurveyModal(flag);
  }

  handleTextField = event => {
    this.props.setSurveyForm(event.target.id, { [`${event.target.id}`]: event.target.value})
  }

  handleDatePicker = (event, date) => { // params are required
    this.props.setSurveyExpDate(date)
  }

  handleSave = () => {
    const { name, description, surveyItem1, surveyItem2, surveyItem3, 
      surveyItem4, surveyItem5, expiration } = {...this.props.surveyForm};
    const itemsArr = [ surveyItem1, surveyItem2, surveyItem3, 
      surveyItem4, surveyItem5 ];
    const stats = itemsArr.reduce( (obj, val) => {
      if( val.length > 0 ) { obj[val] = 0 }
      return obj;
    }, {})
    const postBody = { name, description, stats, expiration }

    axios({
      method: 'post',
      url: 'survey/create',
      headers: {"x-access-token": sessionStorage.getItem('token')},
      data: postBody
    })
    .then( response => {
      if(response.data.survey){
        this.props.setSurveyModal({ 
          isOpen: !this.props.surveyModal.isOpen,
          modalTitle: "Success",
          modalBody: response.data.message,
          modalButton: "OK", 
          shouldLinkToDashboard: true
        });
      } else {
        this.props.setSurveyModal({ 
          isOpen: !this.props.surveyModal.isOpen,
          modalTitle: "Error",
          modalBody: response.data.message, 
          modalButton: "OK", 
          shouldLinkToDashboard: false
        });
      }
      this.props.resetSurveyForm();
    })
    .catch( response => {
      if(Error){ // this works!
        this.props.setSurveyModal({ 
          isOpen: !this.props.surveyModal.isOpen,
          modalTitle: "Error",
          modalBody: "We were unable to save the survey. Please try again.",
          modalButton: "OK", 
          shouldLinkToDashboard: false
        });
        this.props.resetSurveyForm();
      }
    });
  }

  render() {
    const { modalTitle, isOpen, modalBody, 
        modalButton, shouldLinkToDashboard, } = this.props.surveyModal
    return (
      <div>
        <SurveyForm 
          surveyFormData={ this.props.surveyForm }
          handleTextInput={ this.handleTextField }
          handleDateInput={ this.handleDatePicker }
          handleSave={ this.handleSave }
        />
        <SurveyModal
          title={modalTitle}
          isOpen={isOpen}
          body={modalBody}
          handleToggle={this.toggleModal}
          shouldLinkToDashboard={shouldLinkToDashboard}
          modalBtn={modalButton}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ surveyForm, surveyModal }) => ({ surveyForm, surveyModal })
export default connect(mapStateToProps, actions)(Survey)
