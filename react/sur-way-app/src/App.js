import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

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
      <form onSubmit={this.handleSubmit}>

        <input
          type="text"
          defaultvalue={this.state.username}
          onChange={this.handleChange}
        />


        {/* <input type="submit" value="Submit" /> */}

        <Button variant="contained" type="submit" color="primary">
          Hello World
        </Button>

      </form>
    )
  }

}

export default App;
