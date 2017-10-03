import React, { Component } from 'react'
import Header from '../reusable/Header'
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import _ from 'lodash'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#26c6da',
  },
  card: {
    marginBottom: '1rem',
    width: '100%'
  },
  stats: {
    display: 'flex', 
    flexWrap: 'wrap',
  }, 
  chip: {
    margin: 4,
  }
};

export class Dashboard extends Component {

  componentDidMount(){
    axios.get('/survey', {
      headers: {"x-access-token": sessionStorage.getItem('token')}
    })
    .then( response => {
      if(response.data){
        const statsArr = _.transform(response.data[0].stats, (arr, val, key) => {
          arr.push({ key, val });
        }, []);
        console.log(statsArr)
      } 
    })
    .catch( response => {
      console.log('error', response.data)
    });
  }

/*
  description: "What is your favorite iceream?"
  name: "Favorite Icecream"
  stats: {Strawberry: 1, Vanilla: 1, Chocolate: 1}
  _id: "588f6436635496902a908ec0"
*/ 

  render() {

    return (
      <div style={styles.root}>
        <Header />
          <Card style={styles.card}>
            <CardTitle style={styles.title}
              titleColor="white"
              subtitleColor="white"
              title="Ninja Turtles" 
              subtitle="Which radical dude is your fave?" />
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
                <Chip style={styles.chip}>
                  Raphael : 1
                </Chip><Chip style={styles.chip}>
                  Raphael : 1
                </Chip>
              </div>
            </CardText>
            <CardActions>
              <RaisedButton label="View Stats" secondary={true}/>
            </CardActions>
          </Card>
        <Card style={styles.card}>
          <CardTitle style={styles.title}
            titleColor="white"
            subtitleColor="white"
            title="Ninja Turtles" 
            subtitle="Which radical dude is your fave?" />
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
      <Card style={styles.card}>
        <CardTitle style={styles.title}
          titleColor="white"
          subtitleColor="white"
          title="Ninja Turtles" 
          subtitle="Which radical dude is your fave?" />
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
    </div>
    )
  }
}

export default Dashboard
