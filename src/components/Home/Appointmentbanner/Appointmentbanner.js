import React from 'react';
import '../Appointmentbanner/Appointmentbanner.css'
import apdoc from '../../../images/doctor.png'

const Appointmentbanner = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={apdoc} alt="" className="img-fluid" />
                    </div>
                    <div className='col-md-7 py-5 appbantext'>
                        <h5 style={{ color: '#1CC7C1' }}>APPOINTMENT</h5>
                        <h1>Make an appointment<br />Today</h1>
                        <p>It is a long established fact that a reddernwill be distractedby the reddable content of a page when looking at its</p>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Appointmentbanner;