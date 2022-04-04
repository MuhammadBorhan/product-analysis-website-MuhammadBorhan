import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

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
    const data1 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 442241,
            "revenue": 410401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 455423,
            "revenue": 324500
        },
        {
            "month": "May",
            "investment": 250000,
            "sell": 145726,
            "revenue": 567010
        },
        {
            "month": "Jun",
            "investment": 330000,
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
        <div className='grid grid-cols-2 px-16 py-4 items-center'>
            <div>
                <h3 className='text-indigo-500 font-bold text-xl text-center mb-4'>Month wise sell</h3>
                <LineChart width={500} height={500} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'investment'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>


            <div className='mx-auto'>
                <h3 className='text-indigo-500 font-bold text-xl text-center mb-4'>Investment vs Revenue</h3>
                <LineChart
                    layout="vertical"
                    width={500}
                    height={500}
                    data={data1}
                    margin={{
                        top: 20,
                        right: 10,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 'dataMax + 1000']} />
                    <YAxis dataKey="month" type="category" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="investment" stroke="#8884d8" />
                    <Line dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;