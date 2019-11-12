import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Axios from 'axios'
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

        const { classes } = this.props;
        const padding = {
            margin: "10px",
        };

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/thanks' />;
        }

        this.state.companies = {
            'uber': 'Uber', 'ola': "Ola", 'meru': "Meru", 'carzonrent': "Carz On Rent", 'savaaricarrentals': "Savaari Car Rentals",
            'tabcab': "Tab Cab", 'megacabs': "Mega Cabs", 'ntltaxi': "Ntl Taxi", 'mytaxiindia': "My Taxi India"
        }

        return (

            <Box width={1 / 3}>
                <Paper >
                    <Card className={classes.card} >
                        <CardContent>

                            <Container fixed>
                                <Typography variant="h5" component="h2">
                                    Complete the Survey!
                  </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    What does your day as a cab driver look like?
                  </Typography>

                                <form onSubmit={this.handleSubmit}>

                                    <div>
                                        <TextField
                                            id="working_hours_txt"
                                            className={classes.textField}
                                            label="How many hours a day do you work?"
                                            margin="normal"
                                            defaultValue={this.state.working_hours}
                                            onChange={this.handleInputChange}
                                            name="working_hours"
                                            type="number"
                                            style={{ padding: '20px' }}
                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            id="working_days_txt"
                                            className={classes.textField}
                                            label="How many days a week do you work?"
                                            margin="normal"
                                            defaultValue={this.state.work_days_in_week}
                                            onChange={this.handleInputChange}
                                            name="working_days"
                                            type="number"
                                            style={{ padding: '20px' }}
                                        />
                                    </div>
                                    <div>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="company-drop-down-lab">What company do you work with?</InputLabel>
                                            <Select
                                                labelId="company-drop-down-lab"
                                                id="demo-simple-select"
                                                value={"Ubser"}
                                                onChange={this.handleInputChange}
                                                autoWidth={true}
                                                style={{minWidth: '150px'}}
                                            >
                                                {Object.keys(this.state.companies).map((key, index) => (
                                                    <MenuItem value={key}>{this.state.companies[key]} </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </div>

                                    <label>
                                        Company that I work for?
          <select value={this.state.value} defaultValue={this.state.company} onChange={this.handleInputChange} name='company'
                                            style={padding}>
                                            <option value="other">Other</option>
                                            {Object.keys(this.state.companies).map((key, index) => (
                                                <option value={key}>{this.state.companies[key]} </option>
                                            ))}

                                        </select>
                                    </label>

                                    <br></br>

                                    <Button variant="contained" type="submit" color="primary">
                                        Submit
        </Button>

                                </form>
                            </Container>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Box>

        )
    }

}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

// This injects, with styles into survey form, ig?
export default withStyles(useStyles)(SurveyForm)
