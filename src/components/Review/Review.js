import React from 'react';

const Review = ({ review }) => {
    const { name, title, rating } = review;
    return (
        <div className='bg-green-400 m-2 p-2 rounded'>
            <h1>Name: {name}</h1>
            <h4>Title: {title}</h4>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;