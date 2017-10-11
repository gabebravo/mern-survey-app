import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './survey_action'
import { Link } from 'react-router-dom'
import { Card } from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker';
require('flexboxgrid')
// npm install moment@2.18.0 --save >> version 2.19 has weird locale bug
// const moment = require('moment');

const styles = {
  form: {
    marginTop: '7%'
  }, 
  inputs: {
    paddingTop: '1.5rem', paddingBottom: '1.5rem'
  }, 
  registerBtn: {
    width: '8rem', 
    margin: '5px'
  }, 
  btnPadding: {
    paddingBottom: '1rem'
  }
}

class SurveyForm extends Component {

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
    console.log({ name, description, stats, expiration })
  }

  render() {
    const { name, description, surveyItem1, surveyItem2, surveyItem3, 
        surveyItem4, surveyItem5, expiration } = this.props.surveyForm
    return (
      <div className="row center-xs" style={styles.form}>
        <div className="col-xs-12 col-sm-6">
          <Card>
            <AppBar
              title={<span className="form-title">Create New Survey</span>}
              showMenuIconButton={false}
            />
            <div style={styles.inputs}>
              <TextField 
                type="text"
                value={name}
                errorText={ name.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextField}
                id="name" name="name" 
                hintText="Survey Name"
                floatingLabelText="Enter Survey Name"
              /><br />
              <TextField 
                type="text"
                value={description}
                errorText={ description.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextField}
                id="description" name="description"
                hintText="Description"
                floatingLabelText="Enter Description"
              /><br />
              <TextField 
                type="text"
                value={surveyItem1}
                errorText={surveyItem1.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextField}
                id="surveyItem1" name="surveyItem1"
                hintText="Survey Item 1"
                floatingLabelText="Enter Survey Item"
              /><br />
              <TextField 
                type="text"
                value={surveyItem2}
                errorText={surveyItem2.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextField}
                id="surveyItem2" name="surveyItem2"
                hintText="Survey Item 2"
                floatingLabelText="Enter Survey Item"
              /><br />
              <TextField 
                type="text"
                value={surveyItem3}
                onChange={this.handleTextField}
                id="surveyItem3" name="surveyItem3"
                hintText="Survey Item 3"
                floatingLabelText="Enter Survey Item"
              /><br />
              <TextField 
                type="text"
                value={surveyItem4}
                onChange={this.handleTextField}
                id="surveyItem4" name="surveyItem4"
                hintText="Survey Item 4"
                floatingLabelText="Enter Survey Item"
              /><br />
              <TextField 
                type="text"
                value={surveyItem5}
                onChange={this.handleTextField}
                id="surveyItem5" name="surveyItem5"
                hintText="Survey Item 5"
                floatingLabelText="Enter Survey Item"
              /><br />
              <DatePicker style={styles.inputs}
                hintText="Survey Expiration Date"
                value={expiration}
                onChange={this.handleDatePicker}
              />
            </div>
            <div style={styles.btnPadding}>
              <Link to={'/'}><RaisedButton label="Return" secondary={true} style={styles.registerBtn}/></Link>
              <RaisedButton disabled={ name.length === 0 || description.length === 0 || 
                surveyItem1.length === 0 || surveyItem2.length === 0 || expiration === {} ? true : false } 
                onClick={this.handleSave} 
                label="Save" secondary={true} style={styles.registerBtn}/>
            </div> 
          </Card>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ surveyForm }) => ({ surveyForm })
export default connect(mapStateToProps, actions)(SurveyForm)
