import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 442241,
            "revenue": 610401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 555423,
            "revenue": 324500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 45726,
            "revenue": 567010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 334529,
            "revenue": 440405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 224601,
            "revenue": 650900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 234670,
            "revenue": 361000
        }
    ];
    return (
        <div>
            <LineChart width={500} height={500} data={data}>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis dataKey={'investment'}></YAxis>
            </LineChart>
        </div>
    );
};

export default Dashboard;