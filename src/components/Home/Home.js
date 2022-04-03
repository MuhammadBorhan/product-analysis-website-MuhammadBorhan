import React from 'react';
import logo from '../Home/rolex.jpeg';
import { useState, useEffect } from 'react'

const Home = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div className='grid grid-cols-4 px-16 items-center'>
            <div className='col-span-3'>
                <h2 className='text-5xl font-bold'>This is best watch</h2>
                <h2 className='text-5xl font-bold text-blue-500 mt-2'>What are you looking for</h2>
                <p className='w-3/4 mt-6 text-xl'>This is your best option for buying this watch. This is your best option for buying this watch. This is your best option for buying this watch.</p>
            </div>
            <div>
                <img className='rounded-lg' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Home;