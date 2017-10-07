import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './dashboard_action'
import Header from '../reusable/Header'
import LoginMessage from '../reusable/LoginMessage'
import SurveyList from '../reusable/SurveyList'
import axios from 'axios'
import _ from 'lodash'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
};

export class Dashboard extends Component {

  componentDidMount(){
    axios.get('/survey', {
      headers: {"x-access-token": sessionStorage.getItem('token')}
    })
    .then( response => {
      if(response.data){
        const statsArr = _.transform(response.data, (arr, val, key) => {
          arr.push({ id: val._id, name: val.name, description: val.description, stats: val.stats });
        }, []);
        this.props.setSurveys(statsArr);
      } 
    })
    .catch( response => {
      console.log('error', response.data)
    });
  }

  render() {
    return ( 
      !this.props.userData.isAuthenticated ? ( 
        <div style={styles.root}><LoginMessage /></div>
      ) : (
        <div style={styles.root}>
          <Header username={this.props.userData.username || ''} 
          isAdmin={this.props.userData.isAdmin || false} />
          <SurveyList surveys={this.props.surveys} isAdmin={this.props.userData.isAdmin} />
        </div>
      )
    )
  }
}

const mapStateToProps = ({ userData, surveys }) => ({ userData, surveys })
export default connect(mapStateToProps, actions)(Dashboard)
