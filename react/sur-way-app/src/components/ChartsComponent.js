import React, { PureComponent } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import Axios from 'axios'

export default class ChartsComponent extends PureComponent {


    state = {
        data: [
            { avg_work_days_in_week: 99, avg_working_hours: 20, name: 'Others' }
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
        }
    }

    componentDidMount() {
        const url = "http://localhost:3000/cabbie-surveys-summary";
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
                    }
                })
                this.state.chartData.labels = response.data[0].company_names;
                this.state.chartData.datasets[0].data = response.data[0].company_data;
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        return (

            <Box>
                <Bar
                    data={this.state.chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        aspectRatio: 1,
                        title: {
                            display: true,
                            text: "Results",
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </Box>

        );
    }
}