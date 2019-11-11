import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import ThanksComponent from './components/ThanksComponent';
import Box from '@material-ui/core/Box';

import BackGroundImage from '../src/assets/images/bg-2.jpg';

class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
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

        </div >
      </Router>
    )
  }

}

export default App;
