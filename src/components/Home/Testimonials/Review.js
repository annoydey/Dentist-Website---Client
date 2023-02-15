import React from 'react';

const Review = ({ review }) => {
    // const { name, img, review: userReview, location } = review;
    return (
        <div className='col-md-4 text-center mb-5'>
            <img style={{height: '50px'}} src={review.img} alt=""></img>
            <h5 className='mt-3 mb-3 text-success'>{review.name}</h5>
            <p className='text-secondary'>{review.location}</p>
            <p>{review.review}</p>
        </div>
        
    );
};

export default Review;