import React, { PureComponent } from 'react';
import {
    BarChart, Bar, ResponsiveContainer, AreaChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Axios from 'axios'

export default class ChartsComponent extends PureComponent {

    state = {
        data: [
            { avg_work_days_in_week: 99, avg_working_hours: 20, name: 'Others' }
        ]
    }

    componentDidMount() {
        const url = "http://localhost:3000/cabbie-surveys-summary";
        Axios.get(url)
            .then(response => {
                console.log(response.data[0].avg_work_days_in_week);
                this.state.data[0].avg_work_days_in_week = response.data[0].avg_work_days_in_week
                this.state.data[0].avg_working_hours = response.data[0].avg_working_hours
                this.state.data[0].company_breakdown = response.data[0].company_breakdown
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        console.log(this.state.avg_work_days_in_week);
        // const data = this.state.data;

        const data = this.state.data;

        return (
            <BarChart data={data} width={700} height={400}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avg_work_days_in_week" fill="#8884d8" />
                <Bar dataKey="avg_working_hours" fill="#82ca9d" />
            </BarChart>
        );
    }
}