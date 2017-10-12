import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../reusable/Spinner'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import ActionButton from './ActionButton';

const styles = {
  title: {
    backgroundColor: '#26c6da',
  },
  stats: {
    display: 'flex', 
    flexWrap: 'wrap',
  }, 
  chip: {
    margin: 4,
  }, 
  button: {
    marginLeft: 15, 
    width: '7.5rem'
  }
};

const printSurveyStats = statsObj => {
  let SurveyItems = [];
  for ( let key in statsObj ) {
    SurveyItems.push(
      <Chip key={key} style={styles.chip}>
        {`${key} ${statsObj[key]}`}
      </Chip>
    )
  }
  return SurveyItems;
}

 const SurveyItem = ({ survey, isAdmin }) => {
   const { id, name, description, stats, length, users } = survey;
   const statsItems = typeof stats === 'object' ? printSurveyStats(stats) : <Spinner />
   return (
    <Card className="dashboard-card">
      <CardTitle style={styles.title}
        titleColor="white"
        subtitleColor="white"
        title={name} 
        subtitle={description} />
      <CardText>
        <div style={styles.stats}>{statsItems}</div>
      </CardText>
      <CardActions style={styles.stats}>
        <Link to={`/chart/${id}`}>
          <RaisedButton style={styles.button}
          label="Details" secondary={true}/>
        </Link>
        <ActionButton 
          surveyStats={stats} 
          numberOfVotes={length} 
          voters={users}
          isAdmin={isAdmin}
        />
      </CardActions>
    </Card>
   )
 }

export default SurveyItem
