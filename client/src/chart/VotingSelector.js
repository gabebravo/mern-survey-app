import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'

const styles = {
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 0 1rem 1rem'
  },
  radioButton: {
    maxWidth: '15%'
  },
  button: {
    marginLeft: 17, 
    width: '7.5rem'
  }
};

const ROOT_URL = 'http://localhost:3000/';

class VotingSelector extends Component {

  state = {
    btnChoice: null, 
    isOptionSelected: false
  }

  handleBtnChoice = topic => {
    this.setState({
      btnChoice: topic, 
      isOptionSelected: true
    })
  }

  incrementSurveyScore = (id, topic) => {
    // route : rootUrl/survey/vote/:id >> body : { "topic": "Bengal" }  
    return axios({
      method: 'post',
      url: `${ROOT_URL}survey/increment/${id}`,
      headers: {"x-access-token": sessionStorage.getItem('token')},
      data: { "topic": topic }
    })
  }
   
  addUserToSurvey = (id, email) => {
    // route : rootUrl/survey/vote/:id >> body : { "id": USER_ID }
    return axios({
      method: 'post',
      url: `${ROOT_URL}survey/vote/${id}`,
      headers: {"x-access-token": sessionStorage.getItem('token')},
      data: { "id": email }
    })
  }

  handleVoteSubmission = (id, email, topic) => {
    axios.all([this.incrementSurveyScore(id, topic), this.addUserToSurvey(id, email)])
    .then(axios.spread( (scoreInc, addUser) => {
      // dont need to print >> just need modal and re-direct
      console.log(scoreInc);
      console.log(addUser);
    }))
    .catch( response => {
      if(Error){ // this works!
        console.log('this failed') // dont need add modal error below
        // this.props.rootActions.setGenericModal({ 
        //   isOpen: !this.props.genericModal.isOpen,
        //   modalTitle: "Error",
        //   modalBody: "We were unable to save the survey. Please try again.",
        //   modalButton: "OK", 
        //   shouldLinkToDashboard: false
        // });
        // this.props.surveyActions.resetSurveyForm();
      }
    });
  }

  printButtonOptions = statsArr => {
    return statsArr.map( (topic, index) => {
      return (
        <RadioButton
          style={styles.radioButton}
          key={index}
          value={topic}
          label={topic}
          onClick={() => this.handleBtnChoice(topic)}
        />
      )
    })
  }

  render() {
    const { id, stats } = this.props.surveyData;
    const radioButtons = this.printButtonOptions( Object.keys(stats) );
    return (
      <div>
        <RadioButtonGroup style={styles.buttonGroup}
          name="shipSpeed" defaultSelected="not_light">
          {radioButtons}
        </RadioButtonGroup>
        <Link to={'/dashboard'}>
          <RaisedButton style={styles.button}
          label="Return" secondary={true}/>
        </Link>
        <RaisedButton style={styles.button}
          disabled={ !this.state.isOptionSelected ? true: false }
          label="Cast Vote" secondary={true} 
          onClick={ () => this.handleVoteSubmission(id, this.props.userData.email, this.state.btnChoice) }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ userData }) => ({ userData });
export default connect(mapStateToProps, null)(VotingSelector);