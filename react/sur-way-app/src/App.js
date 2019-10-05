import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { working_hours: 10, work_days_in_week: 5, company: 'uber' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert(this.state.working_hours + this.state.company+this.state.work_days_in_week)
    event.preventDefault()
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Container fixed>

          <form onSubmit={this.handleSubmit}>

            <label>
              How many hours a day do I work?
              <input
                type="number"
                defaultValue={this.state.working_hours}
                onChange={this.handleInputChange}
                name="working_hours"
              />
            </label>

            <br></br>

            <label>
              How many days a week do I work?
              <input
                type="number"
                defaultValue={this.state.work_days_in_week}
                onChange={this.handleInputChange}
                name="work_days_in_week"
              />
            </label>
            <br></br>

            <label>
              Company that I work for?
          <select value={this.state.value} defaultValue={this.state.company} onChange={this.handleInputChange} name='company'>
                <option value="other">Other</option>
                <option value="uber">Uber</option>
                <option value="ola">Ola</option>
              </select>
            </label>

            <br></br>

            <Button variant="contained" type="submit" color="primary">
              Submit
        </Button>

          </form>
        </Container>
      </div >
    )
  }

}

export default App;
