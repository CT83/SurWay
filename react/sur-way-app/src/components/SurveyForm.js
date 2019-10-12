import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Axios from 'axios'
import { Redirect } from 'react-router-dom';

class SurveyForm extends Component {

    state = {
        working_hours: 10, work_days_in_week: 5, company: 'uber', redirect: false
    }

    constructor(props) {
        super(props)
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
        event.preventDefault()
        const url = "http://localhost:3000/cabbie-surveys";

        const data = {
            working_hours: this.state.working_hours,
            work_days_in_week: this.state.work_days_in_week,
            company: this.state.company,
        }

        Axios.post(url, data).then((res) => {
            console.log(data);
            this.setState({ redirect: true });

        }).catch((e) => {
            alert("Failed to Submit the form! - " + e)
        });
    }

    render() {

        const padding = {
            margin: "10px",
        };

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/thanks' />;
        }

        return (
            <Container fixed>

                <form onSubmit={this.handleSubmit}>

                    <label>
                        How many hours a day do I work?
              <input
                            type="number"
                            defaultValue={this.state.working_hours}
                            onChange={this.handleInputChange}
                            name="working_hours"
                            style={padding}
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
                            style={padding}
                        />
                    </label>
                    <br></br>

                    <label>
                        Company that I work for?
          <select value={this.state.value} defaultValue={this.state.company} onChange={this.handleInputChange} name='company'
                            style={padding}>
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
        )
    }

}

export default SurveyForm;