import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';
import logo from '../Home/rolex.jpeg';

const Home = () => {
    const [reviews] = useReview();
    const customrReview = reviews.slice(0, 3);
    return (
        <div>
            <div className='grid grid-cols-4 px-16 items-center'>
                <div className='col-span-3'>
                    <h2 className='text-4xl font-bold'>Welcome to RolexShop</h2>
                    <h2 className='text-4xl font-bold text-blue-500 mt-2'>Choose your favourite watch</h2>
                    <p className='w-3/4 mt-6 text-xl'>This is your best option for buying this watch. This is your best option for buying this watch. This is your best option for buying this watch.</p>
                </div>
                <div>
                    <img className='rounded-lg' src={logo} alt="" />
                </div>
            </div>


            <div className='mb-16'>
                <h2 className='text-3xl text-center font-bold mt-12'>Customer Reviews({customrReview.length})</h2>
                <div className='grid grid-cols-3 px-16 py-8'>
                    {
                        customrReview.map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/reviews'>
                        <button className='px-6 rounded-full py-1 bg-indigo-700 text-white'>See All Reviews</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;