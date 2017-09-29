import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
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
  render() {
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
                hintText="Email"
                floatingLabelText="Enter Email"
              /><br />
              <TextField
                hintText="Password" 
                floatingLabelText="Enter Password"
              />
            </div>
            <div style={styles.btnPadding}>
              <RaisedButton label="Login" secondary={true} style={styles.loginBtn}/>
            </div>
            <div style={styles.btnPadding}>
              <Link to={'/register'}><FlatButton label="Register Now" primary={true} /></Link>
              <FlatButton label="Forgot Password" primary={true} />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login
