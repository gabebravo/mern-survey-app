import React from 'react';
import { Link } from 'react-router-dom';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

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

const VotingSelector = () => (
  <div>
    <RadioButtonGroup style={styles.buttonGroup}
      name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light1"
        label="Option1"
        style={styles.radioButton}
      />
      <RadioButton
        value="light2"
        label="Option2"
        style={styles.radioButton}
      />
      <RadioButton
        value="light3"
        label="Option3"
        style={styles.radioButton}
      />
      <RadioButton
        value="light4"
        label="Option4"
        style={styles.radioButton}
      />
      <RadioButton
        value="light5"
        label="Option5"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
    <Link to={'/dashboard'}>
      <RaisedButton style={styles.button}
      label="Return" secondary={true}/>
    </Link>
    <Link to={'/dashboard'}>
      <RaisedButton style={styles.button}
      label="Cast Vote" secondary={true}/>
    </Link>
  </div>
);

export default VotingSelector;