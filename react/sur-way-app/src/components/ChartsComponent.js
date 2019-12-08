import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import Axios from 'axios'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
export default class ChartsComponent extends PureComponent {


    state = {
        data: [
            { avg_work_days_in_week: 99, avg_working_hours: 20 }
        ],
        displayTitle: "Test Title",
        chartData: {
            labels: [],
            datasets: [
                {
                    label: 'Drivers',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                    ]
                }]
        },
    }

    componentDidMount() {
        const url = "https://sur-way.herokuapp.com/cabbie-surveys-summary";
        Axios.get(url)
            .then(response => {
                this.state.data[0].avg_work_days_in_week = response.data[0].avg_work_days_in_week
                this.state.data[0].avg_working_hours = response.data[0].avg_working_hours
                this.state.data[0].company_breakdown = response.data[0].company_breakdown

                this.setState({
                    chartData: {
                        labels: response.data[0].company_names,
                        datasets: [
                            {
                                label: 'Drivers',
                                data: response.data[0].company_data,
                            }]
                    },
                })
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        return (
            <div>
                <Box>

                    <Card style={{ margin: 10 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                How many hours a day do you work?
                            </Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography color="textSecondary">
                                Others generally work <strong>{this.state.data[0].avg_working_hours.toFixed(2)}</strong> hours a day.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card style={{ margin: 10 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                How many days a week do you work?
                            </Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography color="textSecondary">
                                Others generally work  <strong>{this.state.data[0].avg_work_days_in_week.toFixed(2)}</strong> days a week.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card style={{ margin: 10, }}>
                        <CardContent>
                            <Box height="50vh">
                                <Bar data={this.state.chartData}
                                    options={{
                                        maintainAspectRatio: false,
                                        title: {
                                            display: true,
                                            text: "Number of Drivers",
                                            fontSize: 25
                                        },
                                        legend: {
                                            display: false,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        );
    }
}