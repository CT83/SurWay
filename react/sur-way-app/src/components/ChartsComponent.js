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
        },
        working_hours_data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
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
            <div>
                <Box >
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

                <Box>
                    <Line ref="chart" data={this.state.working_hours_data} />
                </Box>
            </div>
        );
    }
}