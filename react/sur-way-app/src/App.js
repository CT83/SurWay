import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import ThanksComponent from './components/ThanksComponent';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BackGroundImage from '../src/assets/images/bg-2.jpg';
import Grid from '@material-ui/core/Grid';



class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    const classes = {
      card: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    }
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Router>
        <div className='App'>
          <Header />
          <Box color="white"
            style={{
              backgroundImage: `url(${BackGroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              paddingBottom: '30px', paddingTop: '20px'
            }}>

            <h1>Welcome to SurWay!</h1>
            <h3>SurWay is a polling website dedicated to Cab Drivers.</h3>
            <h3>Drivers can report their earnings, all of the data is stored anonymously and then can be later used to generate useful insights.</h3>

          </Box>
          <Grid container justify="center" style={{
            paddingBottom: '30px', paddingTop: '20px'
          }}>

            <Box width={1 / 4}>
              <Card className={classes.card} >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Complete the Survey!
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    What does your day as a cab driver look like?
                  </Typography>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <React.Fragment>
                        <SurveyForm />
                      </React.Fragment>
                    )}
                  />
                  <Route path='/thanks' component={ThanksComponent} />

                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>


        </div >
      </Router>
    )
  }

}

export default App;
