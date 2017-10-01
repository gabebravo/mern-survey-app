import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './login_actions'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Card } from 'material-ui/Card'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
require('flexboxgrid')

const styles = {
  form: {
    marginTop: '12%'
  }, 
  inputs: {
    paddingTop: '1rem', paddingBottom: '1.5rem'
  }, 
  loginBtn: {
    width: '16rem'
  }, 
  btnPadding: {
    paddingBottom: '1rem'
  }
}

class Login extends Component {

  state = {
    isOpen: false,
    modalTitle: null,
    modalBody: null,
    isAuthenticated: false
  }

  toggleModal = () => {
    this.setState({isOpen: !this.state.isOpen });
  };

  handleTextInput = event => {
    this.props.setLoginForm(event.target.id, { [`${event.target.id}`]: event.target.value });
  }

  handleLogin = () => {
    const { email, password } = {...this.props.loginForm};
    const postBody = { email, password };

    axios.post('/user/authenticate', postBody)
    .then( response => {
      if(!response.data.success){
        this.setState({ 
          isOpen: !this.state.isOpen,
          modalTitle: "Error",
          modalBody: response.data.message
        });
        this.props.resetLoginForm();
      } else if (response.data.success) {
        this.setState({ 
          isOpen: !this.state.isOpen,
          modalTitle: "Success",
          modalBody: response.data.message, 
          isAuthenticated: true
        });
        this.props.resetLoginForm();
      }
    })
    .catch( response => {
      this.setState({ 
        isOpen: !this.state.isOpen,
        modalTitle: "Error",
        modalBody: "We were unable to authenticate those credentials. Please try again."
      });
      this.props.resetLoginForm();
    });
  }

  render() {
    const actions = this.state.isAuthenticated ?
    [
      <Link to={'/dashboard'}>
        <FlatButton
          label={this.state.modalButton || "OK"}
          primary={true}
        />
      </Link>
    ] :
    [
      <FlatButton
        label={this.state.modalButton || "OK"}
        primary={true}
        onClick={ () => this.setState({ isOpen: !this.state.isOpen }) }
      />
    ] 
    const { email, password } = this.props.loginForm
    return (
      <div className="row center-xs" style={styles.form}>
        <div className="col-xs-12 col-sm-6">
          <Card>
            <AppBar
              title={<span className="form-title">Login to View and Take Surveys</span>}
              showMenuIconButton={false}
            />
            <div style={styles.inputs}>
              <TextField 
                type="text"
                value={email}
                hintText="Email"
                floatingLabelText="Enter Email"
                onChange={this.handleTextInput}
                id="email" name="email"
                //errorText={ firstName.length === 0 ? "This field is required" : "" }
              /><br />
              <TextField 
                type="text"
                value={password}
                hintText="password"
                floatingLabelText="Enter Password"
                onChange={this.handleTextInput}
                id="password" name="password"
                //errorText={ firstName.length === 0 ? "This field is required" : "" }
              />
            </div>
            <div style={styles.btnPadding}>
              <RaisedButton onClick={this.handleLogin} label="Login" secondary={true} style={styles.loginBtn}/>
            </div>
            <div style={styles.btnPadding}>
              <Link to={'/register'}><FlatButton label="Register Now" primary={true} /></Link>
              <FlatButton label="Forgot Password" primary={true} />
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

const mapStateToProps = ({ loginForm }) => ({ loginForm })

export default connect(mapStateToProps,actions)(Login)
