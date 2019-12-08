import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import ThanksComponent from './components/ThanksComponent';
import Box from '@material-ui/core/Box';
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
              paddingBottom: '30px', paddingTop: '20px', height: "35vh",paddingLeft:"25px",paddingRight:"25px"
            }}>

            <h1>Welcome to SurWay!</h1>
            <h3>SurWay is a polling website dedicated to Cab Drivers.</h3>
            <h3>Drivers can report their earnings, all of the data is stored anonymously and then can be later used to generate useful insights.</h3>

          </Box>
          <Grid container justify="center" style={{
            paddingBottom: '30px', paddingTop: '20px',
            height: "75vh",
            background: '#F5F5F5',
          }}>

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

          </Grid>


        </div>
      </Router>
    )
  }

}

export default App;
