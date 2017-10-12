import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  button: {
    marginLeft: 15, 
    width: '7.5rem'
  }
};

export class ActionButton extends Component {

  userAlreadyVoted = (users, email) => users.filter( user => user.id === email )

  render() {
    let button = '';
    const { surveyStats, numberOfVotes, voters, isAdmin } = this.props;
    if( isAdmin && numberOfVotes === 0 ) { 
      button = <RaisedButton style={styles.button}
      label="Delete" secondary={true}/>
    } else if ( !isAdmin ) {
      const [userHasVoted] = this.userAlreadyVoted(voters, this.props.userData.email)
      if( !userHasVoted ) {
        button = <RaisedButton style={styles.button}
        label="Vote" secondary={true}/>
      }
    }
    return (
      <div>{button}</div>
    )
  }
}

const mapStateToProps = ({ userData }) => ({ userData })
export default connect(mapStateToProps, null)(ActionButton)
