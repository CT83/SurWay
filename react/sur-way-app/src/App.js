import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import ThanksComponent from './components/ThanksComponent';
import * as CanvasJSReact from './assets/canvasjs.react';
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import Box from '@material-ui/core/Box';


class App extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Box color="text.primary" style={{ backgroundColor: '#cfe8fc', paddingBottom:'30px', paddingTop:'20px'}}>

            <h1>Welcome to SurWay!</h1>
            <p>SurWay is a polling website dedicated to Cab Drivers.</p>
            <p>Drivers can report their earnings, all of the data is stored anonymously and then can be later used to generate useful insights.</p>

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
