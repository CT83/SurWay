import React, { PureComponent } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import Axios from 'axios'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
        working_hours_data: {
            labels: ["Chocolate", "Vanilla", "Strawberry"],
            datasets: [
                {
                    label: "Blue",
                    backgroundColor: "blue",
                    data: [3, 7, 4]
                },
                {
                    label: "Red",
                    backgroundColor: "red",
                    data: [4, 3, 5]
                },
                {
                    label: "Green",
                    backgroundColor: "green",
                    data: [7, 2, 6]
                }
            ]
        }
    }

    componentDidMount() {
        const url = "http://sur-way.herokuapp.com/cabbie-surveys-summary";
        Axios.get(url)
            .then(response => {
                console.log(response.data[0].avg_work_days_in_week);
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

                    // working_hours_data: {
                    //     labels: response.data[0].company_names,
                    //     datasets: [
                    //         {
                    //             label: 'Average - Working Hours',
                    //             data: response.data[0].company_data,
                    //         }]
                    // }
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

                    <Card style={{ margin: 20 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                How many hours a day do you work?
                            </Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography color="textSecondary">
                                I genereally work <strong>{this.state.data[0].avg_working_hours.toFixed(2)}</strong> hours a day.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card style={{ margin: 20 }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                How many days a week do you work?
                            </Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography color="textSecondary">
                                I genereally work <strong>{this.state.data[0].avg_work_days_in_week.toFixed(2)}</strong> days a week.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card style={{ margin: 20 }}>
                        <CardContent>
                            <Bar
                                data={this.state.chartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    aspectRatio: 1,
                                    title: {
                                        display: true,
                                        text: "Number of Drivers",
                                        fontSize: 25
                                    },
                                    legend: {
                                        display: true,
                                        position: 'right'
                                    }
                                }}
                            />
                        </CardContent>
                    </Card>



                </Box>
            </div>
        );
    }
}