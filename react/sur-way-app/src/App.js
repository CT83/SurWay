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
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ username: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.username)
    event.preventDefault()
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Container fixed>

          <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              defaultvalue={this.state.username}
              onChange={this.handleChange}
            />

            <Button variant="contained" type="submit" color="primary">
              Hello World
        </Button>

          </form>
        </Container>
      </div>
    )
  }

}

export default App;
