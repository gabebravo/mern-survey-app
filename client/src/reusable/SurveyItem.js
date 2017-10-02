import Paper from 'material-ui/Paper';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#26c6da',
    textShadow: '0 0 0.125px black'
  },
  paper: {
    marginBottom: '1rem'
  },
  stats: {
    display: 'flex', 
    flexWrap: 'wrap',
  }, 
  chip: {
    margin: 4,
  }
};

 const SurveyItem = ({ name, description, stats }) => (
    <div style={styles.root}>
      <Paper style={styles.paper}>
        <Card>
          <CardTitle style={styles.title}
            titleColor="white"
            subtitleColor="white"
            title={surveyTitle} 
            subtitle={surveyDescription} />
          <CardText>
            <div style={styles.stats}>
              <Chip style={styles.chip}>
                Michaelangelo: 2
              </Chip>
              <Chip style={styles.chip}>
                Donatello : 2
              </Chip>
              <Chip style={styles.chip}>
                Leonardo : 2
              </Chip>
              <Chip style={styles.chip}>
                Raphael : 1
              </Chip>
            </div>
          </CardText>
          <CardActions>
            <RaisedButton label="View Stats" secondary={true}/>
          </CardActions>
        </Card>
      </Paper>
  </div>
);

  export default SurveyItem