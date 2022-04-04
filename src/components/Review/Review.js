import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className='bg-green-700 text-white m-2 p-2 rounded'>
            <h1>Name: <span>{name}</span></h1>
            <h4 className='my-2'>Comment: <span className='text-yellow-500'>{comment}</span></h4>
            <p>Rating: <span className='text-orange-300 font-bold'>{rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> </span></p>
        </div>
    );
};

export default Review;