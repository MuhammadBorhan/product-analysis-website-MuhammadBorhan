import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

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
            "sell": 455423,
            "revenue": 324500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 145726,
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

    const pieData1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const pieData2 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];
    return (
        <div className='grid grid-cols-2 px-16 py-8'>
            <div>
                <LineChart width={500} height={500} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div className='mx-auto'>
                <PieChart width={400} height={400}>
                    <Pie data={pieData1} dataKey="value" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" />
                    <Pie data={pieData2} dataKey="value" cx="50%" cy="50%" innerRadius={80} outerRadius={160} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;