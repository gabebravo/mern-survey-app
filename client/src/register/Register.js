import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './register_actions'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Card } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
require('flexboxgrid')

// NOTES : the data that is passed in the request needs to be formatted
// like this : {name: "Jerry Berry", email: "JB123@gmail.com", password: "jearbear"}

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

class Register extends Component {

  state = {
    isOpen: false,
    modalTitle: null,
    modalBody: null, 
    modalButton: null, 
    shouldLinkToHomepage: true
  }

  handleTextInput = event => {
    this.props.setRegisterForm(event.target.id, { [`${event.target.id}`]: event.target.value });
    this.isValid(this.props.registerForm);
  }

  isValid = ({ firstName, lastName, email, password }) => {
    if( firstName.length === 0 || lastName.length === 0 || 
      email.length === 0 || password.length === 0 ) {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  }
  
  handleSave = () => {
    // make the post request to the api
    const { firstName, lastName, email, password } = {...this.props.registerForm};
    const postBody = { name: `${firstName} ${lastName}`, email, password };

    axios.post('/user', postBody)
    .then( response => {
      if(response.data.success){
        this.setState({ 
          isOpen: !this.state.isOpen,
          modalTitle: "Success",
          modalBody: response.data.message,
          modalButton: "Login", 
          shouldLinkToHomepage: true
        });
      } else if (!response.data.success){
        this.setState({ 
          isOpen: !this.state.isOpen,
          modalTitle: "Error",
          modalBody: response.data.message, 
          modalButton: "OK", 
          shouldLinkToHomepage: false
        });
      }
      this.props.resetRegisterForm();
    })
    .catch( response => {
      if(!response.data.success){
        this.setState({ 
          isOpen: !this.state.isOpen,
          modalTitle: "Error",
          modalBody: "We were unable to regiter the user. Please try again.",
          modalButton: "OK", 
          shouldLinkToHomepage: false
        });
        this.props.resetRegisterForm();
      }
    });
  }

  render() { // this.state.shouldLinkToHomepage
    const actions = this.state.shouldLinkToHomepage ?
    [
      <Link to={'/'}>
        <FlatButton
          label={this.state.modalButton || "Login"}
          primary={true}
        />
      </Link>
    ] :
    [
      <FlatButton
        label={this.state.modalButton || "Login"}
        primary={true}
        onClick={ () => this.setState({ isOpen: !this.state.isOpen }) }
      />
    ] 

    const { firstName, lastName, email, password } = this.props.registerForm
    return (
      <div className="row center-xs" style={styles.form}>
        <div className="col-xs-12 col-sm-6">
          <Card>
            <AppBar
              title={<span className="form-title">Register Now Below</span>}
              showMenuIconButton={false}
            />
            <div style={styles.inputs}>
              <TextField 
                type="text"
                value={firstName}
                errorText={ firstName.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextInput}
                id="firstName" name="firstName" 
                hintText="First Name"
                floatingLabelText="Enter First Name"
              /><br />
              <TextField 
                type="text"
                value={lastName}
                errorText={ lastName.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextInput}
                id="lastName" name="lastName"
                hintText="Last Name"
                floatingLabelText="Enter Last Name"
              /><br />
              <TextField 
                type="text"
                value={email}
                errorText={email.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextInput}
                id="email" name="email"
                hintText="Email"
                floatingLabelText="Enter Email"
              /><br />
              <TextField
                type="text"
                value={password}
                errorText={ password.length === 0 ? "This field is required" : "" }
                onChange={this.handleTextInput}
                id="password" name="password"
                hintText="Password" 
                floatingLabelText="Enter Password"
              />
            </div>
            <div style={styles.btnPadding}>
              <Link to={'/'}><RaisedButton label="Return" secondary={true} style={styles.registerBtn}/></Link>
              <RaisedButton disabled={ firstName.length === 0 || lastName.length === 0 || 
                email.length === 0 || password.length === 0 ? true : false } 
                onClick={this.handleSave} label="Save" secondary={true} style={styles.registerBtn}/>
            </div>
          </Card>
        </div>
        <Dialog
          title={this.state.modalTitle}
          actions={actions}
          modal={true}
          open={this.state.isOpen}>
          {this.state.modalBody}
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = ({ registerForm }) => ({ registerForm })
export default connect(mapStateToProps, actions)(Register)

