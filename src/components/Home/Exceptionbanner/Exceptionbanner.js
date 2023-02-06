import React from 'react';
import exceptionbanner from '../../../images/Exceptionaldentalcare.jpg';
import '../Exceptionbanner/Exceptionbanner.css'

const Exceptionbanner = () => {
    return (
        <section className='row d-flex justify-content-center banner mt-5'>
            <div className='col-md-4 ms-5 mb-4'>
                <img src={exceptionbanner} alt="" className="img-fluid exceptionalimg" />
            </div>
            <div className='col-md-4 ms-3 justify-content-center banner'>
                <h1>Exceptional Dental <br/>Care, on Your Terms</h1>
                <p>The most important qualities a good family dentist should have are being knowledgeable, being an expert in their field, and being trustworthy. A dentist should have excellent communication skills and be compassionate.</p>
                <button className='btn btn-primary'>Learn More</button>
            </div>
        </section>
    );
};

export default Exceptionbanner;