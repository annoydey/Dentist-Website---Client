import React from 'react';
import '../Testimonials/Testimonials.css'
import Review from './Review';
import quote from '../../../images/quote.svg';
import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';


const Testimonials = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
    return (
        <section className='mt-5'>
            <div className='d-flex headertestimonial'>
                <img className='testimonialsvg' src={quote} alt="" />
                <div className='mt-5'>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What's Our Patients Says</h2>
                </div>
                
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-3 pt-5'>
                    {
                        reviews.map(review =><Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;